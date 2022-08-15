import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';



const App = () => {

  const [value, setValue] = useState("");
  const [name, setName] = useState("Deepak Chauhan");
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('myParam')
  console.log(myParam)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setName(value)
    window.location.href = `/${name}`;
  }






  useEffect(() => {
    // 👇️ use document.getElementById()
    // const el = document.getElementById('my-element').play();

    const audio = new Audio('jaanpe.mp3');
    audio.play();

  }, []);


  return (
    <div className="App">
      <div id="pole"></div>
      {/* <audio id="my-element" controls loop preload="true">
        <source src="jaanpe.mp3" type="audio/mpeg" />
        <source src="jaanpe.ogg" type="audio/ogg" />
      </audio> */}
      <div className="saffron" onclick="sImp()"></div>
      <div className="white" onclick="wImp()"></div>
      <div className="green" onclick="gImp()"></div>
      <div onclick="cImp()">
        <div className="chakra"></div>
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>
        <div id="seven"></div>
        <div id="eight"></div>
        <div id="nine"></div>
        <div id="ten"></div>
        <div id="eleven"></div>
        <div id="twelve"></div>
      </div>
      <br /><br />
      <div>
        <p>{name}</p>
      </div>
      <img src="kiTarafSe.png" alt="india" width={250} height={100} style={{ margin: "0 auto", display: "flex" }} />
      <br />
      <img src="main1.png" alt="india" width={300} height={220} style={{ margin: "0 auto", display: "flex" }} />
      <br />
      <p></p>
      <img src="India_flag-XL-anim.gif" alt="india" style={{ margin: "0 auto", display: "flex" }} />




      <h1 id="text" style={{ fontFamily: "cursive", color: "orange" }}>Happy</h1>
      <h1 id="text" style={{ fontFamily: "cursive", color: "white" }}>Independence</h1>
      <h1 id="text" style={{ fontFamily: "cursive", color: "green" }}>Day</h1>
      <br />

      <form action={`/${name}`} className="form-inline " style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}>
        <div className="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" className="sr-only">Password</label>
          <input type="text" onChange={handleChange} className="form-control" id="inputPassword2" placeholder="Eg:Deepak chauhan" />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-success mb-2 ">SHARE</button>
      </form>
      <br />
      <br />

    </div >
  );
}

export default App;
