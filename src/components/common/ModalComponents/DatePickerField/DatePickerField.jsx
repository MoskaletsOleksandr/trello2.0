import React, { forwardRef, useState } from 'react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({ name, ...rest }) => {
  const [field, meta, helpers] = useField(name);
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      {...field}
      {...rest}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(date) => setStartDate(date)}
      customInput={
        <ExampleCustomInput
          value={startDate}
          onClick={(date) => setStartDate(date)}
        />
      }
    />
  );
};
