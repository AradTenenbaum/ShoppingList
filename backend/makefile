IMAGE_NAME=template_microservice
CONTAINER_NAME=template
PORT=80

build:
	@echo Deleting old image
	- docker image rm ${IMAGE_NAME}
	@echo Building docker image
	docker build -t ${IMAGE_NAME} .

run:
	@echo Running docker container on port ${PORT}
	docker run -p ${PORT}:5000 --name ${CONTAINER_NAME} -d ${IMAGE_NAME}

stop:
	@echo Stopping docker container
	docker rm -f ${CONTAINER_NAME}

logs:
	docker logs -f ${CONTAINER_NAME}


run_db:
	@echo Starting db
	docker-compose up -d

stop_db:
	@echo Shutting db down
	docker-compose down