# database.py

from databases import Database
from sqlalchemy import create_engine, Column, String, MetaData, Table

DATABASE_URL = "sqlite:///./test.db"  # Change the path and name as needed
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

def get_database():
    return database
