pipeline {
   agent any
   environment { 
      BD_TOKEN = credentials('bd_token')
      BD_URL = credentials('BD_URL')
   }
   tools {
      nodejs 'NodeJS_22'
   }
   stages {
      stage('Check pre-req') {
         steps {
            sh 'node -v'
            sh 'npm -v'
            sh 'java --version'
         }
      }
      stage('SCA Scan') {
         steps {
            sh '''
            curl -s -L https://detect.blackduck.com/detect.sh -o detect.sh
            bash detect.sh --detect.diagnostic=true --blackduck.api.token=$BD_TOKEN --blackduck.url=$BD_URL \\
            --detect.project.name=CarOffers --detect.project.version.name=JenkinsPipeline \\
            --detect.code.location.name=CarOffers_JenkinsPipeline
            '''
         }
      }
   }
}
