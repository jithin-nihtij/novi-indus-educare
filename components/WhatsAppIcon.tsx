import React from "react";
import { WhatsAppIcon } from "./Intro/WhatsAppIcon";

export const WhatsAppIconMain = () => {
  return (
    <div className="fixed  top-30 right-10">
      <div className="relative">
        <div className="w-[53px] h-[53px] bg-green-200 animate-ping rounded-full" />
        <div className="absolute -top-5 -right-5 z-9999999999999">
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};
