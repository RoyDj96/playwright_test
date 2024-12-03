pipeline {
    agent any

    stage('Run E2E Tests') {
        steps {
          dir('playwright') {
            sh 'npm test'
          }
        }
    }
}