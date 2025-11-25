pipeline {
   agent any
   environment { BD_TOKEN = credentials('bd_token') }
   stages {
      stage('List Current Directory') {
         steps {
            sh 'pwd'
            sh 'ls -la'
            sh 'echo $BD_TOKEN'
         }
      }
      stage('SCA Rapid Scan') {
         steps {
            sh 'bash <(curl -s -L https://detect.blackduck.com/detect.sh) --blackduck.url=https://expressonboarding.app.blackduck.com/ --blackduck.api.token=$BD_TOKEN --detect.blackduck.scan.mode=RAPID'
         }
      }
   }
}
