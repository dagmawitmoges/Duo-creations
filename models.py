from sqlalchemy import Column, Integer, String
from database import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    eventType = Column(String, index=True)
    eventDate = Column(String)
    eventTime = Column(String)
    venue = Column(String)
    fullName = Column(String)
    email = Column(String)
    phoneNumber = Column(String)
