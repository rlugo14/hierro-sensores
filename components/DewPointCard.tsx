import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndex } from "../features/tabsSelection/tabsSelectionSlice";
import { dewPointSelector } from "../utils/indexDataSelector";
import LoadingSpinner from "./LoadingSpinner";

const DewPointCard: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const { dewPoint, fetchDewPoint } = dewPointSelector(index);
  const dispatcher = useAppDispatch();

  return (
    <div className="rounded-md shadow-md border-solid border-2 border-gray-200 p-3">
      <div className="relative h-48">
        <div className="text-xl font-bold">Punto de Rocío</div>
        <div className="text-gray-500">°C (Grados Celcius)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Valor</p>
            {dewPoint.status === "loading" ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {dewPoint.status === "idle" && dewPoint.value !== null
                  ? dewPoint.value.toPrecision(5)
                  : "-"}
              </p>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 mx-auto text-gray-500 cursor-pointer"
          onClick={() => dispatcher(fetchDewPoint())}
        >
          ACTUALIZAR
        </div>
      </div>
    </div>
  );
};

export default DewPointCard;
