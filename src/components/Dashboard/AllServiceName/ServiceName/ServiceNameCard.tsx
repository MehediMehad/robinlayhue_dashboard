import Image from "next/image";

const ServiceNameCard = () => {
  return (
    <div className="relative">
    <Image
      src="https://cleanersanytime.com/wp-content/uploads/2024/09/360_F_236574440_2nE6HY9HHgjxxNFrq741saHUtOneXAYP.jpg"
      alt="service-name"
      width={162}
      height={160}
      className="h-[143px] w-auto rounded-xl"
    />
    {/* Gradient overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    {/* Text over the image */}
    <h6 className="absolute bottom-2 px-4 py-1 left-[7%] text-[#FFFFFF] bg-[#91D16080] rounded-full">
      Residential Roofing
    </h6>
  </div>
  );
};

export default ServiceNameCard;