pipeline {
    agent any

    stages {

        stage('create image test') {
            steps {
                sh 'docker build -t test .'
            }
        }

        stage('create container test') {
            steps {
                sh 'docker run --name playwright --network bridge test'
                sh 'docker ps -a'
                sh 'docker logs playwright'
            }
        }

    }

    post {
        always {
            sh 'docker rm -f playwright || true'
        }
        success {
            echo 'test completado exitosamente.'
        }
        failure {
            echo 'Hubo un error en el test.'
        }
    }
}