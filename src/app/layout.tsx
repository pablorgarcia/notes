import './styles/globals.css'
import { Inter } from 'next/font/google'
import HeadData from './components/head-data/head-data'
import TopHeader from './components/top-header/top-header'
import BottomFooter from './components/bottom-footer/bottom-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pablo García Front-End developer',
  description: 'la descripcion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HeadData />
      <body className={inter.className}>
        <TopHeader />
        <main>
          {children}
        </main>
        <BottomFooter />
      </body>
    </html>
  )
}
