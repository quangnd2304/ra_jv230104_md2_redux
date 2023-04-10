import { RANDOM_LIST } from "../constants/actionType";
const initialState = [3, 5, 7];
const list = (state = initialState, action) => {
    // Dựa vào state và action cập nhật ra state mới
    switch (action.type) {
        case RANDOM_LIST:
            return [...state, Math.floor(Math.random() * 10)];
        default:
            return state;
    }
}
export default list;