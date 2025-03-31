


up:
	docker-compose up -d

restart:
	docker-compose down -v && docker-compose up -d


ECR_REGION=eu-west-3
ECR_URL=905418185177.dkr.ecr.eu-west-3.amazonaws.com
TAG=prod-0.0.7

aws-ecr-login:
	aws ecr get-login-password --region $(ECR_REGION) | docker login --username AWS --password-stdin $(ECR_URL)

build-and-push:
	docker build  --platform linux/amd64 -t api:$(TAG) -f Dockerfile . && \
	docker tag api:$(TAG) $(ECR_URL)/backend-api:$(TAG)
	docker push $(ECR_URL)/backend-api:$(TAG)

build-windows:
	$env:DOCKER_BUILDKIT = "0"; docker build --platform linux/amd64 -t api:$(TAG) -f Dockerfile .; docker tag api:$(TAG) 905418185177.dkr.ecr.eu-west-3.amazonaws.com/backend-api:prod-02; docker push 905418185177.dkr.ecr.eu-west-3.amazonaws.com/backend-api:$(TAG)