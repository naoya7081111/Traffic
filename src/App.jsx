import React, { useState } from 'react';
import './styles.css';
import { InputStation } from './components/InputStation';
import { DepartureStation } from './components/DepartureStation';
import { DestinationStation } from './components/DestinationStation';
import { SelectStation } from './components/SelectStation';
import { ResultStation } from './components/ResultStation';

export const App = ()=> {

  // inputタグに入力するためのステート
  const [addName, setAddName] = useState();
  const [addTime, setAddTime] = useState();

  // buttonに追加するためのステート
  const [stationList, setStationList] = useState(['西明石駅', '明石駅', '神戸駅', '元町駅', '三宮駅']);
  const [timeList, setTimeList] = useState(['0', '5', '15', '17', '20']); 

  // ボタンで選んだときに使われるステート
  const [startStation, setStartStation] = useState();
  const [goalStation, setGoalStation] = useState();
  const [startTime, setStartTime] = useState('');
  const [goalTime, setGoalTime] = useState(''); 

  // 計算のために使われるステート
  const [trafficTime, setTrafficTime] = useState('');
 
  const select = (event)=> {
    if (goalStation !== undefined) return;
    if (startStation !== undefined) return (
      setGoalStation(event.target.innerText),
      setGoalTime(event.target.value)
    );
    setStartStation(event.target.innerText);
    setStartTime(event.target.value);
  };
  
  const onClickCaluculate = ()=> {
    let preTrafficTime = Math.abs(goalTime - startTime);
    if (preTrafficTime === 0) return;
    setTrafficTime(preTrafficTime);
  };

  const addingName = (event)=> {
    setAddName(event.target.value)
  };

  const addingTime = (event)=> {
    setAddTime(event.target.value);
  };

  const addingStation = ()=> {
    if (addName === undefined || addTime === undefined) return;
    const newStations = [...stationList, addName];
    const newTimes = [...timeList, addTime];
    setStationList(newStations);
    setTimeList(newTimes);
  };

  return (
    <>
      <header>
        <h1>到着時間を算出してくれるアプリ</h1>
        <p>Auther:  Naoya Fujikawa</p>
      </header>
      <div className='body-component'>
        <div className='content-component'>
            <InputStation 
              addingName = {addingName}
              addingTime = {addingTime}
              onClick = {addingStation}
            />
            <DepartureStation 
              startStation = {startStation}
            />
            <DestinationStation 
              goalStation = {goalStation}
            />
            <SelectStation 
              stationList = {stationList}
              select = {select}
              timeList = {timeList}
            /> 
            <ResultStation 
              trafficTime = {trafficTime}
              onClickCaluculate = {onClickCaluculate}
            />         
        </div>
      </div>
    </>
  );
};