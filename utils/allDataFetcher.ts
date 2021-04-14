import * as malpaso from "../features/measures/malpasoSlice";
import * as frontera from "../features/measures/fronteraSlice";
import * as dehesa from "../features/measures/dehesaSlice";
import * as timijiraque from "../features/measures/timijiraqueSlice";
import { AppDispatch } from "../app/store";

export const fetchAllData = (dispatcher: AppDispatch) => {
  dispatcher(malpaso.fetchAll());
  dispatcher(frontera.fetchAll());
  dispatcher(dehesa.fetchAll());
  dispatcher(timijiraque.fetchAll());
};
