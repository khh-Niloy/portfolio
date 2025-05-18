import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export function SpotBannerLight() {
  return (
    <div className="">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
    </div>
  );
}
