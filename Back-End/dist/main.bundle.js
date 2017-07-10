webpackJsonp([1,5],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(myService) {
        this.myService = myService;
        this.selectedGrapg = null;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(262),
        styles: [__webpack_require__(216)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_components_file_file_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_components_profilo_profilo_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menu_components_progetto_progetto_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_components_modifica_modifica_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_components_template_template_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_components_layer_layer_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_editor_components_toolbar_toolbar_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_editor_editor_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_activity_frame_activity_frame_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editor_components_class_menu_class_menu_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_components_activity_menu_activity_menu_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_menu_components_file_file_component__["a" /* FileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_menu_components_profilo_profilo_component__["a" /* ProfiloComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_menu_components_progetto_progetto_component__["a" /* ProgettoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_menu_components_modifica_modifica_component__["a" /* ModificaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_menu_components_template_template_component__["a" /* TemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_menu_components_layer_layer_component__["a" /* LayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_editor_components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_activity_frame_activity_frame_component__["a" /* ActivityFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_editor_components_class_menu_class_menu_component__["a" /* ClassMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_editor_components_activity_menu_activity_menu_component__["a" /* ActivityMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFrameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityFrameComponent = (function () {
    function ActivityFrameComponent() {
    }
    ActivityFrameComponent.prototype.ngOnInit = function () {
    };
    return ActivityFrameComponent;
}());
ActivityFrameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-activity-frame',
        template: __webpack_require__(263),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [])
], ActivityFrameComponent);

//# sourceMappingURL=activity-frame.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityMenuComponent = (function () {
    function ActivityMenuComponent() {
    }
    ActivityMenuComponent.prototype.ngOnInit = function () {
    };
    return ActivityMenuComponent;
}());
ActivityMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'activity-menu',
        template: __webpack_require__(264),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], ActivityMenuComponent);

//# sourceMappingURL=activity-menu.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_param__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassMenuComponent = (function () {
    /**
     * Create an instantiation of ClassMenuComponent and sets the properties ´classe´ and ´name´
     * by subscription from classMenuService
     * @param classMenuService used to create a new instantiation of ClassMenuService
     * @param mainEditorService used to create a new instantiation of ClassMenuService
     */
    function ClassMenuComponent(classMenuService, mainEditorService) {
        var _this = this;
        this.classMenuService = classMenuService;
        this.mainEditorService = mainEditorService;
        /**
         * The name of the current selected class in the class diagram of the EditorComponent
         */
        this.name = '';
        /**
         * Array of primitive data types
         */
        this.types = ['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char'];
        /**
         * Array of visibility
         */
        this.accessoAttr = ['public', 'protected', 'private'];
        /**
         * Used to store the selected visibility to build a new attribute
         */
        this.selectedAccAtt = 'public';
        /**
         * Used to store the selected visibility to build a new method
         */
        this.selectedAccMet = 'public';
        // Array per parametri di metodi
        /**
         * Used to store an array of parameters to build a new method
         */
        this.parametriMetodo = new Array();
        this.sub = classMenuService.selectedClass$.subscribe(function (x) {
            _this.classe = x;
            _this.name = x.getClassName();
        });
        this.nomeAttributoUguale = false;
    }
    // Funzione per aggiungere un attributo alla classe selezionata
    /**
     * Retrives information from the template HTML of this component to build
     * a new attribute. If one or more parameter isn't present an error will be shown
     * @param nome the neme of the new attribute
     */
    ClassMenuComponent.prototype.addAttributo = function (nome) {
        var tipo = this.selectedTipoAtt;
        var acc = this.selectedAccAtt;
        console.log(nome + ' ' + tipo + ' ' + acc);
        if (nome && tipo && acc) {
            try {
                this.mainEditorService.addAttributo(tipo, nome, acc);
            }
            catch (error) {
                if (error.message == 'NomePresente')
                    // TODO: segnalare l'errore sul menu! Eliminare il console log
                    console.log('nome attributo già esistente');
            }
            var attributi = this.classe.attributes.attributes;
            var vis = void 0;
            switch (acc) {
                case 'public':
                    vis = '+';
                    break;
                case 'protected':
                    vis = '#';
                    break;
                case 'private':
                    vis = '-';
            }
            attributi.push(vis + ' ' + nome + ' : ' + tipo);
            this.classe.set('attributes', null); // Hack per far funzionare l'event change:attrs
            this.classe.set('attributes', attributi);
            this.selectedAccAtt = 'public';
            this.selectedTipoAtt = null;
        }
        else {
            // TODO: segnalare il mancato selezionamento dei campi
            console.log('tette');
        }
    };
    /**
     * Removes an attribute of the given name from the class element and from the class object of type Classe
     * @param nome name of the attribute to removes
     */
    ClassMenuComponent.prototype.removeAttributo = function (nome) {
        var attributi = this.classe.attributes.attributes;
        attributi.splice(attributi.findIndex(function (element) {
            var att = element.split(': '); // Tutto questo perché non sono riuscito ad
            att = att[0].split(' '); // implementare una regular expression S.B.
            if (att[1] == nome) {
                return element;
            }
        }), 1);
        this.classe.set('attributes', null);
        this.classe.set('attributes', attributi);
        console.log('ora rimuovo attr');
        this.mainEditorService.removeAttributo(nome);
    };
    /**
     * Mododify the properties of an attribute
     */
    ClassMenuComponent.prototype.changeAttributo = function () {
    };
    /**
     * Change the name of the selected class and resets the input value into the HTML template
     * @param name
     */
    ClassMenuComponent.prototype.changeNome = function (name) {
        if (name != '') {
            this.classe.set('name', name);
            this.name = name;
            document.getElementById('changeName').value = '';
        }
    };
    /**
     * Used to unsubscribe from the observable to prevent memory leak
     */
    ClassMenuComponent.prototype.ngOnDestroy = function () {
        // Previene memory leak quando il componente è distrutto
        this.sub.unsubscribe();
    };
    /* Funzione per aggiungere/rimuovere la riga della lista di Parametri attuali */
    /**
     * Adds a new parameter into the array parametriMetodo
     */
    ClassMenuComponent.prototype.aggiungiParam = function () {
        this.parametriMetodo.push(new __WEBPACK_IMPORTED_MODULE_3__models_param__["a" /* Param */]("test", "test"));
        console.log("caodsa");
    };
    // Funzione per aggiungere un metodo alla classe selezionata
    /**
     * Retrives information from the template HTML of this component to build
     * a new method. If one or more parameter isn't present an error will be shown
     * @param nome
     */
    ClassMenuComponent.prototype.addMetodo = function (nome) {
        var tipo = this.selectedTipoMet;
        var acc = this.selectedAccMet;
        console.log(nome + ' ' + tipo + ' ' + acc);
        if (nome && tipo && acc) {
            try {
                this.mainEditorService.addMetodo(tipo, nome, acc);
            }
            catch (error) {
                if (error.message == 'NomePresente')
                    // TODO: segnalare l'errore sul menu! Eliminare il console log
                    console.log('nome attributo già esistente');
            }
            var metodi = this.classe.attributes.methods;
            var vis = void 0;
            switch (acc) {
                case 'public':
                    vis = '+';
                    break;
                case 'protected':
                    vis = '#';
                    break;
                case 'private':
                    vis = '-';
            }
            metodi.push(vis + ' ' + nome + '(): ' + tipo);
            this.classe.set('methods', null); // Hack per far funzionare l'event change:attrs
            this.classe.set('methods', metodi);
            this.selectedAccMet = 'public';
            this.selectedTipoMet = null;
        }
        else {
            // TODO: segnalare il mancato selezionamento dei campi
            console.log('tette');
        }
    };
    //Rimuove il metodo
    /**
     * Removes a method of the given name from the class element and from the class object of type Classe
     * @param nome
     */
    ClassMenuComponent.prototype.removeMetodo = function (nome) {
        var metodi = this.classe.attributes.methods;
        metodi.splice(metodi.findIndex(function (element) {
            var met = element.split(': '); // Tutto questo perché non sono riuscito ad
            met = met[0].split(' '); // implementare una regular expression S.B.
            if (met[1] == nome) {
                return element;
            }
        }), 1);
        this.classe.set('attributes', null);
        this.classe.set('attributes', metodi);
        console.log('ora rimuovo metodo');
        this.mainEditorService.removeMetodo(nome);
    };
    /**
     * Set the editor in activity mode to modify the behavior of the method of the given name
     * @param nome name of metho to modify
     */
    ClassMenuComponent.prototype.modifyMetodo = function (nome) {
        this.mainEditorService.enterActivityMode(nome);
    };
    return ClassMenuComponent;
}());
ClassMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'class-menu',
        template: __webpack_require__(265),
        styles: [__webpack_require__(219)]
    })
    /**
     * Interacts with the HTML template and provides methods to interact with the classes present
     * into the class diagram of the EditorComponent.
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], ClassMenuComponent);

var _a, _b;
//# sourceMappingURL=class-menu.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_classe__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_classe_astratta__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jointjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jointjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolbarComponent = (function () {
    function ToolbarComponent(mainEditorService) {
        this.mainEditorService = mainEditorService;
        this.classCouter = 0;
        this.interCounter = 0;
        this.abstCounter = 0;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Method add class to editor
     */
    ToolbarComponent.prototype.addClasse = function () {
        var nomeClasse = 'Classe #' + this.classCouter++;
        var uml = __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml;
        var classe = new uml.Class({
            position: { x: 300, y: 300 },
            size: { width: 300, height: 100 },
            name: [nomeClasse],
            attributes: [''],
            methods: [''],
            attrs: {
                '.uml-class-name-rect': {
                    fill: 'rgba(255,255,255,1)',
                    stroke: 'rgba(48,28,198,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                    fill: 'rgba(48,28,198,0.1)',
                    stroke: 'rgba(48,8,198,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-name-text': {
                    'font-family': 'monospace'
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                }
            }
        });
        this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_2__models_classe__["a" /* Classe */](nomeClasse), classe);
    };
    /**
     * Method add interface to editor
     */
    ToolbarComponent.prototype.addInterfaccia = function () {
        var nomeInterf = 'Interfaccia #' + this.interCounter++;
        var uml = __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml;
        var interfaccia = new uml.Interface({
            position: { x: 50, y: 30 },
            size: { width: 300, height: 100 },
            name: [nomeInterf],
            attributes: [''],
            methods: [''],
            attrs: {
                '.uml-class-name-rect': {
                    fill: 'rgba(48,28,198,0.1)',
                    stroke: 'rgba(48,8,198,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                    fill: 'rgba(48,28,198,0.1)',
                    stroke: 'rgba(48,8,198,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-name-text': {
                    'font-family': 'monospace'
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                }
            }
        });
        // this.mainEditorService.addClass(new Interface(nomeInterf), interfaccia);
    };
    /**
     * Method add abstract class to editor
     */
    ToolbarComponent.prototype.addAstratta = function () {
        var uml = __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml;
        var nomeClassAbst = 'Classe Astratta #' + this.abstCounter++;
        var abstract = new uml.Abstract({
            position: { x: 400, y: 400 },
            size: { width: 300, height: 100 },
            name: [nomeClassAbst],
            attributes: [''],
            methods: [''],
            attrs: {
                '.uml-class-name-rect': {
                    fill: 'rgba(30,30,30,0.1)',
                    stroke: 'rgba(15,15,15,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                    fill: 'rgba(30,30,30,0.1)',
                    stroke: 'rgba(15,15,15,1)',
                    'stroke-width': 1.5
                },
                '.uml-class-name-text': {
                    'font-family': 'monospace'
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                }
            }
        });
        this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_3__models_classe_astratta__["a" /* ClasseAstratta */](nomeClassAbst), abstract);
    };
    /**
     * Method selects association as connector
     */
    ToolbarComponent.prototype.addAssociazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml.Association);
    };
    /**
     * Method selects implementation as connector
     */
    ToolbarComponent.prototype.addImplementazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml.Implementation);
    };
    /**
     * Method selects generalization as connector
     */
    ToolbarComponent.prototype.addGeneralizzazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml.Generalization);
    };
    /**
     * Method add comment cell to editor
     */
    ToolbarComponent.prototype.addCommento = function () { };
    /**
     * Method add selected connector to editor if target element is selected, else the method selects the source element
     * @param cellView
     * Source or target element
     */
    ToolbarComponent.prototype.addConnettore = function (cellView) {
        this.mainEditorService.addConnettore(cellView);
    };
    ToolbarComponent.prototype.addStart = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
            '<defs id="defs2" />',
            '<metadata id="metadata5">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
            '<path id="path3894" d="m 97.101844,223.47134 c -13.058249,-1.69775 -28.777879,-8.47282 -39.272609,-16.92628 -11.86883,-9.56029 -22.85336,-26.2492 -26.64107,-40.47603 -9.83115,-36.92635 6.85343,-74.96661 40.44513,-92.21352 12.41101,-6.372158 23.784106,-8.721153 39.203895,-8.097159 17.95921,0.726757 31.69527,5.763239 45.50926,16.686489 14.54953,11.50486 24.51989,27.84512 28.42334,46.58253 1.93429,9.285 1.53992,26.8564 -0.78893,35.15178 -4.36456,15.54651 -11.36567,27.49188 -22.1535,37.79851 -17.58182,16.79757 -41.00903,24.57715 -64.725516,21.49368 z" style="fill:#000000;stroke-width:0.75595242" />',
            '</g>',
            '</svg>'
        ].join('');
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    ToolbarComponent.prototype.addEnd = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm"  width="210mm">',
            '<defs id="defs2">',
            '<linearGradient osb:paint="solid" id="linearGradient6207">',
            '<stop id="stop6205" offset="0" style="stop-color:#000000;stop-opacity:1;" />',
            '</linearGradient>',
            '<linearGradient osb:paint="solid" id="linearGradient6165">',
            '<stop id="stop6163" offset="0" style="stop-color:#000000;stop-opacity:1;" />',
            '</linearGradient>',
            '</defs>',
            '<metadata id="metadata5">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
            '<path id="path3894" d="m 97.101844,223.47134 c -13.058249,-1.69775 -28.777879,-8.47282 -39.272609,-16.92628 -11.86883,-9.56029 -22.85336,-26.2492 -26.64107,-40.47603 -9.83115,-36.92635 6.85343,-74.96661 40.44513,-92.21352 12.41101,-6.372158 23.784106,-8.721153 39.203895,-8.097159 17.95921,0.726757 31.69527,5.763239 45.50926,16.686489 14.54953,11.50486 24.51989,27.84512 28.42334,46.58253 1.93429,9.285 1.53992,26.8564 -0.78893,35.15178 -4.36456,15.54651 -11.36567,27.49188 -22.1535,37.79851 -17.58182,16.79757 -41.00903,24.57715 -64.725516,21.49368 z" style="fill:#000000;stroke-width:0.75595242;fill-opacity:1;stroke:none;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<ellipse ry="70.303574" rx="66.901787" cy="145.05357" cx="107.72321" id="path6212" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<ellipse ry="57.452377" rx="56.69643" cy="145.05356" cx="107.34524" id="path6214" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
            '</g>',
            '</svg>'
        ].join('');
        var end = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    ToolbarComponent.prototype.addActivityShape = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="210mm" height="297mm" viewBox="0 0 210 297" version="1.1" id="svg6224" inkscape:version="0.92.1 r15371" sodipodi:docname="Rettangolo.svg">',
            '<defs id="defs6218" />',
            '<sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.35" inkscape:cx="-78.571429" inkscape:cy="560" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" inkscape:window-width="1366" inkscape:window-height="706" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" />',
            '<metadata id="metadata6221">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g inkscape:label="Livello 1" inkscape:groupmode="layer" id="layer1">',
            '<rect style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:5;stroke-opacity:1;paint-order:markers fill stroke;stroke-miterlimit:4;stroke-dasharray:none" id="rect6232" width="176.89285" height="108.1012" x="19.654762" y="60.386906" rx="35" />',
            '</g>',
            '</svg>'
        ].join('');
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    ToolbarComponent.prototype.addActivityForShape = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg6224" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
            '<defs id="defs6218" />',
            '<metadata id="metadata6221">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
            '<rect rx="35" y="60.386906" x="19.654762" height="108.1012" width="176.89285" id="rect6232" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:5;stroke-opacity:1;paint-order:markers fill stroke;stroke-miterlimit:4;stroke-dasharray:none" />',
            '<rect y="117.83927" x="93.738098" height="0.7559582" width="80.130959" id="rect6813" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<rect y="89.113091" x="134.55952" height="62.744045" width="0.75595242" id="rect6815" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<rect y="118.61549" x="172.3774" height="34.733318" width="1.4714057" id="rect6817" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5.04049921;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<rect style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:5.04049921;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" id="rect6821" width="1.4714057" height="34.733318" x="93.738098" y="117.83927" />',
            '</g>',
            '</svg>'
        ].join('');
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    ToolbarComponent.prototype.addConnector = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg6224" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
            '<defs id="defs6218" />',
            '<metadata id="metadata6221">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
            '<path transform="matrix(0.41042479,0,0,0.54956003,82.390625,50.23306)" d="m 123.22024,91.380948 41.59991,23.607282 41.59991,23.60729 -41.24446,24.22293 -41.24447,24.22294 -0.35544,-47.83022 z" id="path6226" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332;stroke-opacity:1;paint-order:markers fill stroke" />',
            '<rect y="125.80936" x="24.190477" height="3.1800721" width="109.40167" id="rect6228" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.20907216;stroke-opacity:1;paint-order:markers fill stroke" />',
            '</g>',
            '</svg>'
        ].join('');
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    ToolbarComponent.prototype.addDecision = function () {
        var svgFile = [
            '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
            '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">',
            '<defs id="defs2" />',
            '<metadata id="metadata5">',
            '<rdf:RDF>',
            '<cc:Work rdf:about="">',
            '<dc:format>image/svg+xml</dc:format>',
            '<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />',
            '<dc:title></dc:title>',
            '</cc:Work>',
            '</rdf:RDF>',
            '</metadata>',
            '<g id="layer1">',
            '<path transform="matrix(1.0498677,0,0,1.059157,-0.3736905,-2.5737459)" d="M 11.339291,132.20237 98.273817,46.779759 183.69643,133.71428 96.761904,219.1369 Z" id="path26" style="fill:#d45500;fill-opacity:0.00956938;stroke:#000000;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" />',
            '</g>',
            '</svg>'
        ].join('');
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Image({
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 100,
                y: 100
            },
            attrs: {
                image: {
                    width: 1024,
                    height: 768,
                    'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                    preserveAspectRatio: 'none'
                }
            }
        });
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__(266),
        styles: [__webpack_require__(220)]
    })
    /**
     * it rappresent the model that contain the shapesthat will be draw into the editor
     * @param classCouter [number] it's a counter class
     * @param interCounter [number] it's a counter interface
     * @param abstCounter [number] it's a counter astract class
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object])
], ToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_classe__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jointjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jointjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditorComponent = (function () {
    /**
     * this constructor bind this class with the services use for callback function and draw the grid in the canvas
     * @param classMenuService
     * @param editService
     * @param mainEditorService
     */
    function EditorComponent(classMenuService, menuService, mainEditorService) {
        var _this = this;
        this.classMenuService = classMenuService;
        this.menuService = menuService;
        this.mainEditorService = mainEditorService;
        /**
         * is used to scale the graph
         */
        this.xAx = 1;
        this.selectedCell = null;
        // Subscribe all'oggetto observable per la funzione di zoom
        this.sub = menuService.selectedGrapg$.subscribe(function (x) {
            if (x == '+')
                _this.zoomIn();
            else if (x == '-')
                _this.zoomOut();
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graph = new __WEBPACK_IMPORTED_MODULE_5_jointjs__["dia"].Graph;
        this.paper = new __WEBPACK_IMPORTED_MODULE_5_jointjs__["dia"].Paper({
            el: $("#paper"),
            width: $('#paper').width(),
            height: $('#paper').height(),
            gridSize: 10,
            model: this.graph
        });
        this.paper.drawGrid("dot");
        this.paper.scale(this.xAx, this.xAx);
        // DA RIMUOVERE: crea una shape classe UML
        var class1 = new __WEBPACK_IMPORTED_MODULE_5_jointjs__["shapes"].uml.Class({
            position: { x: 120, y: 30 },
            size: { width: 300, height: 100 },
            name: ['Class1'],
            attributes: ['+ attributeOne: String', '+ prova: String'],
            methods: ['+ setAttributeOne(att: String): Void', '+ getAttributeOne(): String'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: 'rgba(255,255,255,1)',
                    stroke: 'rgba(48,8,198,0.5)',
                    'stroke-width': 1.5
                },
                '.uml-class-attrs-rect, .uml-class-methods-rect': {
                    fill: 'rgba(48,28,198,0.1)',
                    stroke: 'rgba(48,8,198,0.5)',
                    'stroke-width': 1.5
                },
                '.uml-class-name-text': {
                    'font-family': 'monospace'
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    'font-family': 'monospace'
                }
            }
        });
        // DA RIMUOVERE: Inserisce l'elemento classe in graph
        this.graph.addCell(class1);
        /**
         * This methods allows to the mouse's pointer to recognize when a class is clicked and select it
         */
        this.paper.on('cell:pointerdown', function (cellView) {
            if (!_this.connettore)
                _this.elementSelection(cellView);
        });
        // Funzione per deselezionare le classi selezionate, rimuove l'highlight
        // dall'elemento e pone a null l'oggetto selectedCell del component
        /**
         * This methods allows to the mouse's pointer to recognize when the class is unselected by click outside that shape
         */
        this.paper.on('blank:pointerdown', function () {
            if (_this.selectedCell) {
                _this.selectedCell.unhighlight();
            }
            _this.selectedCell = null;
        });
        this.paper.on('cell:pointerdown', function (cellView) {
            if (_this.connettore)
                _this.selectElementsToConnect(cellView);
        });
        this.mainEditorService.storeGraph(this.graph.toJSON()); // ELIMINARE
        this.mainEditorService.setEditorComp(this);
        // TODO: da eliminare solo per testing
        this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_4__models_classe__["a" /* Classe */]('Class1'), class1);
        this.mainEditorService.getClassList()[0].addAttributo('String', 'attributeOne', 'public');
    };
    /* Salva il graph corrente utilizzando il metodo storeGraph di mainEditor service,
      pulisce this.graph e lo ripopola tramite il JSON fornito in ingresso
    */
    /**
     *  This methods is used to replace the editor with a new windows with the contents in the JSON file
     *  @param graph
     */
    EditorComponent.prototype.replaceDiagram = function (graph) {
        if (graph) {
            if (!this.mainEditorService.getActivityModeStatus())
                this.mainEditorService.storeGraph(this.graph.toJSON());
            this.graph.clear();
            this.graph.fromJSON(graph);
        }
    };
    /**
     * This methods is used to select the element to be connectted by the connector
     * @param cell
     */
    EditorComponent.prototype.selectElementsToConnect = function (cell) {
        if (this.elementToConnect) {
            this.mainEditorService.getClass(this.elementToConnect.attributes.name); // da finire!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            var element1 = this.elementToConnect;
            var freccia = new this.connettore.constructor({
                source: { id: element1.model.id },
                target: { id: cell.model.id }
            });
            this.graph.addCells([freccia]);
            this.elementToConnect.unhighlight(null /* defaults to cellView.el */, {
                highlighter: {
                    name: 'stroke',
                    options: {
                        width: 3,
                        color: '#885500'
                    }
                }
            });
            this.elementToConnect = this.connettore = null;
        }
        else {
            this.elementToConnect = cell;
            cell.highlight(null /* defaults to cellView.el */, {
                highlighter: {
                    name: 'stroke',
                    options: {
                        width: 3,
                        color: '#885500'
                    }
                }
            });
        }
    };
    /**
     * This methods add a link to the class
     * @param connettore
     */
    EditorComponent.prototype.addConnettore = function (connettore) {
        this.connettore = connettore;
    };
    /**
     * This methods select a shape in the editor
     * @param cellView
     */
    EditorComponent.prototype.elementSelection = function (cellView) {
        if (this.selectedCell) {
            this.selectedCell.unhighlight();
        }
        cellView.highlight();
        if (!this.mainEditorService.getActivityModeStatus()) {
            this.selectedCell = cellView;
            this.classMenuService.classSelection(cellView.model);
            this.mainEditorService.selectClasse(cellView.model.attributes.name[0]);
        }
        else {
            // TODO selezione elemento dell'activity diagram
        }
    };
    // Aggiunta classe
    /**
     * This methods add to the editor an element
     * @param element
     */
    EditorComponent.prototype.addElement = function (element) {
        this.graph.addCell(element);
    };
    /**
     * This methods increase the scale of the editor
     */
    EditorComponent.prototype.zoomIn = function () {
        this.xAx += (0.05);
        this.paper.scale(this.xAx, this.xAx);
    };
    /**
     * This methods decrease the scale of the editor
     */
    EditorComponent.prototype.zoomOut = function () {
        this.xAx -= (0.05);
        this.paper.scale(this.xAx, this.xAx);
    };
    /**
     * This methods clone the selected element
     */
    EditorComponent.prototype.cloneElement = function () {
        var clone = this.selectedCell.model.clone();
        clone.translate(80, 80);
        this.graph.addCell(clone);
    };
    EditorComponent.prototype.deleteElement = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(267),
        styles: [__webpack_require__(221)],
        // host: {
        //   '(window:resize)': 'onResize($event)'
        // }
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]]
    })
    /**
     * This class is the main component used to drae the UML shapes
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _c || Object])
], EditorComponent);

var _a, _b, _c;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__param__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attributo; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Attributo = (function (_super) {
    __extends(Attributo, _super);
    function Attributo(tipo, nome, acc) {
        var _this = _super.call(this, tipo, nome) || this;
        _this.visibility = acc;
        return _this;
    }
    /**
     * This method return the attribute's visibility
     */
    Attributo.prototype.getAccesso = function () {
        return this.visibility;
    };
    /**
     * This method return the attribute's visibility
     */
    Attributo.prototype.changeAccesso = function (acc) {
        this.visibility = acc;
    };
    return Attributo;
}(__WEBPACK_IMPORTED_MODULE_0__param__["a" /* Param */]));

