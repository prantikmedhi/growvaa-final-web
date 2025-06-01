"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Users, Target, BarChart3, Wifi, Signal } from "lucide-react"
import { useState, useEffect } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    { icon: Globe, text: "Connecting to digital networks...", color: "text-blue-400" },
    { icon: Signal, text: "Analyzing market trends...", color: "text-green-400" },
    { icon: BarChart3, text: "Processing growth strategies...", color: "text-purple-400" },
    { icon: Users, text: "Optimizing user experience...", color: "text-pink-400" },
    { icon: Target, text: "Targeting your audience...", color: "text-yellow-400" },
    { icon: TrendingUp, text: "Launching your success...", color: "text-emerald-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length)
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1))
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [loadingSteps.length])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* 3D Logo Animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative inline-block"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-playfair bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Growvaa
            </h1>
            
            {/* 3D Shadow */}
            <motion.div
              className="absolute inset-0 text-4xl md:text-6xl font-bold font-playfair text-white/10 blur-sm"
              style={{
                transform: "translateZ(-10px) translateX(2px) translateY(2px)",
              }}
            >
              Growvaa
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3D Loading Cube */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="relative w-16 h-16"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Cube faces */}
            {[
              { transform: "rotateY(0deg) translateZ(32px)", bg: "bg-blue-500/30" },
              { transform: "rotateY(90deg) translateZ(32px)", bg: "bg-purple-500/30" },
              { transform: "rotateY(180deg) translateZ(32px)", bg: "bg-pink-500/30" },
              { transform: "rotateY(-90deg) translateZ(32px)", bg: "bg-green-500/30" },
              { transform: "rotateX(90deg) translateZ(32px)", bg: "bg-yellow-500/30" },
              { transform: "rotateX(-90deg) translateZ(32px)", bg: "bg-red-500/30" },
            ].map((face, index) => (
              <div
                key={index}
                className={`absolute w-16 h-16 border border-white/20 ${face.bg} backdrop-blur-sm`}
                style={{
                  transform: face.transform,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Current Step Display */}
        <motion.div
          className="mb-8"
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              const StepIcon = loadingSteps[currentStep]?.icon

...

{StepIcon && (
  <StepIcon className={`w-8 h-8 ${loadingSteps[currentStep].color}`} />
)}
            </motion.div>
          </motion.div>
          
          <p className="text-lg text-gray-300 mb-2">
            {loadingSteps[currentStep]?.text || "Preparing your experience..."}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading...</span>
              <span>{progress}%</span>
            </div>
            
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated glow effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: [-80, 320],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Crafting your digital success story...
        </motion.p>
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Wifi, Signal, TrendingUp, Target].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              style={{
                transform: `translateX(${100 + i * 30}px) translateY(-50%)`,
              }}
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Icon className={`w-6 h-6 text-white/20`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
