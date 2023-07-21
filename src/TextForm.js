import React, {useState} from "react";



export function TextForm(props) {

    const [text , setText] = useState("");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
       

    }

    const handleLowerClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnchange = (event) =>{
        setText(event.target.value);
      
    }
    
  const handleClearText = () => {
     setText("");
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label m-4">
              <h2>Enter the text to analyze below</h2>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              onChange={handleOnchange} 
              value={text}
            ></textarea>
            <div class="col-auto m-2">
              <button disabled={text.length===0}  type="submit"  onClick={handleUpClick} class="btn btn-primary mb-3 mx-1">
                Convert Uppercase
              </button>
              <button disabled={text.length===0}  type="submit"  onClick={handleLowerClick} class="btn btn-primary mb-3 mx-1 ">
                Convert Lowercase
              </button>
              <button disabled={text.length===0}  type="submit"  onClick={handleClearText} class="btn btn-primary mb-3 mx-1">
                Clear Text
              </button>
            </div>
          </div>
        </form>
        <div>
            <h3>Your Text Summary</h3>
          <p>{text.split(/\s+/).filter((element) => { return  element.length !== 0}).length} word and {text.length} charector</p>
          <p>{0.008 * text.split(/\s+/).filter((element) => { return  element.length !== 0}).length} minutes to read</p>
           <h3>Preview</h3>
           <p>{text.length > 0 ? text : "nothing to preview !"}</p>
        </div>
      </div>
    </> // this is called fragment
  );
}
