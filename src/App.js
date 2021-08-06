import './App.css';
import pic from './pic.jpg'
import KL_logo from './KL_logo.png'
import barcode from './barcode.jpg'
import sign from './sign.png'

function App() {
  return (
    <div className="div2" id="container" >
      
      <img src={pic} id = 'pic'/>
      <section className="container2">
      <img src={KL_logo} id="logo"/>
      <section className="CSE">
      <p className="CSEtxt">
        CSE
      </p>
      <p className="year">
        2020-2024
        </p>
      </section>
      </section>
      
      
      <p id="tf">
        <div className="data">
        Student Details

        </div>
        Name : S Soumya Prasad <br></br>
        Student ID : 2000031337 <br></br>
        Number : 9668744664  <br></br>
         Blood-group: B+ve<br></br>
        


      
      </p>
     
      
      <img id="barcode" src={barcode}>
      </img>
      <div id="signtext">
      HoD CSE
      </div>
      
      <img id="sign" src={sign}>
      </img>
  


    </div>
    
  );
}

export default App;
