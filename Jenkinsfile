pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Teste da aplicação') {
            steps {
                sh 'npm install' 
                sh 'npm test' 
            }
        }
        stage('Build de uma imagem') {
            steps {
                sh 'docker build -t volume-jenkins:latest .' 
            }
        }
        stage('Publicar a imagem no Dockerhub') {
            steps {
                environment {
                    DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
                }

                steps {
                  withDockerRegistry([credentialsId: "${DOCKERHUB_CREDENTIALS}", url: '']) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push nome-do-repositorio:tag'
                  }
                }
            }
        }
    }
}
