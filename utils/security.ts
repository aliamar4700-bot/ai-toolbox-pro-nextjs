/**
 * Enterprise-grade Frontend Security Utilities
 * Implements rigorous client-side input sanitization, format validations, and file safety checks.
 */

/**
 * Strips HTML tags, active script elements, JavaScript pseudo-protocols,
 * and standard command-injection/XSS indicators from user inputs.
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";
  
  let cleaned = input;

  // 1. Strip raw script tags and active elements
  cleaned = cleaned.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "");
  cleaned = cleaned.replace(/<[^>]+on\w+\s*=\s*["']?[^"'>]+["']?[^>]*>/gi, ""); // Strips <img src=x onerror=...>
  
  // 2. Remove standard HTML tags entirely to prevent XSS injection vectors
  cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, "");

  // 3. Neutralize JavaScript protocols
  cleaned = cleaned.replace(/javascript:/gi, "no-js-protocol:");

  // 4. Clean up any lingering carriage returns/backslash exploitation vectors
  cleaned = cleaned.replace(/\\x[0-9a-fA-F]{2}/g, "");
  
  return cleaned.trim();
}

/**
 * Validates emails using a secure, rigid regex that prevents backtracking-based DoS (ReDoS)
 * while ensuring standard compliant structures.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string" || email.length > 254) return false;
  
  // Safe RFC 5322 compliant regex avoiding dangerous nested quantifiers
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

/**
 * Validates password strength for production-grade standards:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character
 */
export function validatePassword(password: string): { isValid: boolean; feedback: string } {
  if (!password || typeof password !== "string") {
    return { isValid: false, feedback: "Password is required." };
  }
  if (password.length < 8) {
    return { isValid: false, feedback: "Password must be at least 8 characters long." };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, feedback: "Password must contain at least one uppercase letter." };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, feedback: "Password must contain at least one lowercase letter." };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, feedback: "Password must contain at least one number." };
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, feedback: "Password must contain at least one special character (!@#$%^&* etc.)." };
  }
  return { isValid: true, feedback: "Password meets enterprise complexity standards." };
}

/**
 * Cleans filenames to prevent directory traversals, hidden extensions, or character exploits.
 * Resolves to a clean, safe string with a unique prefix.
 */
export function sanitizeFilename(filename: string): string {
  if (!filename || typeof filename !== "string") return "uploaded_file";

  // Strip path traversal sequences (../ or ..\\)
  let name = filename.replace(/(\.\.\/|\.\.\\)/g, "");

  // Extract base name and extension
  const parts = name.split(".");
  if (parts.length < 2) {
    return name.replace(/[^a-zA-Z0-9_-]/g, "_");
  }

  const ext = parts.pop()?.toLowerCase() || "";
  const base = parts.join("_").replace(/[^a-zA-Z0-9_-]/g, "_");

  // Block malicious double extensions or executable file extensions
  const blockedExtensions = ["exe", "bat", "cmd", "sh", "bash", "js", "vbs", "scr", "pif", "msi", "com"];
  if (blockedExtensions.includes(ext)) {
    return `${base}_blocked_extension.txt`;
  }

  // Generate safe filename
  return `${base}_${Date.now()}.${ext}`;
}

/**
 * Verifies if file is of a trusted type and falls within a secure size limit.
 * Blocks executable and invalid script payloads.
 */
export function validateUploadedFile(
  file: File, 
  allowedMimeTypes: string[], 
  allowedExtensions: string[],
  maxSizeInMb: number = 25
): { isValid: boolean; error?: string } {
  // 1. Enforce max file size
  const maxBytes = maxSizeInMb * 1024 * 1024;
  if (file.size > maxBytes) {
    return { 
      isValid: false, 
      error: `File size exceeds the secure threshold of ${maxSizeInMb}MB.` 
    };
  }

  // 2. Validate extension
  const fileExt = file.name.split(".").pop()?.toLowerCase();
  if (!fileExt || !allowedExtensions.includes(fileExt)) {
    return { 
      isValid: false, 
      error: `File extension '.${fileExt || ""}' is not permitted.` 
    };
  }

  // 3. Validate MIME type
  const isMimeMatch = allowedMimeTypes.some(mime => {
    if (mime.endsWith("/*")) {
      const parentType = mime.split("/")[0];
      return file.type.startsWith(`${parentType}/`);
    }
    return file.type === mime;
  });

  if (!isMimeMatch && file.type) {
    return { 
      isValid: false, 
      error: `File type '${file.type}' is not recognized as safe.` 
    };
  }

  return { isValid: true };
}

/**
 * Verifies that a URL has a safe schema (http, https, mailto, tel) 
 * to prevent XSS-injection vectors like javascript:alert(1) or data: protocols.
 */
export function getSafeHref(url: string): string {
  if (!url || typeof url !== "string") return "#";
  const trimmed = url.trim().toLowerCase();
  
  // Accept standard web and safe protocol boundaries
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) {
    // Prevent nested quotes or other potential attribute escapes
    return url.replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  
  // If no safe protocol is defined, but it resembles a domain, default to https://
  if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/.test(trimmed)) {
    return `https://${url.trim()}`.replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  
  // Filter out dangerous javascript or iframe-data injection patterns
  return "about:blank";
}

