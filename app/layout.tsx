import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: LayoutProps<'/'>) {

    return (
        <html lang="en">
            <body>
                <head>
                    <title>Main Title</title>
                </head>
                <nav aria-label="Main">
                    <Link href="/">Home</Link>
                    <Link href="/resources">Resources</Link>
                </nav>
                <main>{children}</main> // the page goes here
            </body>
        </html>
    )
}​