import React from 'react'

export const schools = ["School of Arts & Aesthetics", "School of Biotechnology", "School of Computational and Integrative Sciences",
    "School of Computer and Systems Sciences", "School of Engineering", "School of Environmental Sciences", "School of International Studies", "School of Language Literature and Culture Studies",
    "School of Life Sciences", "Atal Bihari Vajpayee School of Management and Entrepreneurship", "School of Indian Traditional Music and Dance",
    "School of Physical Sciences", "School of Sanskrit and Indic Studies", "School of Social Sciences", "Centre for the Study of Law and Governance",
    "Special Centre for Disaster Research", "Special Centre for E-Learning", "Special Centre for Molecular Medicine", "Special Centre for Nanoscience",
    "Special Centre for National Security Studies", "Special Centre for Systems Medicine", "Special Centre for the Study of North East India"]
export const Form1 = (props) => {
    return (
            <form className='h-full w-full grid grid-rows-6 place-items-center'>
                <span className="row-span-2 text-2xl font-semibold">Jawaharlal Nehru University</span>
                <div className='row-span-2 flex flex-col gap-1'>
                    <span className='text-sm text-blue-500'>School/Centre*</span>
                <select name="School" className='outline-none p-2 rounded-md'>
                    <option className='font-semibold'>School/Centre</option>
                    {schools.map((option, index) => {
                        return <option key={index}>{option}</option>
                    })}
                </select>   
                </div>
                <button type="submit" className="px-3 py-2 text-white rounded-lg bg-[#4e299e] font-semibold transition duration-150 hover:scale-105 row-span-1">Next</button>
            </form>
    )
}
