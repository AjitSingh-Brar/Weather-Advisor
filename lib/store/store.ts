import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./features/weather/weatherSlice"

export const store = configureStore({
  reducer: {
    weather: WeatherReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
