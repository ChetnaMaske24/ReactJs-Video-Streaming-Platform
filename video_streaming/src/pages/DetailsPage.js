import React from "react";
import Divider from "../components/Divider";

const DetailsPage = () => {
  return (
    <div className="w-full h-[280px] relative hidden lg:block">
      <div className="w-full h-full">
        <img
          src={imageURL + data?.backdrop_path}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      <Divider />
    </div>
  );
};

export default DetailsPage;
