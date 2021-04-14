import React, { FunctionComponent } from "react";
import { useAppSelector } from "../app/hooks";
import { selectStatus } from "../features/measures/malpasoSlice";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  value: number;
}

const PressureCard: FunctionComponent<Props> = ({ value }) => {
  const status = useAppSelector(selectStatus);
  return (
    <div className="rounded-md shadow-lg-all p-3">
      <div className="h-48">
        <div className="text-2xl font-bold">Presión Atmosférica</div>
        <div className="text-gray-500">mbar (milibar)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Valor</p>
            {status === "loading" && value === null ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">
                {status === "idle" && value !== null
                  ? value.toPrecision(5)
                  : "-"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureCard;
