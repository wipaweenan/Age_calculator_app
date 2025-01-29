const Day = ({setDayFunc, dayMessageDisplay, isError}) => {
  function onChangeHandler(e) {
    console.log("onChangeHandler"+ e.target.value);
    setDayFunc(e.target.value)
  }
  
    return(
        <div className="flex flex-col gap-2 ">
            <label
              for="day"
              className={`font-semibold text-sm tracking-[.20em] ${dayMessageDisplay!=""?"text-red-500 ":"text-[#6D6D6D] "}`}
            >

              DAY
            </label>
            <input
              id="day"
              name="day"
              type="Number"
              placeholder="DD"
              className={` rounded-lg transition-colors 
            duration-300 border hover:border-[#864CFF] focus:outline-[#864CFF] px-4 py-2
            font-semibold text-xl ${dayMessageDisplay!=""?"border-red-500":"border-[#dbdbdb]"}`} 
            required
            onChange={onChangeHandler}
            />
            <p className="h-4 text-[10px] italic  text-red-500">{dayMessageDisplay}</p>
          </div>
    )
}


export default Day;