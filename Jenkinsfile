pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.49.0-noble'  // Docker con Node.js y Playwright
            args '-u root'  // Opcional: Si necesitas permisos de root dentro del contenedor
        }
    }

    stages {
        stage('Instalar Dependencias') {
            steps {
                sh 'npm ci'
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
            echo 'test completado exitosamente.'
        }
        failure {
            echo 'Hubo un error en el test.'
        }
    }
}