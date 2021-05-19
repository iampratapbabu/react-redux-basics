import {createStore} from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer);
//yhi store centrealized state ho gya hai yhi se koi component store call krke data le skta hai

export default store;
