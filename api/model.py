from sqlmodel import SQLModel,Field
from typing import Optional
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()

class Todo(SQLModel, table=True):
    id:Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: str 
    completed: bool
    
conn_str = os.getenv("DATABASE_URL")
engine = create_engine(conn_str)

def create_db():
    SQLModel.metadata.create_all(engine)

if __name__ == "__main__":
    create_db()
