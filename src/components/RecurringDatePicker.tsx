'use client'

import React from 'react'
import DatePickerComponent from './DatePicker'
import RecurrenceOptions from './RecurrenceOptions'
import DatePreview from './DatePreview'
import {useDatePickerStore} from '../store/datePickerStore'

const RecurringDatePicker: React.FC = () => {
  const {
    startDate,
    endDate,
    recurrenceType,
    recurrenceInterval,
    selectedDays,
    setStartDate,
    setEndDate,
    setRecurrenceType,
    setRecurrenceInterval,
    setSelectedDays,
  } = useDatePickerStore()

  return (
    <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='p-8 space-y-6'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Recurring Date Picker</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-6'>
            <DatePickerComponent
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />
            <RecurrenceOptions
              recurrenceType={recurrenceType}
              recurrenceInterval={recurrenceInterval}
              selectedDays={selectedDays}
              onRecurrenceTypeChange={setRecurrenceType}
              onRecurrenceIntervalChange={setRecurrenceInterval}
              onSelectedDaysChange={setSelectedDays}
            />
          </div>
          <div>
            <DatePreview
              startDate={startDate}
              endDate={endDate}
              recurrenceType={recurrenceType}
              recurrenceInterval={recurrenceInterval}
              selectedDays={selectedDays}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecurringDatePicker
