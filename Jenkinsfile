pipeline {
    agent { label 'Jenkins-pileline-slave-1' }

    environment {
        STAGING_PORT = '4000'
        PROD_PORT = '5000'
    }

    stages {
        stage('install') {
            steps {
                echo "Installing the node modules"
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo "Building the project..."
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm run test'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo "Deploying to staging..."
                sh './deploy-staging.sh'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'master'
            }
            steps {
                echo "Deploying to production..."
                sh './deploy-production.sh'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
