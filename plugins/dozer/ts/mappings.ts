/// <reference path="dozerPlugin.ts"/>

module Dozer {

  _module.config(($routeProvider, dozerPaths) => {
    dozerPaths.forEach((path) => {
      $routeProvider
        .when(UrlHelpers.join(path, 'mappings'), {
          templateUrl: UrlHelpers.join(templatePath, 'mappings.html'),
          reloadOnSearch: false
        });
    });
  });

  Developer.customProjectSubTabFactories.push((context) => {
    var projectLink = context.projectLink;
    var link = UrlHelpers.join(projectLink, 'forge/mappings');
    return [{
      isValid: () => link && Developer.forgeReadyLink(),
      href: link,
      label: "Data Mapping",
      class: "fa fa-code-fork",
      /*
      isActive: (subTab, path) => {
        var rootPath = subTab.href.replace(/\/view/, '');
        return _.startsWith(path, rootPath);
      },
      */
      title: "Browse data transformations in this project"
    }]
  });

  _module.controller("Dozer.MappingsController", ($scope, $location, $routeParams) => {
    $scope.projectId = $routeParams['projectId'];
    Forge.initScope($scope, $location, $routeParams);
  });

}
