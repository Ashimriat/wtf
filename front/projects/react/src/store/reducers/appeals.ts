export enum EAppealsActions {
  CREATE = 'CREATE_APPEAL',
  ADD = 'ADD_APPEAL',
  REQUEST = 'REQUEST_APPEALS'
}

const actionsCreator = {
  [EAppealsActions.CREATE]: () => ({
    type: EAppealsActions.CREATE,
  }),
  [EAppealsActions.ADD]: () => ({
    type: EAppealsActions.ADD,
  }),
  [EAppealsActions.REQUEST]: () => ({
    type: EAppealsActions.REQUEST,
  }),
};

const actionsHandler = {
  [EAppealsActions.CREATE]: () => {

  },
  [EAppealsActions.ADD]: (state) => {
    console.log('ADDING TO STATE', state);
    return state;
  },
  [EAppealsActions.REQUEST]: () => {

  },
};

const processableActions = Object.keys(actionsHandler);

const appealsReducer = (state = [], { type, payload }) => {
  if (!processableActions.includes(type)) {
    return state;
  }
  return actionsHandler[type](payload);
};

export {
  actionsCreator as appealsActions,
  appealsReducer as appeals,
};
