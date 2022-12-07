import {call, put, takeLatest} from 'redux-saga/effects';
import {getHomeSuccessRecord, getHomeFailure} from './reducer';

function* getRecordHomeSaga(){
    try {
        const records= yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'));
        const data = yield records.json();
        yield put(getHomeSuccessRecord(data));
    } catch (e) {
        yield put(getHomeFailure());
    }
}

function* homeSaga(){
    yield takeLatest('home/getHomeFetch', getRecordHomeSaga);
}

export default homeSaga;
