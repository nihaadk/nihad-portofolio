import { useSwiper } from 'swiper/react';

// Phosphor "caret bold" paths, inlined. Importing them from 'react-icons/pi' pulls in the whole
// icon set and made the first dev-mode compile of /work take ~33 s.
const CaretIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d={d} />
  </svg>
);
const CARET_LEFT =
  'M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z';
const CARET_RIGHT =
  'M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z';

interface SwiperSlideButtonsProps {
  containerStyles: string;
  buttonStyles: string;
}

const SwiperSlideButtons = ({ containerStyles, buttonStyles }: SwiperSlideButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={buttonStyles}
        aria-label="slide preview button"
        onClick={() => swiper.slidePrev()}
      >
        <CaretIcon d={CARET_LEFT} />
      </button>
      <button
        className={buttonStyles}
        aria-label="slide next button"
        onClick={() => swiper.slideNext()}
      >
        <CaretIcon d={CARET_RIGHT} />
      </button>
    </div>
  );
};

export default SwiperSlideButtons;