//# sourceMappingURL=attributo.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classe__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClasseAstratta; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MetodiAstratti = (function () {
    function MetodiAstratti(nome, tipo, acc, listaParam) {
        this.nome = nome;
        this.tipo = tipo;
        this.acc = acc;
        this.listaParam = listaParam;
    }
    return MetodiAstratti;
}());
/**
 * it extends Classe and it's used to create an abstract class
 */
var ClasseAstratta = (function (_super) {
    __extends(ClasseAstratta, _super);
    function ClasseAstratta(nome) {
        var _this = _super.call(this, nome) || this;
        /**
         * an array that contin the class'methds
         */
        _this.abstractMethods = new Array();
        return _this;
    }
    /**
     * This methos add to the class, an abstract methods
     * @param nome
     * @param tipo
     * @param acc
     * @param listaParam
     */
    ClasseAstratta.prototype.addAbstractMethods = function (nome, tipo, acc, listaParam) {
        this.abstractMethods.push(new MetodiAstratti(nome, tipo, acc, listaParam));
    };
    /**
     * This method parse the selected class and transform it into a JSON format
     */
    ClasseAstratta.prototype.toJSON = function () {
        var classe = '{"name":"' + _super.prototype.getNome.call(this) + '","attributes":' +
            JSON.stringify(_super.prototype.getAttributi) + ',"methods":' +
            JSON.stringify(_super.prototype.getMetodi) + ',"abstract-methods":' +
            JSON.stringify(this.abstractMethods) + '}';
    };
    return ClasseAstratta;
}(__WEBPACK_IMPORTED_MODULE_0__classe__["a" /* Classe */]));

