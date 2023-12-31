import './DateFilter.css';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale/';
import { addMonths } from 'date-fns';

function DateFilter({
  startDate,
  finishDate,
  setStartDate,
  setFinishDate,
  setCurrentPage,
}) {
  function handleOnchangeStart(date) {
    if (!date) {
      setStartDate(null);
      setFinishDate(null);
    }
    setStartDate(date);
    setCurrentPage(1);
  }
  function handleOnchangeFinish(date) {
    if (!date) {
      setStartDate(null);
      setFinishDate(null);
    }
    setFinishDate(date);
    setCurrentPage(1);
  }

  return (
    <div className="dateFilterContainer">
      <div className="datePickerContainer">
        с
        <DatePicker
          selected={startDate}
          onChange={(date) => handleOnchangeStart(date)}
          locale={ru}
          dateFormat="P"
          placeholderText="ДД.ММ.ГГГГ"
          isClearable
        />
      </div>
      <div className="datePickerContainer">
        по
        <DatePicker
          selected={finishDate}
          onChange={(date) => handleOnchangeFinish(date)}
          locale={ru}
          dateFormat="P"
          minDate={startDate}
          maxDate={addMonths(new Date(), 12)}
          showDisabledMonthNavigation
          placeholderText="ДД.ММ.ГГГГ"
          isClearable
        />
      </div>
    </div>
  );
}
export default DateFilter;
