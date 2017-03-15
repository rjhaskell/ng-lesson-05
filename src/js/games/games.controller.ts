namespace Lesson04.Games {
    export class GamesController {
        public get gameList(): Games.Game[] {
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