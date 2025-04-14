import { Star } from "lucide-react";
import Image from "next/image";

const ReviewsCard = () => {
  return (
    <div className="border rounded-xl">
      <div className="flex justify-between px-3">
        <div className="">
          <Image
            src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png"
            alt="name"
            width={300}
            height={300}
            className="rounded-full h-10 w-10 m-2"
          />
        </div>
        <div className="flex items-center">
          <Star size={18} className="fill-orange-400 text-orange-400 mr-2" />
          <span className="text-sm text-gray-700">4.2</span>
        </div>
      </div>
      <div className="px-3 py-3 text-sm">
        <p>Absolutely delicious! The veggie chicken had the perfect texture and flavor—just like real chicken. It was juicy, well-seasoned, and great in my stir-fry. Will definitely buy again!</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
