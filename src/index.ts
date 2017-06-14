import * as angular from "angular";
import CheckboxComponent from "./angular-checkbox.component";

angular.module("angularCheckboxModule", [
    "ngAnimate"
    ])
    .component("angularCheckbox", new CheckboxComponent())
    .name;