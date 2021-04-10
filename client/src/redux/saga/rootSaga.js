import { all } from 'redux-saga/effects'
import filterSagaWatcher from './goodSaga'

export default function* rootSaga() {
  yield all([
    filterSagaWatcher()
  ])
}
