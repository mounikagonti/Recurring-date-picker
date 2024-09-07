'use client'

import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  startDate: Date | null
  endDate: Date | null
  onStartDateChange: (date: Date | null) => void
  onEndDateChange: (date: Date | null) => void
}

const DatePickerComponent: React.FC<Props> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className='space-y-4'>
      <div>
        <label
          htmlFor='start-date'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Start Date:
        </label>
        <DatePicker
          id='start-date'
          selected={startDate}
          onChange={(date: Date | null) => onStartDateChange(date)}
          selectsStart
          startDate={startDate || undefined}
          endDate={endDate || undefined}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        />
      </div>
      <div>
        <label
          htmlFor='end-date'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          End Date (optional):
        </label>
        <DatePicker
          id='end-date'
          selected={endDate}
          onChange={(date: Date | null) => onEndDateChange(date)}
          selectsEnd
          startDate={startDate || undefined}
          endDate={endDate || undefined}
          minDate={startDate || undefined}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        />
      </div>
    </div>
  )
}

export default DatePickerComponent
