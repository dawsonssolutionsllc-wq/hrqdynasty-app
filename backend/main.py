from fastapi import FastAPI
from backend.dynasty import DYNASTY_REGISTRY, House

app = FastAPI()

@app.get("/dynasty", response_model=list[House])
async def get_dynasty():
    return DYNASTY_REGISTRY
