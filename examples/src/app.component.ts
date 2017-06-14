const template = require("./app.component.html");

export default class AppComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {};
        this.transclude = true;
        this.controller = AppController;
        this.controllerAs = "app";
        this.templateUrl = template;
    }
}

export class AppController {
    checkboxLabel: string;
    checkboxDisable: boolean;
    checkboxChecked: boolean;

    static $inject = [];
    constructor() { }

    $onInit() {
        this.checkboxDisable = false;
        this.checkboxLabel = "I'm a label";
        this.checkboxChecked = false;
    };
    toggleThis(event) {
        this.checkboxChecked = event.isChecked;
        console.log(this.checkboxChecked);
    };
    toggleDisable() {
        this.checkboxDisable = !this.checkboxDisable;
    };
    disableStatus() {
        return this.checkboxDisable;
    };
}