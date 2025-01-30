"use client"
import Image from "next/image";
import{useState}from 'react'
import { SearchOutlined } from '@ant-design/icons';
import Link from "next/link";
import DATA from "../data.json";
import { Button} from 'antd';
import Bike from "./components/Bike";
import MainBike from "./components/mainbike";
export default function Home() {
  const [input, setInput] = useState("");
    const [suggest, setSuggest] = useState([]);
    
    const handleSearch = (event) => {
      const userInput = event.target.value;
      setInput(userInput);
    
      if (userInput.length === 0) {
        setSuggest([]);
        return;
      }
    
      // Ensure DATA exists and is not empty
      const filteredSuggestions = ["tranding", "populers", "electric", "upcoming"]
        .flatMap((key) => DATA?.[0]?.[key] || []) // Avoid undefined issues
        .filter((item) => typeof item?.name === "string" && item.name.toLowerCase().includes(userInput.toLowerCase()));
    
      setSuggest(filteredSuggestions);
    };
    
    const handleClick = () => {
      const clickedItem = suggest.find(
        (item) => item.name.trim().toLowerCase() === input.trim().toLowerCase()
      );
    
    
      if (clickedItem) {
        window.location.href = `/bike/${clickedItem.id}`;
      } else {
        
        console.log(clickedItem)
      }
    };
    
    const handleItemClick = (item) => {
      setInput(item.name);
      setSuggest([]);
    };
    
  return (
    <>
   <section className="Banner flex items-end ">
    <div className="w-3/4 mx-auto h-1/4 relative">
      <div className="text-center bg-slate-900 text-white rounded-lg w-[400px] mx-auto">
        <h3 className="text-3xl font-bold">
        FIND THE RIGHT BIKE
        </h3>
        <p className="text-lg font-bold">
        Get Comprehensive Information on Bikes!
        </p>
      </div>
      <div className="relative text-center">
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      value={input}
      className="w-3/4 py-2 pl-2 pr-28 mx-auto rounded-md border"
    />
    <Button
      type="primary"
      icon={<SearchOutlined />}
      onClick={handleClick}
      className="absolute top-1 right-[13%] px-4 py-4"
    >
      Search
    </Button>

    {suggest.length > 0 && (
      <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-96 p-2 pb-4 z-50">
        {suggest.map((item) => (
          <li
            key={item.id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <Link href={`/bike/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
    </div>
   </section>
   <section>
    <MainBike/>
    <Bike/>
   </section>
   </>
  );
}
