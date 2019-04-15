import React, { useState } from 'react';

function Form(props){
    let [number, setNumber] = useState("random");
    let [type, setType] = useState("trivia");

    function onNumberChanged(e){
        setNumber(e.target.value);
    }

    function onTypeChanged(e){
        setType(e.target.value);
    }

  return (<form>
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
         </form>);
}

export default Form;
