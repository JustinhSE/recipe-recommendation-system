import { useState, useRef } from 'react';
import Confetti from 'react-dom-confetti';
import Detector from './Images/Detector';

function AddInput({ addInput }: { addInput: (ingredients: string[]) => void }) {
  const [textareaValue, setTextareaValue] = useState('');
  const [confettiActive, setConfettiActive] = useState(false);
  const confettiRef = useRef(null);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const ingredients = textareaValue.split(',').map((ingredient) => ingredient.trim());
    addInput(ingredients);
    setTextareaValue('');
    setConfettiActive(true); // Activate confetti when the button is clicked
    setTimeout(() => setConfettiActive(false), confettiConfig.duration); // Deactivate confetti after the specified duration
  };

  return (
    <form className="flex flex-col w-full md:w-1/2 lg:w-1/3 mx-auto" onSubmit={handleSubmit}>
      <label className="text-2xl mt-4 mb-2 font-grandstander font-light text-[#315C2B]" htmlFor="notes-textarea">
        <center> Let's find a dish! </center> 
      </label>
      <Detector /> 
      <textarea
        className="text-xl border border-gray-300 rounded-lg resize-none min-h-44 mb-4 px-4 py-2 font-light font-grandstander bg-[#FAFFFD] text-[#394053]"
        id="notes-textarea"
        name="notes"
        value={textareaValue}
        onChange={(event) => setTextareaValue(event.target.value)}
        placeholder="What's in your pantry? (Separate ingredients with commas)"
      />
      <div ref={confettiRef}>
      <button className="text-white text-xl font-bold rounded-xl bg-[#315C2B] mb-6 py-4 font-grandstander w-full" type="submit">          
        Generate Recipe
        </button>
        <Confetti active={confettiActive} config={confettiConfig} />
      </div>
    </form>
  );
}

export default AddInput;
