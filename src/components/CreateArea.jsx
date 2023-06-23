import React, { useState } from "react";

function CreateArea(props) {
  const [inputs, setInputs] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submmitNote(event) {
    props.noAdd(inputs);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputs.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputs.content}
        />
        <button onClick={submmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
