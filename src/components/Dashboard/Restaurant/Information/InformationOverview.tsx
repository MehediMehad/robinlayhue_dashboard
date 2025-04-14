import Image from "next/image";
import info from "../../../../assests/info.png"
import sine from "../../../../assests/sine.png"

const InformationOverview = () => {
  return (
    <div className="px-4">
      <h1 className="font-semibold text-2xl leading-tight tracking-normal align-middle">
        All information of restaurant
      </h1>
      <div className="flex gap-x-5 mt-2">
        <div className="">
            <Image src={info} width={301} height={452} alt="info"/>
        </div>
        <div className="flex items-center">
            <Image src={sine} width={300} height={300} alt="sin"/>
        </div>
      </div>
    </div>
  );
};

export default InformationOverview;
