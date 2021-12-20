import React from 'react';

export const DepartureStation = (props)=> {
    const { startStation } = props;
    return (
        <div className='departure-component'>
            <p className='title'>出発駅をえらんでね</p>
            <li>{startStation}</li>
        </div>

    )
};