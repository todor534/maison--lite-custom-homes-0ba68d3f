export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Maison Élite transformed our vision into a home that feels like a private sanctuary. Every detail, from the hand-selected marble to the bespoke joinery, reflects an obsession with craft that is increasingly rare.",
    name: "Alexandra Whitmore",
    role: "Private Client",
    location: "Beverly Hills, CA",
    avatar: "",
    rating: 5,
  },
  {
    id: "t-2",
    quote:
      "From the first sketch to the final walkthrough, the process was seamless and utterly discreet. They understood our lifestyle intimately and delivered a residence that exceeds anything we imagined possible.",
    name: "James & Eleanor Ashford",
    role: "Estate Owners",
    location: "Aspen, CO",
    avatar: "",
    rating: 5,
  },
  {
    id: "t-3",
    quote:
      "The team's ability to balance architectural drama with genuine livability is extraordinary. Our home is both a statement and a comfort — a true reflection of who we are.",
    name: "Dr. Sofia Marchetti",
    role: "Collector & Homeowner",
    location: "Lake Como, IT",
    avatar: "",
    rating: 5,
  },
  {
    id: "t-4",
    quote:
      "Working with Maison Élite felt like a genuine collaboration. They listened, refined, and elevated every idea. The result is a legacy home our family will cherish for generations.",
    name: "Richard Kensington",
    role: "Founder & Principal",
    location: "The Hamptons, NY",
    avatar: "",
    rating: 5,
  },
  {
    id: "t-5",
    quote:
      "Impeccable taste, uncompromising quality, and a level of service that defines true luxury. Maison Élite doesn't just build houses — they craft the backdrop of your life.",
    name: "Priya Anand",
    role: "Private Client",
    location: "Malibu, CA",
    avatar: "",
    rating: 5,
  },
  {
    id: "t-6",
    quote:
      "The attention to natural light, flow, and material honesty is something we notice every single day. This is architecture at its most poetic and precise.",
    name: "Henrik & Astrid Larsen",
    role: "Villa Owners",
    location: "Costa Smeralda, IT",
    avatar: "",
    rating: 5,
  },
];

export default testimonials;