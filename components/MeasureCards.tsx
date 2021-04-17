import React, { FunctionComponent } from "react";
import { useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import AccumulatedRainCard from "./AccumulatedRainCard";
import DewPointCard from "./DewPointCard";
import PressureCard from "./PressureCard";
import RainIntensityCard from "./RainIntensityCard";
import RelativeHumidityCard from "./RelativeHumidityCard";
import TemperatureCard from "./TemperatureCard";
import WindDirectionCard from "./WindDirectionCard";
import WindSpeedCard from "./WindSpeedCard";

const MeasureCards: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <TemperatureCard index={index} />
      <PressureCard index={index} />
      <DewPointCard index={index} />
      <RainIntensityCard index={index} />
      <AccumulatedRainCard index={index} />
      <RelativeHumidityCard index={index} />
      <WindDirectionCard index={index} />
      <WindSpeedCard index={index} />
    </div>
  );
};

export default MeasureCards;
