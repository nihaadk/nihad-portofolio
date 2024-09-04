'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="h-full w-full relative mix-blend-lighten">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[590px] xl:h-[590px]">
          <Image
            src="/assets/me.webp"
            priority
            fill
            quality={100}
            alt="Profile photo"
            className="object-contain "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
