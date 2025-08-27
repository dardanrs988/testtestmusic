# Makefile for Cloud-Native SuperApp

.PHONY: help build-frontend build-backend run-frontend run-backend test-frontend test-backend lint-frontend lint-backend

help:
	@echo "Available commands:"
	@echo "  make build-frontend   - Build the frontend Docker image"
	@echo "  make build-backend    - Build the backend Docker image"
	@echo "  make run-frontend     - Run the frontend service locally"
	@echo "  make run-backend      - Run the backend service locally"
	@echo "  make test-frontend    - Run frontend tests"
	@echo "  make test-backend     - Run backend tests"
	@echo "  make lint-frontend    - Lint the frontend code"
	@echo "  make lint-backend     - Lint the backend code"

# Frontend commands
build-frontend:
	docker build -t frontend:latest -f frontend/Dockerfile .

run-frontend:
	cd frontend && npm run dev

test-frontend:
	cd frontend && npm run test

lint-frontend:
	cd frontend && npm run lint

# Backend commands
build-backend:
	docker build -t backend:latest -f backend/Dockerfile .

run-backend:
	cd backend && poetry run uvicorn src.main:app --reload

test-backend:
	cd backend && poetry run pytest

lint-backend:
	cd backend && poetry run ruff check .
