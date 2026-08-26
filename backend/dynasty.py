from pydantic import BaseModel
from typing import List

class House(BaseModel):
    id: int
    name: str
    title: str
    region: str
    status: str

DYNASTY_REGISTRY: List[House] = [
    House(id=1, name="HRQ Sovereign House", title="Primary Dynasty", region="Global", status="active"),
    House(id=2, name="HRQ Trenches House", title="Adaptive Line", region="Urban", status="active"),
]
