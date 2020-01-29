import React, { useState } from 'react';
const axios = require('axios');

function Form(props){
    let [number, setNumber] = useState("random");
    let [type, setType] = useState("trivia");
    let [result, setResult] = useState("");

    function onNumberChanged(e){
        let value = e.target.value.trim();
        if(!value.length){
            setNumber("random"); //default value
        } else {
            setNumber(value);
        }
    }

    function onTypeChanged(e){
        let value = e.target.value.trim();
        if(!value.length){
            setType("trivia"); //default value
        } else {
            setType(value);
        }
    }

    function onSubmit(e){
        e.preventDefault();
        axios.get('http://numbersapi.com/' + number + '/' + type)
            .then(function(response){
                setResult(response.data);
            }).catch(function(e){
                console.log("error", e); //simple error handling
            });
    }

  return (<div className="form-container">
            {result && <span id="result">{result}</span>}
            <form onSubmit={onSubmit}>
            <div>
              <input type="text" name="number" placeholder="Enter a number (Optional)"
                    value={number} onChange={onNumberChanged} />
            </div>
            <div>
              <select name="type" value={type} onChange={onTypeChanged}>
                <option value="trivia">Trivia</option>
                <option value="math">Math</option>
                <option value="date">Date</option>
                <option value="year">Year</option>
              </select>
            </div>
            <button type="submit">Generate</button>
         </form>
  </div>);
}

export default Form;
