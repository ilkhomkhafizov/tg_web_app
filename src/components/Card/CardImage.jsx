import React from "react";
import { useLottie } from "lottie-react";

export default function CardImage({lottie}) {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}
