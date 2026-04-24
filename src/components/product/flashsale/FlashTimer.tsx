// import React from 'react'

const FlashTimer = () => {
  return (
    <div className="flex gap-3">
      <div className='border border-slate-300 p-2 rounded'>
        <h4>Days</h4>
        <span className="text-4xl font-bold text-slate-800">00</span>
      </div>
      <div className='border border-slate-300 p-2 rounded'>
        <h4>Hours</h4>
        <span className="text-4xl font-bold text-slate-800">00</span>
      </div>
      <div className='border border-slate-300 p-2 rounded'>
        <h4>Minutes</h4>
        <span className="text-4xl font-bold text-slate-800">00</span>
      </div>
      <div className='border border-slate-300 p-2 rounded'>
        <h4>Seconds</h4>
        <span className="text-4xl font-bold text-slate-800">00</span>
      </div>
    </div>
  );
}

export default FlashTimer
