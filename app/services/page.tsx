'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  number: string;
  title: string;
  description: string;
  href: string;
}

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'I build fast, maintainable and user-friendly web applications, from the first concept to production. Frontend is my core strength, backed by solid backend knowledge for end-to-end solutions.',
    href: '',
  },
  {
    number: '02',
    title: 'UI/UX & Product Design',
    description:
      'I design intuitive interfaces and user flows with a strong focus on usability and product thinking. The result is a digital product that looks great, is easy to use and meets real user needs.',
    href: '',
  },
  {
    number: '03',
    title: 'Software Architecture & Integrations',
    description:
      'I design scalable, well-structured software architectures and connect them cleanly to APIs, third-party services and existing systems. Clear structures make your solution robust and future-proof.',
    href: '',
  },
  {
    number: '04',
    title: 'AI Agents & Automation',
    description:
      'I build AI agents and automated workflows that take over repetitive tasks and speed up your processes. I integrate AI in a practical, transparent and controlled way, so you understand what it does and why.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 cursor-default">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn',
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-28"
        >
          {services.map((service: Service, index: number) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.number}
                </div>
                <Link
                  aria-label={service.title}
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              <p className="text-white/60">{service.description}</p>

              <div className="bordr-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
