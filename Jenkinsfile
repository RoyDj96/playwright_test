pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.32.0-focal'  // Docker con Node.js y Playwright
            args '-u root'  // Opcional: Si necesitas permisos de root dentro del contenedor
        }
    }

    stages {
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'  // Instala los navegadores de Playwright
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                sh 'npx playwright test'  // Ejecuta las pruebas de Playwright
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