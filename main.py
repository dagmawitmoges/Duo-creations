# main.py

from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, String, MetaData, Table
from databases import Database
from database import get_database  # Import get_database function
import uuid
app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "sqlite:///./test.db"
database = Database(DATABASE_URL)

metadata = MetaData()

bookings = Table(
    "bookings",
    metadata,
    Column("id", String, primary_key=True),
    Column("eventType", String),
    Column("eventDate", String),
    Column("eventTime", String),
    Column("venue", String),
    Column("fullname", String),
    Column("email", String),
    Column("phoneNumber", String),
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)
@app.post("/submit-booking")
async def submit_booking(request: Request, db: Database = Depends(get_database)):
    try:
        form_data = await request.form()

        # Generate a unique ID
        booking_id = str(uuid.uuid4())

        eventType = form_data.get("eventType")
        eventDate = form_data.get("eventDate")
        eventTime = form_data.get("eventTime")
        venue = form_data.get("venue")
        fullname = form_data.get("fullname")
        email = form_data.get("email")
        phoneNumber = form_data.get("phoneNumber")

        booking_details = {
            "id": booking_id,
            "eventType": eventType,
            "eventDate": eventDate,
            "eventTime": eventTime,
            "venue": venue,
            "fullname": fullname,
            "email": email,
            "phoneNumber": phoneNumber,
        }

        # Store data in SQLite database
        query = bookings.insert().values(**booking_details)
        await db.execute(query)

        return {"message": "Booking submitted successfully", "booking": booking_details}
    except Exception as e:
        print(f"Error submitting booking: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

@app.get("/get-bookings")
async def get_bookings(db: Database = Depends(get_database)):
    query = bookings.select()
    result = await db.fetch_all(query)
    return result

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
