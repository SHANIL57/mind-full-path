import { useState } from 'react';
import { Calendar, Clock, Video, CreditCard } from 'lucide-react';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ selectedDate, selectedTime });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Book Your Session</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose your preferred date and time for a video counseling session
          </p>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <div className="mt-1 relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <div className="mt-1 grid grid-cols-2 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                        selectedTime === time
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'border-gray-300 text-gray-700 hover:border-purple-500'
                      }`}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900">Session Details</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Video className="h-5 w-5 mr-2" />
                    <span>60-minute video session</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-5 w-5 mr-2" />
                    <span>$80 per session</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Counseling"
            className="rounded-lg shadow-xl"
          />
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">What to Expect</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-purple-600">•</span>
                <span>Professional and confidential environment</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-purple-600">•</span>
                <span>Licensed and experienced counselors</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-purple-600">•</span>
                <span>Secure video platform</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-purple-600">•</span>
                <span>Follow-up resources and support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}