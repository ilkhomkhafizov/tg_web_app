import React from 'react'
import dentist from "../../lotties/dentist.json"
import cafe from "../../lotties/cafe.json"
import university from "../../lotties/university.json"
import hospital from "../../lotties/hospital.json"
import hotel from "../../lotties/hotel.json"
import beauty from "../../lotties/beauty.json"
import shop from "../../lotties/shop.json"
import student from "../../lotties/student.json"
import taxi from "../../lotties/taxi.json"
import train from "../../lotties/train.json"

import Card from './Card';

export default function CardContainer() {
  return (
    <div className="container mx-auto px-4">
      <Card lottie={dentist} organizationName={"Стоматология"}/>
      <Card lottie={cafe} organizationName={"Кафе"}/>
      {/* <Card lottie={university} organizationName={"Университет"}/>
      <Card lottie={hospital} organizationName={"Больницы"}/> */}
      <Card lottie={hotel} organizationName={"Гостиницы"}/>
      <Card lottie={beauty} organizationName={"Салоны"}/>
      <Card lottie={shop} organizationName={"Маркеты"}/>
      <Card lottie={student} organizationName={"Учебные центры"}/>
      <Card lottie={taxi} organizationName={"Такси"}/>
      <Card lottie={train} organizationName={"Вокзал"}/>
</div>
  )
}
