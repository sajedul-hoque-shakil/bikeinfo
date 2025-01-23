"use client";
import React, { useState, useEffect,useRef } from "react";
import Data from "../../../data.json";
import Image from "next/image";
import { Card } from "antd";
import { Carousel ,Button} from 'antd';


function HomePage({ params }) {
  const [id, setId] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    // Unwrap params and set ID
    Promise.resolve(params)
      .then((unwrappedParams) => {
        setId(unwrappedParams.id);
      })
      .catch((error) => {
        console.error("Failed to unwrap params:", error);
      });
  }, [params]);

  useEffect(() => {
    if (id) {
      const allItems = [
        ...Data[0].tranding,
        ...Data[0].populars,
        ...Data[0].electric,
        ...Data[0].upcoming,
      ];
      const matchedItem = allItems.find((item) => item.id === id);
      if (matchedItem) {
        setData(matchedItem);
      }
    }
  }, [id]);
console.log(data)
const carouselRef = useRef(null);

const handleNext = () => {
  carouselRef.current.next();
};

const handlePrev = () => {
  carouselRef.current.prev();
};

  return (
    <section className=" bg-slate-200 py-10">
      <Card  className="w-[1000px] mx-auto my-15">
      <h1 className="text-5xl font-black text-center">{data.name} </h1>
        <section className="flex"> 
          <div className="overflow-hidden">
            <Carousel  ref={carouselRef} infinite={false} dots={false} className="w-[700px] " >
  {[data.img, data.img1, data.img2, data.img3, data.img4, data.img5, data.img6,data.img7, data.img8, data.img9, data.img10, data.img11, data.img12,data.img13, data.img14, data.img15, data.img16, data.img17, data.img18,data.img19, data.img20, data.img21, data.img22, data.img23, data.img24,data.img25, data.img26, data.img27, data.img28, data.img29, data.img30,data.img31, data.img32, data.img33, data.img34].map(
    (img, index) =>
      img && (
        <div key={index}>
          <Image src={img} width={600} height={600} alt={data.name} quality={100} />
        </div>
      )
  )}
</Carousel>
<div  className="text-center -mt-60">
        <Button  type="primary" onClick={handlePrev} className="mr-5">
          Previous
        </Button>
        <Button  type="primary" onClick={handleNext}>
          Next
        </Button>
        </div>
          </div>
          <div className="mt-5 text-md font-bold">
            {data.ExShowroom && <p>Ex ShoWroom:{data.ExShowroom}</p>}
            {data.RTO &&<p>RTO:{data.RTO}</p> }
            {data.Insuranc && <p>Insurance:{data.Insuranc}</p> }
            {data.EngineCapacity&& <p>Engine Capacity:{data.EngineCapacity}</p>}
            {data.MileageARAI&&<p>Mileage ARAI:{data.MileageARAI}</p>}
            {data.Transmission&& <p>TransMission:{data.Transmission}</p>}
            {data.KerbWeight&& <p>Kerb Weight:{data.KerbWeight}</p>}
            {data.FuelTankCapacity&& <p>FuelTank Capacity:{data.FuelTankCapacity}</p>}
            {data.SeatHeight&&<p>Seat Height:{data.SeatHeight}</p>}
            {data.OnRoadPriceinPune&&<p>On Road Price In Pune:{data.OnRoadPriceinPune}</p> }
            
          </div>
        </section>
        <p>sumary</p>
       
        {data.summary && (
  <p>
    {data.summary.split("\n").map((line, lineIndex) => (
      <p key={lineIndex}>{line} <br/><br/></p>
    ))}
  </p>
)}
      </Card>
     </section>
  );
}

export default HomePage;
