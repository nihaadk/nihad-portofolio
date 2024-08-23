import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  icon: ReactElement<IconType>;
  path: string;
}

interface SocialLinksProps {
  containerStyle: string;
  iconStyle: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FaLinkedin />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialLinks.map((social, index) => (
        <a key={index} href={social.path} target="_blank" className={iconStyle}>
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
