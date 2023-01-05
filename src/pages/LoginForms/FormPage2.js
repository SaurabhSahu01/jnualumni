import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function FormPage2() {
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [currAdd, setCAdd] = useState('');
    const [currloc, setCLoc] = useState('');
    const [currZip, setCZip] = useState('');

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleDobChange = (e) => {
        setDob(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleLocChange = (e) => {
        setLocation(e.target.value);
    }
    const handleCAddChange = (e) => {
        setCAdd(e.target.value);
    }
    const handleCLocChange = (e) => {
        setCLoc(e.target.value);
    }
    const handleCZipChange = (e) => {
        setCZip(e.target.value);
    }

    

    return (

        <div className='flex w-full bg-bgoffwhite items-start h-full mt-10'>
            <div className='bg-[#d2d2d4] self-center m-auto p-10 rounded-2xl w-1/2 mt-10'>
                <div className="App">
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                        <h1 className='text-2xl bold font-bold'> Jawaharlal Nehru University</h1>
                        <hr />
                        <h3 className='text-blue-800'> *Fill in the details to help us verify you </h3>
                        <h1 className='text-blue-800 text-2xl mt-2'>Basic Information</h1>

                        <div className='flex flex-wrap justify-around py-8'>
                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>Gender* :</label>
                                <br />
                                <select defaultValue="Select Gender" className="w-full rounded-lg py-2 px-2 outline-none font-mono" onChange={(e)=>handleGenderChange}>
                                    <option value="0">Select Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                    <option value="4">Prefer not say</option>
                                </select>
                            </div>

                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>Date of Birth* :</label>
                                <br />
                                <input
                                    className="w-full rounded-lg py-2 px-2 outline-none font-mono"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Date of Birth"
                                    name="Dob"
                                    onChange={(e) => { handleDobChange(e) }}
                                    required
                                />
                            </div>
                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>
                                    Current Location* :
                                </label>
                                <br />
                                <input
                                    className="w-full rounded-lg py-2 px-2 outline-none font-mono"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Location"
                                    name="Location"
                                    onChange={(e) => { handleLocChange(e) }}
                                    required
                                />
                            </div>
                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>
                                    Phone Number* :
                                </label>
                                <br />
                                <input
                                    className="w-full rounded-lg py-2 px-2 outline-none font-mono"
                                    type="text"
                                    autoComplete="off"
                                    placeholder=""
                                    name="PhoneNumber"
                                    onChange={(e) => { handlePhoneChange(e) }}
                                    required
                                />
                                <p className='text-xs'>*Ph no will not be visible to others</p>
                            </div>

                        </div>
                        <h1 className='text-blue-800 text-2xl mt-2'>Addresses*</h1>
                        <hr />

                        <div className='flex flex-wrap justify-around py-4 bg-neutral-200 rounded-2xl mt-2'>
                            <div className='p-3 w-full'>
                                <label className='text-blue-800'>Current Address* :</label>
                                <br />
                                <input
                                    className="w-full bg-neutral-200 p-2 outline-none font-mono border-b border-neutral-700"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Current Address"
                                    name="CAdd"
                                    onChange={(e) => { handleCAddChange(e) }}
                                    required
                                />
                            </div>

                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>Current Location* :</label>
                                <br />
                                <input
                                    className="w-full bg-neutral-200 p-2 outline-none font-mono border-b border-neutral-700"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Current Location"
                                    name="CLoc"
                                    onChange={(e) => { handleCLocChange(e) }}
                                    required
                                />
                            </div>

                            <div className='p-3 w-1/2'>
                                <label className='text-blue-800'>Current Pin Code* :</label>
                                <br />
                                <input
                                    className="w-full bg-neutral-200 p-2 outline-none font-mono border-b border-neutral-700"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Current Zip Code"
                                    name="CZip"
                                    onChange={(e) => { handleCZipChange(e) }}
                                    required
                                />
                            </div>

                        </div>
                        <div>
                        <button className='text-blue-800'>+ Add Office Address</button>
                        <br />
                        <button className='text-blue-800'>+ Add Permanent Address</button>
                        <br />
                        <p></p>
                        <p></p>
                        </div>
                        <div className='w-full flex mt-4'>
                            <input type='submit' className="ml-auto text-black rounded-lg p-2 bg-neutral-100 font-semibold transition duration-150 hover:scale-105" value='Previous'></input>
                            <input type='submit' className="ml-2 text-white rounded-lg p-2 bg-[#4e299e] font-semibold transition duration-150 hover:scale-105" value='Submit'></input>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default FormPage2;
