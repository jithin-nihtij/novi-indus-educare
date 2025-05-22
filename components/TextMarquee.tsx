import Image from "next/image";
import { Marquee } from "./magicui/marquee";

export const TextMarquee = () => {
  const qoutes = [
    `Education is the foundation of greatness; let’s build it together`,
    `Learning today, leading tomorrow – the Educare way`,
    `Turning dreams into achievements through dedicated guidance`,
  ];

  return (
    <div className="bg-[#FFF3E1]">
      <Marquee className="[--duration:20s]">
        {qoutes.map((item) => (
          <>
            <p className="text-[#8A1538] p-3">{item}</p>
            <Image
              src={"/assets/world/marqueeIcon.png"}
              alt="curriculum"
              width={20}
              height={30}
              unoptimized
              className="object-contain"
            />
          </>
        ))}
      </Marquee>
    </div>
  );
};
