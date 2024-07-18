import React, { useState } from 'react';

function AddInput({ addInput }) {
  const [textareaValue, setTextareaValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ingredients = textareaValue.split(',').map((ingredient) => ingredient.trim());
    addInput(ingredients);
    setTextareaValue('');
  };

  return (
    // Add mx-auto to center the form and modify width as needed
    <form className="flex flex-col w-full md:w-1/2 lg:w-1/3 mx-auto" onSubmit={handleSubmit}>
      <label className="text-2xl mt-4 mb-2 font-grandstander font-light text-[#315C2B]" htmlFor="notes-textarea">
        <center> Let's find a dish!</center> 
      </label>
      <textarea
        className="text-xl border border-gray-300 rounded-lg resize-none min-h-44 mb-4 px-4 py-2 font-light font-grandstander bg-[#FAFFFD] text-[#394053]"
        id="notes-textarea"
        name="notes"
        value={textareaValue}
        onChange={(event) => setTextareaValue(event.target.value)}
        placeholder="What's in your pantry? (Separate ingredients with commas)"
      />
      <button className="text-white text-xl font-bold rounded-xl text-center bg-[#315C2B] mb-4 py-2 font-grandstander" type="submit">
        Generate Recipe
      </button>
    </form>
  );
}

export default AddInput;
