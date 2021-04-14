import { useAppSelector } from "../app/hooks";
import { TabsSelection } from "../features/tabsSelection/tabsSelectionSlice";
import {
  Temperature,
  DewPoint,
  RainIntensity,
  RelativeHumidity,
  WindDirection,
  WindSpeed,
  Pressure,
  AccumulatedRain,
} from "../models";
import * as malpaso from "../features/measures/malpasoSlice";
import * as frontera from "../features/measures/fronteraSlice";
import * as dehesa from "../features/measures/dehesaSlice";
import * as timijiraque from "../features/measures/timijiraqueSlice";

export const dataSelector = (index: number) => {
  let temperature: Temperature;
  let dewPoint: DewPoint;
  let rainIntensity: RainIntensity;
  let relativeHumidity: RelativeHumidity;
  let windDirection: WindDirection;
  let windSpeed: WindSpeed;
  let pressure: Pressure;
  let accumulatedRain: AccumulatedRain;
  switch (index) {
    case TabsSelection.MALPASO:
      temperature = useAppSelector(malpaso.selectTemperature);
      dewPoint = useAppSelector(malpaso.selectDewPoint);
      rainIntensity = useAppSelector(malpaso.selectRainIntensity);
      relativeHumidity = useAppSelector(malpaso.selectRelativeHumidity);
      windDirection = useAppSelector(malpaso.selectWindDirection);
      windSpeed = useAppSelector(malpaso.selectWindSpeed);
      pressure = useAppSelector(malpaso.selectPressure);
      accumulatedRain = useAppSelector(malpaso.selectAccumulatedRain);
      break;
    case TabsSelection.FRONTERA:
      temperature = useAppSelector(frontera.selectTemperature);
      dewPoint = useAppSelector(frontera.selectDewPoint);
      rainIntensity = useAppSelector(frontera.selectRainIntensity);
      relativeHumidity = useAppSelector(frontera.selectRelativeHumidity);
      windDirection = useAppSelector(frontera.selectWindDirection);
      windSpeed = useAppSelector(frontera.selectWindSpeed);
      pressure = useAppSelector(frontera.selectPressure);
      accumulatedRain = useAppSelector(frontera.selectAccumulatedRain);
      break;
    case TabsSelection.LA_DEHESA:
      temperature = useAppSelector(dehesa.selectTemperature);
      dewPoint = useAppSelector(dehesa.selectDewPoint);
      rainIntensity = useAppSelector(dehesa.selectRainIntensity);
      relativeHumidity = useAppSelector(dehesa.selectRelativeHumidity);
      windDirection = useAppSelector(dehesa.selectWindDirection);
      windSpeed = useAppSelector(dehesa.selectWindSpeed);
      pressure = useAppSelector(dehesa.selectPressure);
      accumulatedRain = useAppSelector(dehesa.selectAccumulatedRain);
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      temperature = useAppSelector(timijiraque.selectTemperature);
      dewPoint = useAppSelector(timijiraque.selectDewPoint);
      rainIntensity = useAppSelector(timijiraque.selectRainIntensity);
      relativeHumidity = useAppSelector(timijiraque.selectRelativeHumidity);
      windDirection = useAppSelector(timijiraque.selectWindDirection);
      windSpeed = useAppSelector(timijiraque.selectWindSpeed);
      pressure = useAppSelector(timijiraque.selectPressure);
      accumulatedRain = useAppSelector(timijiraque.selectAccumulatedRain);
  }

  return {
    temperature,
    dewPoint,
    rainIntensity,
    relativeHumidity,
    windDirection,
    windSpeed,
    pressure,
    accumulatedRain,
  };
};
