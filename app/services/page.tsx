"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Users, Video, TrendingUp, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: Globe,
      title: "Website Development",
      description:
        "We create stunning, responsive websites that not only look beautiful but are designed to convert visitors into customers. Our websites are built with SEO best practices, ensuring your business gets found online.",
      features: [
        "Custom design tailored to your brand",
        "Responsive across all devices",
        "SEO-optimized structure",
        "Fast loading speeds",
        "Content management systems",
        "E-commerce capabilities",
      ],
    },
    {
      id: "social-media",
      icon: Users,
      title: "Social Media Management",
      description:
        "Our social media experts develop and execute strategies that build engaged communities around your brand. We focus on creating authentic connections that translate into loyal customers and brand advocates.",
      features: [
        "Platform-specific content creation",
        "Community engagement",
        "Growth strategies",
        "Analytics and reporting",
        "Paid social campaigns",
        "Influencer partnerships",
      ],
    },
    {
      id: "video-editing",
      icon: Video,
      title: "Video Editing",
      description:
        "Video is the most engaging content format online. Our video editing services transform raw footage into compelling stories that captivate your audience and communicate your message effectively.",
      features: [
        "Professional editing and color grading",
        "Motion graphics and animations",
        "Sound design and music selection",
        "Subtitles and accessibility features",
        "Format optimization for different platforms",
        "Short-form content for social media",
      ],
    },
    {
      id: "growth",
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Our data-driven growth strategies help businesses scale organically. We analyze your market, identify opportunities, and implement tactics that drive sustainable growth without breaking the bank.",
      features: [
        "Market and competitor analysis",
        "Customer journey mapping",
        "Conversion rate optimization",
        "SEO and content strategy",
        "Performance tracking and analytics",
        "Iterative improvement process",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10">
            <source src="/background-animation.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 text-white font-playfair">
              Our Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8 leading-relaxed">
              Comprehensive digital solutions designed to elevate your business and drive sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Premium Solutions</span>
              </div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
              What We Offer
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each service is tailored to your specific needs and designed to deliver measurable results.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div id={service.id} className="scroll-mt-24">
                      <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
              Our Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach that ensures quality results for every project.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We begin by understanding your business, goals, target audience, and current digital presence.",
              },
              {
                number: "02",
                title: "Strategy Development",
                description:
                  "Based on our findings, we create a customized strategy designed to achieve your specific objectives.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Our team of experts executes the strategy with precision, keeping you informed throughout the process.",
              },
              {
                number: "04",
                title: "Analysis & Optimization",
                description:
                  "We continuously monitor performance, analyze results, and make data-driven adjustments to maximize ROI.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-8 mb-12"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  {index < 3 && <div className="w-0.5 h-12 bg-white/20 mx-auto mt-4"></div>}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
              Flexible Pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer transparent, affordable pricing packages designed to fit businesses at every stage of growth.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$497",
                description: "Perfect for new businesses ready to establish their digital presence",
              },
              {
                name: "Growth",
                price: "$997",
                description: "Comprehensive solution for businesses looking to scale their digital impact",
                featured: true,
              },
              {
                name: "Enterprise",
                price: "$1,997",
                description: "Complete digital transformation for established brands",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "bg-gradient-to-br from-gray-900 to-black border rounded-md p-8 text-center",
                  plan.featured ? "border-white/30 shadow-lg relative transform scale-105" : "border-white/10",
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="text-4xl font-bold my-4 text-white">
                  {plan.price}
                  <span className="text-sm text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <Button
                  className={cn(
                    "w-full",
                    plan.featured
                      ? "bg-white hover:bg-gray-200 text-black"
                      : "bg-transparent border border-white/30 text-white hover:bg-white/10",
                  )}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>
              Need a custom solution?{" "}
              <a href="/contact" className="text-white underline">
                Contact us
              </a>{" "}
              for personalized pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
              Let's discuss how our services can help you achieve your business goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-md">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
