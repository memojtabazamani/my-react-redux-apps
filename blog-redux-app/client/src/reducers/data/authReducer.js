import {AUTH} from "../../constants";


export default (state = false, action) => {
    switch (action.type)  {
        case AUTH.SET_LOGIN:
            return true;
        default:
            return state;
    }
}
