import './globals.css'
import { Montserrat, Open_Sans, Roboto_Mono } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'FundedFutures',
  description: 'Your Gateway to Tomorrow\'s Tech Giants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${robotoMono.variable}`}>
      <body className="font-opensans">
        <nav className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold font-montserrat">FundedFutures</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="font-montserrat">Home</Link></li>
              <li><Link href="/jobs" className="font-montserrat">Jobs</Link></li>
              {/* Add more navigation items as needed */}
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}