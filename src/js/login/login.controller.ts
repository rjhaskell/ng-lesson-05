namespace Lesson04.Login {
    export class LoginController {
        public user: Models.UserLogin;

        static $inject = [
            '$state',
            'AuthenticationService'
        ];

        constructor(
            private $state: ng.ui.IStateService,
            private AuthenticationService: Services.AuthenticationService
        ) {
            this.user = new Models.UserLogin('something', 'else');
        }

        public logUserIn(): void {
            if(this.AuthenticationService.login(this.user)) {
                this.$state.go('Secret');
                return;
            }

            console.log('User failed to login');
        }
    }
}