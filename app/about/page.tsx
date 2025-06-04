"use client"

import { motion } from "framer-motion"
import Head from "next/head"
import { ArrowRight, Award, CheckCircle, Users, Target, Lightbulb, Linkedin, Twitter, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
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

// Team data with proper structure for SEO and accessibility
const team = [
  {
    id: "prantik-medhi",
    name: "Prantik Pratim Medhi",
    role: "Founder & CEO",
    bio: "Creative website and AI developer with global freelance expertise. Dedicated to crafting intelligent, SEO-driven solutions that elevate digital growth for businesses.",
    social: {
      linkedin: "https://linkedin.com/in/prantikmedhi",
      twitter: "https://twitter.com/prantikmedhii",
      email: "prantikpratimmedhi@gmail.com",
    },
  },
  {
    id: "bhargav-bordoloi",
    name: "Bhargav Bordoloi",
    role: "Founder & CEO",
    bio: "Digital Strategy & Lead Generation Expert, Specializes in lead management and growth strategies, helping brands scale through smart, ROI-driven marketing.", 
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/bhargav_dhunu",
      email: "bhargavbordoloi220@gmail.com",
    },
  },
  {
    id: "jishnu",
    name: "Jishnu",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in modern web technologies, performance optimization, and scalable solutions. Expert in React, Next.js, and cloud architecture.",
    social: {
      linkedin: "https://linkedin.com/in/jishnu-dev",
      github: "https://github.com/jishnu",
      email: "jishnu@growvaa.in",
    },
  },
  {
    id: "debashish",
    name: "Debashish",
    role: "Marketing Strategist",
    bio: "Data-driven marketing expert with deep expertise in SEO, content strategy, and growth hacking. Specializes in organic growth and conversion optimization.",
    social: {
      linkedin: "https://linkedin.com/in/debashish-marketing",
      twitter: "https://twitter.com/debashish_mkt",
      email: "debashish@growvaa.in",
    },
  },
]

// Generate structured data for team members
const generateTeamStructuredData = () => {
  return team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    url: `https://growvaa.in/about#${member.id}`,
    worksFor: {
      "@type": "Organization",
      name: "Growvaa",
      url: "https://growvaa.in",
    },
    sameAs: Object.values(member.social).filter((link) => link.startsWith("http")),
  }))
}

export default function AboutPage() {
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@graph": generateTeamStructuredData(),
  }

  return (
    <>
      <Head>
        <title>About Growvaa | Meet Our Expert Team - Prantik, Bhargav, Jishnu & Debashish</title>
        <meta
          name="description"
          content="Meet the Growvaa team: Prantik Pratim Medhi (CEO), Bhargav Bordoloi (Creative Director), Jishnu (Lead Developer), and Debashish (Marketing Strategist). Expert digital marketing professionals dedicated to your business growth."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }} />
      </Head>

      <div className="min-h-screen bg-black text-white" style={{ scrollBehavior: "smooth" }}>
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
          <div className="absolute inset-0 overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10">
              <source src="/background-animation.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Geometric Background */}
          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={500}
              height={120}
              rotate={15}
              gradient="from-white/[0.06]"
              className="left-[-8%] top-[20%]"
            />
            <ElegantShape
              delay={0.5}
              width={400}
              height={100}
              rotate={-20}
              gradient="from-white/[0.06]"
              className="right-[-6%] top-[60%]"
            />
            <ElegantShape
              delay={0.7}
              width={300}
              height={80}
              rotate={10}
              gradient="from-white/[0.06]"
              className="left-[10%] bottom-[15%]"
            />
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
                  Founded in 2025, Growvaa was created to bring high-quality digital marketing to startups and small businesses. We saw a need for affordable, personalized solutions in a space full of overpriced, one-size-fits-all agencies.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Our founder, with experience on over 100 projects, launched Growvaa to bridge this gap. The goal was simple: offer top-tier creativity, strategy, and execution—without the heavy costs.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
                  Since then, we've helped brands grow through SEO, web design, content, and social media. Every project reflects our 100% commitment to quality, results, and long-term impact.
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
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full h-full object-cover"
                  >
                    <source src="/about-story-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 pointer-events-none" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-md shadow-lg">
  <p className="text-black font-bold text-lg">Est. 2025</p>
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

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 rounded-md"
              >
                <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-white font-playfair">
                  Our Mission
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed">
                  To democratize premium digital marketing services by making them accessible and affordable for
                  businesses of all sizes. We believe that every entrepreneur deserves the tools and strategies needed
                  to succeed in the digital landscape, regardless of their budget constraints.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 rounded-md"
              >
                <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6 text-white font-playfair">
                  Our Vision
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed">
                  To become the leading digital marketing agency that empowers small and medium businesses to compete
                  with industry giants. We envision a future where innovative digital strategies are not a luxury, but a
                  standard tool available to every ambitious entrepreneur.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced with SEO and Accessibility */}
        <section className="py-24 bg-gray-900/30" id="team">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair">
                Meet Our Expert Team
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
                A diverse group of experts passionate about digital excellence and client success. Get to know the
                professionals behind Growvaa's innovative solutions.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.article
                  key={member.id}
                  id={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 rounded-md hover:border-white/20 transition-all duration-300 flex flex-col"
                >
                  <div className="w-full aspect-square bg-white/5 rounded-md mb-6 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/50">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <header className="mb-4">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                      <a href={`#${member.id}`} className="hover:underline focus:underline focus:outline-none">
                        {member.name}
                      </a>
                    </h2>
                    <p className="text-gray-300 font-medium mb-3">{member.role}</p>
                  </header>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{member.bio}</p>

                  <footer className="flex gap-3 justify-center">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </footer>
                </motion.article>
              ))}
            </div>

            {/* Quick navigation to team members */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 mb-4">Quick links to team members:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {team.map((member) => (
                  <a
                    key={member.id}
                    href={`#${member.id}`}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    {member.name.split(' ')[0]}
                  </a>
                ))}
              </div>
            </motion.div>
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
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-md"
                  asChild
                >
                  <a href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
