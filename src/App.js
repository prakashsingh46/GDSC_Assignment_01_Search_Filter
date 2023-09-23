import './App.css';
import React, {useState} from 'react'
import dataSearch from './components/dataSearch.js'

function App() {

  const [input, setInput] = useState("")
  const updateValue = (event) => {
            setInput(event.target.value)
  }

    
  return (
    <div style={{background:"rgba(9, 67, 72, 0.966)",color:'rgba(2, 13, 14, 0.966)',minHeight:"100vh"}}>
      <input style={{fontSize:'20px',width:'70%',margin:'30px 210px',padding:'4px',borderRadius:'4px',color:'rgba(2, 13, 14, 0.966)'}} type="text" className="search" placeHolder="search" onChange={updateValue}/>

      <div style={{display:'grid',gridTemplateColumns:'auto auto auto',justifyContent:'center',gap:'70px'}}>
        {
          dataSearch.filter((itm)=>{
            if(input === "") return itm;
            else if(itm.name.toLowerCase().includes(input.toLowerCase())) return itm;
            else if(itm.branch.toLowerCase().includes(input.toLowerCase())) return itm;
            else if(itm.email.toLowerCase().includes(input.toLowerCase())) return itm;
          })
          .map((data,index)=>{
            return(
              <div key={index} style={{border:'2px solid rgba(2, 13, 14, 0.966)',borderRadius:'5px',background:'white',padding:'30px 30px',margin:'10px'}} >
                <div style={{fontSize:'large',fontStyle:'inherit'}}>Name:   {data.name}</div>
                <div>Branch: {data.branch}</div>
                <div>Email:  {data.email}</div>

              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
