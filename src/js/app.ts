namespace Lesson04 {
    let module: ng.IModule = angular.module('app', [
        /*-- Third Party Modules --*/
        'ui.router',

        /*-- Application Modules --*/
        'app.home',
        'app.games',
        'app.about',
        'app.login',
        'app.secret',
        'app.services'
    ]);

    module.config(Configuration);
}