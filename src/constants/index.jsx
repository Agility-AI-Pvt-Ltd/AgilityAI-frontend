import { Handshake } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

import { Move , University , ShieldCheck , Rocket } from "lucide-react";



export const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "AI Insights", href: "/newsfeed" },
];

export const ourvalues = [
    { icon: <Rocket/>, title: "Innovation", description: "We push the boundaries of AI, delivering solutions that shape the future. " },
    { icon: <Move/>, title: "Agility", description: "We believe in adaptability, responsiveness, and staying ahead in an evolving AI landscape. " },
    { icon: <University/>, title: "Education", description: "We empower individuals and organizations with AI knowledge that transforms careers and businesses." },
    { icon: <ShieldCheck />, title: "Ethical AI", description: "Responsible AI development is at the core of everything we do, ensuring AI serves humanity positively." },
]


export const features = [
  {
    icon: <Handshake/>,
    text: " AI-Powered Business Solutions",
    description:
      "From intelligent automation to data-driven decision-making, we help businesses leverage AI for efficiency, scalability, and growth.",
  },
  {
    icon: <LibraryBig/>,
    text: "AI Education & Training",
    description:
      "We offer hands-on AI courses, workshops, and certifications to equip students and professionals with real-world AI skills.",
  },
  {
    icon: <BrainCircuit/>,
    text: "Custom AI Development",
    description:
      "We design tailored AI models, machine learning applications, and deep learning solutions** to solve industry-specific challenges.",
  },
  {
    icon: <Lightbulb/>,
    text: " AI Strategy & Consulting",
    description:
      "Guiding businesses through AI adoption, digital transformation, and ethical AI practices.",
  },
  {
    icon: <FlaskConical/>,
    text: " AI Research & Innovation",
    description:
      " Advancing AI capabilities through continuous research, experimentation, and the development of cutting-edge technologies.",
  },
  {
    icon: <Layers/>,
    text: "AI Integration Services",
    description:
      "Seamlessly embedding AI into existing business infrastructure to enhance productivity, automation, and customer experiences.",
  },
  
];


export const industries = [
  { name: "Healthcare", desc: "AI-driven diagnostics, medical imaging, and predictive analytics.", color: "text-cyan-400" },
  { name: "Finance", desc: "Fraud detection, risk management, algorithmic trading, and customer insights.", color: "text-cyan-400" },
  { name: "Retail & E-commerce", desc: "Personalized recommendations, demand forecasting, and inventory optimization.", color: "text-cyan-400" },
  { name: "Manufacturing", desc: "Predictive maintenance, process automation, and quality control.", color: "text-cyan-400" },
  { name: "Education", desc: "AI-powered learning tools, personalized student engagement, and automated grading.", color: "text-cyan-400" },
  { name: "Agriculture", desc: "Smart farming, crop disease detection, and precision agriculture.", color: "text-cyan-400" },
  { name: "Automotive", desc: "Self-driving technology, predictive maintenance, and smart traffic management.", color: "text-cyan-400" },
  { name: "Energy", desc: "AI-driven grid optimization, renewable energy forecasting, and predictive maintenance.", color: "text-cyan-400" },
  { name: "Telecommunications", desc: "Automated customer support, fraud prevention, and network optimization.", color: "text-cyan-400" },
  { name: "Cybersecurity", desc: "Threat detection, AI-driven security monitoring, and anomaly detection.", color: "text-cyan-400" },
  { name: "Entertainment & Media", desc: "AI-driven content recommendations, deepfake detection, and automated video editing.", color: "text-cyan-400" },
  { name: "Supply Chain & Logistics", desc: "Route optimization, demand forecasting, and automated warehouse management.", color: "text-cyan-400" }
];