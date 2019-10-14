import { type as findResultsType } from '../actions/findResults';
import items from '../../services/item';

const defaultState = items;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if (!payload) {
                return [];
            }

            const regex = new RegExp(`^${payload}` , 'i');

            return items.filter(n => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;
