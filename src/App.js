
import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount,setamount]= useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
      alert("plz enter amount");
    }
    else{
      var options = {
        key : "rzp_test_lNutGY3D98FPY3",
        key_secret : "GaKnpcuyoDWtYgRH6ie2SkCi",
        amount : amount*100,
        currency : "INR",
        name : "sigetech",
        description : "robot payment",
        handler : function(response){
          alert (response.razorpay_payment_id)

        },
        prefill:{
          name : "selva", 
          email : "selvabeforeu@gmail.com",
          contact : "9600653287"
        },
        notes : {
          address : "Razorpay Corporate Office"
        },
        theme:{
          color :"yellow"
        }

      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
   <h2>Razorpay Payment Using React</h2>
   <br/>
   <input type="text" placeholder='Enter Amount ' value={amount} onChange ={(e)=>
  setamount(e.target.value)}/>
   <br/><br/>
   <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
