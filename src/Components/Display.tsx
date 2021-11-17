import React from 'react';
import type {State} from '../shared/Context';

const Display = ({count}: State) => {
    return (
        <div className="display">
            {count}
        </div>
    )
}

export default Display;