import { LocationDataStreams } from "../models";

export const DATA_IDS: LocationDataStreams = {
  malpaso: {
    temperature: {
      avg: 2088,
      max: 2089,
      min: 2090,
    },
    dewPoint: 2091,
    rainIntensity: 2080,
    accumulatedRain: 2078,
    relativeHumidity: 2087,
    windDirection: {
      avg: 2084,
      max: 2085,
    },
    windSpeed: {
      avg: 2081,
      max: 2082,
    },
  },
  frontera: {
    temperature: {
      avg: 1898,
      max: 1899,
      min: 1900,
    },
    pressure: 1904,
    dewPoint: 1905,
    rainIntensity: 1906,
    accumulatedRain: 1897,
    relativeHumidity: 1896,
    windDirection: {
      avg: 1901,
      max: 1902,
    },
    windSpeed: {
      avg: 1907,
      max: 1908,
    },
  },
  dehesa: {
    temperature: {
      avg: 2213,
      max: 2214,
      min: 2215,
    },
    dewPoint: 2222,
    rainIntensity: 2224,
    accumulatedRain: 2223,
    relativeHumidity: 2212,
    windDirection: {
      avg: 2219,
      max: 2220,
    },
    windSpeed: {
      avg: 2216,
      max: 2217,
    },
  },
  timijiraque: {
    temperature: {
      avg: 2185,
      max: 2186,
      min: 2187,
    },
    pressure: 2191,
    dewPoint: 2192,
    rainIntensity: 2193,
    accumulatedRain: 2184,
    relativeHumidity: 2183,
    windDirection: {
      avg: 2188,
      max: 2189,
    },
    windSpeed: {
      avg: 2194,
      max: 2195,
    },
  },
};

export const AUTH_HEADER = `Api-Key ${process.env.API_KEY}`;

export const OBSERVATIONS_BY_DATASTREAM =
  "https://sensores.grafcan.es/api/v1.0/observations/?datastream=";
export const OBSERVATIONS_BY_LOCATION = (location: string, page: string) =>
  `https://sensores.grafcan.es/api/v1.0/observations/?datastream__thing__location__name=${encodeURI(
    location
  )}&page=${page}`;

export const HEADERS = {
  accept: "application/json",
  Authorization: AUTH_HEADER,
};

export enum ApiLocationsRoutes {
  FRONTERA = "api/frontera",
  MALPASO = "api/malpaso",
  LA_DEHESA = "api/dehesa",
  TIMIJIRAQUE = "api/timijiraque",
}

export enum ApiMeasuresRoutes {
  ACCUMULATED_RAIN = "/accumulated_rain",
  PRESSURE = "/pressure",
  DEW_POINT = "/dew_point",
  RAIN_INTENSITY = "/rain_intensity",
  RELATIVE_HUMIDITY = "/relative_humidity",
  TEMPERATURE = "/temperature",
  WIND_DIRECTION = "/wind_direction",
  WIND_SPEED = "/wind_speed",
}
