import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

function FormPage1() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [program, setProgram] = useState('');
  const [school, setSchool] = useState('');
  const [joinYear, setJoin] = useState('');
  const [gradYear, setGrad] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  }

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  const handleJoinChange = (e) => {
    setJoin(e.target.value);
  }

  const handleGradChange = (e) => {
    setGrad(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/loginPage2");
  }

  return (

    <div className='flex w-full bg-bgoffwhite items-start h-full mt-10'>
      <div className='bg-[#d2d2d4] self-center m-auto p-10 rounded-2xl w-1/2 mt-10'>
        <div className="App">
          <form onSubmit={(e) => handleSubmit}>
            <h1 className='text-2xl bold font-bold'> Jawaharlal Nehru University</h1>
            <hr />
            <h3 className='text-blue-800'> *Fill in the details to help us verify you </h3>
            <div className='flex flex-wrap justify-around py-8'>
              <div className='p-3'>
                <label className='text-blue-800'>Role* :</label>
                <br />
                <input
                  className=" rounded-lg py-2 px-2 outline-none font-mono"
                  type="text"
                  autoComplete="off"
                  placeholder="Select Role"
                  name="Role"
                  onChange={(e) => { handleRoleChange(e) }}
                  required
                />
              </div>

              <div className='p-3'>
                <label className='text-blue-800'>Program* :</label>
                <br />
                <input
                  className=" rounded-lg py-2 px-2 outline-none font-mono"
                  type="text"
                  autoComplete="off"
                  placeholder="Select Program"
                  name="Role"
                  onChange={(e) => { handleProgramChange(e) }}
                  required
                />
              </div>
              <div className='p-3'>
                <label className='text-blue-800'>
                  School/Centre* :
                </label>
                <br />
                <input
                  className=" rounded-lg py-2 px-2 outline-none font-mono"
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  name="Role"
                  onChange={(e) => { handleSchoolChange(e) }}
                  required
                />
              </div>
              <div className='p-3'>
                <label className='text-blue-800'>
                  Year of joining* :
                </label>
                <br />
                <input
                  className=" rounded-lg py-2 px-2 outline-none font-mono"
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  name="Role"
                  onChange={(e) => { handleJoinChange(e) }}
                  required
                />
              </div>
              <div className='p-3'>
                <label className='text-blue-800'>
                  Year of Graduation* :
                </label>
                <br />
                <input
                  className=" rounded-lg py-2 px-2 outline-none font-mono"
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  name="Role"
                  onChange={(e) => { handleGradChange(e) }}
                  required
                />
              </div>

            </div>
            <div className='w-full flex '>
              <input type='submit' className="ml-auto text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105" value='Submit'></input>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default FormPage1;
