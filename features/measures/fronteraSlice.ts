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
} from "../../models";

type FronteraState = Measures & { status: "idle" | "loading" };

const initialState: FronteraState = {
  temperature: { avg: null, min: null, max: null },
  pressure: { value: null },
  dewPoint: { value: null },
  rainIntensity: { value: null },
  accumulatedRain: { value: null },
  relativeHumidity: { value: null },
  windDirection: { avg: null, max: null },
  windSpeed: { avg: null, max: null },
  status: "idle",
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
export const fetchRelativeHumdity = createAsyncThunk(
  "measures/frontera/fetchRelativeHumdity",
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
        state.status = "loading";
      })
      .addCase(fetchTemperature.fulfilled, (state, action) => {
        state.status = "idle";
        state.temperature = action.payload;
      })
      .addCase(fetchDewPoint.pending, (state, action) => {
        state.status = "loading";
        state.dewPoint = action.payload;
      })
      .addCase(fetchDewPoint.fulfilled, (state, action) => {
        state.status = "idle";
        state.dewPoint = action.payload;
      })
      .addCase(fetchAccumulatedRain.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccumulatedRain.fulfilled, (state, action) => {
        state.status = "idle";
        state.accumulatedRain = action.payload;
      })
      .addCase(fetchRainIntensity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRainIntensity.fulfilled, (state, action) => {
        state.status = "idle";
        state.rainIntensity = action.payload;
      })
      .addCase(fetchRelativeHumdity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRelativeHumdity.fulfilled, (state, action) => {
        state.status = "idle";
        state.relativeHumidity = action.payload;
      })
      .addCase(fetchWindDirection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWindDirection.fulfilled, (state, action) => {
        state.status = "idle";
        state.windDirection = action.payload;
      })
      .addCase(fetchWindSpeed.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWindSpeed.fulfilled, (state, action) => {
        state.status = "idle";
        state.windSpeed = action.payload;
      })
      .addCase(fetchPressure.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPressure.fulfilled, (state, action) => {
        state.status = "idle";
        state.pressure = action.payload;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = "idle";
        state.pressure = action.payload.pressure;
        state.accumulatedRain = action.payload.accumulatedRain;
        state.dewPoint = action.payload.dewPoint;
        state.rainIntensity = action.payload.rainIntensity;
        state.relativeHumidity = action.payload.relativeHumidity;
        state.temperature = action.payload.temperature;
        state.windDirection = action.payload.windDirection;
        state.windSpeed = action.payload.windSpeed;
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
export const selectStatus = (state: RootState) => state.fronteraReducer.status;

export default fronteraSlice.reducer;
