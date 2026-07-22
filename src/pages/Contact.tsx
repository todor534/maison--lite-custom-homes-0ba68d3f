import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+1 (415) 555-0142",
  },
  {
    icon: Mail,
    label: "Email",
    value: "atelier@maisonelite.com",
  },
  {
    icon: MapPin,
    label: "Atelier",
    value: "1200 Nob Hill Boulevard, San Francisco, CA",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl bg-surface border border-border px-4 py-3 text-text placeholder:text-muted backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all duration-200";

  return (
    <main className="bg-bg text-text">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-bg to-bg pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium uppercase tracking-[0.2em] text-sm">
              Begin the Conversation
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Craft
              </span>{" "}
              Your Legacy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Every extraordinary home begins with a single conversation. Share your
              vision with our atelier and we will bring it to life with uncompromising
              craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">Reach Our Atelier</h2>
              <p className="mt-6 text-muted leading-relaxed">
                Our team of designers and master builders is ready to discuss your
                project. We welcome private consultations at our atelier or on-site at
                your future residence.
              </p>

              <div className="mt-10 space-y-6">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 bg-surface border border-border rounded-xl backdrop-blur-md p-5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-lg font-medium text-text">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl overflow-hidden border border-border">
                <img
                  src=""
                  alt="Maison Élite atelier showroom"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-surface border border-border rounded-xl backdrop-blur-md p-8 md:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Thank You</h3>
                  <p className="mt-3 text-muted max-w-sm">
                    Your enquiry has been received. A member of our atelier will
                    respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Anderson"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-muted mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm text-muted mb-2">
                      Estimated Investment
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a range</option>
                      <option value="2-5m">$2M – $5M</option>
                      <option value="5-10m">$5M – $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted mb-2">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe the home you envision..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    Send Enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}