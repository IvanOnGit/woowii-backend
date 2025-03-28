# Woowii Backend

For the following instructions we will use `make` to run the commands. If you don't have `make` installed, you can run the commands manually, you will find the commands in the `Makefile` file.

## Development with Docker

The development environment is set up using docker and docker-compose. The following steps are required to start the development environment:

1. Install docker and docker-compose
2. Execute the following command to start the development environment
   ```
   make up
   ```
   This command will start the backend api and a mysql database.

## Deployment


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
   

## Database migrations

To create a new migration, run the following script:
```
./scripts/generate-migration.sh migration-name
```

This will create a two new files in the `src/migrations/sql` directory. One file with the up migration and another file with the down migration.
In the up migration file, write the SQL code to create the new table or modify the existing table. In the down migration file, write the SQL code to revert the changes made in the up migration file.

The migrations are executed when the application starts.