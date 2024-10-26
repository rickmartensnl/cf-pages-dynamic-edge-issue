import { ReactNode } from "react";

export default async function LocaleLayout({children, params}: {params: Promise<{locale: string}>, children: ReactNode}) {
  const { locale } = await params;

  return (
    <>
	  <header>Locale: {locale}</header>
	  {children}
	  <footer>Footer</footer>
	</>
  )
}
