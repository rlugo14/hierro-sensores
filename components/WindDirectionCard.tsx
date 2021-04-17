import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectIndex,
  TabsSelection,
} from "../features/tabsSelection/tabsSelectionSlice";
import { windDirectionSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const WindDirectionCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { windDirection, fetchWindDirection } = windDirectionSelector(index);
  const dispatcher = useAppDispatch();
  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Direccion del Viento</div>
        <div className="text-gray-500">° (angulo plano)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Avg</p>
            {windDirection.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {windDirection.status == "idle" && windDirection.avg !== null
                  ? Math.round(windDirection.avg).toFixed(0)
                  : "-"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Max</p>
            {windDirection.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {windDirection.status == "idle" && windDirection.max !== null
                  ? Math.round(windDirection.max).toFixed(0)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchWindDirection())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default WindDirectionCard;
