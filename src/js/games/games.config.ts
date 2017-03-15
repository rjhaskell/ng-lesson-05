namespace Lesson04.Games {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Games', <ng.ui.IState>{
                url: '/games',
                templateUrl: 'js/games/games.view.html',
                controller: 'GamesController',
                controllerAs: 'vm'
            })
            .state('GameDetail', <ng.ui.IState>{
                url: '/games/:id',
                templateUrl: 'js/games/detail.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            });
    }
}