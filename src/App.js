import logo from './logo.svg';
import './App.css';
import{useState,useEffect} from 'react';
function App() {
  const[inputelement,setInputElement]=useState("");
  const[cities,setCities]=useState([]);
  useEffect(()=>{
    fetch("https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json")
    .then((response)=>response.json())
    .then((data)=>setCities(data))
  })
 

  function formHandler(e){
    e.preventDefault();
    
  }
  function inputHandler(e){
    setInputElement(e.target.value);

  }
  return (
    <div className="App">
        <form onSubmit={formHandler}>
          <label htmlFor="city">Enter A City</label>
          <input onChange={inputHandler} value={inputelement} id="city" >
          </input>
          <button>submit</button>
          
           
        </form>
        <ul>
          {
            cities.map((el)=>(
              <li>{el.name}</li>
            ))
          }
        </ul>
        
    </div>
  );
}

export default App;
