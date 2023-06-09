import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

function TestPage() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handleCalculateRange = () => {
        if (startDate && endDate) {
          console.log(startDate)
          const start = new Date(startDate);
          console.log(start)
          const end = new Date(endDate);
    
          // Set both dates to the same time to compare only the dates
          start.setHours(0, 0, 0, 0);
          console.log(start.setHours(0, 0, 0, 0))
          end.setHours(0, 0, 0, 0);
    
          const difference = Math.abs(end - start);
          const rangeNights = Math.ceil(difference / (1000 * 60 * 60 * 24));
          console.log('Number of nights:', rangeNights);
        } else {
          console.log('Please select both start and end dates.');
        }
      };

      const [selectedSeats, setSelectedSeats] = useState([]);
      const [takenSeats] = useState(['A1', 'B3', 'C5']); // Example of taken seats
    
      const handleSeatClick = (seat) => {
        if (!takenSeats.includes(seat) && selectedSeats.length < 1) {
          const isSelected = selectedSeats.includes(seat);
          if (isSelected) {
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
          } else {
            setSelectedSeats([...selectedSeats, seat]);
          }
        }
      };


    
      const renderSeats = () => {
        const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
        const cols = [1, 2, 3, 4, 5, 6];
        const seatMap = [];
    
        for (let row of rows) {
          for (let col of cols) {
            const seat = `${row}${col}`;
            const isSelected = selectedSeats.includes(seat);
            const isTaken = takenSeats.includes(seat);
    
            seatMap.push(
              <div
                key={seat}
                className={`seat ${isSelected ? 'selected' : ''} ${isTaken ? 'taken' : ''}`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            );
          }
        }
    
        return seatMap;
      };


  return (
    <div className='flex flex-col'>
        <div className='border'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </LocalizationProvider>
          <button onClick={handleCalculateRange}>Calculate Range</button>
        </div>
        <div>
        <div className="seat-selection">
      <h2 className="text-xl font-bold mb-4">Select your seats (maximum 3)</h2>
      <div className="seat-map grid grid-cols-6 gap-4">
        {renderSeats()}
      </div>
      <div className="selected-seats mt-4">
        <h3 className="text-lg font-bold mb-2">Selected Seats:</h3>
        {selectedSeats.length > 0 ? (
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
    </div>
        </div>
    </div>
  )
}

export default TestPage