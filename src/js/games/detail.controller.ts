namespace Lesson04.Games {
    export class DetailController {
        public game: Games.Game;

        static $inject = [
            '$stateParams',
            'GameService'
        ];

        constructor (
            $stateParams: ng.ui.IStateParamsService,
            GameService: Services.GameService
        ) {
            this.game = GameService.gameByIndex($stateParams['id']);
        }
    }
}