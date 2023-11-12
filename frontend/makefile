IMAGE_NAME=shopping-list-frontend
CONTAINER_NAME=shopping-list-frontend
PORT=80

build:
	@echo Deleting old image
	- docker image rm ${IMAGE_NAME}
	@echo Building docker image
	docker build -t ${IMAGE_NAME} .