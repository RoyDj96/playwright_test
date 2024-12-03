pipeline {
    agent any

    stages {
        stage('Construir Proyecto') {
            steps {
                sh 'npm install'
            }
        }

        stage('Pruebas') {
            sh 'npm test'
        }
    }

    post {
        success {
            echo 'Pipeline completado exitosamente.'
        }
        failure {
            echo 'Hubo un error en el pipeline.'
        }
    }
}
