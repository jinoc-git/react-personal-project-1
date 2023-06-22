import uuid from "react-uuid";

const CREATE_TODO = "changeStateHandler/CREATE_TODO";
const READ_TODO = "changeStateHandler/READ_TODO";
const UPDATE_TODO = "changeStateHandler/UPDATE_TODO";
const DELETE_TODO = "changeStateHandler/DELETE_TODO";
const CHANGE_TODO = "changeStateHandler/CHANGE_TODO";

const getLsData = () => {
  const lsData = JSON.parse(localStorage.getItem("todo"));
  if (lsData === null) return false;
  return lsData;
};
const setLsData = (data) => {
  localStorage.setItem("todo", JSON.stringify(data));
  return getLsData();
};

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

export const deleteTodo = ({ todos, id }) => {
  const changedPayload = todos.filter((todo) => {
    return todo.id !== id;
  });
  setLsData(changedPayload);
  return {
    type: DELETE_TODO,
    payload: changedPayload,
  };
};

export const changeTodo = ({ todos, id }) => {
  const changedPayload = todos.map((todo) => {
    if (todo.id === id) {
      todo.isDone = !todo.isDone;
    }
    return todo;
  });
  setLsData(changedPayload);
  return {
    type: CHANGE_TODO,
    payload: changedPayload,
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

const todosHandler = (
  state = getLsData() ? getLsData() : initialState,
  action
) => {
  switch (action.type) {
    case CREATE_TODO:
      return setLsData([...state, action.payload]);
    case READ_TODO:
      return getLsData();
    case UPDATE_TODO:
      return;
    case DELETE_TODO:
      return action.payload;
    case CHANGE_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default todosHandler;
