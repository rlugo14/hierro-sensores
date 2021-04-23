import {
  OBSERVATIONS_BY_DATASTREAM,
  DATA_IDS,
  HEADERS,
  OBSERVATIONS_BY_LOCATION,
} from "../../constants";
import {
  AccumulatedRain,
  DataType,
  Locations,
  Measures,
  Results,
  SingleValueDataTypes,
  Temperature,
  WindDataType,
  WindDirection,
  WindSpeed,
} from "../../models";

export const fetchTemperature = async (
  location: Locations
): Promise<Temperature> => {
  const responseData: [Results, Results, Results] = await Promise.all([
    fetch(
      `${OBSERVATIONS_BY_DATASTREAM}${DATA_IDS[location].temperature.avg}`,
      {
        headers: HEADERS,
      }
    ).then((response) => response.json()),
    fetch(
      `${OBSERVATIONS_BY_DATASTREAM}${DATA_IDS[location].temperature.max}`,
      {
        headers: HEADERS,
      }
    ).then((response) => response.json()),
    fetch(
      `${OBSERVATIONS_BY_DATASTREAM}${DATA_IDS[location].temperature.min}`,
      {
        headers: HEADERS,
      }
    ).then((response) => response.json()),
  ]);

  return {
    avg: responseData[0].results.find((result) => result.validity === "valid")
      .result,
    max: responseData[1].results.find((result) => result.validity === "valid")
      .result,
    min: responseData[2].results.find((result) => result.validity === "valid")
      .result,
  };
};

export const fetchSingleValueData = async (
  dataType: SingleValueDataTypes,
  location: Locations
) => {
  let dataId: number;
  switch (dataType) {
    case DataType.DEW_POINT:
      dataId = DATA_IDS[location].dewPoint;
      break;
    case DataType.RAIN_INTENSITY:
      dataId = DATA_IDS[location].rainIntensity;
      break;
    case DataType.ACCUMULATED_RAIN:
      dataId = DATA_IDS[location].accumulatedRain;
      break;
    case DataType.RELATIVE_HUMIDITY:
      dataId = DATA_IDS[location].relativeHumidity;
      break;
    case DataType.PRESSURE:
      dataId = DATA_IDS[location].pressure;
    default:
  }

  const responseData: Results = await Promise.resolve(
    fetch(`${OBSERVATIONS_BY_DATASTREAM}${dataId}`, {
      headers: HEADERS,
    }).then((response) => response.json())
  );

  return {
    value: !!responseData.results
      ? responseData.results.find((result) => result.validity === "valid")
          .result
      : null,
  };
};

export const fetchWindData = async (
  windType: WindDataType,
  location: Locations
): Promise<WindDirection | WindSpeed> => {
  let dataIds =
    windType === DataType.WIND_DIRECTION
      ? DATA_IDS[location].windDirection
      : DATA_IDS[location].windSpeed;
  const responseData: [Results, Results] = await Promise.all([
    fetch(`${OBSERVATIONS_BY_DATASTREAM}${dataIds.avg}`, {
      headers: HEADERS,
    }).then((response) => response.json()),
    fetch(`${OBSERVATIONS_BY_DATASTREAM}${dataIds.max}`, {
      headers: HEADERS,
    }).then((response) => response.json()),
  ]);

  return {
    avg: responseData[0].results.find((result) => result.validity === "valid")
      .result,
    max: responseData[1].results.find((result) => result.validity === "valid")
      .result,
  };
};

export const fetchAllData = async (location: Locations): Promise<any> => {
  const locationIds = DATA_IDS[location];
  const urlPage1 = OBSERVATIONS_BY_LOCATION(location, "1");
  const urlPage2 = OBSERVATIONS_BY_LOCATION(location, "2");

  const responseData: [Results, Results] = await Promise.all([
    fetch(urlPage1, { headers: HEADERS }).then((response) => response.json()),
    fetch(urlPage2, { headers: HEADERS }).then((response) => response.json()),
  ]);

  const validResults = [
    ...responseData[0].results.filter((result) => result.validity === "valid"),
    ...responseData[1].results.filter((result) => result.validity === "valid"),
  ];

  return {
    accumulatedRain: {
      value:
        validResults.find((result) =>
          result.datastream.includes(locationIds.accumulatedRain.toString())
        )?.result ?? null,
    },
    dewPoint: {
      value:
        validResults.find((result) =>
          result.datastream.includes(locationIds.dewPoint.toString())
        )?.result ?? null,
    },
    pressure: {
      value: locationIds.pressure
        ? validResults.find((result) =>
            result.datastream.includes(locationIds.pressure?.toString() ?? "")
          )?.result ?? null
        : null,
    },
    rainIntensity: {
      value:
        validResults.find((result) =>
          result.datastream.includes(locationIds.rainIntensity.toString())
        )?.result ?? null,
    },
    relativeHumidity: {
      value:
        validResults.find((result) =>
          result.datastream.includes(locationIds.relativeHumidity.toString())
        )?.result ?? null,
    },
    temperature: {
      avg:
        validResults.find((result) =>
          result.datastream.includes(locationIds.temperature.avg.toString())
        )?.result ?? null,
      max:
        validResults.find((result) =>
          result.datastream.includes(locationIds.temperature.max.toString())
        )?.result ?? null,
      min:
        validResults.find((result) =>
          result.datastream.includes(locationIds.temperature.min.toString())
        )?.result ?? null,
    },
    windDirection: {
      avg:
        validResults.find((result) =>
          result.datastream.includes(locationIds.windDirection.avg.toString())
        )?.result ?? null,
      max:
        validResults.find((result) =>
          result.datastream.includes(locationIds.windDirection.max.toString())
        )?.result ?? null,
    },
    windSpeed: {
      avg:
        validResults.find((result) =>
          result.datastream.includes(locationIds.windSpeed.avg.toString())
        )?.result ?? null,
      max:
        validResults.find((result) =>
          result.datastream.includes(locationIds.windSpeed.max.toString())
        )?.result ?? null,
    },
  };
};
