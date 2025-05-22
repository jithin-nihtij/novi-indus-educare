import Image from "next/image";
import { Header } from "./Header";

export const World = () => {
  return (
    <section className="py-10 w-[90%] mx-auto">
      <div className="flex justify-center">
        <Header
          text="Prepare Your Child for a "
          boldText="World of Opportunities with Educare"
        />
      </div>
      <div className="p-4 mt-10">
        <Image
          src={"/assets/world/world.png"}
          alt="world "
          width={100}
          height={100}
          className="w-full object-contain"
          unoptimized
        />
      </div>
    </section>
  );
};
