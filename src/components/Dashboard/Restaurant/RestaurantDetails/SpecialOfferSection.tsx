import SpecialOfferSectionCarousel from "./Carousel/SpecialOfferSectionCarousel";

const SpecialOfferSection = () => {
  return (
    <div className="row-span-1">
      <h1 className="font-semibold text-2xl leading-none tracking-none align-middle pb-3">
        All Special Offer
      </h1>
      <SpecialOfferSectionCarousel/>
    </div>
  );
};

export default SpecialOfferSection;
