import { filterGoods } from "../actionCreators/goodAC";
import { FILTER_GOODS_SAGA } from "../types/goodTypes";
import { call, put, debounce } from 'redux-saga/effects'

 

const getGoodFromServer = (data = {}, otherArg) => {
  return data.input ? fetch(`http://localhost:3001/api/v1/filter?_c=${data.categoryForFilter}&_s=${data.input}`)
    .then(res => res.json()) : null
}


function* filterSagaWorker(action) {
  try {
     const search = yield call(getGoodFromServer, action.payload, "otherArg");
     yield put(filterGoods(search));
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}


function* filterSagaWatcher() {
  yield debounce(1000, FILTER_GOODS_SAGA, filterSagaWorker);
}

export default filterSagaWatcher
