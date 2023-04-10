import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { act_down_count, act_random_list, act_up_count } from '../redux/actions';

export default function View_Comp() {
    // Lấy dữ liệu count và list về hiển thị
    const count = useSelector(state => state.count);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const handleUp = (value) => {
        dispatch(act_up_count(value));
    }
    return (
        <div>
            <h2>React Redux Demo</h2>
            <p>Count:{count}</p>
            <p>List:{list.toString()}</p>
            <button onClick={() => handleUp(2)}>Up</button>
            <button onClick={() => dispatch(act_down_count(3))}>Down</button>
            <button onClick={() => dispatch(act_random_list())}>Random</button>
        </div>
    )
}
