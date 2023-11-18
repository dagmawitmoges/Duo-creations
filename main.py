from fastapi import FastAPI, Form, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Update this line to allow all methods
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}
@app.post("/submit-booking")
async def submit_booking(request: Request):
    form_data = await request.form()
    print("Form Data:", form_data)  # Add this line for debugging

    eventType = form_data.get("eventType")
    eventDate = form_data.get("eventDate")
    eventTime = form_data.get("eventTime")
    venue = form_data.get("venue")
    fullname = form_data.get("fullname")
    email = form_data.get("email")
    phoneNumber = form_data.get("phoneNumber")
    booking_details = {
        "eventType": eventType,
        "eventDate": eventDate,
        "eventTime": eventTime,
        "venue": venue,
        "fullname": fullname,
        "email": email,
        "phoneNumber": phoneNumber,
    }

    return {  "message": "Booking submitted successfully",  " booking" : booking_details }