import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { accumulatedRainSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const AccumulatedRainCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { accumulatedRain, fetchAccumulatedRain } = accumulatedRainSelector(
    index
  );
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Lluvia Acumulada</div>
        <div className="text-gray-500">mm (milimetros)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Valor</p>
            {accumulatedRain.status === "loading" ? (
              <div className="mx-9 bg-gra">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {accumulatedRain.status === "idle" &&
                accumulatedRain.value !== null
                  ? accumulatedRain.value.toPrecision(5)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchAccumulatedRain())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default AccumulatedRainCard;
