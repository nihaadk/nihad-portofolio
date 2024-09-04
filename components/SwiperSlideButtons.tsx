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
      <button className={buttonStyles} aria-label="slide preview button">
        <PiCaretLeftBold onClick={() => swiper.slidePrev()} />
      </button>
      <button className={buttonStyles} aria-label="slide next button">
        <PiCaretRightBold onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default SwiperSlideButtons;
