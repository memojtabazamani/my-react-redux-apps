import {URLS} from "../../constants";


export default (state = "/", action) => {
    switch (action.type)  {
        case URLS.ACTION_UI_INDEX_ACTION_SET_PATH:
            return action.url;
        default:
            return state;
    }
}
