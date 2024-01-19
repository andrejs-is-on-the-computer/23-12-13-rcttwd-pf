import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_79nbi9o', 
      'template_x9e9vdp', 
      {
        from_name: form.name,
        to_name: 'Andrejs',
        from_email: form.email,
        to_email: 'andreibic89@gmail.com',
        message: form.message
      },
      'tpuh8s5BRjWdppmiL'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      }) 
  }

  return (
    <div name="contact" className="w-full h-full min-h-screen pt-16 bg-[#44403c] md:grid grid-cols-5">
      
      {/* max-w-[1000px] mx-auto px-12 ml-10 flex flex-col justify-center h-full */}
      <div className='col-span-1 hidden md:flex'></div>
      {/* Form Element */}
      {!loading ? <div className='col-span-3 flex flex-col justify-center 
                                px-6 lg:px-52 sm:px-16'>
        <div className='pt-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00c9af] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>
                        If you would like to get in touch,
                        don't hesitate to contact me using 
                        the form below or send me an email 
                        directly.</p>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full mx-auto">
          <div>
            {/* Header */}
          </div>

          {/* Inputs */}
                <input 
                  className="bg-[#ccd6f6] p-2" 
                  type="text" 
                  placeholder='Name' 
                  name="name"
                  value={form.name}
                  onChange={handleChange} 
                />
                <input 
                  className="my-4 p-2 
                  bg-[#ccd6f6]" 
                  type="email" 
                  placeholder='Email' 
                  name='email' 
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea 
                  className='bg-[#ccd6f6] p-2' 
                  name="message" 
                  rows="10" 
                  placeholder='Message'
                  value={form.message}
                  onChange={handleChange}
                >

                </textarea>
          <button 
            className='group text-white border-2 px-6 py-4 my-4 flex justify-center 
            hover:bg-[#00c9af] hover:border-[#00c9af] hover:text-[#1c1917] hover:font-bold duration-500'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <div className='text-gray-300 py-4'>
          Andrejs Bicevskis,
          <br />
          <span>andreibic89@gmail.com</span>
        </div>
      </div>
      
      : 
      
      <div className='col-span-3 px-6 lg:px-24 md:px-12 sm:px-10'>Loading</div>

      }
      

      <div className='col-span-1 hidden md:flex'></div>

    </div>
  )
}

export default Contact;



// const Contact = () => {
//   return (
//     <div name="contact" className='w-full h-screen bg-[#44403c] px-20
//                                 flex justify-center items-center'>
//         <form method="POST" action="https://getform.io/f/d30334ca-02e2-4133-ac30-c341ea8ca953" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-4'>// Please send me a message :)</p>
//             </div>
//             <input className="bg-[#ccd6f6] p-2" type="text" placeholder='Name' name='name' />
//             <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder='Email' name='email' />
//             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex text-center items-center duration-300'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Contact