import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { rainIntensitySelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const RainIntensityCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { rainIntensity, fetchRainIntensity } = rainIntensitySelector(index);
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Intensidad de Precipitación</div>
        <div className="text-gray-500">mm/h (milimetros por hora)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Valor</p>
            {rainIntensity.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {rainIntensity.status === "idle" && rainIntensity.value !== null
                  ? rainIntensity.value.toFixed(2)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchRainIntensity())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default RainIntensityCard;
