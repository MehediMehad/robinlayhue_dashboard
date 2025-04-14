import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DetailsPageHeader = () => {
  const restaurantStatus = true;
  return (
    <header className="p-4">
      <Link
        href="#"
        className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
      >
        <IoArrowBack className="w-7 h-7" />
        <span className="font-medium text-[#808080] text-sm leading-none tracking-[-2%]">
          View Restaurant Profile
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <Image
          //   src="https://github.com/shadcn.png"
          src="https://github.com/shadcn.png"
          alt="Foraged Fare"
          width={60}
          height={60}
          className="rounded-full h-28 w-28 object-cover"
        />
        <div className="flex justify-between w-full">
          <div className="">
            <h1 className="font-medium text-4xl tracking-[1%] align-middle">
              Foraged Fare
            </h1>
            <p className="font-inter font-normal text-xl mt-1 text-primary tracking-[1%] align-middle">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          {restaurantStatus && (
            <div className="flex gap-x-2 items-center">
              <Button className="bg-[#EDFBED] hover:bg-[#14C71A]/90 duration-300 text-[#14C71A] hover:text-[#EDFBED] border-[1px] rounded-full border-[#14C71A] shadow-none">Approve</Button>
              <Button className="bg-[#BFE1FF] hover:bg-[#1F4E78]/10 duration-300 text-[#1F4E78] hover:text-[#1F4E78] border-[1px] rounded-full border-[#1F4E78] shadow-none">Decline</Button>
              <Link href="/restaurants/information">
              <Button variant={'link'} className="text-[#2972FF] underline hover:underline-offset-2 duration-300 " >Information</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DetailsPageHeader;
