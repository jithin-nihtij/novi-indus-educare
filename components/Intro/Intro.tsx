import { PeopleOne } from "./PeopleOne";
import { PeopleTwo } from "./PeopleTwo";
import { TextCarousal } from "./TextCarousal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/intro/introBg.png')`,
      }}
      className="w-full h-[600px]"
    >
      <TextCarousal />
      <div className="fixed  top-30 right-10">
        <div className="relative">
          <div className="w-[53px] h-[53px] bg-green-200 animate-ping rounded-full" />
          <div className="absolute -top-5 -right-5">
            <WhatsAppIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[40%_20%_40%]">
        <div className="float">
          <PeopleTwo />
        </div>
        <div></div>
        <div className="float">
          <PeopleOne />
        </div>
      </div>
    </div>
  );
};

export default Intro;
