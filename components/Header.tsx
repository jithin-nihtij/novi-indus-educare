import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
});

export const Header = ({
  boldText,
  text,
}: {
  text: string;
  boldText: string;
}) => {
  return (
    <h1 className={`${bricolage.className} text-[42px] text-[#655945]`}>
      {text} <span className="font-bold">{boldText}</span>
    </h1>
  );
};
