import React from 'react'
import ContactsIcon from '@mui/icons-material/ContactsOutlined';
const Contacts = () => {
  return (
    <div className="flex flex-col w-1/3  p-3 items-center justify-center text-2xl">
    <ContactsIcon style={{width : "50px", height:"50px", color: "#990000"}}/>
<h1 className='text-primary'> Contact Me</h1>
<br/>
<h1 className='font-semibold'>IU Public Health Suvo's Lab  </h1>
<h1>2673 E 7th St</h1>
<h1>Bloomington, IN 46708 </h1>
<h1>Phone: (812) 671 5565</h1>

</div>
  )
}

export default Contacts