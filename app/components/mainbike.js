"use client"
import React from 'react'
import { Tabs } from 'antd';
import Data from '../../data.json'
import Bike from './Bike'
const td1=Data[0].tranding
const td2=Data[0].populars
const td3=Data[0].electric
const td4=Data[0].upcoming

const items = [
  {
    key: '1',
    label: "Tranding",
    children: <Bike data={td1}/>,
  },
  {
    key: '2',
    label: 'Popular',
    children: <Bike data={td2}/>,
  },
  {
    key: '3',
    label: 'Electric',
    children: <Bike data={td3}/>,
  },
  {
    key: '4',
    label: 'Up comming',
    children: <Bike data={td4}/>,
  },
];

const mainbike = () => {
  return (
    <section>
      <div>
        {td1.name}
      </div>
<Tabs defaultActiveKey="1" items= {items} className='scroll-smooth' centered />
    </section>
  )
}

export default mainbike