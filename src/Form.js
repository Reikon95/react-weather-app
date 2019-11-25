import React from 'react';
function InputForm(props) {
    return (
        <form>
            <label>Enter your city here: </label><input className="form-val" name="city" type="text" placeholder="City"/>
            <button>Submit</button>

        </form>
    )
}

export default InputForm