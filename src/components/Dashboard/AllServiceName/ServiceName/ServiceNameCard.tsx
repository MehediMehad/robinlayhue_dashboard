import Image from "next/image";

export type TService = {
  id: string
  name: string
  image: string
  createdAt: string
  updatedAt: string
  Review: number
}

const ServiceNameCard = ({service}: {service: TService}) => {
  return (
    <div className="relative">
    <Image
      src={service.image}
      alt={service.name}
      width={162}
      height={160}
      className="h-[143px] w-[184px] rounded-xl object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    {/* Text over the image */}
    <h6 className="absolute bottom-2 md:px-2 text-sm lg:px-4 py-1 left-[9.5%] text-[#FFFFFF] bg-[#91D16080] rounded-full">
      Residential Roofing
    </h6>
  </div>
  );
};

export default ServiceNameCard;