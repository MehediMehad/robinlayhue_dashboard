"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReviewsCard from "../ReviewsCard";

const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]


export default function ReviewsCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {data.map((offer, inx) => (
          <CarouselItem key={inx} className="md:basis-1/2 lg:basis-[20%]">
            <ReviewsCard/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
