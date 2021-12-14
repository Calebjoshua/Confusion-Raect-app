import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/Leaders';
import {PROMOTIONS} from '../shared/Promotions';
import {COMMENTS} from '../shared/Comments';

export const initialState = {
    dishes:DISHES,
    leaders:LEADERS,
    promotions:PROMOTIONS,
    comments:COMMENTS
}

export const Reducer = (state=initialState, action) => {
    return state;
}