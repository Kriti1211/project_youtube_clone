node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    // Define the SonarQube scanner tool
    def scannerHome = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation';

    // Check if scannerHome is not null before proceeding
    if (scannerHome) {
      // Execute SonarQube scanner with the specified tool
      withSonarQubeEnv('sonar-server') {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    } else {
      // Print an error message if the scanner tool is not found
      error "SonarQube scanner tool 'sonar-server' not found. Please configure it in Jenkins."
    }
  }
}
