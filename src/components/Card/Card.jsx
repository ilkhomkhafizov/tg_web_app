import React from "react";
import CardImage from './CardImage';

export default function Card({lottie, organizationName}) {
  return (
    <div className="container items-center justify-center flex">
      <div className="w-32 h-32">
        <CardImage lottie={lottie} />
      </div>
      <div className="w-64 ml-20">{organizationName}</div>
    </div>
  );
}
