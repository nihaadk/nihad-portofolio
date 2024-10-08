'use client';
import LinkButton from '@/components/LinkButton';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import SwiperSlideButtons from '@/components/SwiperSlideButtons';

const projects = [
  {
    index: '01',
    title: 'Fine Calculator',
    description:
      'With the FineCalculator, you can calculate the fine for speeding. The project was created solely to test the SignalStore and is not intended for real-world use.',
    stack: [{ name: 'Angular' }, { name: 'daisyui' }, { name: 'SignalStore' }],
    image: '/assets/work/fineCalc.png',
    github: 'https://github.com/nihaadk/fine-calculator',
    live: 'https://fine-calculator-n6wn64h6z-nihadk.vercel.app/',
  },
  {
    index: '02',
    title: 'HMI Dashboard',
    description:
      'The HMI used in Optimate provides a user-friendly interface for monitoring and controlling machinery and processes. It allows users to visualize and manage complex data and control functions in an intuitive way, enhancing efficiency and productivity. The system offers straightforward controls and real-time feedback, enabling quick adjustments and precise management.',
    stack: [{ name: 'Angular.JS' }, { name: 'WebSocket' }, { name: 'UX/UI Design' }],
    image: '/assets/work/hmi.png',
    live: 'https://www.hapa.ch/en/solutions/product/web-40-5d',
  },
  {
    index: '03',
    title: 'Drittmeldung',
    description:
      'With Drittmeldepflicht.ch, small and medium-sized administrations, landlords, or property owners who do not have a property management system connected to sedex can electronically record tenant move-ins and move-outs. I worked as a frontend engineer on this project at Emineo AG.',
    stack: [
      { name: 'Angular' },
      { name: 'RxJS' },
      { name: 'Bootstrap' },
      { name: 'Angular Material' },
    ],
    image: '/assets/work/drittmeldung.png',
    live: 'https://Drittmeldung.ch/',
  },
  {
    index: '04',
    title: 'NK Portfolio',
    description: 'This Website is my Portfolio. And describes my skills and projects.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind CSS' }],
    image: '/assets/work/nk-portofolio.png',
    live: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.index}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <LinkButton
                  link={project.live}
                  text="Live Project"
                  icon={<BsArrowUpRight />}
                />

                {project.github && (
                  <LinkButton
                    link={project.github}
                    text="Github repository"
                    icon={<BsGithub />}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-full">
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-2xl"
                          alt={`A mockup photo of the ${project.title} project showing both desktop and mobile views.`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SwiperSlideButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
