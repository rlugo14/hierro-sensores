import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { temperatureSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const TemperatureCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { temperature, fetchTemperature } = temperatureSelector(index);
  const dispatcher = useAppDispatch();
  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-52">
        <div className="text-xl font-bold">Temperatura</div>
        <div className="text-gray-500">°C (Grados Celcius)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Avg</p>
            {temperature.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {temperature.status === "idle" && temperature.avg !== null
                  ? Math.round(temperature.avg).toFixed(0)
                  : "-"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Max</p>
            {temperature.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {temperature.status === "idle" && temperature.max !== null
                  ? Math.round(temperature.max).toFixed(0)
                  : "-"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Min</p>
            {temperature.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {temperature.status === "idle" && temperature.min !== null
                  ? Math.round(temperature.min).toFixed(0)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchTemperature())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
