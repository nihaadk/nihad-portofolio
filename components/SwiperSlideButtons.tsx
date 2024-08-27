import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface SwiperSlideButtonsProps {
  containerStyles: string;
  buttonStyles: string;
}

const SwiperSlideButtons = ({ containerStyles, buttonStyles }: SwiperSlideButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold onClick={() => swiper.slidePrev()} />
      </button>
      <button className={buttonStyles}>
        <PiCaretRightBold onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default SwiperSlideButtons;
