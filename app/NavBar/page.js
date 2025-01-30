"use client";
import Image from "next/image";
import Link from "next/link";
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'; 
import { Button, Tooltip } from "antd";
import Logo from "../../public/logobike.png";
import { useState, useEffect } from "react";
import { Input  } from "antd";
import DATA from "../../data.json";
const { Search } = Input;
const NavBar = () => {
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
    <section className="bg-slate-200 flex justify-around items-center -my-5  ">
      <div className="">
        <Link href={"/"} className="flex ">
          <Image src={Logo} alt="Bike images" className="w-32" />
          <h1 className="text-3xl font-black relative top-12 -left-4">
            Bike Info
          </h1>
        </Link>
      </div>

      <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      value={input}
      className="w-96 py-2 pl-2 pr-28 rounded-md border"
    />
    <Button
      type="primary"
      icon={<SearchOutlined />}
      onClick={handleClick}
      className="absolute top-1 right-2"
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

     
    </section>
  );
};

export default NavBar;
