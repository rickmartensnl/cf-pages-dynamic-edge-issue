export default function Page() {
  return (
	<>Hi</>
  )
}

export function generateStaticParams() {
	return [
		{ locale: 'nl' },
		{ locale: 'en' },
	]
}

export const dynamicParams = false;