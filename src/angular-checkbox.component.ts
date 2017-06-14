export default class CheckboxComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;

    constructor() {
        this.bindings = {
            isChecked: "<",
            disable: "<",
            checkboxId: "@",
            label: "@",
            onUpdate: "&"
        };
        this.controller = CheckboxController;
        this.controllerAs = "checkbox";
        this.templateUrl = require("./angular-checkbox.component.html");
    }
}

export class CheckboxController {
    isChecked: boolean;
    disable: boolean;
    label: string;
    checkboxId: string;
    onUpdate: Function;
    icon: any = this.$sce.trustAsHtml(require("./check-icon.svg"));

    static $inject = ["$sce"];
    constructor(
        private $sce: ng.ISCEService
    ) { }
    $onInit() {
        this.isChecked = this.isChecked ? this.isChecked : false;
        this.disable = this.disable ? this.disable : false;
        this.label = this.label ? this.label : "";
    };

    updateIsChecked() {
        this.onUpdate({
            $event: {
                isChecked: this.isChecked
            }
        });
    };
}