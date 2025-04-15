import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const MemberProfileHeader = () => {
  return (
    <header className="p-4 bg-white">
      <Link
        href="/team-management"
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
        </div>
      </div>
    </header>
  );
}

export default MemberProfileHeader;