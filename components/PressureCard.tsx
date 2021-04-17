import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { pressureSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const PressureCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { pressure, fetchPressure } = pressureSelector(index);
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Presión Atmosférica</div>
        <div className="text-gray-500">mbar (milibar)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Valor</p>
            {pressure.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {pressure.status === "idle" && pressure.value !== null
                  ? pressure.value.toFixed(2)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchPressure())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default PressureCard;
