import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Html, Head, Main, NextScript } from "next/document"

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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SBLJJTY472"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SBLJJTY472');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans antialiased">
        {/* Fallback para quando o JS estiver desativado */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
