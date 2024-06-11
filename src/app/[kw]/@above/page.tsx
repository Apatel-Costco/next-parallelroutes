export default async function AbovePage({
	params,
}: {
	params: { kw: string };
}) {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return <p>Above for {params.kw}</p>;
}