//# sourceMappingURL=classe-astratta.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jointjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jointjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metodo; });

/**
 * it define the class's method
 */
var Metodo = (function () {
    /**
     * it make a Metodo object, listaArg is optional
     * @param nome
     * @param acc
     * @param tipo
     * @param listaArg
     */
    function Metodo(nome, acc, tipo, listaArg) {
        this.nome = nome;
        this.accesso = acc;
        this.tipoRitorno = tipo;
        this.diagramma = (new __WEBPACK_IMPORTED_MODULE_0_jointjs__["dia"].Graph).toJSON();
        if (listaArg)
            this.listaArgomenti = listaArg;
    }
    /**
     * it change the method's name
     * @param nome
     */
    Metodo.prototype.changeNome = function (name) {
        this.nome = name;
    };
    /**
     * it change the method's return type
     * @param tipo
     */
    Metodo.prototype.changeTipoRitorno = function (tipo) {
        this.tipoRitorno = tipo;
    };
    /**
     * it change the method's visibility
     * @param acc
     */
    Metodo.prototype.changeAccesso = function (acc) {
        this.accesso = acc;
    };
    /**
     * it change the reference of the formal paremeters array
     * @param listaArg
     */
    Metodo.prototype.changeListaArg = function (listArg) {
        this.listaArgomenti = listArg;
    };
    /**
     * it append to listaArgomenti a new parameter
     * @param arg
     */
    Metodo.prototype.addArgomento = function (arg) {
        if (!this.listaArgomenti)
            this.listaArgomenti = new Array();
        this.listaArgomenti.push(arg);
    };
    /**
     * it assigns to diagramma attributes class, the JSON file
     * @param dia
     */
    Metodo.prototype.addDiagram = function (dia) {
        this.diagramma = dia;
    };
    /**
     * it returns the method's diagramma
     */
    Metodo.prototype.getDiagram = function () {
        return this.diagramma;
    };
    /**
     * it returns the method's nome
     */
    Metodo.prototype.getNome = function () {
        return this.nome;
    };
    /**
     * it returns the method's visibility
     */
    Metodo.prototype.getAccesso = function () {
        return this.accesso;
    };
    /**
     * it returns the method's return type
     */
    Metodo.prototype.getTipoRitorno = function () {
        return this.tipoRitorno;
    };
    /**
     * it returns the method's parameters list
     */
    Metodo.prototype.getListaArgomenti = function () {
        return this.listaArgomenti;
    };
    return Metodo;
}());

