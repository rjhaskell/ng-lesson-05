namespace Lesson04.Views.Games {
    export class GamesController {
        public get gameList(): Models.Game[] {
            return this.GameService.games;
        }

        static $inject = [
            'GameService'
        ];

        constructor (
            private GameService: Services.GameService
        ) {
            
        }
    }
}