import { createSlice } from "@reduxjs/toolkit";

export interface WeatherState {
  city: string;
  countryCode: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  error: any;
}

const initialState: WeatherState = {
  city: "",
  countryCode: "",
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    storeInfo: (state, action) => {
      state.city = action.payload.city;
      state.countryCode = action.payload.countryCode;
      state.temperature = action.payload.temperature;
      state.humidity = action.payload.humidity;
      state.windSpeed = action.payload.windSpeed;
    },
    storeError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeInfo, storeError } = weatherSlice.actions;

export default weatherSlice.reducer;
