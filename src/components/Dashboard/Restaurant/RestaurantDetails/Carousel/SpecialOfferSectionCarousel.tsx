"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import banner from "../../../../../assests/bannar.png"



export default function SpecialOfferSectionCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {specialOffers.map((offer) => (
          <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-[20%] mt-1">
            <div className="">
              <Image
                src={banner ? banner : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/39/e4/charcoal-bar-bbq-restaurant.jpg?w=600&h=-1&s=1"}
                alt="Foraged Fare"
                width={330}
                height={150}
                className="h-[150px] w-[330px] object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}


// Special offer data
const specialOffers = [
  {
    id: 1,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 2,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 3,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 4,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 5,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 6,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
  {
    id: 7,
    title: "Special Offer for March",
    description: "We are here with the Best Burgers in town.",
    image: "/images/burger-offer.png",
  },
];