//# sourceMappingURL=metodo.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileComponent = (function () {
    function FileComponent(menuService, mainEditorService) {
        this.menuService = menuService;
        this.mainEditorService = mainEditorService;
    }
    FileComponent.prototype.ngOnInit = function () {
    };
    FileComponent.prototype.esporta = function () {
        this.mainEditorService.retriveGraph();
        this.menuService.encrypt(JSON.parse(this.mainEditorService.getProject().toJSON()));
    };
    FileComponent.prototype.fileChange = function (event) {
        this.menuService.import(event);
    };
    return FileComponent;
}());
FileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-file',
        template: __webpack_require__(268),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], FileComponent);

var _a, _b;
//# sourceMappingURL=file.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayerComponent = (function () {
    function LayerComponent() {
    }
    LayerComponent.prototype.ngOnInit = function () {
    };
    return LayerComponent;
}());
LayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-layer',
        template: __webpack_require__(269),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], LayerComponent);

//# sourceMappingURL=layer.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificaComponent = (function () {
    function ModificaComponent(menuService) {
        this.menuService = menuService;
    }
    ModificaComponent.prototype.doZoomIn = function () {
        this.menuService.zoomIn();
    };
    ModificaComponent.prototype.doZoomOut = function () {
        this.menuService.zoomOut();
    };
    ModificaComponent.prototype.ngOnInit = function () {
    };
    return ModificaComponent;
}());
ModificaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-modifica',
        template: __webpack_require__(270),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], ModificaComponent);

var _a;
//# sourceMappingURL=modifica.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfiloComponent = (function () {
    function ProfiloComponent() {
    }
    ProfiloComponent.prototype.ngOnInit = function () {
    };
    return ProfiloComponent;
}());
ProfiloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-profilo',
        template: __webpack_require__(271),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], ProfiloComponent);

//# sourceMappingURL=profilo.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgettoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgettoComponent = (function () {
    function ProgettoComponent() {
    }
    ProgettoComponent.prototype.ngOnInit = function () {
    };
    return ProgettoComponent;
}());
ProgettoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-progetto',
        template: __webpack_require__(272),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], ProgettoComponent);

//# sourceMappingURL=progetto.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateComponent = (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    return TemplateComponent;
}());
TemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-template',
        template: __webpack_require__(273),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], TemplateComponent);

//# sourceMappingURL=template.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(274),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_editor_models_classe__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });

/**
 * It stores the data of the project and povides the methods
 * to retrive it's inforations
 */
