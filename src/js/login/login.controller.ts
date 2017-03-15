namespace Lesson04.Login {
    export class LoginController {
        public username: string;
        public password: string;

        static $inject = [
            '$state'
        ];

        constructor(
            private $state: ng.ui.IStateService
        ) {

        }

        public logUserIn(): void {

        }
    }
}