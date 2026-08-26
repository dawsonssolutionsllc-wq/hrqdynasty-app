from backend.dynasty import DYNASTY_REGISTRY, House

@router.get("/dynasty", response_model=list[House])
async def get_dynasty():
    return DYNASTY_REGISTRY
