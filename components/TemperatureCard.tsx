import React, { FunctionComponent } from "react";
import { useAppSelector } from "../app/hooks";
import { selectStatus } from "../features/measures/malpasoSlice";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  avg: number;
  min: number;
  max: number;
}

const TemperatureCard: FunctionComponent<Props> = ({ avg, min, max }) => {
  const status = useAppSelector(selectStatus);
  return (
    <div className="rounded-md shadow-lg-all p-3">
      <div className="h-48">
        <div className="text-2xl font-bold">Temperatura</div>
        <div className="text-gray-500">°C (Grados Celcius)</div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xl">Avg</p>
            {status === "loading" || avg === null ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">{avg.toPrecision(5)}</p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Max</p>
            {status === "loading" || max === null ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">{max.toPrecision(5)}</p>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Min</p>
            {status === "loading" || min === null ? (
              <div className="mx-9">
                <LoadingSpinner size={20} />
              </div>
            ) : (
              <p className="text-xl mx-9">{min.toPrecision(5)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
