import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { BsArrowUpRight } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { ReactNode } from 'react';

interface LinkButtonProps {
  link: string;
  text: string;
  icon: ReactNode;
}

const LinkButton = ({ link, text, icon }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            <div className="text-white text-3xl group-hover:text-accent">{icon}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default LinkButton;
