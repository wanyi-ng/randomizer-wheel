import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import { addWheel } from '../store/reducers/wheelSlice';

export default function AddWheel() {
  const [wheelName, setWheelName] = useState('')
  const [optionInput, setOptionInput] = useState('')
  const [options, setOptions] = useState([])

  const dispatch = useDispatch()

  const handleAddWheel = async () => {
    const id = uuidv4()
    await dispatch(addWheel({id: id, name: wheelName, options: options}))
    setWheelName('');
    setOptions([]);
  }

  const handleAddOption = () => {
    setOptions(prevOptions => [...prevOptions, optionInput]);
    setOptionInput('');
  }

  const handleDeleteOption = (index) => {
    setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
  }

  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            className="mt-6 flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
            aria-label='Create a Wheel'
          >
            <PlusIcon className='w-5 h-5' />
            <span className='ml-2'>Add a Wheel</span>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
          <Dialog.Content className='"data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
            <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>Create a wheel</Dialog.Title>
            <Dialog.Description className='text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal'>Name your wheel and add your options here. Click 'Save' when you're done.</Dialog.Description>
            <fieldset className='mb-[15px] flex items-center gap-5'>
              <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor='name'>Name</label>
              <input
                className="bg-white text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id='name'
                value={wheelName}
                onChange={(e) => setWheelName(e.target.value)}
              />
            </fieldset>
            <fieldset className='mb-[15px] flex items-center gap-5'>
              <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor='name'>Add Option</label>
              <input
                className='bg-white text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                id='option'
                value={optionInput}
                onChange={(e) => setOptionInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddOption()
                  }
                }}
              />
              <button
                className='flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600'
                onClick={handleAddOption}
              >
                <PlusIcon className='w-5 h-5' />
              </button>
            </fieldset>

            {options.length > 0 && (
              <div className=' text-gray-500'>
                <h2 className="text-violet11 font-semibold mb-2">Options:</h2>
                <ul className='max-h-48 overflow-auto space-y-2'>
                  {options.map((option, index) => (
                    <li key={index} className='flex items-center justify-between'>
                      <p >{option}</p>
                      <span className='flex items-center space-x-2'>
                        <button
                          className="p-2 text-violet11 hover:bg-violet4 focus:shadow-violet7 rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                          aria-label='Delete option'
                          onClick={() => handleDeleteOption(index)}
                        >
                          <TrashIcon className='w-4 h-4' />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  onClick={handleAddWheel}
                >
                  Save
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label='Close'
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}