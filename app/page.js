import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { Button} from 'antd';
import Bike from "./components/Bike";
import MainBike from "./components/mainbike";
export default function Home() {
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
      <div className="w-3/4 mx-auto relative">
      <input type='text' placeholder="Searching Bike..."className="w-full py-2 pl-12 pr-20 txt-lg rounded-md" />
      <span className="absolute left-5 top-2 text-2xl"><IoIosSearch /></span>
      <Button type="primary" className="absolute right-1 top-1">
            Search
          </Button>
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
