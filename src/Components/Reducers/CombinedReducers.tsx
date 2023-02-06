import ReducerFileDataArr from './ReducerFileDataArr';
import ReducerModal from './ReducerModal';
import FetchingFireBaseData from './FetchingFireBaseData';
import { combineReducers } from 'redux';

const CombinedReducers: any = combineReducers({
  ReducerFileDataArr,
  ReducerModal,
  FetchingFireBaseData,
});

export default CombinedReducers;
