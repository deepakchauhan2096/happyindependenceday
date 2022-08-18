import React from 'react';
import { useState } from 'react';
import './App.css';
import './style.scss'



const App = () => {




  const [curtainleft, setcurtainleft] = useState("100%");
  const [curtainRight, setcurtainRight] = useState("100%");
  const [bansurihide, setbansurihide] = useState("");
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

  const playAudio = () => {

    // 👇️ use document.getElementById()
    // const el = document.getElementById('my-element').play();

    const audio = new Audio('audio.mp3');
    audio.play();

  }


  const openCurtain = () => {
    setcurtainRight(0);
    setcurtainleft(0);
    setbansurihide("none");
    // setChakra("none");
    playAudio();
  }









  return (
    <>

      {/* <img src="flowers.png" className="flowers"  style={{ display:`${bansurihide}`}} onClick={openCurtain} alt="curtian" />
      <img src="flowers.png" className="flowers1"  style={{ display:`${bansurihide}`}} onClick={openCurtain} alt="curtian" /> */}

      {/* <b className="chakra_n" onClick={showFlag} style={{ display: `${chakra}` }}>CLICK OVER ME NAMASTE INDIA 🙏</b> */}
      <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
      </div>
      <div className="App">
        
        <img src="curtain.png" className='pankhl' style={{ width: `${curtainleft}` }} alt="curtain" />

        <img src="curtain.png" className='pankhr' style={{ width: `${curtainRight}` }} alt="curtian" />


        <img src="krishna.png" className="krishna" style={{ display: `${bansurihide}` }} alt="curtian" />

        <img src="bansuri.png" className="bansuri" style={{ display: `${bansurihide}` }} onClick={openCurtain} alt="curtian" />
        <div className="bansuri-text" style={{ display: `${bansurihide}` }} >
          <div>छू दो ये बाँसुरी </div>
          <div>कान्हा बुला रहा है</div>
          <div>अंदर बैठे वो मुरली बजा रहा है।</div>
        </div>

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
          <p className='p-0 m-0'>{name}</p>
          <div className="text-r text-white" style={{ marginBottom: "35px" }}>
            <div>की तरफ से</div>
            <duv>
              जन्माष्टमी की हार्दिक शुभकामनाएं
            </duv>
          </div>
        </div>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
      </div>
        <img src="7UVm.gif" alt="india" width={250} height={330} style={{ margin: "0 auto", display: "flex", opacity: "1", borderRadius: "90px" }} />
        <div className="text text-white" style={{ margin: "22px 0" }}>
          <div>रूप बड़ा प्यारा है,</div>
          <div>चेहरा बड़ा निराला है,</div>
          <div>बड़ी से बड़ी मुसीबत को,</div>
          <div>कन्हैया जी ने,</div>
          <div>पल में हल कर डाला है।</div>
        </div>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
      </div>
        <img src="BwjU.gif" alt="india" width={100} height={160} style={{ margin: "0 auto", display: "flex", borderRadius: "50%" }} />
        <br />
        <p></p>
        <img src="LvO0.gif" alt="india" style={{ margin: "0 auto", display: "flex" }} />


        <img src="giphy.gif" alt="india" width={200} height={160} style={{ margin: "0 auto", display: "flex", borderRadius: "50%" }} />
        <br />


        <h4 className="text" classname="text-r" style={{ fontFamily: "", color: "red" }}>माखन चुराकर जिसने खाया</h4>
        <h2 className="text" style={{ fontFamily: "cursive", color: "yellow" }}>बंसी बजाकर जिसने नचाया</h2>
        <h2 className="text" style={{ fontFamily: "cursive", color: "green" }}>ख़ुशी मनाओ उसके जन्मदिन की,</h2>
        <h4 className="text" style={{ fontFamily: "cursive", color: "blue" }}>जिसने दुनिया को प्रेम का पाठ पढ़ाया।</h4>
        <br />

        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
      </div>

        <form action={`/${name}`} className="form-inline " style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">Password</label>
            <input type="text" onChange={handleChange} className="form-control" id="inputPassword2" placeholder="Eg:Deepak chauhan" />
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-danger mb-2 ">GENERATE</button>
        </form>
        <b id="text" style={{ fontFamily: "cursive", color: "black" }}>Copyright by Deepakchauhan</b>
        <br />
        <br />

      </div >
    </>
  );
}

export default App;
