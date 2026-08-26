import json
import os
from core.embeddings import embed

MEMORY_FILE = "memory.store.json"

def get_memory():
    if not os.path.exists(MEMORY_FILE):
        return []
    try:
        with open(MEMORY_FILE, "r") as f:
            return json.load(f)
    except:
        return []

def add_memory(entry):
    entry["embedding"] = embed(str(entry))
    memory = get_memory()
    memory.append(entry)
    with open(MEMORY_FILE, "w") as f:
        json.dump(memory, f, indent=4)
