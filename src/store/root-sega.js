import { all, call } from "redux-saga/effects";
import { categoriesSega } from "./categories/category.sega";
import { userSega } from "./user/user.sega";
export function* rootSega() {
  yield all([call(categoriesSega), call(userSega)]);
}
