import React, { FunctionComponent, useState, useEffect } from "react";
import Head from "next/head";
import MeasureCards from "../components/MeasureCards";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GetServerSideProps } from "next";
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
          className={`text-white border-b-2 ${
            index === 0 ? "border-solid" : "border-none"
          } border-pink-500 cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.MALPASO))}
        >
          Malpaso
        </div>
        <div
          className={`text-white border-b-2 ${
            index === 1 ? "border-solid" : "border-none"
          } border-pink-500 cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.FRONTERA))}
        >
          Frontera
        </div>
        <div
          className={`text-white border-b-2 ${
            index === 2 ? "border-solid" : "border-none"
          } border-pink-500 cursor-pointer`}
          onClick={() => dispatcher(set(TabsSelection.LA_DEHESA))}
        >
          La Dehesa
        </div>
        <div
          className={`text-white border-b-2 ${
            index === 3 ? "border-solid" : "border-none"
          } border-pink-500 cursor-pointer`}
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
