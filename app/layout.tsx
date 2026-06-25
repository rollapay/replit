import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const viewport: Viewport = {
  themeColor: '#5b3fe8',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://getrolla.com'),
  title: {
    default: 'Rolla — Hire anyone, anywhere. Employer of Record & global hiring',
    template: '%s | Rolla',
  },
  description:
    'Rolla is the global hiring platform for startups and SMBs. Hire and pay employees and contractors in 190+ countries with Employer of Record, H-1B visa alternatives, and global mobility — onboard in minutes, fully compliant.',
  keywords: [
    'employer of record',
    'EOR',
    'global hiring',
    'hire Canadian tech talent',
    'H-1B alternative',
    'global mobility visa',
    'pay international contractors',
    'global payroll',
    'hire remote employees',
  ],
  openGraph: {
    title: 'Rolla — Hire anyone, anywhere',
    description:
      'The global hiring platform for startups and SMBs. EOR in 190+ countries, H-1B alternatives, and contractor payments — onboard in minutes.',
    type: 'website',
    siteName: 'Rolla',
    url: 'https://getrolla.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolla — Hire anyone, anywhere',
    description:
      'EOR in 190+ countries, H-1B alternatives, and contractor payments — onboard in minutes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
