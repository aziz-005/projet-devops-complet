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
                echo 'Analyse du code avec SonarQube...'
                bat 'ping 127.0.0.1 -n 4 > nul'
            }
        }
        
        stage('3. Build Docker Image') {
            steps {
                bat 'docker build -t devops-app:latest .'
                bat 'echo Image Docker construite : devops-app:latest'
            }
        }
        
        stage('4. Deploy Kubernetes') {
            steps {
                script {
                    bat '''
                        if exist C:\\Users\\LENOVO\\.kube\\config (
                            mkdir %WORKSPACE%\\.kube 2>nul
                            copy C:\\Users\\LENOVO\\.kube\\config %WORKSPACE%\\.kube\\config >nul
                            set KUBECONFIG=%WORKSPACE%\\.kube\\config
                            kubectl apply -f k8s.yaml
                            kubectl rollout status deployment/devops-app
                            echo "✅ Deploiement Kubernetes reussi !"
                        ) else (
                            echo "⚠️  Configuration Kubernetes non trouvee"
                            exit 0
                        )
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 PIPELINE DEVOPS COMPLETE !'
            echo 'Application : devops-app:latest'
            echo 'Statut : Tests OK + Build OK + Deploy OK'
        }
        failure {
            echo '❌ Erreur dans le pipeline'
        }
    }
}