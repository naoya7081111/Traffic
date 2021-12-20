import React from 'react';

// 親コンポーネントから子コンポーネントにpropsを渡す
export const InputStation = (props)=> {
    const { addingName, addingTime, onClick} = props;
    return (
        <div className='add-component'>
            <input onChange={addingName} className='add-station-name' type="text" placeholder='駅名を入れてください'/>
            <input onChange={addingTime} className='add-station-time' type="number" min='0' placeholder='分'/>
            <button onClick={onClick} className='add-station'>+ 追加</button>
        </div>

    )
};