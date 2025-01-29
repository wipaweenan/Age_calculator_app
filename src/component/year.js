const Year = ({setYearFunc, yearMessageDisplay, isError}) => {
  function onChangeHandler(e) {
    console.log("onChangeHandler"+ e.target.value);
    setYearFunc(e.target.value)
  }
    return(
        <div className="flex flex-col gap-2 ">
            <label
              for="year"
              className={`font-semibold text-sm tracking-[.20em] ${yearMessageDisplay!=""?"text-red-500 ":"text-[#6D6D6D] "}`}
            >
              YEAR
            </label>
            <input
              id="year"
              name="year"
              type="Number"
              placeholder="YYYY"
              className={` rounded-lg transition-colors 
                duration-300 border hover:border-[#864CFF] focus:outline-[#864CFF] px-4 py-2
                font-semibold text-xl ${yearMessageDisplay!=""?"border-red-500":"border-[#dbdbdb]"}`} 
            onChange={onChangeHandler}
            />
            <p className="h-4 text-[10px] italic  text-red-500">{yearMessageDisplay}</p>
          </div>
    )
}


export default Year;