from typing import Union
from pydantic import BaseModel

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


class ItemResponse(BaseModel):
    item_id: int
    q: Union[str, None]


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None) -> ItemResponse:
    return {"item_id": item_id, "q": q}
