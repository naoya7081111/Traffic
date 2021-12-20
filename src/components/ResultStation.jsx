import React from 'react';

export const ResultStation = (props)=> {
    const {trafficTime, onClickCaluculate} = props;
    return (
        <div className='result-component'>
            <p className='title'>結果が表示されます！</p>
            <div className='time-block'>{trafficTime + '分'}</div>
            <button onClick={onClickCaluculate} className='result-button'>PUSH</button>
        </div>

    )
};