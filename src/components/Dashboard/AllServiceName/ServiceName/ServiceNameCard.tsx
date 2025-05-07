import Image from "next/image";
import { DeleteButton } from "./DeleteButton";
import { EditServiceModal } from "./EditServiceModal";

export type TService = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  duration: string;
  createdAt: string;
  updatedAt: string;
  Review: number;
};

const ServiceNameCard = ({ service }: { service: TService }) => {
  return (
    <div className="relative group">
      <Image
        src={service.image}
        alt={service.name}
        width={162}
        height={160}
        className="h-[143px] w-[184px] rounded-xl object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
      <h6 className="z-[2] absolute w-full mx-auto bottom-2 md:px-2 text-sm lg:px-4 py-1 flex justify-center items-center text-[#FFFFFF] bg-[#91D16080] rounded-full">
        {service.name}
      </h6>
      <DeleteButton serviceId={service.id} />
      <EditServiceModal service={service}/>
    </div>
  );
};

export default ServiceNameCard;