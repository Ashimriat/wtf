import type { ActionCreator } from 'redux';


export enum EAppealsActions {
  CREATE_APPEAL = 'CREATE_APPEAL',
  ADD_APPEAL = 'ADD_APPEAL',
  REQUEST_APPEALS = 'REQUEST_APPEALS'
}

interface IAppealsState {
  appeals: []
}
type IActionsCreators = {
  [key in EAppealsActions]: ActionCreator<IAppealsAction>;
};
interface IAppealsAction {
  type: keyof typeof EAppealsActions;
  payload?: any;
}
type IActionsHandlers = {
  [key in EAppealsActions]: (state: IAppealsState, payload?: any) => IAppealsState
};

const actionsCreators: IActionsCreators = {
  [EAppealsActions.CREATE_APPEAL]: () => ({
    type: EAppealsActions.CREATE_APPEAL,
  }),
  [EAppealsActions.ADD_APPEAL]: () => ({
    type: EAppealsActions.ADD_APPEAL,
  }),
  [EAppealsActions.REQUEST_APPEALS]: () => ({
    type: EAppealsActions.REQUEST_APPEALS,
  }),
};
const actionsHandler: IActionsHandlers = {
  [EAppealsActions.CREATE_APPEAL]: (state) => state,
  [EAppealsActions.REQUEST_APPEALS]: (state) => state,
  [EAppealsActions.ADD_APPEAL]: (state) => state,
};
const appealsReducer = (state = { appeals: [] }, { type, payload }: IAppealsAction) => (
  !EAppealsActions[type]
    ? state
    : actionsHandler[type](payload)
);


export {
  actionsCreators as appealsActions,
  appealsReducer as appeals,
};
