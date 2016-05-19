#!/usr/bin/groovy
def externalImages(){
  return ['fabric8-console']
}

def repo(){
 return 'fabric8io/fabric8-console'
}

def updateDependencies(source){

  def properties = []
  properties << ['<fabric8.version>','io/fabric8/kubernetes-api']
  properties << ['<docker.maven.plugin.version>','io/fabric8/docker-maven-plugin']

  updatePropertyVersion{
    updates = properties
    repository = source
    project = repo()
  }
}

def stage(){
  return stageProject{
    project = repo()
    useGitTagForNextVersion = true
    extraImagesToStage = externalImages()
  }
}

def deploy(){
  parallel (openshift: {
    deployRemoteOpenShift{
      url = OPENSHIFT_URL
      domain = OPENSHIFT_DOMAIN
      }
    }, kubernetes: {
      deployRemoteKubernetes{
        url = KUBERNETES_URL
        defaultNamespace = KUBERNETES_DEFAULT_NAMESPACE
      }
    }
  )
}

def approveRelease(project){
  def releaseVersion = project[1]
  approve{
    room = null
    version = releaseVersion
    console = null
    environment = 'fabric8'
  }
}

def release(project){
  releaseProject{
    stagedProject = project
    useGitTagForNextVersion = true
    helmPush = false
    groupId = 'io.fabric8.apps'
    githubOrganisation = 'fabric8io'
    artifactIdToWatchInCentral = 'fabric8-console'
    artifactExtensionToWatchInCentral = 'pom'
    promoteToDockerRegistry = 'docker.io'
    dockerOrganisation = 'fabric8'
    extraImagesToTag = externalImages()
  }
}

def mergePullRequest(prId){
  mergeAndWaitForPullRequest{
    project = repo()
    pullRequestId = prId
  }

}
return this;
