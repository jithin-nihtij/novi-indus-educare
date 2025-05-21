import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export const TiltedButton = ({ text }: { text: string }) => {
  return (
    <>
      <Button className="rotate-[2deg] hover:rotate-0 w-[200px] bg-yellow-200 h-10 hover:bg-yellow-200"></Button>
      <Button className=" -rotate-6 hover:rotate-0 absolute -left-[1%] bg-[#8A1538] hover:bg-[#8A1538] w-[200px] h-10 cursor-pointer">
        <span>{text}</span>
        <span>
          <ArrowUpRight />
        </span>
      </Button>
    </>
  );
};
