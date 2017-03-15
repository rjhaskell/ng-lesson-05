namespace Lesson04.Secret {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Secret', <Models.IAuthenticatedState>{
                url: '/secret',
                templateUrl: 'js/secret/secret.view.html',
                controller: 'SecretController',
                controllerAs: 'vm',
                data: {
                    requiresAuthentication: true
                }
            });
    }
}