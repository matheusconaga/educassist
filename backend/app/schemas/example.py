from pydantic import BaseModel

class PromptRequest(BaseModel):
    disciplina: str
    nivel_escolaridade: str
    conteudo: str
    objetivo: str
    recursos: str

    
class PlanoAulaSchema(BaseModel):
    unidade_tematica: str
    habilidade_meta: str
    objeto_de_conhecimento: str
    orientacoes_metodologicas: str
    criterios_de_avaliacao: str

