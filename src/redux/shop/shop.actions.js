import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshoToMap
} from "../../firebase/firebase-utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = errorMsg => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshoToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
