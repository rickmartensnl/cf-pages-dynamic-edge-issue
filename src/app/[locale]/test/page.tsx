export default function Page() {
  return (
	<>Hi test</>
  )
}

export function generateStaticParams() {
	return [
		{ locale: 'nl' },
		{ locale: 'en' },
	]
}

export const dynamicParams = false;
