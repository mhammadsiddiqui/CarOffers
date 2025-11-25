pipeline {
   agent any
   environment { BD_TOKEN = credentials('bd_token') }
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
      stage('SCA Rapid Scan') {
         steps {
            sh '''
               bash -c "$(curl -s -L https://detect.blackduck.com/detect.sh)" \\
               --blackduck.url=https://expressonboarding.app.blackduck.com/ \\
               --blackduck.api.token=$BD_TOKEN \\ 
               --detect.diagnostic=true \\
               --detect.project.name=CarOffers --detect.project.version.name=JenkinsPipeline
            '''
         }
      }
   }
}