var Global = (function () {
    function Global() {
        this.nome_progetto = "Proj";
        this.classi = new Array();
    }
    Global.prototype.addClasse = function (nome) {
        this.classi.forEach(function (c) {
            if (c.getNome() == nome)
                throw new Error('NomePresente');
        });
        var c;
        c = new __WEBPACK_IMPORTED_MODULE_0__components_editor_models_classe__["a" /* Classe */](nome);
        this.classi.push(c);
    };
    Global.prototype.changeTitolo = function (titolo) {
        this.nome_progetto = titolo;
    };
    Global.prototype.setDiagramma = function (diagramma) {
        this.diagramma = diagramma;
    };
    Global.prototype.getDiagramma = function () {
        return this.diagramma;
    };
    Global.prototype.getTitolo = function () {
        return this.nome_progetto;
    };
    Global.prototype.getClassi = function () {
        return this.classi;
    };
    Global.prototype.getClasse = function (name) {
        var classe;
        this.classi.forEach(function (c) {
            if (c.getNome() == name)
                classe = c;
        });
        return classe;
    };
    // I campi devono ritornare come string
    Global.prototype.toJSON = function () {
        var global = '{\"nome_progetto\":\"' + this.nome_progetto +
            '\",\"project":{\"graph\":' + JSON.stringify(this.diagramma) +
            ',\"classi\":' + JSON.stringify(this.classi) + '}}';
        console.log(global);
        return global;
    };
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0;\n  padding: 0;\n  height: 94vh;\n}\n.editor {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n}\n\n.activityframe {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n  background-color: #03A9F4;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #EAEAF1;\n  border-left: 1px solid black;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n\n.row {\n  padding: 3% 0;\n  border-top: 1px solid black;\n}\n.selezionato {\n  font-size: 16px;\n}\n\n.campiAttributo {\n  padding-bottom: 3%;\n}\n\n/*.changeNome {\n  padding-top: 4%;\n}*/\n\n.iconaMirrow {\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.aggiungiAttributo {\n  display: block;\n}\n\n#listaAttr {\n  padding-bottom: 2%;\n  border-bottom: 1px solid black;\n}\n\n.listaAttributi {\n  position: absolute;\n  background-color: #EAEAF1;\n  top: 0;\n  left: -100%;\n  z-index: 10;\n  max-width: 100%;\n  border-left: 1px solid black;\n  border-top: 0px solid transparent;\n}\n\n.listaAttributi ul {\n  margin-bottom: 0;\n}\n\n/*velocità di animazione del menù della lista attributi*/\n.collapsing {\n    transition: height 0.1s;\n}\n\n.listaMetodi {\n  position: absolute;\n  background-color: #EAEAF1;\n  left: -100%;\n  z-index: 10;\n  max-width: 100%;\n  top: 39.5%;\n  border-left: 1px solid black;\n  border-top: 0px solid transparent;\n  border-bottom: 1px solid black;\n}\n\n.tipiMetodo {\n  vertical-align: -webkit-baseline-middle;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  height: 100%;\n  background-color: #F1EDEA;\n  overflow: hidden;\n}\n\n.classi {\n  /*display: none;*/\n}\n\n.tipo {\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n}\n\n.icona {\n  margin:0 auto;\n  display: block;\n  height: 40px;\n  width: 40px;\n}\n\n.add {\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  outline:none;\n  vertical-align: middle;\n  padding: 0;\n\n}\n\n.add:hover {\n  opacity: 0.4;\n}\n\n.addClasse {\n    background: url(" + __webpack_require__(237) + ") no-repeat top left;\n    background-size: contain;\n\n}\n\n.addInterfaccia {\n    background: url(" + __webpack_require__(238) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAstratta {\n    background: url(" + __webpack_require__(236) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addCommento {\n    background: url(" + __webpack_require__(303) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAssociazione {\n    background: url(" + __webpack_require__(239) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addGeneralizzazione {\n    background: url(" + __webpack_require__(240) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addImplementazione {\n    background: url(" + __webpack_require__(241) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addStart {\n  background: url(" + __webpack_require__(230) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addEnd {\n  background: url(" + __webpack_require__(231) + ") no-repeat;\n  background-size:100%;\n}\n\n.addAttivita {\n  background: url(" + __webpack_require__(233) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addAttivitaFor {\n  background: url(" + __webpack_require__(234) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addConnettore {\n  background: url(" + __webpack_require__(232) + ") no-repeat;\n  background-size:100%;\n}\n\n.addDecision {\n  background: url(" + __webpack_require__(235) + ") no-repeat;\n  background-size:100%;\n}\n\n/*Blocco di icone inizialmente settato a false*/\n.activity {\n  /*display: none;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#paper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.editClass {\n  z-index: 10;\n  position: absolute;\n  width: 33.4%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 100%;\n}\n\n.toolbar {\n  position: absolute;\n  width: 95px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  border-right: 1px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".barra-menu {\n  background: #42413D;\n  height: 6vh;\n}\n\n.row {\n  padding: 0;\n  margin: 0;\n}\n.logo {\n    display: inline-block;\n    color: #EE7500;\n    margin-left: 1%;\n  }\n\n.logo img{\n  display: inline-block;\n  width: 30px;\n}\n\n.logoText {\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_global__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_models_metodo__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainEditorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 'MainEditorservice' stores information about the editor's canvas, the project
 * and stores a direct access to the EditorComponent.
 * 'MainEditorservice' provides methods to interact with the EditorComponent and
 * to modify a selected class which is present in the editor's canvas.
 */
var MainEditorService = (function () {
    function MainEditorService() {
        /**
         * 'project' is used to store and retrive information about the current project
         */
        this.project = new __WEBPACK_IMPORTED_MODULE_1__models_global__["a" /* Global */]();
        /**
         * 'activityMode' is a flag which indicates if the activity diagram is in use
         */
        this.activityMode = false;
    }
    /**
     * This method is used to set the instantiation of the EditorComponent as
     * internal property of this class
     * @param editCmp the EditorComponent instance
     */
    MainEditorService.prototype.setEditorComp = function (editCmp) {
        this.editorComp = editCmp;
    };
    /**
     * This method is used to retrive the array of classes present in the project
     */
    MainEditorService.prototype.getClassList = function () {
        return this.project.getClassi();
    };
    /**
     * This method returns the selected class of type ´Classe´
     */
    MainEditorService.prototype.getSelectedClasse = function () {
        return this.selectedClasse;
    };
    /**
     * Add an object of type Classe into the project's collection
     * @param classe this object is a representation, of type ´Classe´ or ´ClasseAstratta´,
     * of the parameter graphelement.
     * @param graphElement this is an element of the graphical library JointJS
     */
    MainEditorService.prototype.addClass = function (classe, graphElement) {
        this.project.getClassi().push(classe);
        this.editorComp.addElement(graphElement);
        console.log(this.getClassList());
    };
    /**
     * Search for a class, in the project's collection of classes,
     * which have the same name as the one given as parameter.
     * @param nome name of the class to search
     */
    MainEditorService.prototype.selectClasse = function (nome) {
        var _this = this;
        this.project.getClassi().forEach(function (classe) {
            if (classe.getNome() == nome) {
                _this.selectedClasse = classe;
            }
        });
        if (!this.selectedClasse)
            console.log('Classe mancante'); // TODO: spend a moment to code it as a real warning
    };
    /**
     * Sets the flag activityMode to true
     */
    MainEditorService.prototype.setActivityMode = function () {
        this.activityMode = true;
    };
    /**
     * Sets the flas activityMode to false
     */
    MainEditorService.prototype.setClassMode = function () {
        this.activityMode = false;
    };
    /**
     * Returns the current value of the flag activityMode
     * @returns if the status is true the activity mode is activated,
     * if it's false the class mode is active.
     */
    MainEditorService.prototype.getActivityModeStatus = function () {
        return this.activityMode;
    };
    /**
     * Calls the addAttribute method of the ´selectedClasse´
     * @param tipo is the type of the attribute to add as parameter to addAttributo
     * @param nome is the name of the attribute to add as parameter to addAttributo
     * @param acc is the visibility of the attribute to add as parameter to addAttributo
     */
    MainEditorService.prototype.addAttributo = function (tipo, nome, acc) {
        this.selectedClasse.addAttributo(tipo, nome, acc);
    };
    /**
     * Calls the removeAttr method of the ´selectedClasse´
     * @param nome is the name of the attribute to remove which is passed to the removeAttr method
     */
    MainEditorService.prototype.removeAttributo = function (nome) {
        this.selectedClasse.removeAttr(nome);
    };
    /**
     * This method stores into the ´this.graph´ properties the graph given
     * @param graph Is a graph given in JSON format
     */
    MainEditorService.prototype.storeGraph = function (graph) {
        this.graph = graph;
    };
    /**
     * Is used to restore the class diagram from the store graph, it calls
     * the replaceDiagram method of the EditorComponent and then sets
     * ´this.activityMode´ to false
     */
    MainEditorService.prototype.enterClassMode = function () {
        this.editorComp.replaceDiagram(this.graph);
        this.activityMode = false;
    };
    /**
     * Calls the methods addMetodo of ´this.selectedClasse´ to add a new method into
     * the selectedClasse
     * @param tipo type returned by the method, ´tipo´ is passed as parameter to ´selectedClasse.addMetodo´
     * @param nome is the name of the method, ´nome´ is passed as parameter to ´selectedClasse.addMetodo´
     * @param acc the visibility of the method, ´acc´ is passed as parameter to ´selectedClasse.addMetodo´
     * @param listArgs this parameter is optional, 'listArgs' is the list of parameters which defines the
     * signature of the function
     */
    MainEditorService.prototype.addMetodo = function (tipo, nome, acc, listArgs) {
        this.selectedClasse.addMetodo(new __WEBPACK_IMPORTED_MODULE_2__components_editor_models_metodo__["a" /* Metodo */](nome, acc, tipo, listArgs));
    };
    /**
     * Calls removeMetodo of ´selectedClasse´
     * @param nome is the name of the method to eliminate, is passed as parameter to selectedClasse.removeMetodo
     */
    MainEditorService.prototype.removeMetodo = function (nome) {
        this.selectedClasse.removeMetodo(nome);
    };
    /**
     * This method search for a method into the selectedClasse and retrives it's diagram
     * to call editorComp's replaceDiagram which loads the method's diagram into the canvas.
     * Then sets the flag ´this.activityMode´ to true
     * @param name name of the method to find
     */
    MainEditorService.prototype.enterActivityMode = function (name) {
        try {
            var metodo = this.selectedClasse.retriveMethod(name);
        }
        catch (e) {
            if (e.message == 'Metodo non presente')
                console.log('Il metodo non è presente nella classe');
        }
        if (!this.activityMode && metodo) {
            this.editorComp.replaceDiagram(metodo.getDiagram());
            this.activityMode = true;
            this.editorComp.selectedCell = null;
        }
    };
    MainEditorService.prototype.addConnettore = function (connettore) {
        this.editorComp.addConnettore(connettore);
    };
    MainEditorService.prototype.getClass = function (name) {
        return this.project.getClasse(name);
    };
    MainEditorService.prototype.getProject = function () {
        return this.project;
    };
    MainEditorService.prototype.retriveGraph = function () {
        this.project.setDiagramma(this.editorComp.graph.toJSON());
    };
    return MainEditorService;
}());
MainEditorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MainEditorService);

//# sourceMappingURL=main-editor.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Cerchio.39ee067438843db9e6fa.svg";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CerchioCerchio.8b1850c7e37c766e8dbb.svg";

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Freccia.a4c499fd315ae52afecc.svg";

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rettangolo.70ad5344a1a2ba3b5c29.svg";

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RettangoloForchetta.18beb1c6c069027e2f37.svg";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rombo.f40f0455691a69a821ad.svg";

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Abstract.c6e97eeb61e215b9db88.svg";

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Class.16df5b7229f5c33c2af5.svg";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Interface.3a9ef1baee68153d68e1.svg";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Association.92977cfedaee16baf9b0.svg";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Generalization.e97844f3e5a27c0f9c2c.svg";

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Implementation.03e2d3a8adc68c375556.svg";

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<!-- component padre che racchiude gli elementi del menù -->\n<div class=\".container-fluid\">\n<app-menu></app-menu>\n<div class=\"row\">\n  <!-- component padre che racchiude gli elementi dell'editor -->\n  <div class=\"col-md-9 editor\">\n    <app-editor></app-editor>\n  </div>\n  <!-- component  che racchiude gli elementi del acrivity frame, la quale rappresenta il flusso del programma -->\n  <div class=\"col-md-3 activityframe\">\n    <app-activity-frame></app-activity-frame>\n  </div>\n</div>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "Activity frame\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<p>\n  activity-menu works!\n</p>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid menu\">\n\n  <div class=\"row selezionato\">\n    <span class=\"glyphicon glyphicon-wrench iconaMirrow\" aria-hidden=\"true\"></span> {{name}}\n  </div>\n  <div class=\"row changeNome\">\n    Modifica nome:\n    <input #changeName id=\"changeName\"\n    (keyup.enter)=\"changeNome(changeName.value)\">\n    <button class=\"btn btn-default\" (click)=\"changeNome(changeName.value)\">\n      <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <!-- div per aggiungere un attributo -->\n  <div class=\"aggiungiAttributo\">\n    <!-- <span [hidden]=\"!nomeAttributoUguale\">Il nome inserito per l'attributo è già esistente <br /></span> -->\n    <div class=\"row\">\n      <button href=\"#addAttr\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Aggiungi Attributo\n      </button>\n    </div>\n    <div id=\"addAttr\" class=\"campiAttributo collapse\">\n      <div class=\"aggiungiAttributo accessoAttr\">\n        <label>Seleziona Visibilità</label>\n        <select  [(ngModel)]=\"selectedAccAtt\">\n          <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo .selezionaTipo\">\n        <label>Seleziona tipo</label>\n        <select #tipi [(ngModel)]=\"selectedTipoAtt\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo nomeAttr\">\n        <label>Nome</label>\n        <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAtt\n        (keyup.enter)=\"addAttributo(nomeAtt.value)\">\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"addAttributo(nomeAtt.value)\">Aggiungi Attributo</button>\n    </div>\n\n  </div>\n  <button href=\"#listaAttr\" class=\"btn btn-default\" data-toggle=\"collapse\">\n    <span class=\"glyphicon glyphicon-triangle-left\" aria-hidden=\"true\"></span>Lista Attributi\n  </button>\n  <!-- lista attributi della classe -->\n  <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaAttributi\">\n    <div id=\"listaAttr\" class=\"row collapse\" *ngIf=\"name\">\n      <h5>Lista Attributi</h5>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let attr of this.mainEditorService.selectedClasse.getAttributi()\">\n          <span>{{attr.name}}: {{attr.type}}\n            <button class=\"btn btn-default\" (click)=\"removeAttributo(attr.name)\">\n              <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n            </button>\n            <!-- menù a tendina di modifica attributo-->\n            <button class=\"btn btn-default\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+attr.name\" (click)=\"modAttribute(attr.name)\" title=\"Modifica\">\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n            </button>\n          </span>\n          <!--prova-->\n          <div class=\"campiAttributo collapse\" attr.id=\"{{attr.name}}\">\n            <div class=\"aggiungiAttributo accessoAttr\">\n              <label>Seleziona Visibilità</label>\n              <select  [(ngModel)]=\"selectedAccAtt\">\n                <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n              </select>\n            </div>\n            <div class=\"aggiungiAttributo .selezionaTipo\">\n              <label>Seleziona tipo</label>\n              <select #tipi [(ngModel)]=\"selectedTipoAtt\">\n                <option value=\"\"></option>\n                <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n              </select>\n            </div>\n            <div class=\"aggiungiAttributo nomeAttr\">\n              <label>Nome</label>\n              <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAtt\n              (keyup.enter)=\"addAttributo(nomeAtt.value)\">\n            </div>\n            <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"addAttributo(nomeAtt.value)\">Modifica Attributo</button>\n            </div>\n          <!--prova-->\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- blocco per aggiungere un metodo alla classe -->\n  <div class=\"aggiungiMetodo\">\n    <div class=\"row\">\n      <button href=\"#addMetodo\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Aggiungi Metodo\n      </button>\n    </div>\n    <div id=\"addMetodo\" class=\"campiMetodo collapse\">\n      <!-- lista metodi della classe -->\n      <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaMetodi\">\n        <div  class=\"row\" *ngIf=\"name\">\n          <h5>Lista Metodi</h5>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let met of this.mainEditorService.selectedClasse.getMetodi()\">\n              <span>{{met.accesso}} &nbsp; {{met.nome}}(): {{met.tipoRitorno}}\n                <button class=\"btn btn-default\" (click)=\"removeMetodo(met.nome)\">\n                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n                </button>\n                <button class=\"btn btn-default\" (click)=\"modifyMetodo(met.nome)\" title=\"Modifica\">\n                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n                </button>\n              </span>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- blocco per aggiunta parametri metodo -->\n      <div class=\"aggiungiMetodo .selezionaTipo\">\n        <div class=\"aggiungiMeotdo accessoMetodo\">\n          <label>Seleziona Visibilità</label>\n          <select #accMetodo [(ngModel)]=\"selectedAccMet\">\n            <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n          </select>\n        </div>\n        <label>Seleziona tipo di ritorno</label>\n        <select #tipiMetodo [(ngModel)]=\"selectedTipoMet\">\n          <option value=\"void\"></option>\n          <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiMetodo nomeMet\">\n        <label>Nome</label>\n        <input [disabled]=\"!selectedTipoMet\" id=\"nome-metodo\" #nomeMetodo>\n      </div>\n      <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n          <div class=\"col-md-12 column\">\n            Parametri attuali\n            <table class=\"table table-bordered table-hover\" id=\"tab_logic\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">\n                    Tipo\n                  </th>\n                  <th class=\"text-center\">\n                    Nome\n                  </th>\n                  <th class=\"text-center\">\n                    \n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr #parametro>\n                  <td>\n                    <select #tipi class=\"tipiMetodo\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <input #nome type=\"text\" placeholder=\"Nome\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <button class=\"btn btn-default\" title=\"Aggiungi Parmetro\" (click)=\"aggiungiParam()\">\n                      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"!selectedTipoMet\" (click)=\"addMetodo(nomeMetodo.value)\">Aggiungi Metodo</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar classi\">\n  <div class=\"tipo\"> Classi </div>\n    <div class=\"icona\"><button (click)=\"addClasse()\" class=\"add addClasse\" title=\"Aggiungi classe\"></button></div>\n    <div class=\"icona\"><button (click)=\"addInterfaccia()\" class=\"add addInterfaccia\" title=\"Aggiungi interfaccia\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAstratta()\" class=\"add addAstratta\" title=\"Aggiungi classe astratta\"></button></div>\n\n  <div class=\"tipo\"> Connettori </div>\n    <div class=\"icona\"><button (click)=\"addImplementazione()\" class=\"add addImplementazione\" title=\"Aggiungi implementazione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addGeneralizzazione()\" class=\"add addGeneralizzazione\" title=\"Aggiungi generalizzazione\"></button></div>\n\n  <div class=\"tipo\"> Commenti </div>\n    <div class=\"icona\"><button (click)=\"addCommento()\" class=\"add addCommento\" title=\"Agiungi commento\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAssociazione()\" class=\"add addAssociazione\" title=\"Aggiungi associazione\"></button></div>\n</div>\n<div [hidden]=\"!mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar activity\">\n  <div class=\"tipo\"> Activity </div>\n    <div class=\"icona\"><button (click)=\"addStart()\" class=\"add addStart\" title=\"Aggiungi start\"></button></div>\n    <div class=\"icona\"><button (click)=\"addEnd()\" class=\"add addEnd\" title=\"Aggiungi End\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityShape()\" class=\"add addAttivita\" title=\"Aggiungi l'attività\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityForShape()\" class=\"add addAttivitaFor\" title=\"Aggiungi l'attività \"></button></div>\n    <div class=\"icona\"><button (click)=\"addConnector()\" class=\"add addConnettore\" title=\"Aggiungi connettore\"></button></div>\n    <div class=\"icona\"><button (click)=\"addDecision()\" class=\"add addDecision\" title=\"Aggiungi decisione\"></button></div>\n</div>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<div id=\"paper\"></div>\n<div class=\"toolbar\">\n  <app-toolbar></app-toolbar>\n\n</div>\n<div [hidden]=\"!selectedCell\" class=\"editClass\">\n    <class-menu [hidden]=\"mainEditorService.getActivityModeStatus()\"></class-menu>\n    <activity-menu [hidden]=\"!mainEditorService.getActivityModeStatus()\"></activity-menu>\n</div>\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuFile>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    File\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Salva</a></li>\n    <li><a (click)=\"esporta()\" href=\"#\" >Esporta</a></li>\n    <li><input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\"></li>\n    <li><a href=\"#\" >Genera codice</a></li>\n    <li><a href=\"#\" >Salva template</a></li>\n    <li><a href=\"#\" >Chiudi</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuLayer>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Layer\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi laver</a></li>\n    <li><a href=\"#\" >Lista layer</a></li>\n    <li><a href=\"#\" >Rinomina laver</a></li>\n    <li><a href=\"#\" >Elimina layer</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuModifica>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Modifica\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Annulla</a></li>\n    <li><a href=\"#\" >Ripristina</a></li>\n    <li><a href=\"#\" >Taglia</a></li>\n    <li><a href=\"#\" >Copia</a></li>\n    <li><a href=\"#\">Incolla</a></li>\n    <li><a href=\"#\">Elimina</a></li>\n    <li><a href=\"#\"  (click)=\"doZoomIn()\" >Zoom In</a></li>\n    <li><a href=\"#\"  (click)=\"doZoomOut()\" >Zoom Out</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProfilo>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Profilo\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Modifica password</a></li>\n    <li><a href=\"#\" >Modifica email</a></li>\n    <li><a href=\"#\" >Elimina profilo</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProgetto>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Progetto\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Nuovo</a></li>\n    <li><a href=\"#\" >Apri progetto</a></li>\n    <li><a href=\"#\" >Importa progetto</a></li>\n    <li><a href=\"#\" >Elimina progetto</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuTemplate>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Template\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi template</a></li>\n    <li><a href=\"#\" >Elimina template</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div class=\".container-fluid barra-menu\">\n  <div class=\"row\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n      <div class=\"logoText\">SWEDesigner</div>\n    </div>\n    <div class=\"menu btn\">  <app-file></app-file>  </div>\n    <div class=\"menu btn\">  <app-progetto></app-progetto>  </div>\n    <div class=\"menu btn\">  <app-modifica></app-modifica>  </div>\n    <div class=\"menu btn\">  <app-template></app-template>  </div>\n    <div class=\"menu btn\">  <app-layer></app-layer>  </div>\n    <div class=\"menu btn\">  <app-profilo></app-profilo>  </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAIAAACwQNulAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVHSURBVHhe7dYxbhRWFIbR2VmykaRLxCocGm8AN6G1vAGX9KyA1mkgCpHTUKeavAhLEanvV1zpoDGI5urp4/BrLle/FIgLXM799+++PN4/+ygwXuDQOsD+RXZOv7n5+HD32UeBwQIH1aH1H7KHuz/++vNvHwUGCxxUkPlP1RaArO07uAd7T0EGWV4Asjzx3gWaejlkkOUFIMsTT+3B3juQQZYXgCxPvHeBpl4OGWR5AcjyxFN7sPcOZJDlBSDLE+9doKmXQwZZXgCyPPHUHuy9AxlkeQHI8sR7F2jq5ZBBlheALE88tQd770AGWV4Asjzx3gWaejlkkOUFIMsTT+3B3juQQZYXgCxPvHeBpl4OGWR5AcjyxFN7sPcOZJDlBSDLE+9doKmXQwZZXgCyPPHUHuy9AxlkeQHI8sR7F2jq5ZBBlheALE88tQd770AGWV4Asjzx3gWaejlkkOUFIMsTT+3B3juQQZYXgCxPvHeBpl4OGWR5AcjyxFN7sPcOZJDlBSDLE+9doKmXQwZZXgCyPPHUHuy9AxlkeQHI8sR7F2jq5ZBBlheALE88tQd770AGWV4Asjzx3gWaejlkkOUFIMsTT+3B3juQQZYXgCxPvHeBpl4OGWR5AcjyxFN7sPcOZJDlBSDLE+9doKmXQwZZXgCyPPHUHuy9AxlkeQHI8sR7F2jq5d8ge/3q6cfvPvgoMF7g0Lper5fz8/b295uffvv19pOPAoMFDqpD6wXZ4/3zWbapkXRHga8FfCfznSwvAFme2J5BBlleALI8sSWDDLK8AGR5YksGGWR5AcjyxJYMMsjyApDliS0ZZJDlBSDLE1syyCDLC0CWJ7ZkkEGWF4AsT2zJIIMsLwBZntiSQQZZXgCyPLElgwyyvABkeWJLBhlkeQHI8sSWDDLI8gKQ5YktGWSQ5QUgyxNbMsggywtAlie2ZJBBlheALE9sySCDLC8AWZ7YkkEGWV4AsjyxJYMMsrwAZHliSwYZZHkByPLElgwyyPICkOWJLRlkkOUFIMsTWzLIIMsLQJYntmSQQZYXgCxPbMkggywvAFme2JJBBlleALI8sSWDDLK8AGR5YksGGWR5AcjyxJYMMsjyApDliS0ZZJDlBSDLE1syyCDLC0CWJ7ZkkEGWF/gG2dvbT7/8/HR+91FgsMBXVNfr9XJ+Xr96+uH7Dz4KjBc4tF6QPd4/n2XzHUKB2QK+k+XfSGb/wTZegwyyvABkeeKN2zP7ZsggywtAlieeXYWN1yCDLC8AWZ544/bMvhkyyPICkOWJZ1dh4zXIIMsLQJYn3rg9s2+GDLK8AGR54tlV2HgNMsjyApDliTduz+ybIYMsLwBZnnh2FTZegwyyvABkeeKN2zP7ZsggywtAlieeXYWN1yCDLC8AWZ544/bMvhkyyPICkOWJZ1dh4zXIIMsLQJYn3rg9s2+GDLK8AGR54tlV2HgNMsjyApDliTduz+ybIYMsLwBZnnh2FTZegwyyvABkeeKN2zP7ZsggywtAlieeXYWN1yCDLC8AWZ544/bMvhkyyPICkOWJZ1dh4zXIIMsLQJYn3rg9s2+GDLK8AGR54tlV2HgNMsjyApDliTduz+ybIYMsLwBZnnh2FTZegwyyvABkeeKN2zP7ZsggywtAlieeXYWN1yCDLC8AWZ544/bMvhkyyPICkOWJZ1dh4zXIIMsLQJYn3rg9s2+GDLK8AGR54tlV2HgNMsjyApDliTduz+ybIYMsL/B/ZG9uPj7cffZRYLDAQfV4/3y9Xi/n5/27L+cvPgqMFzi0XpCdP/xSoCvwD4GW7y1tgiQVAAAAAElFTkSuQmCC"

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributo__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Classe; });

