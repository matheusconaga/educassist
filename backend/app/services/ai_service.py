import google.generativeai as genai
import os
import json
from dotenv import load_dotenv
from app.schemas.example import PlanoAulaSchema

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY não encontrada no .env")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_answer(data) -> PlanoAulaSchema:
    try:
        prompt = f"""
Você é um especialista em pedagogia e planejamento educacional, com experiência na elaboração de planos de aula alinhados à educação básica brasileira.

⚠️ REGRAS IMPORTANTES:
- Responda EXCLUSIVAMENTE em JSON VÁLIDO.
- NÃO inclua textos fora do JSON.
- NÃO utilize markdown.
- NÃO utilize emojis.
- Considere EXCLUSIVAMENTE os recursos informados.

📥 DADOS:
- Disciplina: {data.disciplina}
- Nível de escolaridade: {data.nivel_escolaridade}
- Conteúdo: {data.conteudo}
- Objetivo (Macrometa): {data.objetivo}
- Recursos disponíveis: {data.recursos}

📤 FORMATO DE RESPOSTA (OBRIGATÓRIO):
{{
  "unidade_tematica": "",
  "habilidade_meta": "",
  "objeto_de_conhecimento": "",
  "orientacoes_metodologicas": "",
  "criterios_de_avaliacao": ""
}}
"""
        response = model.generate_content(prompt)

        # Gemini retorna texto → converter para dict
        response_json = json.loads(response.text)

        return PlanoAulaSchema(**response_json)

    except json.JSONDecodeError:
        raise ValueError("A IA não retornou um JSON válido")

    except Exception as e:
        raise RuntimeError(f"Erro ao gerar plano de aula: {str(e)}")
