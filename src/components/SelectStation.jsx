import React from 'react';

export const SelectStation = (props)=> {
    const {stationList, select, timeList} = props;
    return (
        <div className='select-component'>
            {stationList.map((station, index) => {
            return (
                <button key={station} onClick={select} value={timeList[index]}>{station}</button>        
            );
            })}
        </div>

    )
};