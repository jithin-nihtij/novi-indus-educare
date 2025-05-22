import Image from "next/image";

import { TiltedButton } from "../TiltedButton";
import { Header } from "../Header";

export const SecondLayer = () => {
  const perks = [
    {
      title: "Personal Attention",
      src: "/assets/secondLayer/person.svg",
    },
    {
      title: "Growth Mindset",
      src: "/assets/secondLayer/trophy.svg",
    },
    {
      title: "Skill Development",
      src: "/assets/secondLayer/student.svg",
    },
    {
      title: "Passionate Teaching",
      src: "/assets/secondLayer/teaching.svg",
    },
  ];

  const missonVision = [
    {
      title: "Mission",
      description:
        "To help students succeed with personalized, one-to-one tutoring that builds confidence, skills, and a love for learning.",
      image: "/assets/secondLayer/flag.svg",
    },
    {
      title: "Vision",
      description:
        "To be a trusted center where students reach their potential, build confidence, and prepare for a bright future.",
      image: "/assets/secondLayer/rocket.svg",
    },
  ];

  return (
    <section className="py-10">
      <div className="w-full min-h-19 max-h-max bg-[#FFF3E1] flex items-center p-3">
        <div className="w-[90%] mx-auto grid-cols-1 md:grid-cols-2 gap-10 py-6 grid lg:grid-cols-4 items-center divide-x-0 lg:divide-x divide-[#8A1538]">
          {perks.map((item) => (
            <div className="flex space-x-2 justify-center" key={item.src}>
              <Icons src={item.src} />
              <p className="text-[#8A1538]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-[60%_40%] h-full">
        <Story />
        <TiltedImages />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 space-y-4 md:space-y-0 w-[90%] mx-auto">
        {missonVision.map((item) => (
          <MissionVision
            key={item.title}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        ))}
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/secondLayer/flyingArrow.svg"}
            alt="images"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

const Icons = ({ src }: { src: string }) => {
  return <Image src={src} alt="icons" width={30} height={30} />;
};

export const Story = () => {
  return (
    <div className="space-y-6">
      <Header text="Story Of" boldText="Educare" />
      <p>
        At <span className="font-semibold">Educare</span> education center, we
        believe that every student deserves personalized, focused attention to
        reach their fullest potential. Our mission is to empower students
        through one-on-one tutoring, creating customized learning plans tailored
        to each individual&apos; unique needs, strengths, and learning styles.
      </p>
      <p>
        Founded on a passion for education and a commitment to excellence,{" "}
        <span className="font-semibold">Educare</span> education center was
        established to offer students a supportive and engaging learning
        environment. Our team of experienced tutors is dedicated to helping
        students excel academically while also building confidence,
        independence, and a love for learning.
      </p>
      <p>
        We specialize in a wide range of subjects across all grade levels,
        including math, science, English, and test preparation. Whether your
        child needs help catching up, getting ahead, or preparing for a specific
        exam, we are here to support their journey.
      </p>
      <div className="relative py-10 ">
        <TiltedButton text="Read More" />
      </div>
    </div>
  );
};

export const TiltedImages = () => {
  return (
    <div className="relative  justify-center hidden lg:flex">
      <div className="relative w-full">
        <div className="absolute right-1/3 top-0">
          <div className="relative">
            <Image
              src={"/assets/secondLayer/frameOne.svg"}
              alt="images"
              width={200}
              height={200}
            />
            <Image
              src={"/assets/secondLayer/frameImageOne.png"}
              alt="images"
              width={180}
              height={180}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="absolute  bottom-0 top-0 lg:bottom-1/3 lg:top-1/4 left-1/2">
          <div className="relative">
            <Image
              src={"/assets/secondLayer/frameTwo.svg"}
              alt="images"
              width={200}
              height={200}
            />
            <Image
              src={"/assets/secondLayer/frameTwoImage.png"}
              alt="images"
              width={180}
              height={180}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MissionVision = ({
  description,
  image,
  title,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="bg-[#FFF3E1] rounded-xl p-3 space-y-4 flex justify-between">
      <div className="w-[80%]">
        <p className="text-[#8A1538] font-bold">{title}</p>
        <p className="text-[#8A1538]">{description}</p>
      </div>
      <div className="relative w-[20%]">
        <Image
          src={image}
          alt="image"
          width={100}
          height={100}
          className="object-cover absolute -top-10 right-0"
        />
      </div>
    </div>
  );
};
