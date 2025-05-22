import { Bricolage_Grotesque } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
});
export const Reviews = () => {
  const reviews = [
    {
      image: "/assets/review/familyOne.png",
      name: "Sarah",
      review: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
    },
    {
      image: "/assets/review/familyTwo.png",
      name: "Ahmed K",
      review: `"Educare’s commitment to 1-on-1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!”`,
    },
    {
      image: "/assets/review/familyOne.png",
      name: "Sarah",
      review: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
    },
  ];

  return (
    <section className="space-y-4 py-10 w-[90%] mx-auto">
      <h1 className={`${bricolage.className} text-[42px] text-center`}>
        Hear From Our <span className="font-bold">Valuable Parents</span>
      </h1>

      <Carousel
        className="w-[80%] md:w-full max-w-full mx-auto overflow-visible py-10"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 gap-4 px-10">
          {reviews.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 py-20"
            >
              <ReviewCard
                key={item.image}
                image={item.image}
                name={item.name}
                review={item.review}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

const ReviewCard = ({
  image,
  name,
  review,
}: {
  image: string;
  name: string;
  review: string;
}) => {
  return (
    <div className="border-2 rounded-xl p-3 relative ">
      <Image
        src={image}
        alt="family"
        width={50}
        height={50}
        className="object-contain absolute -top-[20%] left-5"
      />
      <Image
        src={"/assets/review/coma.svg"}
        alt="family"
        width={30}
        height={30}
        className="object-contain absolute -top-[20%] right-5"
      />
      <p className="p-4 text-[#4E4E4E]">{review}</p>
      <div className="flex justify-between">
        <div></div>
        <div className="text-[#8A1538] font-bold">{name}</div>
      </div>
    </div>
  );
};
