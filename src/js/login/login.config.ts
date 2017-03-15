namespace Lesson04.Login {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Login', <ng.ui.IState>{
                url: '/login',
                templateUrl: 'js/login/login.view.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
    }
}