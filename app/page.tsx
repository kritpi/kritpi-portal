import HomeShell from "@/components/HomeShell";

type SearchParams = {
  mode?: string | string[];
};

type PageProps = {
  searchParams?: SearchParams | Promise<SearchParams>;
};

function isCVModeValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] === "cv" : value === "cv";
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialMode = isCVModeValue(resolvedSearchParams?.mode);

  return <HomeShell initialMode={initialMode} />;
}
