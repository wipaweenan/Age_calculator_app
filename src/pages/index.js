import { Poppins } from "next/font/google";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Day from "@/component/day";
import Month from "@/component/month";
import Year from "@/component/year";
import { useEffect, useState } from "react";
import moment from "moment"
const poppins = Poppins({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});


const Home = () => {
  const [year, setYear] = useState("") 
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")

  const[yearMessage, setYearMessage] = useState("")
  const[monthMessage, setMonthMessage] = useState("")
  const[dayMessage, setDayMessage] = useState("")

  const[isError, setIsError] = useState(false)

  const [age, setAge] = useState({
    day:"--",
    month:"--",
    year:"--"
  })
  
  useEffect(()=>{
    console.log("year",year);
    
  },[year,month,day])

  function clickHandler(){
    const isError = validateInput()

    if(!isError){
      calculateDate()
    }
  }

  function calculateDate(){
    
  const inputDate = moment().year(year).month(month).date(day)
  const nowDate = moment()
  
  const calculatedDate = moment.duration(nowDate.diff(inputDate))
    console.log("calculatedDate",calculatedDate);
    

  setAge({
    day:calculatedDate.days(),
    month:calculatedDate.months(),
    year:calculatedDate.years()
  })
  }

  
  return (
    <div className=" min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl gap-6 rounded-xl rounded-br-[8rem] bg-white p-6 py-10 md:gap-0 md:p-10 ">
        <div className="gird grid-rows-3">
          <div className="grid grid-cols-4 gap-6 w-full ">
            <Day setDayFunc={setDay} dayMessageDisplay={dayMessage} />
            <Month setMonthFunc={setMonth} monthMessageDisplay={monthMessage} />
            <Year setYearFunc={setYear} yearMessageDisplay={yearMessage}/>
          </div>

          <div className="relative mb-2 mt-3 flex w-full justify-center sm:justify-end">
            <div className="absolute top-1/2 h-px w-full -translate-y-1/2 transform bg-[#dbdbdb]"></div>
            <button
              type="button"
              className="z-10 flex flex-col rounded-full bg-[#854dff] z-5 p-5 hover:bg-black transition-colors duration-250"
              onClick={clickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="32"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
          <div className="flex gap-2 font-extrabold italic text-5xl sm:text-6xl">
            <div className="flex flex-col tracking-[.15em]">
              <div className="text-center text-[#854dff] w-full ">{age.year}</div>
              <div className="text-center text-[#854dff] w-full ">{age.month}</div>
              <div className="text-center text-[#854dff] w-full ">{age.day}</div>
            </div>
              <div className="flex flex-col">
                <div>years</div>
                <div>month</div>
                <div>days</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );


  function validateInput(){
    let isError = false
    if(!day){
      isError = true
      setDayMessage("This field is required.")
    }
    if(!month){
      isError = true
      setMonthMessage("This field is required.")
    }
    if(!year){
      isError = true
      setYearMessage("This field is required.")
    }
  
    if ( parseInt(day) < 1 || parseInt(day) > 31) {
      isError = true
      setDayMessage("Must be a valid date.")
    }
  
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      isError = true
      setMonthMessage("Must be a valid month.")
    }
  
    const inputDate = moment().year(year).month(month).date(day)
    const nowDate = moment()
  
    
    if(!inputDate.isValid()){
      isError = true
      setDayMessage("Must be a valid date.")
      
    }
  
    if(inputDate.diff(nowDate) > 0){
      isError = true
      setYearMessage("Must be in the past.")
    }

    if(!isError){
      setDayMessage("")
      setMonthMessage("")
      setYearMessage("")
    }
    return isError
  }
};


export default Home;
