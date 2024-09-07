import React from 'react'
import {
  format,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isSameMonth,
  isSameDay,
} from 'date-fns'

interface Props {
  startDate: Date | null
  endDate: Date | null
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly'
  recurrenceInterval: number
  selectedDays: number[]
}

const DatePreview: React.FC<Props> = ({
  startDate,
  endDate,
  recurrenceType,
  recurrenceInterval,
  selectedDays,
}) => {
  const generatePreviewDates = () => {
    if (!startDate) return []

    const previewDates: Date[] = []
    let currentDate = new Date(startDate)
    const maxDate = endDate || addMonths(startDate, 3) // Preview up to 3 months if no end date

    while (currentDate <= maxDate) {
      if (recurrenceType === 'daily') {
        previewDates.push(new Date(currentDate))
        currentDate = addDays(currentDate, recurrenceInterval)
      } else if (recurrenceType === 'weekly') {
        const dayOfWeek = currentDate.getDay()
        if (selectedDays.includes(dayOfWeek)) {
          previewDates.push(new Date(currentDate))
        }
        if (dayOfWeek === 6) {
          currentDate = addWeeks(currentDate, recurrenceInterval - 1)
        }
        currentDate = addDays(currentDate, 1)
      } else if (recurrenceType === 'monthly') {
        previewDates.push(new Date(currentDate))
        currentDate = addMonths(currentDate, recurrenceInterval)
      } else if (recurrenceType === 'yearly') {
        previewDates.push(new Date(currentDate))
        currentDate = addYears(currentDate, recurrenceInterval)
      }
    }

    return previewDates
  }

  const previewDates = generatePreviewDates()

  return (
    <div className='date-preview'>
      <h3 className='text-lg font-medium text-gray-900 mb-4'>Preview</h3>
      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <div className='grid grid-cols-7 gap-1 p-2 bg-gray-100'>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className='text-center text-xs font-medium text-gray-500'
            >
              {day}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-7 gap-1 p-2'>
          {previewDates.map((date, index) => (
            <div
              key={index}
              className={`text-center py-1 text-sm ${
                isSameMonth(date, startDate as Date)
                  ? 'text-gray-900'
                  : 'text-gray-400'
              } ${
                isSameDay(date, startDate as Date)
                  ? 'bg-indigo-600 text-white rounded-full'
                  : ''
              }`}
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DatePreview
