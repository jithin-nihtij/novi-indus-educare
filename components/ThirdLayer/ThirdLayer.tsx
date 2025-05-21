import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400", // or '500', '700', etc.
});

export const ThirdLayer = () => {
  const teachings = [
    "Every teacher at Educare brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.",
    "We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.",
    "Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively.",
  ];

  return (
    <div className="bg-[#F9F7F4] w-full py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <h1 className={`${bricolage.className} text-[42px]`}>
            Our Way Of <span className="font-bold">Teaching</span>
          </h1>
          <ul className="list-disc pl-4 space-y-4">
            {teachings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <Image
            src={"/assets/thirdLayer/wayOfTeaching.png"}
            alt="teaching"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-xl"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
