from fastapi import APIRouter, HTTPException
from app.schemas.example import PromptRequest, PlanoAulaSchema
from app.services.ai_service import generate_answer

router = APIRouter(prefix="/generate", tags=["IA"])


@router.post("/", response_model=PlanoAulaSchema)
def generate(data: PromptRequest):
    try:
        return generate_answer(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
