pipeline {
    agent any
    stages {
        stage('1. Test de l application') {
            steps {
                // Utilisation de 'bat' pour Windows
                bat 'npm install && npm test'
            }
        }
        
        stage('2. Analyse de Code (SonarQube)') {
            steps {
                echo 'Analyse du code en cours...'
                // Commande de pause compatible Windows
                bat 'ping 127.0.0.1 -n 4 > nul' 
            }
        }
        
        stage('3. Build de l image Docker') {
            steps {
                // Utilisation de 'bat' pour Windows
                bat 'docker build -t devops-app:latest .'
            }
        }
        
        stage('4. Deploiement Kubernetes') {
            steps {
                // Utilisation de 'bat' pour Windows
                bat 'kubectl apply -f k8s.yaml'
            }
        }
    }
}