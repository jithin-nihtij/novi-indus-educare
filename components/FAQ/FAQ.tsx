import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "../Header";

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
        <Header boldText="Questions" text="Frequently Asked" />

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
