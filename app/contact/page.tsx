'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'nihadkeric@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    value: 'Zurich, Switzerland',
  },
  {
    icon: <TbWorld />,
    title: 'Nationality',
    value: 'Slovenian',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-primary-light rounded-xl">
              <h2 className="text-4xl text-accent">Lets work together</h2>
              <p className="text-white/60">
                I help bring your ideas to life by supporting your digital transformations. As
                an experienced Frontend Software Engineer, I turn your concepts into modern,
                user-friendly, and responsive web applications. Together, we can create
                innovative digital solutions that bring your vision to reality and strengthen
                your presence in the digital space.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input aria-label="firstname" type="firstname" placeholder="Firstname" />
                <Input aria-label="lastname" type="lastname" placeholder="Lastname" />
                <Input aria-label="email" type="email" placeholder="Email address" />
                <Input aria-label="phone" type="phone" placeholder="Phone number" />
              </div>
              <Textarea
                aria-label="message"
                className="h-[200px]"
                placeholder="Type your message here"
              />

              <Button aria-label="Send Message button" size={'default'} className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary-light text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white/60">{item.title}</h3>
                    <p className="text-xl">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
