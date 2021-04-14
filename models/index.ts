export interface Temperature {
  avg: number;
  max: number;
  min: number;
}

export interface Pressure {
  value: number;
}

export interface DewPoint {
  value: number;
}

export interface RainIntensity {
  value: number;
}

export interface AccumulatedRain {
  value: number;
}

export interface RelativeHumidity {
  value: number;
}

export interface RelativeHumidity {
  value: number;
}

export interface WindDirection {
  avg: number;
  max: number;
}

export interface WindSpeed {
  avg: number;
  max: number;
}

export interface Measures {
  temperature: Temperature;
  pressure: Pressure;
  dewPoint: DewPoint;
  rainIntensity: RainIntensity;
  accumulatedRain: AccumulatedRain;
  relativeHumidity: RelativeHumidity;
  windDirection: WindDirection;
  windSpeed: WindSpeed;
}

export interface DataStreamIds {
  temperature: Temperature;
  pressure?: number;
  dewPoint: number;
  rainIntensity: number;
  accumulatedRain: number;
  relativeHumidity: number;
  windDirection: WindDirection;
  windSpeed: WindSpeed;
}

export interface LocationDataStreams {
  malpaso: DataStreamIds;
  frontera: DataStreamIds;
  dehesa: DataStreamIds;
  timijiraque: DataStreamIds;
}

export enum Locations {
  MALPASO = "malpaso",
  FRONTERA = "frontera",
  LA_DEHESA = "dehesa",
  TIMIJIRAQUE = "timijiraque",
}

export interface Result {
  result: number;
  validity: string;
  datastream: string;
}

export interface Results {
  results: Result[];
}

export enum DataType {
  TEMPERATURE,
  PRESSURE,
  DEW_POINT,
  RAIN_INTENSITY,
  ACCUMULATED_RAIN,
  RELATIVE_HUMIDITY,
  WIND_DIRECTION,
  WIND_SPEED,
}

export type SingleValueDataTypes =
  | DataType.PRESSURE
  | DataType.DEW_POINT
  | DataType.RAIN_INTENSITY
  | DataType.ACCUMULATED_RAIN
  | DataType.RELATIVE_HUMIDITY;

export type WindDataType = DataType.WIND_DIRECTION | DataType.WIND_SPEED;
