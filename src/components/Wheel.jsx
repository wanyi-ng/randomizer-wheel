import React from 'react'
import { useDispatch } from 'react-redux'
import RollButton from './RollButton'
import { TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { deleteWheel } from '../store/reducers/wheelSlice'
import UpdateWheel from './UpdateWheel'

export default function Wheel({ wheel }) {

  const dispatch = useDispatch()

  const handleDeleteWheel = async () => {
    await dispatch(deleteWheel(wheel.id))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card w-96 bg-base-100 shadow-xl h-max drop-shadow-md">
        <div className="card-body flex flex-col justify-between space-y-8 divide-y divide-gray-500">
          <div className='space-y-6 divide-y divide-gray-500'>
            <div className='flex justify-between'>
              <h2 className="card-title">{wheel.name}</h2>
              <div className='space-x-2 '>
                <UpdateWheel wheel={wheel} />
                <button className='btn btn-accent text-accent-content' type='button' aria-label='Delete wheel' onClick={handleDeleteWheel}>
                  <span className='inline-flex justify-center items-center'>
                    <TrashIcon className='w-5 h-5' />
                  </span>
                </button>
              </div>
            </div>
            <ul className='max-h-96 overflow-auto pt-6'>
              {wheel.options.map((option, index) => (
                <li key={`${index}-${wheel.id}`}>{option}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions w-full flex flex-col items-end">
            <RollButton wheelId={wheel.id} />
            <div className="self-start leading-8 w-full">
              <span>Rolled Option: </span>
              <h2 className='font-bold text-2xl tracking-wide'>{wheel.rolledOption}</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}