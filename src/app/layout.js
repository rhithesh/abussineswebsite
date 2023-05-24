import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar"
import Footer from '../components/Fotter'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akhanya infinity ',
  description: 'A place where you can see the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        
        </body>
    </html>
  )
}
