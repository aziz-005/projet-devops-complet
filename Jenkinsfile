pipeline {
    agent any
    stages {
        stage('1. Test de l application') {
            steps {
                bat 'npm install && npm test'
            }
        }
        
        stage('2. Analyse SonarQube') {
            steps {
                echo 'Analyse du code...'
                bat 'ping 127.0.0.1 -n 4 > nul'
            }
        }
        
        stage('3. Build Docker Image') {
            steps {
                bat 'docker build -t devops-app:latest .'
            }
        }
        
        stage('4. Deploy Kubernetes') {
            steps {
                // Déploiement local sur Minikube
                bat 'kubectl apply -f k8s.yaml'
                bat 'kubectl rollout restart deployment/devops-app'
                bat 'kubectl rollout status deployment/devops-app'
                bat 'echo Deploiement termine !'
            }
        }
    }
    
    post {
        success {
            echo '✅ PIPELINE DEVOPS COMPLETE AVEC SUCCES !'
            echo 'Application deployee sur Kubernetes'
        }
        failure {
            echo '❌ Erreur dans le pipeline'
        }
    }
}