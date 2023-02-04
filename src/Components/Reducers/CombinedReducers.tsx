import ReducerFileDataArr from './ReducerFileDataArr';
import ReducerModal from './ReducerModal';
import { combineReducers } from 'redux';

const CombinedReducers: any = combineReducers({
  ReducerFileDataArr,
  ReducerModal,
});

export default CombinedReducers;
