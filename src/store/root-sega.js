import { all, call } from "redux-saga/effects";
import { categoriesSega } from "./categories/category.sega";
export function* rootSega() {
  yield all([call(categoriesSega)]);
}
