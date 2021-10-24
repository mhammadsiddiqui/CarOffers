
interface IOffersState {
    offers: ICar[];
}

const initialState: IOffersState = {
    offers: []
}

interface UpdateAction {
    type: 'offers/update',
    payload: ICar[]
};

export const update = (data: ICar[]): UpdateAction => ({
    type: 'offers/update',
    payload: data
});

const offersReducer = (state: IOffersState = initialState, action: UpdateAction) => {
    switch (action.type) {
        case 'offers/update':
            return { offers: action.payload };
        default:
            return state;
    }
};

export default offersReducer;