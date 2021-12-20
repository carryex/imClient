import {createSelector} from 'reselect';
import {RootState} from '../store';
import {SetsState} from '../slices/set.slice';


const stateSelector = (state: RootState):SetsState => state.sets;

const setsSelector = createSelector(stateSelector, (sets) => sets.collection);

export {setsSelector};
