'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { cloneElement } from 'react';
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { FaCircle, FaMasksTheater } from 'react-icons/fa6';
import { IoLogoIonic } from 'react-icons/io';
import {
  SiAngular,
  SiClaude,
  SiNestjs,
  SiNextdotjs,
  SiNgrx,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'I have worked on a variety of projects ranging from small websites to large web applications. I have more experience in frontend technologies and some in backend, but Im always eager to learn more.',
  items: [
    {
      company: 'Zurich Insurance',
      url: 'https://www.zurich.ch',
      position: 'Senior Software Engineer',
      duration: '2025 - Present',
    },
    {
      company: 'Emineo AG',
      url: 'https://www.emineo.ch',
      position: 'Senior Frontend Engineer',
      duration: '2023 - 2025',
    },
    {
      company: 'Emineo AG',
      url: 'https://www.emineo.ch',
      position: 'Frontend Engineer',
      duration: '2019 - 2023',
    },
    {
      company: 'Hapa AG - Coesia Group',
      url: 'https://www.hapa.ch',
      position: 'Frontend Engineer',
      duration: '2017 - 2019',
    },
    {
      company: 'Slovenia Post',
      url: 'https://www.epps.si/',
      position: 'Project Manager',
      duration: '2017',
    },
    {
      company: 'Slovenia Post',
      url: 'https://www.epps.si/',
      position: 'Software Engineer',
      duration: '2015 - 2017',
    },
  ],
};

const skills = {
  icon: '/assets/resume/skills.svg',
  title: 'My Skills',
  description:
    'I have experience with a variety of technologies and am always looking to learn more. I am proficient in both front-end and back-end development and have experience with a variety of tools and frameworks.',
  skillList: [
    {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      icon: <SiTypescript />,
    },
    {
      name: 'Angular',
      url: 'https://angular.dev/',
      icon: <SiAngular />,
    },

    {
      name: 'NgRx',
      url: 'https://ngrx.io/',
      icon: <SiNgrx />,
    },
    {
      name: 'Ionic',
      url: 'https://ionicframework.com/',
      icon: <IoLogoIonic />,
    },

    {
      name: 'React',
      url: 'https://react.dev/',
      icon: <FaReact />,
    },
    {
      name: 'Next.js',
      url: 'https://nextjs.org/',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Node.js',
      url: 'https://nodejs.org/',
      icon: <FaNodeJs />,
    },
    {
      name: 'Nest.js',
      url: 'https://nestjs.com/',
      icon: <SiNestjs />,
    },
    {
      name: 'Java',
      url: 'https://www.java.com/',
      icon: <FaJava />,
    },
    {
      name: 'Spring Boot',
      url: 'https://spring.io/projects/spring-boot',
      icon: <SiSpringboot />,
    },
    {
      name: 'Playwright',
      url: 'https://playwright.dev/',
      icon: <FaMasksTheater />,
    },
    {
      name: 'Claude',
      url: 'https://claude.ai/',
      icon: <SiClaude />,
    },
    {
      name: 'Figma',
      url: 'https://www.figma.com/',
      icon: <FaFigma />,
    },
    {
      name: 'Github',
      url: 'https://github.com/',
      icon: <FaGithub />,
    },
    {
      name: 'GitLab',
      url: 'https://about.gitlab.com/',
      icon: <FaGitlab />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-12 xl:py-0"
    >
      <div className="container mx-auto flex flex-col gap-16 xl:gap-20">
        <h1 className="sr-only">Resume of Nihad Kerić, Software Engineer in Zurich</h1>
        <section className="flex flex-col gap-[30px] text-center xl:text-left">
          <h2 className="text-4xl font-bold">{experience.title}</h2>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {experience.description}
          </p>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => (
              <li
                key={index}
                className="group bg-primary-light min-h-[184px] py-6 px-6 sm:px-10 rounded-xl border border-transparent hover:border-accent transition-all duration-300 flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  <FaCircle className="w-2 h-2 text-accent" />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 group-hover:text-accent transition-all duration-300"
                  >
                    {item.company}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-[30px] text-center xl:text-left">
          <h2 className="text-4xl font-bold">{skills.title}</h2>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skills.skillList.map((skill, index) => (
              <li key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${skill.name} website`}
                        className="w-full h-[150px] bg-primary-light rounded-xl border border-transparent hover:border-accent transition-all duration-300 flex justify-center items-center group"
                      >
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {cloneElement(skill.icon, { 'aria-hidden': true, role: 'presentation' })}
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Resume;
