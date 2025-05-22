import { Header } from "../Header";

export const Frame = () => {
  return (
    <section className="w-[90%] mx-auto space-y-4 py-10">
      <div className="flex justify-center">
        <Header text="Learn More About" boldText="Our Space" />
      </div>
      <div className="rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/onVhbeY7nLM?si=O2uHTvFCVonYajAf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
