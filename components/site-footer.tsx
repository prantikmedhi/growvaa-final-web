import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image src="/logo.jpg" alt="Growvaa" width={60} height={30} />
            <p className="text-gray-400 mt-4">
              Elevating businesses through premium digital solutions with a focus on organic growth and professional
              excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" passHref>
  <a className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
    <Facebook size={20} />
  </a>
</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web-development" className="text-gray-400 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services#video-editing" className="text-gray-400 hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/services#growth" className="text-gray-400 hover:text-white transition-colors">
                  Growth Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>growvaadigital@gmail.com</li>
              <li>
  <a href="https://wa.me/918486630592" target="_blank" rel="noopener noreferrer">
    +91 8486630592
  </a>
</li>
              <li>India, Assam</li>
              <li>Guwahati</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Growvaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
