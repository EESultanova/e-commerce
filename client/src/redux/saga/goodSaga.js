import { filterGoods } from "../actionCreators/goodAC";
import { FILTER_GOODS, FILTER_GOODS_SAGA } from "../types/goodTypes";
import { call, put, takeEvery, takeLatest, debounce, throttle } from 'redux-saga/effects'

 

const getGoodFromServer = (data = {}, otherArg) => {
  console.log('getGoodFromServer: data', data)
  return fetch(`http://localhost:3001/api/v1/filter?_category=${data.categoryForFilter}&_s=${data.input}`)
    .then(res => console.log('С сервера приходит статус:', res))
}


function* filterSagaWorker(action) {
  try {
  console.log('inside filterSagaWorker')
      
     const data = yield call(getGoodFromServer, action.payload, "otherArg");
    //  console.log( 'action.payload in filterSagaWorker',  action.payload)
    //  yield put(filterGoods(data));
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}


function* filterSagaWatcher() {
  console.log('inside filterSagaWatcher')
  yield debounce(1000, FILTER_GOODS_SAGA, filterSagaWorker);
}

export default filterSagaWatcher
