import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSaga } from "./user/user-sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart) ,call(userSaga)]);
}
