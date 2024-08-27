'use client';

import { Description } from '@radix-ui/react-dialog';
import { title } from 'process';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { FaCircle } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AboutItem {
  title: string;
  description: string;
}

const about: AboutItem = {
  title: 'About Me',
  description:
    'I am a Software Engineer with focus on Frontend with over 8 years of experience, passionate about creating beautiful and functional web applications. With Slovenian nationality and work permits for both the EU and Switzerland, I bring a strong background in various technologies and a dedication to continuous learning. I speak Bosnian, Slovenian, English, and German Languages.',
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'I have worked on a variety of projects ranging from small websites to large web applications. I have experience with both front-end and back-end technologies and am always looking to learn more.',
  items: [
    {
      company: 'Emineo AG',
      position: 'Frontend Developer',
      duration: '2018 - Present',
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2015 - 2018',
    },
    {
      company: 'Freelance',
      position: 'Graphic Designer',
      duration: '2012 - 2015',
    },
    {
      company: 'Freelance',
      position: 'Graphic Designer',
      duration: '2012 - 2015',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'I have a degree in Computer Science and have taken a variety of courses to improve my skills. I am always looking to learn more and stay up-to-date with the latest technologies.',
  items: [
    {
      school: 'University of Ljubljana',
      degree: 'Bachelor of Science',
      duration: '2012 - 2016',
    },
    {
      school: 'FreeCodeCamp',
      degree: 'Frontend Development',
      duration: '2017',
    },
    {
      school: 'SoftwareArchitect',
      degree: 'Advanced Angular Workshop',
      duration: '2019',
    },
    {
      school: 'Academind',
      degree: 'Angular Complete Guide',
      duration: '2021',
    },
    {
      school: 'Academind',
      degree: 'Build iOS, Android with Ionic & Angular',
      duration: '2021',
    },
    {
      school: 'Academind',
      degree: 'Clean Code',
      duration: '2021',
    },
    {
      school: 'Udemy',
      degree: 'The complete React Fullstack',
      duration: '2021',
    },
    {
      school: 'Udemy',
      degree: 'Next.js & React',
      duration: '2021',
    },
    {
      school: 'Udemy',
      degree: 'Next.js & React',
      duration: '2021',
    },
    {
      school: 'Udemy',
      degree: 'GitLab CI/CD for Beginners',
      duration: '2021',
    },
    {
      school: 'Udemy',
      degree: 'TailwindCSS Course',
      duration: '2022',
    },
    {
      school: 'Udemy',
      degree: 'Cypress: Web Automation Testing from Zero to Hero',
      duration: '2022',
    },
    {
      school: 'Letsboot.ch',
      degree: 'Kubernetes DevOps Course & Training',
      duration: '2022',
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
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
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
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[70vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary-light h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <FaCircle className="w-2 h-2 text-accent" />
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary-light h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <FaCircle className="w-2 h-2 text-accent" />
                            <p className="text-white/60">{item.school}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-primary-light rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
