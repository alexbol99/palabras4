/**
 * Created by alexbol on 1/10/2016.
 */
import * as ActionTypes from '../store/actionTypes';
import { combineReducers } from '../../lib/redux.min';

function dummy(state = "", action) {
    switch (action.type) {
        case ActionTypes.DUMMY_ACTION_TYPE:
            return state;
        default:
            return state;
    }
}

export var reducer = combineReducers({
    dummy
});
