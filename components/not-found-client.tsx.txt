"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Home, Search, TrendingUp, WifiOff, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export default function NotFoundClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    // Generate floating digital elements
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Digital Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + element.delay,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D 404 Animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative inline-block"
              animate={{
                rotateY: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <h1 className="text-8xl md:text-9xl font-bold font-playfair mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                404
              </h1>

              {/* 3D Shadow Effect */}
              <motion.div
                className="absolute inset-0 text-8xl md:text-9xl font-bold font-playfair text-white/10 blur-sm"
                style={{
                  transform: "translateZ(-20px) translateX(4px) translateY(4px)",
                }}
                animate={{
                  rotateY: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                404
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Broken Connection Animation */}
          <motion.div
            className="mb-8 flex justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <WifiOff className="w-8 h-8 text-red-400" />
            </motion.div>

            <motion.div
              className="flex gap-2"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Globe className="w-8 h-8 text-blue-400" />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-playfair">
              Connection Lost in the Digital Space
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Looks like this page got lost in our digital transformation process. Don't worry – our marketing experts
              are on it!
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-12"
          >
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white/5 border-white/10 text-white placeholder-gray-400 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </form>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/services">
                <TrendingUp className="mr-2 w-5 h-5" />
                Our Services
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <Zap className="mr-2 w-5 h-5" />
                Get Help
              </Link>
            </Button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Website Development", href: "/services#web-development" },
                { name: "Social Media", href: "/services#social-media" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-12"
          >
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border border-white/10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
