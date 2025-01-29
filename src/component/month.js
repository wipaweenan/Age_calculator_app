const Month = ({setMonthFunc, monthMessageDisplay, isError}) => {
  function onChangeHandler(e) {
    console.log("onChangeHandler"+ e.target.value);
    setMonthFunc(e.target.value)
  }
    return(
        <div className="flex flex-col gap-2 ">
            <label
              for="month"
              className={`font-semibold text-sm tracking-[.20em] ${monthMessageDisplay!=""?"text-red-500 ":"text-[#6D6D6D] "}`}
            >
              MONTH
            </label>
            <input
              id="month"
              name="month"
              type="Number"
              placeholder="MM"
              className={` rounded-lg transition-colors 
                duration-300 border hover:border-[#864CFF] focus:outline-[#864CFF] px-4 py-2
                font-semibold text-xl ${monthMessageDisplay!=""?"border-red-500":"border-[#dbdbdb]"}`} 
            onChange={onChangeHandler}
            />
            <p className="h-4 text-[10px] italic  text-red-500">{monthMessageDisplay}</p>
          </div>
    )
}


export default Month;