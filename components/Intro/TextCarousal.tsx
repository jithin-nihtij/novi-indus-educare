import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ThirdText } from "./ThirdText";
import { FirstText } from "./FirstText";
import { SecondText } from "./SecondText";

export const TextCarousal = () => {
  return (
    <div className="w-1/2 mx-auto my-20">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <FirstText />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <SecondText />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <ThirdText />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
