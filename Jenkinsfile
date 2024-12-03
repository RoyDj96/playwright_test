pipeline {
    agent any

    stages {
        stage('Instalar Dependencias') {
            steps {
                script {
                    // Instalación de dependencias del proyecto
                    sh 'npm install'
                    // Instalación de Playwright y sus dependencias de navegador
                    sh 'npx playwright install'
                }
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Ejecuta las pruebas de Playwright, ajusta el comando según sea necesario
                    sh 'npx playwright test'
                }
            }
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
