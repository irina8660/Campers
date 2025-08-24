import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Calendar from 'react-calendar';
import { enUS } from 'date-fns/locale';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-hot-toast';
import s from './BookingForm.module.css';

const ArrowIcon = ({ direction }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#121417"
      d="M11.057 26.276a1.333 1.333 0 0 1 0-1.886l8.391-8.391-8.391-8.391a1.333 1.333 0 1 1 1.886-1.886l9.333 9.333a1.333 1.333 0 0 1 0 1.886l-9.333 9.333a1.333 1.333 0 0 1-1.886 0z"
    />
  </svg>
);

const BookingForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const initialValue = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too short').required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    comment: Yup.string(),
    bookingDate: Yup.array()
      .of(Yup.date())
      .required('Date range is required')
      .nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('📤 Booking submitted:', values);
    toast.success('Your booking has been submitted!');
    resetForm();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.general}>
        <h3 className={s.header}>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.inputWrapper}>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Name*"
                aria-label="Name"
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>

            <div className={s.inputWrapper}>
              <Field
                className={s.input}
                type="email"
                name="email"
                placeholder="Email*"
                aria-label="Email address"
              />
              <ErrorMessage name="email" component="div" className={s.error} />
            </div>

            <div className={s.inputWrapper}>
              <input
                className={s.input}
                type="text"
                readOnly
                placeholder="Booking date*"
                aria-label="Booking date range"
                value={
                  values.bookingDate
                    ? `${values.bookingDate[0].toLocaleDateString()} - ${values.bookingDate[1].toLocaleDateString()}`
                    : ''
                }
                onClick={() => setShowCalendar(!showCalendar)}
              />
              {showCalendar && (
                <div className={s.calendarWrapper}>
                  <Calendar
                    locale="en-US"
                    selectRange
                    onChange={(range) => {
                      setFieldValue('bookingDate', range);
                      setShowCalendar(false);
                    }}
                    value={values.bookingDate}
                    className={s.calendar}
                    prevLabel={<ArrowIcon direction="left" />}
                    nextLabel={<ArrowIcon direction="right" />}
                    next2Label={null}
                    prev2Label={null}
                  />
                </div>
              )}
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={s.error}
              />
            </div>

            <div className={s.inputWrapper}>
              <Field
                className={s.input}
                type="text"
                name="comment"
                placeholder="Comment"
                aria-label="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={s.error}
              />
            </div>

            <button
              className={s.button}
              type="submit"
              aria-label="Send booking"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
