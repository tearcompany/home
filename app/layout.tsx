import type React from "react"
import type { Metadata } from "next"
import { Fira_Sans, Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Michał Porydzaj - CV",
  description: "Technical Leader | Principal Software Engineer | AI Systems Architect",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${firaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
