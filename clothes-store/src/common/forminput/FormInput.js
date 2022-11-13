import {useState} from 'react'
import "./FormInput.css"


const FormInput =(props)=>{
    const [focused, setFocused] = useState(false);
    const { errormessage,onChange,id,...inputProps} = props;
    const handleFocused = (e) =>{   
        setFocused(true);
      }
    return(
        <div className="from_group" >
            <input className="from_input" {...inputProps} onChange={onChange} onBlur={handleFocused} focused={focused.toString()}/>
            <span className="error_message">{errormessage}</span>
        </div>
    )
}
export default FormInput;