import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
/**Footer section */
export default function Footer() {
  return (
    <footer className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">DEV Squad TECH</span>
            </div>
            <p className="text-sm text-indigo-200/65 mb-6">
              We build digital solutions for any business problem. Websites, apps, and software tailored to your needs.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: 'twitter', color: 'hover:text-indigo-300' },
                { icon: 'linkedin', color: 'hover:text-indigo-300' },
                { icon: 'github', color: 'hover:text-indigo-300' },
                { icon: 'instagram', color: 'hover:text-indigo-300' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#0"
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.icon.charAt(0).toUpperCase() + social.icon.slice(1)}
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    {social.icon === 'twitter' && (
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    )}
                    {social.icon === 'linkedin' && (
                      <path d="M18.715 8.297c2.164 0 3.914 1.746 3.914 3.916v7.497h-3.445v-7.04c0-1.034-.425-1.74-1.356-1.74-.741 0-1.183.495-1.376.972-.071.17-.089.407-.089.644v7.165h-3.445s.045-9.142 0-10.087h3.445v1.428c.446-.687 1.243-1.668 3.028-1.668zm-12.95.742h3.445v10.086H5.765V9.04zM7.99 3.36c0 1.039-.84 1.88-1.878 1.88-1.037 0-1.878-.841-1.878-1.88 0-1.038.84-1.88 1.878-1.88 1.038 0 1.878.842 1.878 1.88z" />
                    )}
                    {social.icon === 'github' && (
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Solutions', href: '#solutions' },
                { name: 'Process', href: '#process' },
                { name: 'Portfolio', href: '#portfolio' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Web Development',
                'Mobile Apps',
                'E-commerce',
                'UI/UX Design',
                'Maintenance',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="#services"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Stay Updated</h3>
            <p className="text-sm text-indigo-200/65 mb-4">
              Subscribe to our newsletter for tech insights and tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 px-4 py-2 rounded-l-lg focus:outline-none focus:border-indigo-500 text-sm"
              />
              <button className="bg-gradient-to-t from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Logo & Copyright */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © 2024 DEV Squad TECH
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Terms of Service
                </a>
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Cookies
                </a>
              </p>
              <p className="text-xs text-gray-500">
                We build solutions for any business challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}