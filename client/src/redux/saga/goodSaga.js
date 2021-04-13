import { filterGoods } from "../actionCreators/goodAC";
import { FILTER_GOODS_SAGA } from "../types/goodTypes";
import { call, put, debounce, takeEvery } from 'redux-saga/effects'
import { SITE_URL } from "../../config";

 

const getGoodFromServer = (data = {}, otherArg) => {
  console.log('Дернулась квери сага!!!')
  return fetch(`${SITE_URL}api/v1/filter?_c=${data.categoryForFilter}&_s=${data.input}`)
    .then(res => res.json()).then((res) => console.log(res))
}


function* filterSagaWorker(action) {
  try {
     const search = yield call(getGoodFromServer, action.payload, "otherArg");
     console.log(search)
     yield put(filterGoods(search));
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}


function* filterSagaWatcher() {
  yield takeEvery(FILTER_GOODS_SAGA, filterSagaWorker);
}

export default filterSagaWatcher
