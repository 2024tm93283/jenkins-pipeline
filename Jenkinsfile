pipeline {
    agent { label 'Jenkins-pileline-slave-1' }

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
