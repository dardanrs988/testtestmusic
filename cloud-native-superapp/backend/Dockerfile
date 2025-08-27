# Dockerfile for the FastAPI backend

# 1. Builder Stage for dependencies
FROM python:3.11-slim as builder

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install Poetry
RUN pip install poetry

# Copy only the files needed for dependency installation
COPY pyproject.toml poetry.lock ./

# Install dependencies into a virtual environment
RUN poetry config virtualenvs.create false && \
    poetry install --no-dev --no-root

# 2. Production Stage
FROM python:3.11-slim

WORKDIR /usr/src/app

# Copy the virtual environment from the builder stage
COPY --from=builder /usr/src/app /usr/src/app

# Copy the application source code
COPY ./src ./src

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
