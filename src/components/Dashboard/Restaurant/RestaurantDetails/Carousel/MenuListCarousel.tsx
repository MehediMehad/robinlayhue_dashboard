"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MenuCard from "../MenuCard";

const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]


export default function MenuListCarouselCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {data.map((offer, inx) => (
          <CarouselItem key={inx} className="md:basis-1/2 lg:basis-[8%]">
            <MenuCard imageSrc="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" name="Veggie Chicken" price={150} rating={4.1}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
