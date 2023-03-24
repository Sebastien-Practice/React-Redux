import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';

interface data {
    value: number
}

const FunctionalComponent = () => {
    const [value, setValue] = useState<data>({value:0});

    const changeData = () => {
        setValue({value: value.value + 1});
    }


    return (
        <div>
            <form>
                <label htmlFor='value'></label>
                <input id='value'></input>
                <label htmlFor='name'></label>
                <input id='name'></input>
                <label htmlFor='boolean'></label>
                <input id='boolean'></input>
                <button onClick={changeData}>Change Data</button>            
            </form>
            <h1>{value.value}</h1>
        </div>
    )
}

export default FunctionalComponent;