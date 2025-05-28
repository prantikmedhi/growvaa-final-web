"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Award, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function AboutPage() {
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
              About Growvaa
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are a team of digital experts passionate about transforming businesses through innovative digital
              solutions. Our mission is to make premium digital services accessible to businesses of all sizes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
                Our Story
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-6 leading-relaxed">
                Founded in 2018, Growvaa began with a simple mission: to bridge the gap between premium digital services
                and affordability. We noticed that many small businesses and startups were priced out of quality digital
                marketing services, leaving them at a disadvantage in an increasingly digital world.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-6 leading-relaxed">
                Our founder, having worked with both Fortune 500 companies and small businesses, saw an opportunity to
                bring enterprise-level strategies to growing businesses without the enterprise-level price tag.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
                Today, we've helped over 500 businesses establish and grow their digital presence, with a focus on
                organic, sustainable growth strategies that deliver long-term results.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-md overflow-hidden border border-white/10">
                <Image src="/placeholder.svg?height=600&width=600" alt="Growvaa Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-md shadow-xl">
                <p className="text-black font-bold text-xl">Est. 2018</p>
                <p className="text-gray-600 text-sm">6+ Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do at Growvaa, from client interactions to project execution.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We never compromise on quality. Every project, regardless of size or budget, receives our full attention and expertise.",
                icon: Award,
              },
              {
                title: "Accessibility",
                description:
                  "We believe premium digital services should be accessible to businesses of all sizes, not just those with enterprise budgets.",
                icon: Users,
              },
              {
                title: "Transparency",
                description:
                  "We maintain open communication with our clients, ensuring they understand our processes and the value we provide.",
                icon: CheckCircle,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 rounded-md"
              >
                <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diverse group of experts passionate about digital excellence and client success.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Williams",
                role: "Creative Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                role: "Lead Developer",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Sharma",
                role: "Marketing Strategist",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-md mb-4 aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-gray-300">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:opacity-0 transition-opacity duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">{member.role}</p>
              </motion.div>
            ))}
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
              Ready to Work With Us?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12">
              Let's discuss how we can help elevate your business to new digital heights.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-md">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
