export default async function Below({ params }: { params: { kw: string } }) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return <p>Below for {params.kw}</p>;
}
