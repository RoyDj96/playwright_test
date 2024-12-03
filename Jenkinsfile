pipeline {
    agent any
    stages {
      
      stage('Install Dependencies') {
        steps {
          dir('playwright') {
            sh 'npm install'
          }
        }
      }

      stage('Run E2E Tests') {
        steps {
          dir('playwright') {
            sh 'npm test'
          }
        }
      }
    }
}