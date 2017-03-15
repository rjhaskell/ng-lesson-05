namespace Lesson04.Games {
    let module: ng.IModule = angular.module('app.games', []);

    module.config(Games.Configuration);

    module.controller('GamesController', Games.GamesController);
    module.controller('GameDetailController', Games.DetailController);
}