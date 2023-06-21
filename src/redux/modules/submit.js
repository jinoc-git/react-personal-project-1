import uuid from "react-uuid";

const CREATE_TODO = "changeStateHandler/CREATE_TODO";
const UPDATE_TODO = "changeStateHandler/UPDATE_TODO";
const DELETE_TODO = "changeStateHandler/DELETE_TODO";

export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "리액트 강의 복습",
    body: "리액트 입문 강의 복습하기",
    isDone: false,
  },
];

const changeStateHandler = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return;
    case DELETE_TODO:
      return;
    default:
      return state;
  }
};

export default changeStateHandler;
