from fastapi import FastAPI,Depends
import os 
from sqlalchemy import create_engine
from dotenv import load_dotenv
from sqlmodel import SQLModel,Field,Session, select
from typing import Optional, Annotated
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
conn_str = os.getenv("DATABASE_URL")
engine = create_engine(conn_str)

class Todo(SQLModel, table=True):
    id:Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: str 
    completed: bool
class TodoCreate(SQLModel):
    name: str
    description: str
    completed: bool
class TodoResponse(SQLModel):
    id:int
    name:str
    description:str
    
def get_data():
    with Session(engine) as session:
        yield session
app = FastAPI(title="Hello World API",  description="a todo app API",
    version="0.1.0",
    
    # servers=[
    #     {
    #         "url": "http://localhost:8000/", 
    #         "description": "Development Server"
    #     }
    #     ]
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

@app.get("/")
def hello_world():
    return {"message":"Hello World"}
@app.get("/api/todo")
def get_todo(session:Annotated[Session,Depends(get_data)]): 
    todo=session.exec(select(Todo)).all()
    return todo

@app.post("/todo/add", response_model=TodoResponse)
def add_todo(todo:TodoCreate,session:Annotated[Session,Depends(get_data)]):
    todo_add=Todo.model_validate(todo)
    session.add(todo_add)
    session.commit()
    session.refresh(todo_add)
    return todo_add

@app.delete("/todo/delete/{id}", response_model=TodoResponse)
def delete_todo(id:int,session:Annotated[Session, Depends(get_data)]):
    todo_delete=session.get(Todo,id)
    if not todo_delete:
        return {"messege":"Todo not found"}
    session.delete(todo_delete)
    session.commit()
    return todo_delete
@app.put("/todo/update/{id}", response_model=TodoResponse)
def update_todo(id:int, todo:TodoCreate, session:Annotated[Session, Depends(get_data)]):
    todo_update=session.get(Todo, id)
    if not todo_update:
        return {"messege":"Todo not found"}
    todo_update.name=todo.name 
    todo_update.description = todo.description      
    session.commit()
    session.refresh(todo_update)                  