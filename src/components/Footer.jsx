import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="text-2xl font-bold inline-flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2">
                <span className="font-bold">VS</span>
              </div>
              <span className="flex flex-col">
                <span className="text-primary">Vanni Sahayak</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Bridging Communication</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Breaking barriers in communication with advanced AI-powered sign language recognition and translation
              technology for the Indian Sign Language community.
            </p>

            <div className="flex mt-6 space-x-4">
              <a href="https://www.facebook.com/share/16QfjdNFVj/" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="@KodrishSolution" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/kod_rish?igsh=azZ0cWpjZmhhZnFh" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/kodrish-innovation-solutions/" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/apniprogrammingyt09" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/predict"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Predict
                </Link>
              </li>
              <li>
                <Link
                  to="/text-to-sign"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Text-to-Sign
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/tutorial"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Tutorials
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400 flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span>kodrishsolution@gmail.com</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span>+91 7067954499</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span>Indore (M.p)</span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center mt-2"
                >
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Vanni Sahayak. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