/**
 * Use to model a Java class it contains the name of the class, an array of attributes,
 * an array of methods, and the class exdended by this class.
 */
var Classe = (function () {
    /**
     * The constructor builds a new object of type Classe and sets it's name
     * @param nome the only parmeter used to build an object of type Classe
     */
    function Classe(nome) {
        /**
         * Array of attributes of the Java class
         */
        this.attributi = new Array();
        /**
         * Array of methods of the Java class
         */
        this.metodi = new Array();
        this.nome = nome;
    }
    // Metodo per aggiungere un attributo all'array di attributi della classe
    /**
     * This method adds a new attribute into the array of attributes ´this.attributi´,
     * but first it'll controll if there is not an attribute with the same name.
     * @param tipo type of the new attribute, it's passed as parameter to the constructor of Attributo
     * @param nome the name of the new attribute, it's passed as parameter to the constructor of Attributo
     * @param acc the visibility of the new attribute, it's passed as parameter to the constructor of Attributo
     * @throws an error of type Error anche custom message 'NomePresente'
     */
    Classe.prototype.addAttributo = function (tipo, nome, acc) {
        this.attributi.forEach(function (attr) {
            if (attr.getNome() == nome)
                throw new Error('NomePresente');
        });
        var attr;
        if (acc)
            attr = new __WEBPACK_IMPORTED_MODULE_0__attributo__["a" /* Attributo */](tipo, nome, acc);
        else
            attr = new __WEBPACK_IMPORTED_MODULE_0__attributo__["a" /* Attributo */](tipo, nome, 'public');
        this.attributi.push(attr);
    };
    /**
     * Sets the name of the class which is extended by this class
     * @param superclass the name of the superclass
     */
    Classe.prototype.addSottoclasse = function (superclass) {
        this.classePadre = superclass;
    };
    /**
     * Adds a new method for this Java class
     * @param metodo it takes a pre-built method and adds it into the array of methods
     */
    Classe.prototype.addMetodo = function (metodo) {
        this.metodi.push(metodo);
    };
    // Metodo per cambiare il nome alla classe
    /**
     * Change the name of the class
     * @param name the new name of the class
     */
    Classe.prototype.changeNome = function (name) {
        this.nome = name;
    };
    /**
     * Modify an attribute of this class if the attribute is present in the array of attributes.
     * It changes only the parameter given
     * @param nomeAttr the name of the attribute to modify
     * @param tipo the new type for the selected attribute. This parameter is optional
     * @param nuovoNome the new name for the selected attribute. This parameter is optional
     * @param acc the new visibility for the selected attribute. This parameter is optional
     */
    Classe.prototype.changeAttr = function (nomeAttr, tipo, nuovoNome, acc) {
        var attributo;
        this.attributi.forEach(function (attr) {
            if (attr.getNome() == nomeAttr)
                attributo = attr;
        });
        if (attributo) {
            if (tipo)
                attributo.changeTipo(tipo);
            if (nuovoNome)
                attributo.changeNome(nuovoNome);
            if (acc)
                attributo.changeAcc(acc);
        }
    };
    /**
     * Removes an attribute from the array of attributes if the given name matches
     * @param nomeAttr the name of the attribute to remove
     */
    Classe.prototype.removeAttr = function (nomeAttr) {
        var ind;
        this.attributi.forEach(function (attr, index) {
            if (attr.getNome() == nomeAttr)
                ind = index;
        });
        if (ind >= 0)
            this.attributi.splice(ind, 1);
        console.log(this);
    };
    /**
     * Removes a method from the array of method if the given name matches
     * @param nomeMetodo the name of the method to remove
     */
    Classe.prototype.removeMetodo = function (nomeMetodo) {
        var ind;
        this.metodi.forEach(function (metodo, index) {
            if (metodo.getNome() == nomeMetodo)
                ind = index;
        });
        if (ind >= 0)
            this.metodi.splice(ind, 1);
    };
    /**
     * Returns the name of this class
     */
    Classe.prototype.getNome = function () {
        return this.nome;
    };
    /**
     * Returns the array of attributes
     */
    Classe.prototype.getAttributi = function () {
        return this.attributi;
    };
    /**
     * Returns the array of methods
     */
    Classe.prototype.getMetodi = function () {
        return this.metodi;
    };
    /**
     * Returns a method from the array of method if the given name matches
     * @param name the name of the method to retrive
     * @throws an error of type Error with message 'Metodo non presente' if
     * the given name does not match
     */
    Classe.prototype.retriveMethod = function (name) {
        var met;
        this.metodi.forEach(function (metodo) {
            if (metodo.getNome() == name)
                met = metodo;
            else
                throw new Error('Metodo non presente');
        });
        return met;
    };
    /**
     * Returns the name of the superclass
     */
    Classe.prototype.getSottoclasse = function () {
        return this.classePadre;
    };
    /**
     * Override of the toJSON function
     */
    Classe.prototype.toJSON = function () {
        var classe = '{\"name\":\"' + this.nome + '\",\"attributes\":' +
            JSON.stringify(this.attributi) + ',\"methods\":' +
            JSON.stringify(this.metodi) + ',\"superclass\":"' +
            this.classePadre + '\"}';
        return JSON.parse(classe);
    };
    return Classe;
}());

