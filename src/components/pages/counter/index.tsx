
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../redux/counter';
import { RootState } from '../../../redux/store';

const Counter: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter);

    const handleIncreament = () => {
        console.log('increasing');
        dispatch(increase());
    };
    const handleDecreament = () => {
        console.log('decreasing');
        dispatch(decrease());
    };
        return(<React.Fragment>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{count.count}</strong></p>
            <button type="button"
                    className="btn btn-primary btn-lg m-2"
                    onClick={handleIncreament}>
                    Increment
            </button>
            <button type="button"
                    className="btn btn-primary btn-lg m-2"
                    onClick={handleDecreament}>
                    Decrement
            </button>
        </React.Fragment>);
    };

export default Counter;
