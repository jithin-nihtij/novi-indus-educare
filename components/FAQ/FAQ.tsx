import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
});

const questions = [
  {
    title: "What subjects do you offer tutoring in?",
    description:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    title: "What ages or grade levels do you tutor?",
    description:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    title: "Is tutoring one-on-one or in groups??",
    description:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-[#F9F7F4]">
      <div className="w-[90%] mx-auto py-10 space-y-4">
        <h1 className={`${bricolage.className} text-[42px] text-center `}>
          Frequently asked <span className="font-bold">Questions</span>
        </h1>

        {questions.map((ques) => (
          <Accordion
            type="single"
            collapsible
            className="bg-white p-4"
            key={ques.title}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="no-underline hover:no-underline cursor-pointer">
                {ques.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#655945CC]">
                {ques.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
