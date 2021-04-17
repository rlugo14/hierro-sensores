import React, { FunctionComponent } from "react";
import AccumulatedRainCard from "./AccumulatedRainCard";
import DewPointCard from "./DewPointCard";
import PressureCard from "./PressureCard";
import RainIntensityCard from "./RainIntensityCard";
import RelativeHumidityCard from "./RelativeHumidityCard";
import TemperatureCard from "./TemperatureCard";
import WindDirectionCard from "./WindDirectionCard";
import WindSpeedCard from "./WindSpeedCard";

const MeasureCards: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <TemperatureCard />
      <PressureCard />
      <DewPointCard />
      <RainIntensityCard />
      <AccumulatedRainCard />
      <RelativeHumidityCard />
      <WindDirectionCard />
      <WindSpeedCard />
    </div>
  );
};

export default MeasureCards;
