import React from 'react'
import {useState} from 'react'
import { evaluate } from 'mathjs'
import './App.css'

function App() {

    const i =(e)=>{
        setGive([e.target.value]);
    }

    const [give, setGive] = useState(' ');
    const [result, setResult] = useState(" ")
    
    

    return (
        <>
        <div className="asdf">
            <br></br>
            <br></br>
            
           <h2>{result}</h2> 
            <input type="text" name='give' value={give} className='inp' onChange={i} placeholder="Calculator"></input>
            <br></br>
        <div className="Calculator">
          <button type="button" className="button" onClick={()=>{setGive(give+"1")}}>1</button>
              <button type="button" className="button" onClick={()=>{setGive(give+"2")}}>2</button>
                  <button type="button"  className="button" onClick={()=>{setGive(give+"3")}}>3</button>
                     <button type="button" className="button"   onClick={()=>{setGive(give+"%")}}>%</button>
                      
                      
        </div>
      
        <div className="Calculator">
                        <button type="button"  className="button"  onClick={()=>{setGive(give+"4")}} >4</button>
                          <button type="button" className="button"  onClick={()=>{setGive(give+"5")}}    >5</button>
                              <button type="button" className="button"    onClick={()=>{setGive(give+"6")}} >6</button>
                                     <button type="button" className="button"  onClick={()=>{setGive(give+"*")}}>✕</button> 
                                  

                                  
      </div>
      
        <div className="Calculator">
                                <button type="button"  className="button"  onClick={()=>{setGive(give+"7")}}>7</button>
                                      <button type="button" className="button"   onClick={()=>{setGive(give+"8")}}>8</button>
                                          <button type="button"  className="button" onClick={()=>{setGive(give+"9")}}>9</button>
                                              <button type="button"  className="button" onClick={()=>{setGive(give+"-")}}>−</button>
                                                    
                                                     
      </div>
      
        <div className="Calculator">
                                                        <button type="button"  className="button"onClick={()=>{setGive(give+"0")}} >0</button>
                                                            <button type="button"  className="button" onClick={()=>{setGive(give+".")}}>.</button>
                                                                  <button type="button"  className="button" onClick={()=>{setGive(give+"/")}} >/</button>                                                                   
                                                                            <button type="button"  className="button" onClick={()=>{setGive(give+"+")}}>+</button>
      </div>
      
        <div className="Calculator">
                                                              <button type="button"  className="button" onClick={()=>{setGive("")}}>C</button>
                                                                  <button type="button" className="button" onClick={()=>{ setGive(give.slice(0,-1))}} >Undo</button>
                                                                      <button type="button" className="button" onClick={()=>{setResult(evaluate(give))}} >Result</button>
      </div>
      </div>
      </>
    )
}

export default App
