import React from 'react';

interface Props {
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  recurrenceInterval: number;
  selectedDays: number[];
  onRecurrenceTypeChange: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  onRecurrenceIntervalChange: (interval: number) => void;
  onSelectedDaysChange: (days: number[]) => void;
}

const RecurrenceOptions: React.FC<Props> = ({
  recurrenceType,
  recurrenceInterval,
  selectedDays,
  onRecurrenceTypeChange,
  onRecurrenceIntervalChange,
  onSelectedDaysChange,
}) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="recurrence-type" className="block text-sm font-medium text-gray-700 mb-1">
          Recurrence Type
        </label>
        <select
          id="recurrence-type"
          value={recurrenceType}
          onChange={(e) => onRecurrenceTypeChange(e.target.value as any)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label htmlFor="recurrence-interval" className="block text-sm font-medium text-gray-700 mb-1">
          Recurrence Interval
        </label>
        <input
          id="recurrence-interval"
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => onRecurrenceIntervalChange(parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
        />
      </div>
      {recurrenceType === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Days</label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map((day, index) => (
              <button
                key={day}
                onClick={() => {
                  const newSelectedDays = selectedDays.includes(index)
                    ? selectedDays.filter((d) => d !== index)
                    : [...selectedDays, index];
                  onSelectedDaysChange(newSelectedDays);
                }}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedDays.includes(index)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;