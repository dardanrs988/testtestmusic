from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI()

# Add Prometheus metrics
Instrumentator().instrument(app).expose(app)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/v1/health")
def health_check():
    return {"status": "ok"}
