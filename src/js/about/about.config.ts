namespace Lesson04.About {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('About', <ng.ui.IState>{
                url: '/about',
                templateUrl: 'js/about/about.view.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
    }
}