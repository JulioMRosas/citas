import React from 'react';

const Form = () => {
  return <>
    <form className='space-y-5'>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="name" className='font-semibold'>Nombre del paciente</label>
            <input type="text" placeholder='Introduzca su nombre' id='name' className='p-2 rounded-md bg-[#470d0db4]'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="age" className='font-semibold'>Edad del paciente</label>
            <input type="text" placeholder='Introduzca su nombre' id='age' className='p-2 rounded-md bg-[#470d0db4]'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="phone" className='font-semibold'>Teléfono del paciente</label>
            <input type="text" placeholder='Introduzca su nombre' id='phone' className='p-2 rounded-md bg-[#470d0db4]'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="symptoms" className='font-semibold'>Síntomas del paciente</label>
            <textarea type="text" placeholder='Introduzca su nombre' id='symptoms' className='p-2 rounded-md resize-none bg-[#470d0db4]'/>
        </div>
        <div>
            <button className='text-white bg-[#470d0de7] mt-2 p-2 rounded-md'>Nueva Cita</button>
        </div>
    </form>
  </>
}

export default Form;