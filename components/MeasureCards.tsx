import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { TabsSelection } from "../features/tabsSelection/tabsSelectionSlice";
import { dataSelector } from "../utils/indexDataSelector";
import AccumulatedRainCard from "./AccumulatedRainCard";
import DewPointCard from "./DewPointCard";
import PressureCard from "./PressureCard";
import RainIntensityCard from "./RainIntensityCard";
import RelativeHumidityCard from "./RelativeHumidityCard";
import TemperatureCard from "./TemperatureCard";
import WindDirectionCard from "./WindDirectionCard";
import WindSpeedCard from "./WindSpeedCard";

interface Props {
  index: TabsSelection;
}

const MeasureCards: FunctionComponent<Props> = ({ index }) => {
  const {
    temperature,
    pressure,
    rainIntensity,
    accumulatedRain,
    dewPoint,
    relativeHumidity,
    windDirection,
    windSpeed,
  } = dataSelector(index);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TemperatureCard
          avg={temperature.avg}
          min={temperature.min}
          max={temperature.max}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PressureCard value={pressure.value} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <DewPointCard value={dewPoint.value} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RainIntensityCard value={rainIntensity.value} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AccumulatedRainCard value={accumulatedRain.value} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RelativeHumidityCard value={relativeHumidity.value} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <WindDirectionCard avg={windDirection.avg} max={windDirection.max} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <WindSpeedCard avg={windSpeed.avg} max={windSpeed.max} />
      </Grid>
    </Grid>
  );
};

export default MeasureCards;
