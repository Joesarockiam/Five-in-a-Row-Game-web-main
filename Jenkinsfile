pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'joes/five-in-a-row:latest'
    }

    stages {

         stage('Confirm Jenkinsfile works') {
             steps {
                     echo '✅ Jenkinsfile is being executed'
                sh 'ls -la'
      }
    }



        
        stage('Print current dir') {
            steps {
                sh 'pwd && ls -la'
            }
        }


        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
    }
}
