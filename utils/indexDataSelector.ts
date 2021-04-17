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

export const temperatureSelector = (index: TabsSelection) => {
  let temperature: Temperature;
  let fetchTemperature;
  switch (index) {
    case TabsSelection.MALPASO:
      temperature = useAppSelector(malpaso.selectTemperature);

      fetchTemperature = malpaso.fetchTemperature;
      break;
    case TabsSelection.FRONTERA:
      temperature = useAppSelector(frontera.selectTemperature);
      fetchTemperature = frontera.fetchTemperature;
      break;
    case TabsSelection.LA_DEHESA:
      temperature = useAppSelector(dehesa.selectTemperature);
      fetchTemperature = dehesa.fetchTemperature;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      temperature = useAppSelector(timijiraque.selectTemperature);
      fetchTemperature = timijiraque.fetchTemperature;
  }
  return { temperature, fetchTemperature };
};
export const pressureSelector = (index: TabsSelection) => {
  let pressure: Pressure;
  let fetchPressure;
  switch (index) {
    case TabsSelection.MALPASO:
      pressure = useAppSelector(malpaso.selectPressure);
      fetchPressure = malpaso.fetchPressure;
      break;
    case TabsSelection.FRONTERA:
      pressure = useAppSelector(frontera.selectPressure);
      fetchPressure = frontera.fetchPressure;
      break;
    case TabsSelection.LA_DEHESA:
      pressure = useAppSelector(dehesa.selectPressure);
      fetchPressure = dehesa.fetchPressure;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      pressure = useAppSelector(timijiraque.selectPressure);
      fetchPressure = timijiraque.fetchPressure;
  }

  return { pressure, fetchPressure };
};
export const dewPointSelector = (index: TabsSelection) => {
  let dewPoint: DewPoint;
  let fetchDewPoint;
  switch (index) {
    case TabsSelection.MALPASO:
      dewPoint = useAppSelector(malpaso.selectDewPoint);
      fetchDewPoint = malpaso.fetchDewPoint;
      break;
    case TabsSelection.FRONTERA:
      dewPoint = useAppSelector(frontera.selectDewPoint);
      fetchDewPoint = frontera.fetchDewPoint;
      break;
    case TabsSelection.LA_DEHESA:
      dewPoint = useAppSelector(dehesa.selectDewPoint);
      fetchDewPoint = dehesa.fetchDewPoint;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      dewPoint = useAppSelector(timijiraque.selectDewPoint);
      fetchDewPoint = timijiraque.fetchDewPoint;
  }

  return { dewPoint, fetchDewPoint };
};
export const rainIntensitySelector = (index: TabsSelection) => {
  let rainIntensity: RainIntensity;
  let fetchRainIntensity;
  switch (index) {
    case TabsSelection.MALPASO:
      rainIntensity = useAppSelector(malpaso.selectRainIntensity);
      fetchRainIntensity = malpaso.fetchRainIntensity;
      break;
    case TabsSelection.FRONTERA:
      rainIntensity = useAppSelector(frontera.selectRainIntensity);
      fetchRainIntensity = frontera.fetchRainIntensity;
      break;
    case TabsSelection.LA_DEHESA:
      rainIntensity = useAppSelector(dehesa.selectRainIntensity);
      fetchRainIntensity = dehesa.fetchRainIntensity;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      rainIntensity = useAppSelector(timijiraque.selectRainIntensity);
      fetchRainIntensity = timijiraque.fetchRainIntensity;
  }

  return { rainIntensity, fetchRainIntensity };
};
export const accumulatedRainSelector = (index: TabsSelection) => {
  let accumulatedRain: AccumulatedRain;
  let fetchAccumulatedRain;
  switch (index) {
    case TabsSelection.MALPASO:
      accumulatedRain = useAppSelector(malpaso.selectAccumulatedRain);
      fetchAccumulatedRain = malpaso.fetchAccumulatedRain;
      break;
    case TabsSelection.FRONTERA:
      accumulatedRain = useAppSelector(frontera.selectAccumulatedRain);
      fetchAccumulatedRain = frontera.fetchAccumulatedRain;
      break;
    case TabsSelection.LA_DEHESA:
      accumulatedRain = useAppSelector(dehesa.selectAccumulatedRain);
      fetchAccumulatedRain = dehesa.fetchAccumulatedRain;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      accumulatedRain = useAppSelector(timijiraque.selectAccumulatedRain);
      fetchAccumulatedRain = timijiraque.fetchAccumulatedRain;
  }

  return { accumulatedRain, fetchAccumulatedRain };
};
export const relativeHumiditySelector = (index: TabsSelection) => {
  let relativeHumidity: RelativeHumidity;
  let fetchRelativeHumidity;
  switch (index) {
    case TabsSelection.MALPASO:
      relativeHumidity = useAppSelector(malpaso.selectRelativeHumidity);
      fetchRelativeHumidity = malpaso.fetchRelativeHumidity;
      break;
    case TabsSelection.FRONTERA:
      relativeHumidity = useAppSelector(frontera.selectRelativeHumidity);
      fetchRelativeHumidity = frontera.fetchRelativeHumidity;
      break;
    case TabsSelection.LA_DEHESA:
      relativeHumidity = useAppSelector(dehesa.selectRelativeHumidity);
      fetchRelativeHumidity = dehesa.fetchRelativeHumidity;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      relativeHumidity = useAppSelector(timijiraque.selectRelativeHumidity);
      fetchRelativeHumidity = timijiraque.fetchRelativeHumidity;
  }

  return { relativeHumidity, fetchRelativeHumidity };
};
export const windDirectionSelector = (index: TabsSelection) => {
  let windDirection: WindDirection;
  let fetchWindDirection;
  switch (index) {
    case TabsSelection.MALPASO:
      windDirection = useAppSelector(malpaso.selectWindDirection);
      fetchWindDirection = malpaso.fetchWindDirection;
      break;
    case TabsSelection.FRONTERA:
      windDirection = useAppSelector(frontera.selectWindDirection);
      fetchWindDirection = frontera.fetchWindDirection;
      break;
    case TabsSelection.LA_DEHESA:
      windDirection = useAppSelector(dehesa.selectWindDirection);
      fetchWindDirection = dehesa.fetchWindDirection;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      windDirection = useAppSelector(timijiraque.selectWindDirection);
      fetchWindDirection = timijiraque.fetchWindDirection;
  }

  return { windDirection, fetchWindDirection };
};
export const windSpeedSelector = (index: TabsSelection) => {
  let windSpeed: WindSpeed;
  let fetchWindSpeed;
  switch (index) {
    case TabsSelection.MALPASO:
      windSpeed = useAppSelector(malpaso.selectWindSpeed);
      fetchWindSpeed = malpaso.fetchWindSpeed;
      break;
    case TabsSelection.FRONTERA:
      windSpeed = useAppSelector(frontera.selectWindSpeed);
      fetchWindSpeed = frontera.fetchWindSpeed;
      break;
    case TabsSelection.LA_DEHESA:
      windSpeed = useAppSelector(dehesa.selectWindSpeed);
      fetchWindSpeed = dehesa.fetchWindSpeed;
      break;
    case TabsSelection.TIMIJIRAQUE:
    default:
      windSpeed = useAppSelector(timijiraque.selectWindSpeed);
      fetchWindSpeed = timijiraque.fetchWindSpeed;
  }

  return { windSpeed, fetchWindSpeed };
};
