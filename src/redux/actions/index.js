import * as actionTypes from "../constants/actionType"
export const act_up_count = (value) => {
    // return object javascript: type, payload  
    return {
        type: actionTypes.UP_COUNT,
        payload: value
    }
}
export const act_down_count = (value) => {
    return {
        type: actionTypes.DOWN_COUNT,
        payload: value
    }
}
export const act_random_list = () => {
    return {
        type: actionTypes.RANDOM_LIST
    }
}