import {SAVE_COMMENT} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            //concats arrays
            return [...state, action.payload] ;
    }
    return state;
}