import './styles/globals.css'
import { Inter } from 'next/font/google'
import HeadData from './components/head-data/head-data'
import TopHeader from './components/top-header/top-header'
import MainContent from './components/main-content/main-content'
import NavigationAside from './components/navigation-aside/navigation-aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pablo García',
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
        <MainContent />
        {children}
        <NavigationAside />
      </body>
    </html>
  )
}
