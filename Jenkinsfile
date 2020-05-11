pipeline {
   agent any

   stages {
      stage('Download') {
         steps {
            git 'https://github.com/toniomg/song-creator.git'
         }
      }

       stage('Build') {
          steps {
             sh 'npm install'
           }
       }
   }
}