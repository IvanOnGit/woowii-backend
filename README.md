# Woowii Backend




## Deployment

For the following instructions we will use `make` to run the commands. If you don't have `make` installed, you can run the commands manually, you will find the commands in the `Makefile` file.

Before deploying the application, the following requirements must be met:
1. Install aws-cli and configure it with the correct credentials. Go your AWS account in the IAM section and for your user, create a new key pair. Then run the following command and enter the credentials:
   ```
    aws configure
   ```
2. Install docker and docker-compose
3. Login to the docker registry (ECR in AWS)
   ```
   make aws-ecr-login
   ```

The deployment is done using docker and docker-compose. The following steps are required to deploy the application:
1. Build the docker image and push it to the docker registry (ECR in AWS)
   ```
   make build-and-push TAG=your-tag
   ```
2. Access the EC2 instance where the application will be deployed
3. Go to the `deploy` directory
   ```
   cd deploy
   ```
4. Verify the `docker-compose.yml` file has all the required environment variables.
5. Verify the `.env` file has all the required environment variables and set the correct `IMAGE_TAG` value.
6. Run the following command to start the application
   ```
   docker-compose up -d
   ```
7. Verify the application is running by checking the logs
   ```
    docker-compose logs app -f
    ```
