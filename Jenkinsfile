pipeline {
    agent any
    stages {
        stage('pre-req') {
            steps {                
                sh sudo apt-get update
                sh sudo apt-get install -y nodejs npm
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
