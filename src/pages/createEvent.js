import React from 'react'
import { useEffect } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { addEvent, reset } from '../reduxFeatures/event/eventSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateEvent = () => {

  const options = [
    {  value: 'Cultural', label: 'Cultural' },
    {  value: 'Food', label: 'Food'},
    {  value: 'Sports', label: 'Sports' },
    {  value: 'Technical', label: 'Technical' },
  ]; 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [title, setTitle] = useState('');
  const [loc, setLoc] = useState('');
  const [date, setDate] = useState('');
  // const [hour, setHour] = useState('');
  // const [min, setMin] = useState('00');
  const [seats, setSeats] = useState('');
  const [desc, setDesc] = useState('');
  const [fb, setFb] = useState('');
  const [insta, setInsta] = useState('');
  const [twt, setTwt] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [banner, setBanner] = useState('');
  const [imgs, setImgs] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [eventName, setEventName] = useState();
  const [price, setPrice] = useState();
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleChange = (selected) => {
    setSelectedOptions(selected);
    console.log(selectedOptions);
  };

  const addBanner = (e) => {
    e.preventDefault();
    setBanner(e.target.files[0]);
  }

  const addImgs = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setImgs(files);
  }

  


const { isLoading, isSuccess, isError } = useSelector((state) => state.event);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createEvt = (e) => {
    e.preventDefault();
    const eventData = new FormData();
    const socials = {
      fb: fb,
      insta: insta,
      twt: twt
    }
    eventData.set('name', name);
    eventData.set('email', email);
    eventData.set('phone', phone);
    eventData.set('org', org);
    eventData.set('eventTitle', title);
    eventData.set('desc', desc);

    for (let i = 0; i < imgs.length; i++) {
      eventData.set('imgs', imgs[i]);
    }

    eventData.set('banner', banner);
    eventData.set('date', date);
    eventData.set('time', selectedTime);
    // eventData.set('hour', hour);
    // eventData.set('min', min);

    const selectedValues = selectedOptions.map(selectedOption => selectedOption.value);
    eventData.set('eventType', selectedValues);

    eventData.set('eventTable', JSON.stringify(eventsList));
    eventData.set('socials', JSON.stringify(socials));
    eventData.set('seats', seats);
    eventData.set('location', loc);
    dispatch(addEvent(eventData));
  }

  useEffect(() => {
    if(isSuccess){
      dispatch(reset());
      navigate('/');
      toast.success('Event created successfully!');
    }
    if(isError){
      dispatch(reset());
      toast.error('Event initialisation failed.');
    }
  }, [dispatch, isError, isSuccess, navigate]);

useEffect(() => {
  console.log(selectedTime);

}, [selectedTime]);

  const addEv = (e) => {
    e.preventDefault();
    const newEvent = {
      "event": eventName,
      "price": price
    };
    setEventsList([...eventsList, newEvent]);
    setEventName('');
    setPrice('');
  };


const delEvent = (index) => {
  const updatedList = eventsList.filter((item, i) => i !== index);
  setEventsList(updatedList);
};

const handleDateChange = (date) => {
  setDate(date);
}



  useEffect(() => {
    console.log(selectedOptions);
    console.log(eventsList);
  }, [selectedOptions, eventsList]);

  if(isLoading){
    return <Spinner/>;
  }
  return (
    
    <div className='ce-main-div'>
      <form onSubmit={createEvt}>
        <h3>Personal <strong>Details</strong></h3>
        <input placeholder='Name' onChange={e => setName(e.target.value)} required></input>
        <input placeholder='Email' onChange={e => setEmail(e.target.value)} required></input>
        <input placeholder='Phone Number' onChange={e => setPhone(e.target.value)}></input>
        <input placeholder='Company/College/Organization' onChange={e => setOrg(e.target.value)} required></input>

        <h3>Event <strong>Details</strong></h3>
        <input placeholder='Title' onChange={e => setTitle(e.target.value)} required></input>
        <br/>
        <textarea placeholder='Description' onChange={e => setDesc(e.target.value)} maxLength={150} required></textarea>

        <Form.Group>
          {/* <Form.Label>Event type</Form.Label> */}
          <Select
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Select event type"
          />
        </Form.Group>

        <textarea placeholder='Location' onChange={e => setLoc(e.target.value)} required />
        {/* <input placeholder='Date: dd/mm/yyyy' onChange={e => setDate(e.target.value)} required></input> */}
        <DatePicker selected={date} onChange={handleDateChange} dateFormat='dd-MM-yyyy' placeholderText='Date: dd/mm/yyyy'/>
        {/* <div className='time'>
          <label><h5>Time:</h5></label>
          <input placeholder='23' onChange={e => setHour(e.target.value)} className='time-input' required></input>
          <p>:</p>
          <input placeholder='59' onChange={e => setMin(e.target.value)} className='time-input' required></input>
        </div> */}
        <div>
      <label htmlFor="time">Select a time:</label>
      <input
        type="time"
        id="time"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      <p>Selected time: {selectedTime}</p>
    </div>



        <div class="ce-file">
          <label>Upload upto 3 images:</label>
          <input type="file" onChange={addImgs} class="custom-file-input" id="customFile" multiple accept='.jpg, .jpeg, .png, .webp, .svg' />
        </div>
        <div class="ce-file">
          <label>Upload event banner:</label>
          <input type="file" onChange={addBanner} class="custom-file-input" id="customFile" required />
        </div>
        <input placeholder='Number of seats' onChange={e => setSeats(e.target.value)} type='number' min={0} max={99999999}></input>
        <input placeholder='Facebook handle' onChange={e => setFb(e.target.value)}></input>
        <input placeholder='Instagram handle' onChange={e => setInsta(e.target.value)}></input>
        <input placeholder='Twitter handle' onChange={e => setTwt(e.target.value)}></input>

        <h3>Competition <strong>Details</strong></h3>

        <input
          type="text"
          placeholder="Event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className='btn btn-primary' onClick={addEv} style={{ backgroundColor: "#7cb7f6", border: "none", color: "black" }}>
          Add Sub-event
        </button>

        <div className='container'>
          <table className='table table-striped'>
          <thead>
          <tr>
            <th>Event</th>
            <th>Price</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            {
              eventsList.map((item, index) => (
              <tr key={index}>
              <td>{item.event}</td>
              <td>{item.price}</td>
              <td><button className='btn btn-danger btn-sm' onClick={
                (e) => {
                  e.preventDefault();
                  delEvent(index);
                }
                }>x</button></td>
            </tr>
              ))
            }
          </tbody>
          </table>
        </div>

        <br />
        <button className='ce-btn'><strong>Create event</strong></button>
      </form>
    </div>
  )
}

export default CreateEvent