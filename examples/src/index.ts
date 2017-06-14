import "./app.component.scss";
import "./favicon.png";

import * as angular from "angular";

import "../../dist/angular-checkbox";
import AppComponent from "./app.component";

angular
    .module("app", ["angularCheckboxModule"])
    .component("app", new AppComponent());