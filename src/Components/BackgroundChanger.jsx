import React from "react";
import { Button } from "../App";

export function BackgroundChanger(props, { children }) {
  return (
    <div
      className={`w-full h-screen ${props.color} flex justify-center items-end gap-20 pb-24`}
    >
      <Button colorCode={"bg-amber-500"} colorName={"Amber"} />
      <Button colorCode={"bg-sky-200"} colorName={"Sky blue"} />
      <Button colorCode={"bg-violet-500"} colorName={"Violet"} />
      <Button colorCode={"bg-pink-500"} colorName={"Pink"} />
      <Button colorCode={"bg-rose-600"} colorName={"Rose"} />
      <Button colorCode={"bg-green-500"} colorName={"Green"} />
      <Button colorCode={"bg-lime-400"} colorName={"Lime"} />
    </div>
  );
}
