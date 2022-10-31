import React from 'react'
import BatteryGauge from 'react-battery-gauge'
import './RightDoor.css';
const RightDoor = (props) => {
  const a={
    batteryBody: {
      strokeWidth: 4,
      cornerRadius: 6,
      fill: 'none',
      strokeColor: '#111'
    },
    batteryCap: {
      fill: 'none',
      strokeWidth: 4,
      strokeColor: 'rgba(255, 255, 255, 0)',
      cornerRadius: 0,
      capToBodyRatio: 0
    },
    batteryMeter: {
      fill: 'rgb(2, 208, 249)',
      lowBatteryValue: 15,
      lowBatteryFill: 'rgb(2, 208, 249)',
      outerGap: 1,
      noOfCells: 1, // more than 1, will create cell battery
      interCellsGap: 5
    },
    readingText: {
      lightContrastColor: 'rgba(255, 255, 255, 0)',
      darkContrastColor: 'rgba(255, 255, 255, 0)',
      lowBatteryColor: 'rgba(255, 255, 255, 0)',
      fontFamily: 'Helvetica',
      fontSize: 14,
      showPercentage: false
    },
    chargingFlash: {
      scale: undefined,
      fill: 'orange',
      animated: false,
      animationDuration: 1000
    },
  }
  return (
    <div className={`RightDoor ${props.login?'col':''}`}>
      <div className='rdis'>
      <BatteryGauge orientation='vertical' value={props.time} maxValue={props.maxtime} customization={a}/>
      <h2>{props.text}</h2>
      </div>
    </div>
  )
}

export default RightDoor