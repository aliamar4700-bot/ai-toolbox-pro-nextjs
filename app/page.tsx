import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

const ClientPage = dynamicImport(() => import("../components/ClientPage"), {
  ssr: false,
});

export default function Page() {
  return <ClientPage />;
}
