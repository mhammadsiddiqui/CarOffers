interface IOffersState {
  offers: ICar[];
}

const initialState: IOffersState = {
  offers: [],
};

//action
interface UpdateAction {
  type: "offers/update";
  payload: ICar[];
}

//action creator
export const update = (data: ICar[]): UpdateAction => ({
  type: "offers/update",
  payload: data,
});

const offersReducer = (
  state: IOffersState = initialState,
  action: UpdateAction
): IOffersState => {
  switch (action.type) {
    case "offers/update":
      return { offers: action.payload };
    default:
      // the dispatched action is not in this reducer, return the state unchanged
      return state;
  }
};

export default offersReducer;
