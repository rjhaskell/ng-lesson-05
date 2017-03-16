namespace Lesson04.Services {
    export class GameService {
        private gameResource: ng.resource.IResourceClass<Models.Game[]>;

        /**
         * Returns a list of games which are stored in memory
         */
        public get games(): ng.resource.IResourceArray<Models.Game[]> {
            return this.gameResource.query();
        }

        /**
         * Returns a game that is requested by its index
         * @param index The index of the game to return
         */
        public gameByIndex(index: number): any {
            return this.gameResource.get({id: index});
        }

        static $inject = [
            '$resource'
        ];

        constructor(
            $resource: ng.resource.IResourceService
        ) {
            this.gameResource = $resource<Models.Game[]>('data/games.json');

            // $http.get<Models.Game[]>('data/games.json')
            //     .then((response) => {
            //         this.gameList = response.data;
            //     })
            //     .catch((response) => {
            //         console.error('Could not retrieve games.');
            //     });
        }
    }
}