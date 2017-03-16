namespace Lesson04.Services {
    export class GameService {
        private gameList: Models.Game[];

        /**
         * Returns a list of games which are stored in memory
         */
        public get games(): Models.Game[] {
            return this.gameList;
        }

        /**
         * Returns a game that is requested by its index
         * @param index The index of the game to return
         */
        public gameByIndex(index: number): Models.Game {
            return this.gameList[index];
        }

        static $inject = [
            '$http'
        ];

        constructor(
            $http: ng.IHttpService
        ) {
            $http.get<Models.Game[]>('data/games.json')
                .then((response) => {
                    this.gameList = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve games.');
                });
        }
    }
}