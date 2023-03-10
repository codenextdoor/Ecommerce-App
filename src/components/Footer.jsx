import {
  Facebook,
  Instagram,
  Pintrest,
  LocationOnOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const socialStyles = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/* store information */}

        <h1 className="text-[25px]">Codenextdoor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          omnis, fugit beatae ut autem eveniet.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyles + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialStyles + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialStyles + " bg-sky-400"}>
            {" "}
            <Twitter />
          </div>
          <div className={socialStyles + " bg-red-600"}>
            <Pintrest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">State of California</p>
        </div>

        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+1 123456789</p>
        </div>

        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">xuluv911@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
