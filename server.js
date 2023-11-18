const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dagmawitanddagmawit@gmail.com',
    pass: 'Dagmawit@2016',
  },
});

app.post('/submit-booking', async (req, res) => {
  const { eventType, eventDate, eventTime, venue, fullname, email, phoneNumber } = req.body;

  const mailOptions = {
    from: 'dagmawitanddagmawit@gmail.com',
    to: 'dagmawitmogesali@gmail.com',
    subject: 'New Event Booking',
    html: `
      <h1>New Event Booking</h1>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Event Date:</strong> ${eventDate}</p>
      <p><strong>Event Time:</strong> ${eventTime}</p>
      <p><strong>Venue:</strong> ${venue}</p>
      <p><strong>Full Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent:', mailOptions);
    res.status(200).send('Booking submitted successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to submit booking');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
