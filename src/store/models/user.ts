interface UserType {
  id: string;
  name: string;
}
export const UPDATE_USER = 'UPDATE_USER' as const;
export const DELETE_USER = 'DELETE_USER' as const;

export const updateUserAction = (id: string, name: string) => {
  return {
    type: UPDATE_USER,
    payload: { id, name },
  };
};

export const deleteUserAction = () => {
  return {
    type: DELETE_USER,
  };
};

type UserActionType = ReturnType<typeof updateUserAction> | ReturnType<typeof deleteUserAction>;

const initialState = {
  id: '',
  name: '',
};
const reducer = (state: UserType = initialState, action: UserActionType) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    case DELETE_USER:
      return {
        id: '',
        name: '',
      };
    default:
      return state;
  }
};
export default reducer;