//# sourceMappingURL=classe.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.selectedGraphService = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.selectedGrapg$ = this.selectedGraphService.asObservable();
    }
    /**
    *This method increase the size of the shapes in the editor.
    */
    MenuService.prototype.zoomIn = function () {
        this.selectedGraphService.next('+');
    };
    /**
    *This method decrease the size of the shapes in the editor.
    */
    MenuService.prototype.zoomOut = function () {
        this.selectedGraphService.next('-');
    };
    MenuService.prototype.encrypt = function (proj) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http.post('/encrypt', proj, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
        })
            .subscribe(function (data) {
            console.log(data);
            var blob = new Blob([data.blob()], { type: 'application/json' });
            var filename = 'proj.json';
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](blob, filename);
            console.log('diobueo');
        }, function (error) { console.log(JSON.stringify(error)); });
    };
    MenuService.prototype.readFile = function (file, onloadCallBack) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = onloadCallBack;
    };
    MenuService.prototype.import = function (event) {
        var file = event.srcElement.files[0];
        var readed;
        if (file) {
            this.readFile(file, function (e) {
                var contents = e.target;
                var readed = JSON.parse(contents.result);
                console.log(readed);
                this.http.post('/decrypt', readed.data, {
                    method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
                })
                    .subscribe(function (data) {
                    console.log(data);
                }, function (error) { console.log(error); });
            });
        }
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], MenuService);

