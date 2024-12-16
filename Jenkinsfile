pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.49.0-noble'
        }
    }

    stages {
        stage('Instalar Dependencias') {
            steps {
                sh '''
                npm i -D @playwright/test
                npx playwright install
                '''
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                sh 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        success {
            echo 'test completado exitosamente.'
        }
        failure {
            echo 'Hubo un error en el test.'
        }
    }
}