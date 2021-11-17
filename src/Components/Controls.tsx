import React from 'react';
import type {Dispatch} from '../shared/Context';

const Controls = ({handler}: {handler: Dispatch}) => {
    return (
        <div className="controls">
            <button className="counter" onClick={() => handler('increment') }>+</button>
            <button className="counter" onClick={() => handler('decrement')}>-</button>
        </div>
    )
}

export default Controls;