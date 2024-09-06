import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiStackblitz } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';

interface SocialLink {
  icon: ReactElement<IconType>;
  path: string;
  title: string;
}

interface SocialLinksProps {
  containerStyle: string;
  iconStyle: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/nihaadk',
    title: 'Github',
  },
  {
    icon: <SiStackblitz/>,
    path: 'https://stackblitz.com/@nihaadk',
    title: 'Stackblitz'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/nihkrc/',
    title: 'LinkedIn',
  },
  {
    icon: <FaXTwitter />,
    path: 'https://x.com/n1hkrc',
    title: 'Twitter/X',
  },
  {
    icon: <FaXing />,
    path: 'https://www.xing.com/profile/Nihad_Keric',
    title: 'Xing',
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialLinks.map((social, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger aria-label="Social button" title={social.title}>
              <Link
                aria-label={social.title}
                key={index}
                href={social.path}
                target="_blank"
                className={iconStyle}
              >
                {social.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{social.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SocialLinks;
