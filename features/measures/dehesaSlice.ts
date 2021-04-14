import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiLocationsRoutes, ApiMeasuresRoutes } from "../../constants";
import {
  Measures,
  Locations,
  DataType,
  Temperature,
  Pressure,
  DewPoint,
  RainIntensity,
  AccumulatedRain,
} from "../../models";
import {
  fetchTemperature as fetchdehesaTemperature,
  fetchSingleValueData,
  fetchWindData,
} from "./api";

type dehesaState = Measures & { status: "idle" | "loading" };

const initialState: dehesaState = {
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

const apiBase = ApiLocationsRoutes.LA_DEHESA;

export const fetchTemperature = createAsyncThunk(
  "measures/dehesa/fetchTemperature",
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
  "measures/dehesa/fetchPressure",
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
  "measures/dehesa/fetchDewPoint",
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
  "measures/dehesa/fetchRainIntensity",
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
  "measures/dehesa/fetchAccumulatedRain",
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
  "measures/dehesa/fetchRelativeHumdity",
  async () => {
    const result = await Promise.resolve(
      fetch(
        `${apiBase}${ApiMeasuresRoutes.RELATIVE_HUMIDITY}`
      ).then((response) => response.json())
    );
    return result;
  }
);
export const fetchWindDirection = createAsyncThunk(
  "measures/dehesa/fetchWindDirection",
  async () => {
    const result = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.WIND_DIRECTION}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchWindSpeed = createAsyncThunk(
  "measures/dehesa/fetchWindSpeed",
  async () => {
    const result = await Promise.resolve(
      fetch(`${apiBase}${ApiMeasuresRoutes.WIND_SPEED}`).then((response) =>
        response.json()
      )
    );
    return result;
  }
);
export const fetchAll = createAsyncThunk(
  "measures/dehesa/fetchAll",
  async () => {
    const result: Measures = await Promise.resolve(
      fetch(apiBase).then((response) => response.json())
    );
    return result;
  }
);

export const dehesaSlice = createSlice({
  name: "dehesa",
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
      .addCase(fetchDewPoint.pending, (state) => {
        state.status = "loading";
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
  state.dehesaReducer.temperature;
export const selectPressure = (state: RootState) =>
  state.dehesaReducer.pressure;
export const selectDewPoint = (state: RootState) =>
  state.dehesaReducer.dewPoint;
export const selectAccumulatedRain = (state: RootState) =>
  state.dehesaReducer.accumulatedRain;
export const selectRainIntensity = (state: RootState) =>
  state.dehesaReducer.rainIntensity;
export const selectRelativeHumidity = (state: RootState) =>
  state.dehesaReducer.relativeHumidity;
export const selectWindDirection = (state: RootState) =>
  state.dehesaReducer.windDirection;
export const selectWindSpeed = (state: RootState) =>
  state.dehesaReducer.windSpeed;
export const selectStatus = (state: RootState) => state.dehesaReducer.status;

export default dehesaSlice.reducer;
