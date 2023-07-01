import React, { useEffect } from 'react'
import {Form, Spinner} from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select'

const CreateEvent = () => {

  const options = [
    { value: 'option1', label: 'Cultural' },
    { value: 'option2', label: 'Food' },
    { value: 'option3', label: 'Sports' },
    { value: 'option4', label: 'Technical' },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [title, setTitle] = useState('');
  const [loc, setLoc] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [seats, setSeats] = useState('');
  const [desc, setDesc] = useState('');
  const [fb, setFb] = useState('');
  const [insta, setInsta] = useState('');
  const [twt, setTwt] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [table, setTable] = useState([]);
  const [column1, setColumn1] = useState('');
  const [column2, setColumn2] = useState('');
  const [banner, setBanner] = useState('');
  const [imgs, setImgs] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const handleAddRow = () => {
    const newRow = {
      column1,
      column2,
    };

    setTable([...table, newRow]);
    setColumn1('');
    setColumn2('');
  };
  const deleteRow = (index) => {
    const updatedTable = [...table];
    updatedTable.splice(index, 1);
    setTable(updatedTable);
  };

  const addBanner = (e) => {
    e.preventDefault();
    setBanner(e.target.files[0]);
    console.log(banner);
  } 

  const addImgs = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setImgs(files);
    console.log(imgs)
  }

  const eventData = {
    imgs,
    name,
    email,
    phone,
    org,
    title,
    loc,
    date,
    hour,
    min,
    seats,
    desc,
    fb,
    insta,
    twt,
    selectedOptions,
    table, 
    banner,
  }

  const createEvt = (e) => {
    e.preventDefault();
    console.log(eventData);
  }

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

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

        <input placeholder='Location' onChange={e => setLoc(e.target.value)} required></input>
        <input placeholder='Date: dd/mm/yyyy' onChange={e => setDate(e.target.value)} required></input>
        <div className='time'>
          <label><h5>Time:</h5></label>
          <input placeholder='23' onChange={e => setHour(e.target.value)} className='time-input' required></input>
          <p>:</p>
          <input placeholder='59' onChange={e => setMin(e.target.value)} className='time-input' required></input>
        </div>
        <div class="ce-file">
          <label>Upload upto 3 images:</label>
          <input type="file" onChange={addImgs} class="custom-file-input" id="customFile" multiple accept='.jpg, .jpeg, .png, .webp, .svg' />
        </div>
        <div class="ce-file">
          <label>Upload event banner:</label>
          <input type="file" onChange={addBanner} class="custom-file-input" id="customFile" required/>
        </div>
        <input placeholder='Number of seats' onChange={e => setSeats(e.target.value)} type='number' min={0} max={99999999}></input>
        <textarea placeholder='Description' onChange={e => setDesc(e.target.value)} maxLength={150} required></textarea>
        <input placeholder='Facebook handle' onChange={e => setFb(e.target.value)}></input>
        <input placeholder='Instagram handle' onChange={e => setInsta(e.target.value)}></input>
        <input placeholder='Twitter handle' onChange={e => setTwt(e.target.value)}></input>

        <h3>Competition <strong>Details</strong></h3>

        <input
          type="text"
          placeholder="Event"
          value={column1}
          onChange={(e) => setColumn1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={column2}
          onChange={(e) => setColumn2(e.target.value)}
        />
        <button type="button" onClick={handleAddRow} className='btn btn-primary' style={{ backgroundColor: "#7cb7f6", border: "none", color: "black" }}>
          Add Sub-event
        </button>
        <div>
        <ul className='sub-events-list'>
          {
            table.map((row, index) => (
              <li key={index} onClick={() => deleteRow(index)}>
                {row.column1} - {row.column2}
              </li>
            ))
          }
        </ul>
        </div>

        <br />
        <button className='ce-btn'><strong>Create event</strong></button>
      </form>
    </div>
  )
}

export default CreateEvent