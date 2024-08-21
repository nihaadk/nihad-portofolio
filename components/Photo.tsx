"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:wh-[498px] mix-blend-lighten">
          <Image
            src="/assets/me.webp"
            priority
            fill
            quality={100}
            alt="Photo"
            className="object-contain "
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:wh-[498px] mix-blend-lighten">
          <Image
            src="/assets/me.webp"
            priority
            fill
            quality={100}
            alt="Photo"
            className="object-contain "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
