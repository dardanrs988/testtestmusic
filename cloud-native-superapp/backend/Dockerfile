# Dockerfile for the FastAPI backend

# 1. Builder Stage (for dependencies)
FROM python:3.11-slim AS builder

# Set the working directory
WORKDIR /app

# Install poetry
RUN pip install poetry

# Copy only the dependency definition files
COPY ./cloud-native-superapp/backend/pyproject.toml ./cloud-native-superapp/backend/poetry.lock* ./cloud-native-superapp/backend/

# Install dependencies into a virtual environment
WORKDIR /app/cloud-native-superapp/backend
RUN poetry config virtualenvs.create false && poetry install --no-root --no-dev


# 2. Runner Stage
FROM python:3.11-slim AS runner

# Set the working directory
WORKDIR /app

# Copy the virtual environment from the builder stage
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy the application source code
COPY ./cloud-native-superapp/backend/src ./src

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
