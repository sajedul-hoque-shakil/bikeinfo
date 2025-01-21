"use client"
import "../globals.css"
import React from 'react'
import { Button} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
 
const idss = uuidv4();
import { Card } from 'antd';
import Link from "next/link";
const Bike = ({data}) => {

  return (
    <section className='max-w-[1000px] mx-auto relative min-w-[999px] min-h-[100px] overflow-hidden'>
     
 <Carousel arrows infinite={false} dots={false}   slidesToShow={3} prevArrow={<LeftOutlined className='px-10' />} nextArrow={<RightOutlined />}  >
    {data?.map((datas)=>(
      <Card  key={idss} cover={
         <Image src={datas.img} width={200} height={200} alt={datas.name}  className=''/>
        
      }>
      <p>{datas.ExShowroom}</p>
      <p>{datas.price}</p>
      <p>On-Road Price, Pune
      </p>
   
      <Link href={`/bike/${datas.id}`}>
      
      <Button danger>Check On-Road Price</Button>
      </Link>
      </Card>
    ))}
   </Carousel> 
  
  
    </section>
    
  )
}

export default Bike