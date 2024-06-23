import { useKeenSlider } from "keen-slider/react";

const Slider = () => {
  const animation = { duration: 15000, easing: (t) => t };
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    slides: { perView: "auto" },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider py-[30px] lg:py-[0px] border-y-[1px] border-[#606060] lg:border-y-[0px]">
      <img className="keen-slider__slide h-25 w-25 object-contain" src="assets/img/ourpartner1.png"  />
      <img className="keen-slider__slide h-25 w-25 object-contain" src="assets/img/ourpartner2.png" />
      <img className="keen-slider__slide h-25 w-25 object-contain" src="assets/img/ourpartner4.png" />
      <img className="keen-slider__slide h-25 w-25 object-contain" src="assets/img/ourpartner3.png" />
      <img className="keen-slider__slide h-25 w-25 object-contain" src="assets/img/ourpartner5.png" />
    </div>
  );
};

export default Slider;
