import React from "react";
import { FaUser } from "react-icons/fa";

const DefaultAvatar = () => {
  return (
    <div className="flex justify-center items-center">
      <FaUser className="text-orange-500 text-3xl" />
    </div>
  );
};

export default DefaultAvatar;
