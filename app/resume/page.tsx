'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = [
  {
    title: 'About Me',
    description:
      'I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies and am always looking to learn more.',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Nihad Keric',
      },
      {
        fieldName: 'Email',
        fieldValue: 'nihadkeric@gmail.com',
      },
      {
        fieldName: 'Nationality',
        fieldValue: 'Slovenian',
      },
      {
        fieldName: 'Experience',
        fieldValue: '8+ Years',
      },
      {
        fieldName: 'Freelance',
        fieldValue: 'Available',
      },
      {
        fieldName: 'Languages',
        fieldValue: 'Bosnian, Slovenia, English, German',
      },
    ],
  },
];

const Resume = () => {
  return (
    <div>
      <h1>Resume page</h1>
    </div>
  );
};

export default Resume;
