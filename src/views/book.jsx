// import React, { useState } from 'react';
// import imageFour from "../assets/bg5.jpg";
// import FadeIn from "../components/FadeIn";

// const Care = () => {
//   const [eventType, setEventType] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [venue, setVenue] = useState('');
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3001/submit-booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           eventType,
//           eventDate,
//           eventTime,
//           venue,
//           fullname,
//           email,
//           phoneNumber,
//         }),
//       });

//       if (response.ok) {
//         console.log('Booking submitted successfully');
//       } else {
//         console.error('Failed to submit booking');
//       }
//     } catch (error) {
//       console.error('Error submitting booking:', error);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px', background: '#f4f4f4' }}>
//       <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Event Booking</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <form onSubmit={handleSubmit} style={{ marginRight: '20px', maxWidth: '600px', width: '100%', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Full Name:
//             </label>
//             <input
//               type="text"
//               value={fullname}
//               onChange={(e) => setFullname(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Email:
//             </label>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Phone Number:
//             </label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Event Type:
//             </label>
//             <input
//               type="text"
//               value={eventType}
//               onChange={(e) => setEventType(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Event Date:
//             </label>
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Event Time:
//             </label>
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
//               Venue:
//             </label>
//             <input
//               type="text"
//               value={venue}
//               onChange={(e) => setVenue(e.target.value)}
//               style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//           </div>

//           <button type="submit" style={{ background: 'black', color: 'white', padding: '12px', border: 'none', cursor: 'pointer', width: '100%', borderRadius: '4px' }}>
//             Submit Booking
//           </button>
//         </form>

//         <FadeIn delay={0.6} direction="right">
//           <img src={imageFour} alt="plants" style={{ maxHeight: '700px', width: '700px', borderRadius: '60px', marginLeft: '20px' }} />
//         </FadeIn>
//       </div>
//     </div>
//   );
// };

// export default Care;





import React, { useState } from 'react';
import axios from 'axios';
import imageFour from "../assets/bg5.jpg";
import FadeIn from "../components/FadeIn";
const Care = () => {
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [venue, setVenue] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        formData.append('eventType', eventType);
        formData.append('eventDate', eventDate);
        formData.append('eventTime', eventTime);
        formData.append('venue', venue);
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);

        const response = await fetch('http://localhost:8000/submit-booking', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Booking submitted successfully');
        } else {
            console.error('Failed to submit booking');
        }
    } catch (error) {
        console.error('Error submitting booking:', error);
    }
};




  

  return (
        

<div style={{ textAlign: 'center', padding: '20px', background: '#f4f4f4' }}>
      <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Event Booking</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form action="http://localhost:8000/submit-booking" method="post" onSubmit={handleSubmit} style={{ marginRight: '20px', maxWidth: '600px', width: '100%', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Full Name:
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Phone Number:
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Event Type:
            </label>
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Event Date:
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Event Time:
            </label>
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label style={{ flex: '1', marginRight: '10px', textAlign: 'left' }}>
              Venue:
            </label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              style={{ flex: '2', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <button
  type="submit" 
  style={{
    background: 'black',
    color: 'white',
    padding: '12px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    borderRadius: '4px'
  }}
>
  Submit Booking
</button>



        </form>

        <FadeIn delay={0.6} direction="right">
          <img src={imageFour} alt="plants" style={{ maxHeight: '700px', width: '700px', borderRadius: '60px', marginLeft: '20px' }} />
        </FadeIn>
      </div>
    </div>

  );
};

export default Care;
