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
      'I create customized, user-friendly websites that perfectly represent your brand online. From concept to execution – everything is handled from a single source.',
    href: '',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description:
      'I develop intuitive and appealing user interfaces that delight your users. With a strong focus on usability and aesthetics, I ensure that your digital products not only look great but are also easy to use.',
    href: '',
  },

  {
    number: '03',
    title: 'Architecture',
    description:
      'I design robust and scalable software architectures that form the foundation for sustainable and high-performance applications. Through thoughtful planning and clear structures, I enable you to realize efficient and future-proof software solutions.',
    href: '',
  },

  {
    number: '04',
    title: 'Graphic Design',
    description:
      'I create visually compelling designs that make your brand strong and distinctive. Whether logos, marketing materials, or digital media – my designs convey your message clearly and aesthetically.',
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
