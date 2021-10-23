interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
}

interface IncreaseAction { type: 'counter/increase' };
interface DecreaseAction { type: 'counter/decrease' };
type KnownAction = IncreaseAction | DecreaseAction;

export const increase = (): IncreaseAction => ({
    type: 'counter/increase'
});

export const decrease = (): DecreaseAction => ({
    type: 'counter/decrease'
});

const counterReducer = (state: CounterState = initialState, action: KnownAction) => {
    switch (action.type) {
        case 'counter/increase':
            return { count: state.count + 1 };
        case 'counter/decrease':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default counterReducer;