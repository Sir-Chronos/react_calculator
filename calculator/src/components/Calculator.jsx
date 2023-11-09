'use client';
import React, { useState } from 'react';


export default function Calculator() {

    const [displayText, setDisplayText] = useState('0'); // Estado inicial

    const handleButtonClick = (text) => {
    // Atualize o estado com o texto do botão clicado
    if(displayText != '0'){
        setDisplayText(displayText + text);
    }
    else{
        setDisplayText(text)
    }
    };

    const delText = () =>{
        setDisplayText('0')
    }

    const calculate = () => {
        try {
          const result = eval(displayText); // Avalia a expressão matemática
          setDisplayText(result.toString());
        } catch (error) {
          setDisplayText('Erro');
        }
      };

  return (
    <div className='flex flex-col gap-4 items-center bg-[#868686] w-[25%] h-[80%]'>

        <div className='flex items-center justify-end p-3 mt-4 bg-[#414141] h-[10%] w-[90%]'>
            <p className='text-3xl'>{displayText}</p>
        </div>

        <div className=' grid grid-cols-4 grid-rows-5 gap-4 p-4 w-[90%] h-[80%] bg-[#414141]'>
            <button onClick={() => handleButtonClick('7')} className='bg-[black] p-4'>7</button>
            <button onClick={() => handleButtonClick('8')} className='bg-[black] p-4'>8</button>
            <button onClick={() => handleButtonClick('9')} className='bg-[black] p-4'>9</button>
            <button onClick={() => delText()} className='bg-[#f74545] p-4'>del</button>
            <button onClick={() => handleButtonClick('4')} className='bg-[black] p-4'>4</button>
            <button onClick={() => handleButtonClick('5')} className='bg-[black] p-4'>5</button>
            <button onClick={() => handleButtonClick('6')} className='bg-[black] p-4'>6</button>
            <button onClick={() => handleButtonClick('/')} className='bg-[blue] p-4'>/</button>
            <button onClick={() => handleButtonClick('1')} className='bg-[black] p-4'>1</button>
            <button onClick={() => handleButtonClick('2')} className='bg-[black] p-4'>2</button>
            <button onClick={() => handleButtonClick('3')} className='bg-[black] p-4'>3</button>
            <button onClick={() => handleButtonClick('*')} className='bg-[blue] p-4'>*</button>
            <button onClick={() => handleButtonClick('0')} className='bg-[black] p-4'>0</button>
            <button onClick={() => handleButtonClick(',')} className='bg-[black] p-4'>,</button>
            <button onClick={() => handleButtonClick('+')} className='bg-[blue] p-4'>+</button>
            <button onClick={() => handleButtonClick('-')} className='bg-[blue] p-4'>-</button>
            <button onClick={() => calculate()} className='bg-[#999987] p-4'>=</button>

        </div>
    </div>
  )
}
