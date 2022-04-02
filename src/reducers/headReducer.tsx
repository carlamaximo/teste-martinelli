const INITIAL_STATE = {
  rotation: 'Em Repouso',
  inclination: 'Em Repouso',
};

export const rotationHeadReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'HEAD_ROTATION_ACTION':
      return { rotation: action.rotation };
    default:
      return state;
  }
}

export const inclinationHeadReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case 'HEAD_INCLINATION_ACTION':
      return { inclination: action.inclination };
    default:
      return state;
  }
}

