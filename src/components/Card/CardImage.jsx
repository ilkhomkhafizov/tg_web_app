import React from "react";
import { useLottie } from "lottie-react";
import dentist from "../../lotties/dentist.json";

export default function CardImage() {
  const options = {
    animationData: dentist,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}
