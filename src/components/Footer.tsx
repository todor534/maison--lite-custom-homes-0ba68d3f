import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-bg to-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-flex flex-col cursor-pointer group">
              <span className="text-2xl font-[var(--font-display)] font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Maison Élite
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted mt-1">
                Custom Homes
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-muted max-w-xs">
              Crafting bespoke residences for discerning clients who accept nothing less than extraordinary.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Footer navigation"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <a
                  href="mailto:studio@maisonelite.com"
                  className="flex items-start gap-3 hover:text-primary transition-all duration-200 cursor-pointer"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  studio@maisonelite.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="flex items-start gap-3 hover:text-primary transition-all duration-200 cursor-pointer"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  +1 (800) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>120 Vanderbilt Ave,<br />New York, NY 10017</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Follow
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center h-10 w-10 rounded-xl bg-surface border border-border backdrop-blur-md text-muted hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-muted leading-relaxed">
              Join our list for private previews of upcoming residences.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Maison Élite Custom Homes. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-primary transition-all duration-200 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-all duration-200 cursor-pointer">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}