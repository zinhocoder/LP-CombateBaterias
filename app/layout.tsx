import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Combate Baterias - Entrega e Instalação Grátis em Ribeirão Preto",
  description:
    "Baterias para carros, motos e caminhões com entrega e instalação gratuita em Ribeirão Preto. Plantão 24 horas, parcele em até 10x no cartão.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black font-sans antialiased">{children}</body>
    </html>
  )
}
