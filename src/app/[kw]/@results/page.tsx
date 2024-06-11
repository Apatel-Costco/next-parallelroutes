export default async function SearchResults({
	params,
}: {
	params: { kw: string };
}) {
	await new Promise((resolve) => setTimeout(resolve, 4000));

	return <p>search results for {params.kw}</p>;
}
