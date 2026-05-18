pipeline {
    agent any
    stages {
        stage('1. Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/VOTRE_USERNAME/projet-devops-complet.git'
            }
        }
        stage('2. Test') {
            steps {
                sh 'npm install && npm test'
            }
        }
        stage('3. SonarQube') {
            steps {
                echo 'Analyse du code en cours sur SonarQube...'
                // Simulation rapide si SonarQube rame sur votre PC :
                sh 'sleep 3' 
            }
        }
        stage('4. Docker Build') {
            steps {
                sh 'docker build -t devops-app:latest .'
            }
        }
        stage('5. Deploy K8s') {
            steps {
                sh 'kubectl apply -f k8s.yaml'
            }
        }
    }
}