namespace Lesson04.Login {
    let module: ng.IModule = angular.module('app.login', []);

    module.config(Login.Configuration);

    module.controller('LoginController', Login.LoginController);
}