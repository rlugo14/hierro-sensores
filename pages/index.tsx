import React, { FunctionComponent, useEffect } from "react";
import Head from "next/head";
import MeasureCards from "../components/MeasureCards";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectIndex,
  set,
  TabsSelection,
} from "../features/tabsSelection/tabsSelectionSlice";
import { fetchAllData } from "../utils/allDataFetcher";

const Home: FunctionComponent = () => {
  const index = useAppSelector(selectIndex);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    fetchAllData(dispatcher);
  }, []);

  return (
    <div>
      <Head>
        <title>El Hierro | Sensores</title>
      </Head>
      <div className="sticky top-0 flex flex-wrap pl-3 items-center h-14 min-w-screen bg-blue-600 shadow-md border-solid border-2 border-gray-200 space-x-4 z-10">
        <div
          className={`transition duration-200 ease-linear text-white border-b-2 border-solid ${
            index === 0 ? "border-pink-500" : "border-blue-600"
          }  cursor-pointer `}
          onClick={() => dispatcher(set(TabsSelection.MALPASO))}
        >
          Malpaso
        </div>
        <div
          className={`transition duration-200 ease-linear text-white border-b-2 border-solid ${
            index === 1 ? "border-pink-500" : "border-blue-600"
          } cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.FRONTERA))}
        >
          Frontera
        </div>
        <div
          className={`transition duration-200 ease-linear text-white border-b-2 border-solid ${
            index === 2 ? "border-pink-500" : "border-blue-600"
          } cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.LA_DEHESA))}
        >
          La Dehesa
        </div>
        <div
          className={`transition duration-200 ease-linear text-white border-b-2 border-solid ${
            index === 3 ? "border-pink-500" : "border-blue-600"
          } cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.TIMIJIRAQUE))}
        >
          Timijiraque
        </div>
      </div>
      <div className="p-4">
        <MeasureCards />
      </div>
    </div>
  );
};

export default Home;