var _a;
/*
var file = event.target.files[0];
var reader = new FileReader();
reader.onload = file =>{
  var contents: any = file.target;
  this.contentProj = contents.result;
};
console.log("madonnamaiala" + this.contentProj);
this.http.post('/decrypt', this.contentProj, {
  method: RequestMethod.Post,
  headers: new Headers({'Content-Type': 'application/json'})})
  .subscribe((data)=>{
    console.log(data);
  },
error => {console.log(error)})
}*/
/*
if(file){
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function(e){
    var contents: any = e.target;
    readed = JSON.parse(contents.result);
  }
  reader.onerror = function(e){
    console.log("non leggo dio cane");
  }
}*/ 
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Param; });
/**
 * it rappresents the a method's parameter
 */
var Param = (function () {
    /**
     * Use to model a method class it contains the parameter definition.
     * @param tipo
     * @param nome
     */
    function Param(tipo, nome) {
        this.type = tipo;
        this.name = nome;
    }
    /**
     * it returns the parameter's type
     */
    Param.prototype.getTipo = function () {
        return this.type;
    };
    /**
     * it returns the parameter's name
     */
    Param.prototype.getNome = function () {
        return this.name;
    };
    /**
     * it change the parameter's type
     * @param tipo
     */
    Param.prototype.changeTipo = function (tipo) {
        this.type = tipo;
    };
    /**
     * it change the parameter's name
     * @param nome
     */
    Param.prototype.changeNome = function (nome) {
        this.name = nome;
    };
    return Param;
}());

//# sourceMappingURL=param.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassMenuService = (function () {
    function ClassMenuService() {
        // Observable object-class source
        this.selectedClassSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable object-class stream
        this.selectedClass$ = this.selectedClassSource.asObservable();
    }
    // Service message commands
    ClassMenuService.prototype.classSelection = function (classe) {
        this.selectedClassSource.next(classe);
    };
    return ClassMenuService;
}());
ClassMenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClassMenuService);

//# sourceMappingURL=class-menu.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(132);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.bundle.js.map