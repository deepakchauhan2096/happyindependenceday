import ReactAudioPlayer from 'react-audio-player';
import './App.css';


function App() {
  return (
    <div className="App">
      <ReactAudioPlayer
        src="jaanpe.mp3"
        autoPlay
        loop
      />
      <div id="pole"></div>
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
      <p className="font1"> वंदे मातरम, Vande  Mataram</p>
      <br />
      <p></p>
      <img src="India_flag-XL-anim.gif" alt="india" style={{ margin: "0 auto", display: "flex" }} />


      <h1 id="text">Happy Independence Day</h1>
    </div >
  );
}

export default App;
