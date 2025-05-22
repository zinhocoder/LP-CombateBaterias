import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, CreditCard, Truck, Shield, Phone, MessageSquare, Star, ChevronRight, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1">
        {/* Hero Section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="mb-6">
                <Image
                  src="/images/logo-combate.png"
                  alt="Combate Baterias Logo"
                  width={180}
                  height={180}
                  className="h-auto mx-auto"
                />
              </div>
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 px-6 py-2 rounded-full font-medium text-base">
                <MapPin className="inline-block h-4 w-4 mr-2" />
                Entrega rápida em Ribeirão Preto - SP
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Precisando de{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">BATERIA?</span>
              </h1>
              <ul className="space-y-5 text-xl max-w-2xl mx-auto">
                <li className="flex items-center gap-3 justify-center">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full p-1.5 flex-shrink-0">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="text-white">
                    Entrega e Instalação{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                      GRATUITA
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full p-1.5 flex-shrink-0">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="text-white">
                    EM ATÉ{" "}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                      10X NO CARTÃO
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full p-1.5 flex-shrink-0">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="text-white">Todos os tipos e marcas de baterias</span>
                </li>
              </ul>
              <div className="flex flex-col items-center gap-4 pt-6">
  <Button
    asChild
    size="lg"
    className="w-full max-w-sm bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 rounded-full text-base px-8 py-7 h-auto animate-pulse"
  >
    <Link href="tel:+5516994593392">
      <Phone className="mr-2 h-5 w-5" />
      Ligar Agora
    </Link>
  </Button>

  <Button
    asChild
    size="lg"
    className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full text-base px-8 py-7 h-auto animate-pulse"
  >
    <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
      <MessageSquare className="mr-2 h-5 w-5" />
      Peça agora pelo WhatsApp
    </Link>
  </Button>
</div>

<p className="text-zinc-300 text-xl font-semibold mt-6 bg-black/50 py-3 px-6 rounded-full inline-block">
  Compre com Garantia e Segurança, pague apenas ao receber!
</p>

            </div>
          </div>
        </section>    

        {/* Battery Showcase Section - PREMIUM REDESIGN */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900"></div>
          <div className="container relative">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                MARCAS PREMIUM
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                As{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Melhores</span>{" "}
                Marcas do Mercado
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-xl font-semibold bg-black/50 py-3 px-6 rounded-full inline-block">
                Trabalhamos com as marcas mais confiáveis para garantir qualidade e durabilidade
              </p>
            </div>

            {/* Ajuste na seção "As Melhores Marcas do Mercado" para posicionamento mais harmônico */}
<div className="flex flex-col md:flex-row justify-center items-center md:h-[500px] gap-6 md:gap-0 relative md:static overflow-x-auto md:overflow-visible px-4 md:px-0">

  {/* Battery 1 - Zetta */}
  <div className="battery-card group md:absolute md:left-1/2 md:-translate-x-[500px] z-10 transition-all duration-500 hover:z-30 hover:-translate-y-10">
    <div className="relative w-[280px] md:w-[320px] h-[350px] bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-yellow-500 transition-all duration-300 shadow-xl group-hover:shadow-yellow-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 z-10"></div>
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="absolute top-4 left-4 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-medium">
          CUSTO-BENEFÍCIO
        </div>
        <Image
          src="/images/bateria-zetta.png"
          alt="Bateria Zetta"
          width={280}
          height={280}
          className="object-contain max-h-[280px] transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Bateria Zetta</h3>
        <ul className="space-y-3 text-white mb-6">
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>Alta performance e durabilidade</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>Ideal para veículos de uso diário</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>Garantia de 12 meses</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>Melhor custo-benefício</span>
          </li>
        </ul>
        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-full">
          <Link
            href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20Zetta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Link>
        </Button>
      </div>
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
      <div className="inline-block bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
        <p className="text-xl font-bold text-white">Zetta</p>
      </div>
    </div>
  </div>

  {/* Battery 2 - Moura (Center) */}
  <div className="battery-card group md:absolute md:left-1/2 md:-translate-x-1/2 z-20 transition-all duration-500 hover:z-30 hover:-translate-y-10">
    <div className="relative w-[320px] md:w-[380px] h-[400px] bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-blue-500 transition-all duration-300 shadow-2xl group-hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 z-10"></div>
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="absolute top-4 left-4 bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
          PREMIUM
        </div>
        <Image
          src="/images/bateria-moura.png"
          alt="Bateria Moura"
          width={320}
          height={320}
          className="object-contain max-h-[320px] transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <h3 className="text-3xl font-bold text-blue-500 mb-4">Bateria Moura</h3>
        <ul className="space-y-3 text-white mb-8">
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Original de montadora</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Tecnologia avançada e maior vida útil</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Garantia de 18 meses</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Resistente a altas temperaturas</span>
          </li>
        </ul>
        <Button asChild className="bg-blue-500 hover:bg-blue-600 rounded-full w-full">
          <Link
            href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20Moura"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Link>
        </Button>
      </div>
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
      <div className="inline-block bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
        <p className="text-2xl font-bold text-white">Moura</p>
      </div>
    </div>
  </div>

  {/* Battery 3 - Heliar */}
  <div className="battery-card group md:absolute md:left-1/2 md:translate-x-[180px] z-10 transition-all duration-500 hover:z-30 hover:-translate-y-10">
    <div className="relative w-[280px] md:w-[320px] h-[350px] bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-green-500 transition-all duration-300 shadow-xl group-hover:shadow-green-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 z-10"></div>
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="absolute top-4 left-4 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-medium">
          ALTA PERFORMANCE
        </div>
        <Image
          src="/images/bateria-heliar.png"
          alt="Bateria Heliar"
          width={280}
          height={280}
          className="object-contain max-h-[280px] transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <h3 className="text-2xl font-bold text-green-500 mb-4">Bateria Heliar</h3>
        <ul className="space-y-3 text-white mb-6">
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>24 meses de garantia</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Ideal para veículos de alta performance</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Tecnologia Freedom</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Maior resistência a ciclos profundos</span>
          </li>
        </ul>
        <Button asChild className="bg-green-500 hover:bg-green-600 rounded-full w-full">
          <Link
            href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20Heliar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Link>
        </Button>
      </div>
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
      <div className="inline-block bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
        <p className="text-xl font-bold text-white">Heliar</p>
      </div>
    </div>
  </div>
</div>

<div className="text-center mt-24">
  <Button
    asChild
    size="lg"
    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full text-base px-8 py-6 h-auto"
  >
    <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
      <MessageSquare className="mr-2 h-5 w-5" />
      Ver todas as opções de baterias
    </Link>
  </Button>
</div>

          </div>
        </section>

{/* 24h Service Section - NEW DEDICATED SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.3),transparent_70%)]"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                  ATENDIMENTO 24/7
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    PLANTÃO
                  </span>{" "}
                  24 HORAS
                </h2>
                <p className="text-2xl text-white mb-6">
                  Nossa equipe de especialistas está pronta para atender você independente do dia ou hora.
                </p>
                <p className="text-zinc-300 text-xl font-semibold bg-black/50 py-3 px-6 rounded-full inline-block mb-8">
                  Trabalhamos com plantão 24 horas de segunda à segunda para solucionar seu problema. Chama a Combate
                  Baterias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full text-base px-8 py-6 h-auto animate-pulse"
                  >
                    <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Pedir pelo WhatsApp
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <p className="text-2xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                      ENTREGA E INSTALAÇÃO GRÁTIS
                    </span>{" "}
                    EM RIBEIRÃO PRETO
                  </p>
                  <p className="text-zinc-300">Compre com Garantia e Segurança, pague apenas ao receber!</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[550px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <Image
                    src="/images/24horas.png"
                    alt="Loja Combate Baterias - Atendimento 24 horas"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <div className="inline-block bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full">
                      <p className="text-xl font-bold text-white flex items-center justify-center">
                        <Clock className="mr-2 h-5 w-5 text-red-500" />
                        Atendimento 24 horas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Battery Types Section */}
        <section className="py-24 relative" id="baterias">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                VARIEDADE COMPLETA
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                Baterias{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Originais
                </span>{" "}
                de Montadoras
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-xl font-semibold bg-black/50 py-3 px-6 rounded-full inline-block">
                Todos os tipos de baterias para seu veículo com garantia de fábrica
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-black z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-24 w-24 text-red-500/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
                  </div>
                  <CardTitle className="py-4 px-6 text-xl text-center relative z-30 -mt-12 font-bold text-white">
                    BATERIA DE CARRO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6 px-6">
                  <p className="text-zinc-300 mb-6">
                    Baterias originais para todos os modelos de carros, com garantia de fábrica.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20de%20carro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-black z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-24 w-24 text-blue-500/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
                  </div>
                  <CardTitle className="py-4 px-6 text-xl text-center relative z-30 -mt-12 font-bold text-white">
                    BATERIA START STOP
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6 px-6">
                  <p className="text-zinc-300 mb-6">
                    Baterias especiais para veículos com tecnologia Start-Stop, maior durabilidade.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20start%20stop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-black z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-24 w-24 text-red-500/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
                  </div>
                  <CardTitle className="py-4 px-6 text-xl text-center relative z-30 -mt-12 font-bold text-white">
                    BATERIA DE MOTO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6 px-6">
                  <p className="text-zinc-300 mb-6">
                    Baterias para todos os modelos de motos, com alta performance e durabilidade.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20de%20moto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-black z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-24 w-24 text-blue-500/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
                  </div>
                  <CardTitle className="py-4 px-6 text-xl text-center relative z-30 -mt-12 font-bold text-white">
                    BATERIA DE CAMINHÃO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6 px-6">
                  <p className="text-zinc-300 mb-6">
                    Baterias de alta capacidade para caminhões e veículos pesados, máxima durabilidade.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20de%20caminhão"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 relative" id="tecnologias">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-cyan-500/10 rounded-full text-cyan-400 font-medium text-sm mb-4">
                TECNOLOGIA AVANÇADA
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                AS MELHORES{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">MARCAS</span>{" "}
                COM AS MAIORES{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  TECNOLOGIAS
                </span>
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-lg">&nbsp;</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300 flex flex-col">
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-500"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-white">BATERIAS ORIGINAIS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-black"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-red-500/30" />
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    Trabalhamos com marcas de baterias de alta qualidade, originalmente de montadoras, específicas para
                    cada veículo. Isso garante benefícios como maior durabilidade, alto desempenho e compatibilidade
                    superior, assegurando a melhor performance para o seu automóvel.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20original"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-cyan-500 transition-all duration-300 flex flex-col">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-white">BATERIAS AGM</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-black"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-cyan-500/30" />
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    As baterias AGM são projetadas para veículos com alta demanda, oferecendo desempenho superior.
                    Diferentes das baterias convencionais, usam mantas de lã de vidro que absorvem ácido, tornando o
                    sistema mais eficiente em troca energética e melhorando o desempenho em ciclos profundos de
                    descarga.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20AGM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300 flex flex-col">
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-500"></div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-white">BATERIAS EFB</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-black"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-red-500/30" />
                    </div>
                  </div>
                  <p className="text-zinc-300">
                    Baterias EFB, desenvolvidas para veículos com Start-Stop, são uma evolução das baterias
                    tradicionais. Com carga rápida, suportam várias partidas ao longo do trajeto. Ideais para táxis e
                    veículos em uso constante, as EFB são mais acessíveis que as AGM, mas oferecem desempenho similar.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link
                      href="https://wa.me/5516994593392?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20bateria%20EFB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/20"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                PROCESSO SIMPLIFICADO
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                COMO FUNCIONA NOSSA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  ENTREGA E INSTALAÇÃO
                </span>
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
                Peça sua Bateria através do WhatsApp ou Telefone e receba agora mesmo<br/>com toda praticidade e segurança.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold z-10 shadow-lg shadow-red-600/20">
                  1
                </div>
                <div className="absolute top-10 left-20 h-0.5 w-full bg-gradient-to-r from-red-600 to-transparent hidden md:block"></div>
                <h3 className="font-bold text-xl mb-3 text-white">CONTATO COMBATE BATERIAS</h3>
                <p className="text-zinc-300">Entre em contato pelo WhatsApp ou telefone para um atendimento imediato</p>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold z-10 shadow-lg shadow-cyan-500/20">
                  2
                </div>
                <div className="absolute top-10 left-20 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-transparent hidden md:block"></div>
                <h3 className="font-bold text-xl mb-3 text-white">ATENDIMENTO EXCLUSIVO</h3>
                <p className="text-zinc-300">Atendimento personalizado para suas necessidades específicas</p>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold z-10 shadow-lg shadow-red-600/20">
                  3
                </div>
                <div className="absolute top-10 left-20 h-0.5 w-full bg-gradient-to-r from-red-600 to-transparent hidden md:block"></div>
                <h3 className="font-bold text-xl mb-3 text-white">ESCOLHA DE MARCA</h3>
                <p className="text-zinc-300">Escolha entre as melhores marcas do mercado com garantia de fábrica</p>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-cyan-500/20">
                  4
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">ENTREGA E INSTALAÇÃO</h3>
                <p className="text-zinc-300">Receba e tenha sua bateria instalada gratuitamente por especialistas</p>
              </div>
            </div>
            
           <div className="mt-20 text-center px-4 sm:px-0">
  <div className="inline-block p-6 sm:p-10 w-full max-w-[90vw] sm:max-w-none bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 shadow-xl">
    <Button
      asChild
      size="lg"
      className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full text-base px-6 py-4 sm:px-8 sm:py-6 h-auto mb-6"
    >
      <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
        <Zap className="mr-2 h-5 w-5" />
        Solicitar Orçamento Agora
      </Link>
    </Button>
    <p className="text-xl sm:text-2xl font-medium mb-2 sm:mb-3 text-white">
      Entregamos e Instalamos na sua localização em minutos
    </p>
    <p className="text-zinc-300 text-base sm:text-lg">Pagando apenas ao receber! Parcelamos em até 10x sem juros</p>
  </div>
</div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                NOSSOS DIFERENCIAIS
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  QUALIDADE
                </span>{" "}
                E{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                  GARANTIA
                </span>
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
                Trabalhamos apenas com produtos de alta qualidade e garantia de fábrica
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-red-600 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/20">
                  <Shield className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">As melhores marcas</p>
              </div>
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-cyan-500 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                  <Truck className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">Agilidade na entrega</p>
              </div>
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-red-600 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/20">
                  <CreditCard className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">Instalação sem custo</p>
              </div>
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-cyan-500 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                  <MapPin className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">Entregamos sem custos</p>
              </div>
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-red-600 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/20">
                  <Clock className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">Bateria direto da fábrica</p>
              </div>
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 text-center hover:border-cyan-500 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                  <Shield className="h-8 w-8" />
                </div>
                <p className="font-medium text-white">Segurança na entrega</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                DEPOIMENTOS
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                ATENDENDO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  RIBEIRÃO PRETO
                </span>{" "}
                COM QUALIDADE E CONFIANÇA
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
                Agilidade e Facilidade no pagamento é na Combate Baterias
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 hover:border-red-600 transition-all duration-300 shadow-lg"
                >
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-full"></div>
                      <div>
                        <p className="font-bold text-lg text-white">Cliente {i}</p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-300 italic">
                      "Serviço excelente! Bateria entregue e instalada rapidamente. Recomendo a todos que precisam de
                      uma bateria nova. Atendimento de primeira qualidade."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 relative" id="sobre">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/20"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                  QUEM SOMOS
                </div>
                <h2 className="text-5xl font-bold mb-8 tracking-tight">
                  SOBRE{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">NÓS</span>
                </h2>
                <div className="space-y-6 text-lg">
                  <p className="text-white">
                    A Combate Baterias é uma empresa especializada na venda e instalação de baterias, composta por um
                    equipe de especialistas em baterias, oferecendo um serviço personalizado a todos os clientes.
                  </p>
                  <p className="text-zinc-300">
                    Ao escolher a Combate Baterias, você pode confiar na qualidade dos nossos produtos e na experiência
                    do nosso time. Trabalhamos arduamente para garantir que você receba a bateria automotiva ideal para
                    suas necessidades, proporcionando tranquilidade nas suas viagens diárias.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/20">
                      <Shield className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg text-white">Marcas de Qualidade</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                      <Truck className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg text-white">Entrega Rápida</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/20">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg text-white">Instalação Grátis</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-400 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                      <Clock className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg text-white">Orçamento Imediato</span>
                  </div>
                </div>
              </div>
              {/* Ajuste na seção "Sobre Nós" para manter o efeito de background com a imagem nova */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src="/images/loja-combate.jpg"
                  alt="Loja Combate Baterias"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative" id="contato">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 font-medium text-sm mb-4">
                FALE CONOSCO
              </div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">CONTATOS</span>
              </h2>
              <p className="text-2xl text-white mb-2">Solicite um Orçamento Imediato!</p>
              <p className="text-zinc-300 max-w-1xl mx-auto text-lg">
                Nossa equipe de especialistas irá avaliar e propor a melhor solução o mais rápido possível.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 hover:border-red-600 transition-all duration-300 overflow-hidden shadow-xl">
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-500"></div>
                <CardHeader className="text-center pt-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-red-600/20">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Whatsapp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold mb-6 text-white">(16) 99459-3392</p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full"
                  >
                    <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Chamar no WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-xl">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                <CardHeader className="text-center pt-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Telefone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold mb-6 text-white">(16) 99459-3392</p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 rounded-full"
                  >
                    <Link href="tel:+5516994593392">
                      <Phone className="mr-2 h-5 w-5" />
                      Ligar Agora
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-blue-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.2),transparent_70%)]"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-5xl md:text-5xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  PLANTÃO 24 HORAS
                </span>{" "}
                - ATENDEMOS TODOS OS DIAS
              </h2>
              <p className="text-2xl text-white">Estamos prontos para atender sua emergência a qualquer momento</p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full text-lg px-10 py-7 h-auto shadow-xl shadow-red-600/20 animate-pulse"
              >
                <Link href="https://wa.me/5516994593392" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-6 w-6" />
                  Chamar no WhatsApp Agora
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
<footer className="bg-zinc-950 text-white py-16 border-t border-zinc-900">
  <div className="container">
    <div className="flex flex-col items-center text-center mb-10">
      <Image
        src="/images/logo-combate.png"
        alt="Combate Baterias Logo"
        width={180}
        height={180}
        className="h-auto mb-6"
      />
      <p className="text-zinc-300 max-w-md mx-auto mb-8 text-lg">
        Especialistas em baterias automotivas em Ribeirão Preto. Entrega e instalação gratuita.
      </p>
    </div>

    <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800 mb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.113307268553!2d-47.82277502479766!3d-21.75451068010509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf313601fb31%3A0x2445f5533efae6bb!2sR.%20Artur%20Diederichsen%2C%20461%20-%20Campos%20El%C3%ADsios%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014080-440!5e0!3m2!1spt-BR!2sbr!4v1716310000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Combate Baterias"
        className="w-full"
      ></iframe>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
      <p className="text-zinc-400 order-2 md:order-1">
        &copy; {new Date().getFullYear()} Combate Baterias. Todos os direitos reservados.
      </p>
      <a
        href="https://www.devpro.fun"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 font-semibold order-1 md:order-2"
      >
        Desenvolvido por DevPro
      </a>
    </div>
  </div>
</footer>

<a
  href="https://wa.me/5516994593392"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale conosco no WhatsApp"
  className="fixed bottom-5 right-5 bg-[#06b6d4] rounded-full p-3 shadow-lg z-50 hover:scale-110 transition-transform"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
    alt="WhatsApp"
    width={32}
    height={32}
  />
</a>


    </div>
  )
}
