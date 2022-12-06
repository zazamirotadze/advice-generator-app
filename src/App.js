import { useEffect, useState } from "react";

function App() {


  const [data, setData] = useState("")
  const [datachanger, setDatachanger] = useState(true)

  function function1(){
    setDatachanger(prevValue => !prevValue)
  }


  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => setData(data.slip));
  },[datachanger]);


  return (
    <>
    <div className="advice-container">
      <h2>ADVICE #  {data.id}</h2>
      <p>❝{data.advice}❞</p>
      <div className="advice-container__pattern-divider"></div>
      <div className="advice-container__green-circle" onClick={function1}>
        <img src="/images/icon-dice.svg" alt="" />
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="/" >Zaza Mirotadze</a>.
    </div>
    </>
  );
}

export default App;
