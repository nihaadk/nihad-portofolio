import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface LinkButtonProps {
  link: string;
  text: string;
  icon: ReactNode;
}

const LinkButton = ({ link, text, icon }: LinkButtonProps) => {
  return (
    <Link href={link} aria-label={`link-${text}`}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger
            aria-label={text}
            title={text}
            className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
          >
            <div className="text-white text-3xl group-hover:text-accent">{icon}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default LinkButton;
