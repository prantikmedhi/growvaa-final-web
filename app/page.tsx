"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Users, Video, TrendingUp, CheckCircle, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ElegantShape } from "@/components/elegant-shape"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
            <source src="/background-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/20" />
        </div>

        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-white/[0.08]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-white/[0.08]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-white/[0.08]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-white/[0.08]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-white/[0.08]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-medium tracking-wide">Premium Digital Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-white font-playfair"
            >
              Growvaa
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light tracking-wide"
            >
              Elevate Your Business to
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white font-playfair"
            >
              Digital Excellence
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your startup into a digital powerhouse with our premium yet affordable solutions. We craft
              organic strategies that amplify your online presence and accelerate growth.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="/services">
              <Button
  size="lg"
  className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg rounded-md shadow-lg transition-all duration-300 hover:scale-105"
>
  Start Your Journey
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>
               </a>

<a href="/contact">
  <Button
    size="lg"
    className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-4 text-lg rounded-md shadow-lg transition-all duration-300 hover:scale-105"
  >
    Contact Us Today
  </Button>
</a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Our Expertise</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white font-playfair"
            >
              Premium Services
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions crafted with precision and delivered with excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Globe,
                title: "Website Development",
                description: "Stunning, responsive websites that convert visitors into customers",
                gradient: "from-gray-800 to-gray-900",
              },
              {
                icon: Users,
                title: "Social Media Management",
                description: "Strategic social presence that builds communities and drives engagement",
                gradient: "from-gray-800 to-gray-900",
              },
              {
                icon: Video,
                title: "Video Editing",
                description: "Cinematic content that captivates audiences and tells your story",
                gradient: "from-gray-800 to-gray-900",
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                description: "Data-driven approaches that scale your business organically",
                gradient: "from-gray-800 to-gray-900",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto mb-6 rounded-md bg-gradient-to-r flex items-center justify-center",
                        service.gradient,
                        "group-hover:scale-110 transition-transform duration-300",
                      )}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Why Choose Growvaa</span>
                </div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white font-playfair"
              >
                Affordable Excellence for Growing Businesses
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8 leading-relaxed">
                We believe every startup deserves premium digital presence. Our organic strategies and affordable
                pricing make luxury-grade services accessible to businesses just starting their journey.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Premium quality at startup-friendly prices",
                  "Organic growth strategies that deliver results",
                  "Dedicated support throughout your journey",
                  "Scalable solutions that grow with your business",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-md p-8 border border-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/5 rounded-md" />
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { number: "500+", label: "Projects Delivered" },
                      { number: "98%", label: "Client Satisfaction" },
                      { number: "24/7", label: "Support Available" },
                      { number: "3x", label: "Average ROI Increase" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold mb-2 text-white font-playfair">{stat.number}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-md">
                      Get Started Today
                      <Zap className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white font-playfair"
            >
              Ready to Grow?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Join hundreds of successful businesses who've transformed their digital presence with Growvaa. Your
              journey to digital excellence starts with a single click.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-200 text-black font-semibold px-12 py-4 text-lg rounded-md shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
  variant="outline"
  size="lg"
  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-12 py-4 text-lg rounded-md backdrop-blur-sm transition-all duration-300 hover:scale-105"
>
  Schedule Consultation
</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
