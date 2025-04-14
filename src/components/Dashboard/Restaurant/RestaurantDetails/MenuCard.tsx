import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
}

export default function MenuCard({
  name = "Cheese cake",
  price = 479,
  rating = 4.8,
  imageSrc = "/placeholder.svg?height=300&width=300",
}: ProductCardProps) {
  return (
    <div className="h-[170px] relative content-end">
      <div className="absolute top-1 left-6 w-20 h-20 rounded-full overflow-hidden mb-6">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden px-4 h-32 content-end">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center">{name}</h2>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <Star
                size={12}
                className="fill-orange-400 text-orange-400 mr-2"
              />
              <span className="text-sm text-gray-700">{rating}</span>
            </div>
            <span className="text-sm font-bold">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
