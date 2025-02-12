# Makefile for Docker Compose commands

.PHONY: up rebuild down zap .zap volumes

# Start the containers in detached mode
up:
	docker-compose up -d

# Rebuild and start the containers
rebuild:
	docker-compose up --build -d

# Stop and rebuild the containers (without volumes)
zap:
	docker-compose down
	docker-compose up --build -d

# Stop and rebuild the containers, remove volumes
.zap:
	docker-compose down --volumes
	docker-compose up --build -d

# Stop and remove the containers
down:
	docker-compose down

# Stop containers and remove volumes
volumes:
	docker-compose down --volumes
