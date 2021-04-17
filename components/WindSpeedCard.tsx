import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { windSpeedSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const WindSpeedCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { windSpeed, fetchWindSpeed } = windSpeedSelector(index);
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Velocidad del Viento</div>
        <div className="text-gray-500">m/s (metros por segundo)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Avg</p>
            {windSpeed.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {windSpeed.status === "idle" && windSpeed.avg !== null
                  ? windSpeed.avg.toPrecision(5)
                  : "-"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Max</p>
            {windSpeed.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {windSpeed.status === "idle" && windSpeed.max !== null
                  ? windSpeed.max.toPrecision(5)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchWindSpeed())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default WindSpeedCard;
