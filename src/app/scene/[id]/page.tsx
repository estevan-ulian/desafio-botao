interface IPageProps {
	params: { id: string };
}

export default async function Page({ params }: IPageProps) {
	const { id } = await params;
	return <div>{id}</div>;
}
