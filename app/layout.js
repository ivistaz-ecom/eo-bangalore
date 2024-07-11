import Head from 'next/head'
import '../styles/globals.css'
import Footer from '@/components/Footer/Footer'
import 'aos/dist/aos.css'

export const metadata = {
  title: 'EO Bengaluru - Empowering Entrepreneurs in Bengaluru',
  description:
    'Welcome to EO Bengaluru, a hub for entrepreneurial excellence. Connect with a vibrant community of business leaders, access exclusive resources, and grow your business with us. Join EO Bengaluru to thrive in the entrepreneurial ecosystem.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>EO Bengaluru - Empowering Entrepreneurs in Bengaluru</title>
        <meta
          name="description"
          content="Welcome to EO Bengaluru, a hub for entrepreneurial excellence. Connect with a vibrant community of business leaders, access exclusive resources, and grow your business with us. Join EO Bengaluru to thrive in the entrepreneurial ecosystem."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
