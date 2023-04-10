import { UP_COUNT, DOWN_COUNT } from "../constants/actionType";
const initialState = 0;
const count = (state = initialState, action) => {
    // Dựa vào state và action cập nhật ra state mới
    switch (action.type) {
        case UP_COUNT:
            return state + action.payload;
        case DOWN_COUNT:
            return state - action.payload;
        default:
            return state;
    }

}
export default count;