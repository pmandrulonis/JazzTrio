import React from 'react';
import { useEffect, useState } from "react"
import axios from "axios";



function MainSection(){
    let [data, setData] = useState("");
    useEffect(() => {
        axios.get("http://52.23.222.139:1337/api/homepage")
          .then((response) => {
            setData(response.data.data.attributes)
            console.log(response);
          }).catch(err => {
            console.error("Error fetching data.");
       });
      }, []);
    return (<header>
        <div className="MainInfo">
        </div>
        <div className="AboutTim"> 
          <h1>
            Tim Andrulonis Jazz Trio
          </h1>
        </div>
      </header>)
    
}

export default MainSection;