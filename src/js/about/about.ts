namespace Lesson04.About {
    let module: ng.IModule = angular.module('app.about', []);

    module.config(About.Configuration);

    module.controller('AboutController', About.AboutController);
}