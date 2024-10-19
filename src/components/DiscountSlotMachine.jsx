// DiscountSlotMachine.js
import React, { useState } from 'react';
import SlotCounter from 'react-slot-counter'; // Import the slot counter library
import './DiscountSlotMachine.css'; // Import custom CSS file for styling

const DiscountSlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [slot1, setSlot1] = useState(0);
  const [slot2, setSlot2] = useState(0);
  const [slot3, setSlot3] = useState(0);
  const [discount, setDiscount] = useState(null);

  const spinSlots = () => {
    if (spinning) return;

    setSpinning(true);

    // Generate random numbers between 1 and 9 for each slot
    const newSlot1 = Math.floor(Math.random() * 9) + 1;
    const newSlot2 = Math.floor(Math.random() * 9) + 1;
    const newSlot3 = Math.floor(Math.random() * 9) + 1;

    setSlot1(newSlot1);
    setSlot2(newSlot2);
    setSlot3(newSlot3);

    // Calculate the discount percentage after a delay
    setTimeout(() => {
      setDiscount(newSlot1 + newSlot2 + newSlot3);
      setSpinning(false);
    }, 2000); // Simulating a spin duration of 2 seconds
  };

  return (
    <div className="slot-machine-container">
        
      <h1>Discount Spinner</h1>
      <h2>Spin the Slots to Get Your Discount!</h2>
      <div className="slot-wrapper">
        <div className="slot-frame">
          <SlotCounter className="slot-counter" value={slot1} />
        </div>
        <div className="slot-frame">
          <SlotCounter className="slot-counter" value={slot2} />
        </div>
        <div className="slot-frame">
          <SlotCounter className="slot-counter" value={slot3} />
        </div>
      </div>
      <button
        className={`spin-button ${spinning ? 'disabled' : ''}`}
        onClick={spinSlots}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin'}
      </button>

      {discount !== null && !spinning && (
        <div className="discount-result">
          🎉 You won a {discount}% discount! 🎉
        </div>
      )}
    </div>
  );
};

export default DiscountSlotMachine;
