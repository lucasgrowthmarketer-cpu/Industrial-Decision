FROM python:3.11-slim

WORKDIR /app

COPY requirements-prod.txt .
RUN pip install -r requirements-prod.txt

COPY . .

CMD uvicorn server:app --host 0.0.0.0 --port $PORT
