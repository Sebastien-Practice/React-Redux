import { createSelector } from 'reselect';
import { RootState } from '../../reducers/rootReducer';

const getSavedUsers = (state: RootState) => state.saveUser;

export const getSavedUserSelector = createSelector(getSavedUsers, (users) => users);