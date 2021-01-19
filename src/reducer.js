export const initialState = {
  value: 0,
  op: "",
  num1: 0,
  num2: "",
  num3: "",
  list: "",
  viewlist: [],
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "2":
      if (!state.num1) {
        return {
          ...state,
          num1: state.num2,
          op: action.payload,
          num2: "",
          viewlist: [...state.viewlist, action.payload],
        };
      }
      if (!state.num2) {
        return {
          ...state,
          op: action.payload,
          viewlist: [...state.viewlist, action.payload],
        };
      }
      if (state.num1 && state.op) {
        console.log("called");
        if (state.value === 0) {
          return {
            ...state,
            value: eval(state.num1 + state.op + state.num2),
            //list: [...state.list, eval(state.value + state.op + state.num3)],
            //...state,
            //value: eval(state.value + state.op + state.num2),
            op: action.payload,
            num2: "",
            num1: eval(state.num1 + state.op + state.num2),
            viewlist: [...state.viewlist, action.payload],
            list: [...state.list, eval(state.num1 + state.op + state.num2)],
          };
        } else {
          return {
            ...state,
            value: eval(state.value + state.op + state.num2),
            //list: [...state.list, eval(state.value + state.op + state.num3)],
            //...state,
            //value: eval(state.value + state.op + state.num2),
            op: action.payload,
            num2: "",
            num1: eval(state.value + state.op + state.num2),
            viewlist: [...state.viewlist, action.payload],
            list: [...state.list, eval(state.value + state.op + state.num2)],
          };
        }
      }
      return {
        ...state,
        value: eval(state.num1 + state.op + state.num2),
        num2: "",
        op: action.payload,
        num1: eval(state.num1 + state.op + state.num2),
      };
    case "1":
      if (state.num2 === "" && action.payload === ".") {
        return {
          ...state,
          num2: "0" + action.payload,
          viewlist: [...state.viewlist, action.payload],
        };
      } else if (state.num2 === "") {
        return {
          ...state,
          num2: action.payload,
          viewlist: [...state.viewlist, action.payload],
        };
      } else {
        if (action.payload === "." && state.num2.includes(".")) {
          return state;
        } else {
          return {
            ...state,
            num2: state.num2 + action.payload,
            viewlist: [...state.viewlist, action.payload],
          };
        }
      }

    case "3":
      if (state.op && state.num2) {
        return {
          ...state,
          value: eval(state.num1 + state.op + state.num2),
          num2: "",
          num1: eval(state.num1 + state.op + state.num2),
          num3: state.num2,
          list: [...state.list, eval(state.num1 + state.op + state.num2)],
        };
      } else if (state.op && state.value) {
        return {
          ...state,
          value: eval(state.value + state.op + state.num3),
          list: [...state.list, eval(state.value + state.op + state.num3)],
        };
      } else {
        return state;
      }

    case "c":
      if (state.num2.length === 2 && state.num2.includes("0.")) {
        return { ...state, num2: "" };
      } else if (state.num2.length > 1) {
        return { ...state, num2: state.num2.slice(0, -1) };
      } else {
        return { ...state, num2: "" };
      }
    //state.num2.length > 1 ? return {...state, num2: state.num2.slice(0, -1)} : return {...state, num2:0}
    case "bc":
      if (state.list) {
        console.log(state.list.length);
        if (state.list.length > 1) {
          return {
            ...state,
            value: state.list[state.list.length - 2],
            num1: state.list[state.list.length - 2],
            list: state.list.splice(state.list.length - 1, 1),
            viewlist: state.viewlist.slice(0, state.viewlist.length - 2),
            num2: "",
          };
        } else if (state.list.length > 0) {
          return {
            ...state,
            value: 0,
            num1: state.viewlist.length - 1,
            list: state.list.splice(state.list.length - 1, 1),
            viewlist: state.viewlist.slice(0, state.viewlist.length - 2),
            num2: "",
          };
        } else {
          return {
            ...state,
            value: 0,
            num1: 0,
            list: "",
            viewlist: [],
            num2: "",
          };
        }
      }
    case "ac":
      return {
        value: 0,
        op: "",
        num1: 0,
        num2: "",
        viewlist: [],
        list: "",
      };

    default:
      return state;
  }
};

export default reducer;
