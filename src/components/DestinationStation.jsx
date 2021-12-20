import React from 'react';

export const DestinationStation = (props)=> {
    const {goalStation} = props;
    return (
        <div className='destination-component'>
        <p className='title'>目的地に近い駅をえらんでね</p>
        <li>{goalStation}</li>
        </div>
    )
};