export default function RootLayout({
	children,
	above,
	below,
	results,
}: Readonly<{
	children: React.ReactNode;
	above: React.ReactNode;
	below: React.ReactNode;
	results: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				{children}
				<div>
					<div>{above}</div>
					<hr />
					<div>{results}</div>
					<hr />
					<div>{below}</div>
				</div>
			</body>
		</html>
	);
}
