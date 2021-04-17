import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiLocationsRoutes, ApiMeasuresRoutes } from "../../constants";
import {
  Measures,
  Temperature,
  Pressure,
  DewPoint,
  RainIntensity,
  AccumulatedRain,
  RelativeHumidity,
  WindDirection,
  WindSpeed,
  Status,
} from "../../models";

type FronteraState = Measures;

const initialState: FronteraState = {
  temperature: { avg: null, min: null, max: null, status: Status.IDLE },
  pressure: { value: null, status: Status.IDLE },
  dewPoint: { value: null, status: Status.IDLE },
  rainIntensity: { value: null, status: Status.IDLE },
  accumulatedRain: { value: null, status: Status.IDLE },
  relativeHumidity: { value: null, status: Status.IDLE },
  windDirection: { avg: null, max: null, status: Status.IDLE },
  windSpeed: { avg: null, max: null, status: Status.IDLE },
};

const apiBase = ApiLocationsRoutes.FRONTERA;

export const fetchTemperature = createAsyncThunk(
  "measures/frontera/fetchTemperature",
  async () => {
    const result: Temperature = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.TEMPERATURE}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchPressure = createAsyncThunk(
  "measures/frontera/fetchPressure",
  async () => {
    const result: Pressure = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.PRESSURE}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchDewPoint = createAsyncThunk(
  "measures/frontera/fetchDewPoint",
  async () => {
    const result: DewPoint = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.DEW_POINT}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchRainIntensity = createAsyncThunk(
  "measures/frontera/fetchRainIntensity",
  async () => {
    const result: RainIntensity = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.RAIN_INTENSITY}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchAccumulatedRain = createAsyncThunk(
  "measures/frontera/fetchAccumulatedRain",
  async () => {
    const result: AccumulatedRain = await Promise.resolve(
      fetch(
        `${apiBase}${ApiMeasuresRoutes.ACCUMULATED_RAIN}`
      ).then((response) => response.json())
    );
    return result;
  }
);
export const fetchRelativeHumidity = createAsyncThunk(
  "measures/frontera/fetchRelativeHumidity",
  async () => {
    const result: RelativeHumidity = await Promise.resolve(
      fetch(
        `${apiBase}${ApiMeasuresRoutes.RELATIVE_HUMIDITY}`
      ).then((response) => response.json())
    );
    return result;
  }
);
export const fetchWindDirection = createAsyncThunk(
  "measures/frontera/fetchWindDirection",
  async () => {
    const result: WindDirection = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.WIND_DIRECTION}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchWindSpeed = createAsyncThunk(
  "measures/frontera/fetchWindSpeed",
  async () => {
    const result: WindSpeed = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.WIND_SPEED}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchAll = createAsyncThunk(
  "measures/frontera/fetchAll",
  async () => {
    const result: Measures = await Promise.resolve(
      fetch(apiBase).then((response) => response.json())
    );
    return result;
  }
);

export const fronteraSlice = createSlice({
  name: "frontera",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemperature.pending, (state) => {
        state.temperature.status = Status.LOADING;
      })
      .addCase(fetchTemperature.fulfilled, (state, action) => {
        state.temperature = action.payload;
        state.temperature.status = Status.IDLE;
      })
      .addCase(fetchDewPoint.pending, (state) => {
        state.dewPoint.status = Status.LOADING;
      })
      .addCase(fetchDewPoint.fulfilled, (state, action) => {
        state.dewPoint = action.payload;
        state.dewPoint.status = Status.IDLE;
      })
      .addCase(fetchAccumulatedRain.pending, (state) => {
        state.accumulatedRain.status = Status.LOADING;
      })
      .addCase(fetchAccumulatedRain.fulfilled, (state, action) => {
        state.accumulatedRain = action.payload;
        state.accumulatedRain.status = Status.IDLE;
      })
      .addCase(fetchRainIntensity.pending, (state) => {
        state.rainIntensity.status = Status.LOADING;
      })
      .addCase(fetchRainIntensity.fulfilled, (state, action) => {
        state.rainIntensity = action.payload;
        state.rainIntensity.status = Status.IDLE;
      })
      .addCase(fetchRelativeHumidity.pending, (state) => {
        state.relativeHumidity.status = Status.LOADING;
      })
      .addCase(fetchRelativeHumidity.fulfilled, (state, action) => {
        state.relativeHumidity = action.payload;
        state.relativeHumidity.status = Status.IDLE;
      })
      .addCase(fetchWindDirection.pending, (state) => {
        state.windDirection.status = Status.LOADING;
      })
      .addCase(fetchWindDirection.fulfilled, (state, action) => {
        state.windDirection = action.payload;
        state.windDirection.status = Status.IDLE;
      })
      .addCase(fetchWindSpeed.pending, (state) => {
        state.windSpeed.status = Status.LOADING;
      })
      .addCase(fetchWindSpeed.fulfilled, (state, action) => {
        state.windSpeed = action.payload;
        state.windSpeed.status = Status.IDLE;
      })
      .addCase(fetchPressure.pending, (state) => {
        state.pressure.status = Status.LOADING;
      })
      .addCase(fetchPressure.fulfilled, (state, action) => {
        state.pressure = action.payload;
        state.pressure.status = Status.IDLE;
      })
      .addCase(fetchAll.pending, (state) => {
        state.temperature.status = Status.LOADING;
        state.pressure.status = Status.LOADING;
        state.dewPoint.status = Status.LOADING;
        state.rainIntensity.status = Status.LOADING;
        state.accumulatedRain.status = Status.LOADING;
        state.relativeHumidity.status = Status.LOADING;
        state.windDirection.status = Status.LOADING;
        state.windSpeed.status = Status.LOADING;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.pressure = action.payload.pressure;
        state.accumulatedRain = action.payload.accumulatedRain;
        state.dewPoint = action.payload.dewPoint;
        state.rainIntensity = action.payload.rainIntensity;
        state.relativeHumidity = action.payload.relativeHumidity;
        state.temperature = action.payload.temperature;
        state.windDirection = action.payload.windDirection;
        state.windSpeed = action.payload.windSpeed;
        state.pressure.status = Status.IDLE;
        state.temperature.status = Status.IDLE;
        state.dewPoint.status = Status.IDLE;
        state.rainIntensity.status = Status.IDLE;
        state.accumulatedRain.status = Status.IDLE;
        state.relativeHumidity.status = Status.IDLE;
        state.windDirection.status = Status.IDLE;
        state.windSpeed.status = Status.IDLE;
      });
  },
});

export const selectTemperature = (state: RootState) =>
  state.fronteraReducer.temperature;
export const selectPressure = (state: RootState) =>
  state.fronteraReducer.pressure;
export const selectDewPoint = (state: RootState) =>
  state.fronteraReducer.dewPoint;
export const selectAccumulatedRain = (state: RootState) =>
  state.fronteraReducer.accumulatedRain;
export const selectRainIntensity = (state: RootState) =>
  state.fronteraReducer.rainIntensity;
export const selectRelativeHumidity = (state: RootState) =>
  state.fronteraReducer.relativeHumidity;
export const selectWindDirection = (state: RootState) =>
  state.fronteraReducer.windDirection;
export const selectWindSpeed = (state: RootState) =>
  state.fronteraReducer.windSpeed;

export default fronteraSlice.reducer;
