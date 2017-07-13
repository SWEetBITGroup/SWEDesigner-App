webpackJsonp([1,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_global__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_models_metodo__ = __webpack_require__(69);
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
        this.mainExist = false;
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
    MainEditorService.prototype.addAttributo = function (tipo, nome, acc, stat) {
        this.selectedClasse.addAttributo(tipo, nome, acc, stat);
    };
    /**
     * Calls the removeAttr method of the ´selectedClasse´
     * @param nome is the name of the attribute to remove which is passed to the removeAttr method
     */
    MainEditorService.prototype.removeAttributo = function (nome) {
        this.selectedClasse.removeAttr(nome);
    };
    MainEditorService.prototype.changeAttributo = function (oldName, name, type, acc) {
        this.selectedClasse.changeAttr(oldName, type, name, acc);
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
    MainEditorService.prototype.enterClassMode = function (method) {
        method.addDiagram(this.editorComp.graph.toJSON());
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
    MainEditorService.prototype.addMetodo = function (staticMet, costr, tipo, nome, acc, listArgs) {
        this.selectedClasse.addMetodo(new __WEBPACK_IMPORTED_MODULE_2__components_editor_models_metodo__["a" /* Metodo */](staticMet, costr, nome, acc, tipo, listArgs));
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
    MainEditorService.prototype.isThereAMain = function () {
        return this.mainExist;
    };
    MainEditorService.prototype.addConnettore = function (connettore) {
        this.editorComp.addConnettore(connettore);
    };
    MainEditorService.prototype.addSuperclass = function (subclassName, superclassName) {
        console.log(subclassName);
        var subclass = this.getClass(subclassName);
        subclass.addSuperclass(superclassName);
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
    MainEditorService.prototype.importProject = function (importData) {
        var proj = JSON.parse(importData._body).data;
        var newProj = new __WEBPACK_IMPORTED_MODULE_1__models_global__["a" /* Global */]();
        newProj.import(JSON.parse(proj));
        this.project = newProj;
        this.editorComp.replaceDiagram(JSON.parse(newProj.getDiagramma()));
    };
    MainEditorService.prototype.removeClass = function (name, classe) {
        this.project.removeClass(name);
        this.editorComp.deleteElement(classe);
    };
    MainEditorService.prototype.addShape = function (cell) {
        this.editorComp.addElement(cell);
    };
    MainEditorService.prototype.connetActivity = function (con) {
        this.editorComp.addConnettore(con);
    };
    MainEditorService.prototype.setConnetionActivity = function (ids) {
        console.log(ids);
    };
    MainEditorService.prototype.setCode = function (vars) {
        this.varCode = vars;
    };
    return MainEditorService;
}());
MainEditorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MainEditorService);

//# sourceMappingURL=main-editor.service.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shape; });
/**
* Rappresents a base class and is used to rappresent the base info
* for the shape on the activity diagram.
*/
var Shape = (function () {
    function Shape(id) {
        this.ifPassed = new Array();
        this.id = id;
        /*
        if(body)
          this.body = body;
        if(succ)
          this.succ = succ;
        if(succElse)
          this.succElse = succElse;*/
    }
    Shape.prototype.setId = function (id) {
        this.id = id;
    };
    Shape.prototype.setBody = function (body) {
        this.body = body;
    };
    Shape.prototype.setSucc = function (succ) {
        this.succ = succ;
    };
    Shape.prototype.setSuccElse = function (succElse) {
        this.succElse = succElse;
    };
    Shape.prototype.setIfPassed = function (pas) {
        var _this = this;
        pas.forEach(function (element) {
            _this.ifPassed.push(element);
        });
    };
    Shape.prototype.setPrinted = function (printed) {
        this.printed = printed;
    };
    Shape.prototype.getId = function () {
        return this.id;
    };
    Shape.prototype.getBody = function () {
        return this.body;
    };
    Shape.prototype.getSucc = function () {
        return this.succ;
    };
    Shape.prototype.getSuccElse = function () {
        return this.succElse;
    };
    Shape.prototype.getIfPassed = function () {
        return this.ifPassed;
    };
    Shape.prototype.getPrinted = function () {
        return this.printed;
    };
    return Shape;
}());

//# sourceMappingURL=shape.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_if_node__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_end_if_node__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_operation__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_start__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_end__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityService = (function () {
    function ActivityService(mainEditorService) {
        this.mainEditorService = mainEditorService;
    }
    ActivityService.prototype.getShapeList = function () {
        return this.shapeList.getAllShape();
    };
    ActivityService.prototype.addIfNode = function (graphElement) {
        this.shapeList.getAllShape().push(new __WEBPACK_IMPORTED_MODULE_2__models_if_node__["a" /* ifNode */](graphElement.id));
        this.mainEditorService.addShape(graphElement);
    };
    ActivityService.prototype.addEndIfNode = function (graphElement) {
        this.shapeList.getAllShape().push(new __WEBPACK_IMPORTED_MODULE_3__models_end_if_node__["a" /* endIfNode */](graphElement.id));
        this.mainEditorService.addShape(graphElement);
    };
    ActivityService.prototype.addOperation = function (graphElement) {
        this.mainEditorService.addShape(graphElement);
        var oper = new __WEBPACK_IMPORTED_MODULE_4__models_operation__["a" /* operation */](graphElement.id);
        this.shapeList.getAllShape().push(oper);
    };
    ActivityService.prototype.addStart = function (graphElement) {
        this.startID = graphElement.id;
        this.mainEditorService.addShape(graphElement);
        this.shapeList.getAllShape().push(new __WEBPACK_IMPORTED_MODULE_5__models_start__["a" /* Start */](graphElement.id));
    };
    ActivityService.prototype.addEnd = function (graphElement) {
        this.mainEditorService.addShape(graphElement);
        this.shapeList.getAllShape().push(new __WEBPACK_IMPORTED_MODULE_6__models_end__["a" /* End */](graphElement.id));
    };
    ActivityService.prototype.setSelectedMethod = function (metodo) {
        this.selectedMethod = metodo;
        this.shapeList = metodo.getShapeList();
    };
    ActivityService.prototype.setSelectedElement = function (element) {
        this.selectedElement = element;
        this.selectShape(element.id);
    };
    ActivityService.prototype.selectShape = function (id) {
        var _this = this;
        this.shapeList.getAllShape().forEach(function (shape) {
            if (shape.getId() == id) {
                _this.selectedShape = shape;
            }
        });
        if (!this.selectedShape)
            console.log('Shape mancante'); // TODO: spend a moment to code it as a real warning
    };
    ActivityService.prototype.start = function () {
        var x = false;
        if (this.startID) {
            x = true;
        }
        return x;
    };
    ActivityService.prototype.deselectElement = function () {
        this.selectedElement = null;
        this.selectedShape = null;
    };
    ActivityService.prototype.addBody = function (body) {
        this.selectedShape.addBody(body);
    };
    ActivityService.prototype.getSelectedMethod = function () {
        return this.selectedMethod;
    };
    ActivityService.prototype.getSelectedElement = function () {
        return this.selectedElement;
    };
    ActivityService.prototype.getNameMethod = function () {
        if (this.selectedMethod)
            return this.selectedMethod.getNome();
    };
    ActivityService.prototype.changeName = function (name) {
        this.selectedMethod.changeNome(name);
    };
    ActivityService.prototype.connect = function (elementCon) {
        this.mainEditorService.addConnettore(elementCon);
    };
    ActivityService.prototype.setConnector = function (ids) {
        var first = this.shapeList.getElementById(ids[0]);
        var last = this.shapeList.getElementById(ids[1]);
        if (first.getSucc())
            first.setSuccElse(ids[1]);
        else
            first.setSucc(ids[1]);
        last.setIfPassed(first.getIfPassed());
        if (first.getType() == 'ifNode') {
            last.getIfPassed().push(ids[0]);
        }
        console.log(last);
    };
    ActivityService.prototype.modBody = function (text) {
        this.selectedElement.attr('text/text', text);
        var elShape = this.shapeList.getElementById(this.selectedElement.id);
        elShape.setBody(text);
        console.log(elShape);
    };
    ActivityService.prototype.generaCodice = function () {
        this.shapeList.printSucc(this.startID);
        console.log(this.shapeList);
    };
    ActivityService.prototype.isDecision = function () {
        if (this.selectedShape) {
            if (this.selectedShape.getType() == 'ifNode')
                return true;
        }
        return false;
    };
    ActivityService.prototype.isOperation = function () {
        if (this.selectedShape) {
            if (this.selectedShape.getType() == 'operation')
                return true;
        }
        return false;
    };
    ActivityService.prototype.setDecisione = function (dec) {
        this.selectedElement.attr('text/text', dec);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object])
], ActivityService);

var _a;
//# sourceMappingURL=activity.service.js.map

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_editor_service__ = __webpack_require__(14);
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
    function MenuService(http, mainEditorService) {
        this.http = http;
        this.mainEditorService = mainEditorService;
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
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=UTF-8' })
        })
            .subscribe(function (data) {
            var blob = new Blob([data.blob()], { type: 'application/json' });
            var filename = 'proj.json';
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](blob, filename);
        }, function (error) { console.log(JSON.stringify(error)); });
    };
    MenuService.prototype.readFile = function (file, onloadCallBack) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = onloadCallBack;
    };
    MenuService.prototype.import = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        if (file) {
            this.readFile(file, function (e) {
                var contents = e.target;
                var readed = JSON.parse(contents.result);
                _this.http.post('/decrypt', readed, {
                    method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                    responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json,
                    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
                })
                    .subscribe(function (data) {
                    _this.mainEditorService.importProject(data);
                }, function (error) { console.log(error); });
            });
        }
    };
    MenuService.prototype.getImportData = function () {
        return this.importData;
    };
    MenuService.prototype.toCode = function (var1) {
        var code = {
            m: 'for ( int i = 0 ; i < ' + var1 + ' ; i++ ) { System.out.println( i ) ;'
        };
        return code;
    };
    MenuService.prototype.code = function () {
        var var1 = this.mainEditorService.varCode;
        var code = 'import javafx.application.Application; import javafx.event.ActionEvent; import javafx.event.EventHandler; import javafx.scene.Scene ; import javafx.scene.control.Button ; import javafx.scene.layout.StackPane ; import javafx.stage.Stage ; class Hello{ private String text ; public int i ; protected String prova ; public static void main(String Args[]) { for ( int ' + var1[0] + ' = ' + var1[1] + ' ; ' + var1[0] + ' < ' + var1[2] + ' ; ' + var1[0] + '++ ) { System.out.println( ' + var1[0] + ' ) ; } } }';
        var blob = new Blob([code], { type: 'text/plain' });
        var filename = 'hello.java';
        __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](blob, filename);
        var proj = this.toCode('10');
        this.http.post('/parsing', proj, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=UTF-8' })
        })
            .subscribe(function (data) {
            console.log('code generated');
        }, function (error) { console.log(JSON.stringify(error)); });
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], MenuService);

var _a, _b;
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
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
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_param__ = __webpack_require__(43);
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
    function ClassMenuComponent(classMenuService, mainEditorService, activityService) {
        var _this = this;
        this.classMenuService = classMenuService;
        this.mainEditorService = mainEditorService;
        this.activityService = activityService;
        /**
         * The name of the current selected class in the class diagram of the EditorComponent
         */
        this.name = '';
        /**
         * Array of primitive data types
         */
        this.types = ['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char', 'String'];
        /**
         * Array of visibility
         */
        this.accessoAttr = ['public', 'protected', 'private'];
        /**
         * Used to store the selected visibility to build a new attribute
         */
        this.selectedAccAtt = 'public';
        /**
         * Used to store the selected return type to build a new method.
         */
        this.selectedTipoMet = 'void';
        /**
         * Used to store the selected visibility to build a new method
         */
        this.selectedAccMet = 'public';
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
    ClassMenuComponent.prototype.addAttributo = function (nome, staticAtt, finalAtt, tipo, acc) {
        console.log(nome + ' ' + tipo + ' ' + acc);
        if (nome && tipo && acc) {
            try {
                this.mainEditorService.addAttributo(tipo, nome, acc, staticAtt);
            }
            catch (error) {
                if (error.message == 'NomePresente')
                    // TODO: segnalare l'errore sul menu! Eliminare il console log
                    console.log('Non è possibile inserire due attributi con lo stesso nome');
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
            var stat = '';
            var final = '';
            if (staticAtt) {
                stat = 'static';
                attributi.push(vis + ' ' + stat + ' ' + nome + ' : ' + tipo);
            }
            else if (finalAtt) {
                final = 'final';
                attributi.push(vis + ' ' + final + ' ' + nome + ' : ' + tipo);
            }
            else
                attributi.push(vis + ' ' + nome + ' : ' + tipo);
            this.classe.set('attributes', null); // Hack per far funzionare l'event change:attrs
            this.classe.set('attributes', attributi);
            this.selectedAccAtt = 'public';
            this.selectedTipoAtt = null;
            $('#nome-attributo').val("");
        }
        else {
            alert('Alcuni capi del form per la creazione del nuovo attributo non sono stati compilati');
        }
    };
    /**
     * Removes an attribute of the given name from the class element and from the class object of type Classe
     * @param nome name of the attribute to removes
     */
    ClassMenuComponent.prototype.removeAttributo = function (nome) {
        var attributi = this.classe.attributes.attributes;
        attributi.splice(attributi.findIndex(function (element) {
            var att = element.split(' ');
            for (var i = 0; i < att.length; i++)
                if (att[i] == nome)
                    return element;
        }), 1);
        this.classe.set('attributes', null);
        this.classe.set('attributes', attributi);
        console.log('ora rimuovo attr');
        this.mainEditorService.removeAttributo(nome);
    };
    /**
     * Mododify the properties of an attribute
     */
    ClassMenuComponent.prototype.changeAttributo = function (name, oldName, tipo, acc, stat, final) {
        // if(name && tipo && acc) {
        //   this.mainEditorService.changeAttributo(oldName,name,tipo,acc);
        // }
        this.removeAttributo(oldName);
        this.addAttributo(name, stat, final, tipo, acc);
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
    ClassMenuComponent.prototype.addParam = function (type, name) {
        var sameName = false;
        this.parametriMetodo.forEach(function (param) {
            if (param.getNome() == name)
                sameName = true;
        });
        if (!sameName) {
            this.parametriMetodo.push(new __WEBPACK_IMPORTED_MODULE_4__models_param__["a" /* Param */](type, name));
            $('#tipiParam').val("");
            $('#nomeParam').val("");
        }
        else
            alert("Non è possibile inserire due o più parametri con lo stesso nome");
    };
    // Funzione per aggiungere un metodo alla classe selezionata
    /**
     * Retrives information from the template HTML of this component to build
     * a new method. If one or more parameter isn't present an error will be shown
     * @param nome
     */
    ClassMenuComponent.prototype.addMetodo = function (nome, staticMet, constructor, tipo, acc) {
        var params = this.parametriMetodo;
        console.log(nome + ' ' + tipo + ' ' + acc);
        if ((nome && tipo && acc) || (constructor && acc)) {
            try {
                if (constructor == true) {
                    nome = this.name;
                    tipo = this.name;
                }
                this.mainEditorService.addMetodo(staticMet, constructor, tipo, nome, acc, params);
            }
            catch (error) {
                if (error.message == 'NomePresente')
                    alert('Non è possibile inserire due o più metodi con lo stesso nome');
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
            var parametri = '';
            for (var ind = 0; ind < params.length; ind++) {
                parametri += params[ind].getNome() + ' : ' + params[ind].getTipo();
                if (ind != params.length - 1)
                    parametri += ', ';
            }
            var st = '';
            if (staticMet) {
                st = 'static';
            }
            metodi.push(vis + ' ' + st + ' ' + nome + ' ( ' + parametri + ' ) : ' + tipo);
            this.classe.set('methods', null); // Hack per far funzionare l'event change:attrs
            this.classe.set('methods', metodi);
            this.selectedAccMet = 'public';
            this.selectedTipoMet = 'void';
            $('#nome-metodo').val("");
            this.staticMetCheckbox.nativeElement.checked = false;
            this.constructorCheckbox.nativeElement.checked = false;
            $('#tipiParam').val("");
            $('#nomeParam').val("");
            this.parametriMetodo = new Array(); // Cleans the array of params
        }
        else {
            alert('Alcuni capi del form per la creazione del nuovo metodo non sono stati compilati');
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
            var met = element.split(' ');
            for (var i = 0; i < met.length; i++) {
                if (met[i] == nome)
                    return element;
            }
        }), 1);
        this.classe.set('attributes', null);
        this.classe.set('attributes', metodi);
        this.mainEditorService.removeMetodo(nome);
    };
    /**
     * Set the editor in activity mode to modify the behavior of the method of the given name
     * @param nome name of method to modify
     */
    ClassMenuComponent.prototype.modifyMetodo = function (nome) {
        this.mainEditorService.enterActivityMode(nome);
        this.activityService.setSelectedMethod(this.mainEditorService.getSelectedClasse().retriveMethod(nome));
    };
    ClassMenuComponent.prototype.getMetodi = function () {
        return this.mainEditorService.getSelectedClasse().getMetodi();
    };
    ClassMenuComponent.prototype.removeClass = function (name) {
        this.mainEditorService.removeClass(name, this.classe);
    };
    ClassMenuComponent.prototype.isAddableMethod = function () {
        if (!this.costruttore && !this.nomeMet)
            return true;
    };
    ClassMenuComponent.prototype.addMain = function () {
        this.addParam('String[]', 'args');
        this.addMetodo('main', true, false, 'void', 'public');
    };
    /**
     * This function allows to be check only one element
     * @param event name of id element
     */
    ClassMenuComponent.prototype.updateCheckbox = function (event) {
        if (this.staticMetCheckbox.nativeElement.checked && this.constructorCheckbox.nativeElement.checked && event == 'constructor')
            this.staticMetCheckbox.nativeElement.checked = false;
        if (this.staticMetCheckbox.nativeElement.checked && this.constructorCheckbox.nativeElement.checked && event == 'static') {
            this.constructorCheckbox.nativeElement.checked = false;
            this.costruttore = false;
        }
        //attributi 
        if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'staticAtt')
            this.checkFinalAtt.nativeElement.checked = false;
        if (this.checkStaticAtt.nativeElement.checked && this.checkFinalAtt.nativeElement.checked && event == 'finalAtt')
            this.checkStaticAtt.nativeElement.checked = false;
        //attributi di lista modificata    
        if (this.checkStaticAttMod.nativeElement.checked && this.checkFinalAttMod.nativeElement.checked && event == 'staticAttMod')
            this.checkFinalAttMod.nativeElement.checked = false;
        if (this.checkStaticAttMod.nativeElement.checked && this.checkFinalAttMod.nativeElement.checked && event == 'finalAttMod')
            this.checkStaticAttMod.nativeElement.checked = false;
    };
    /**
     * This function closes all the collapsed div except the selected one
     * @param event name of element reference
     */
    ClassMenuComponent.prototype.closeCollapsedList = function (event) {
        if (!$(event).hasClass("listaAttr")) {
            if ($('#listaAttr').attr("aria-expanded"))
                $('#listaAttr').removeClass("in");
        }
        else if ($('#listaMet').attr("aria-expanded"))
            $('#listaMet').removeClass("in");
    };
    /**
     * This funcion closes all the collapsed div
     */
    ClassMenuComponent.prototype.closeCollapsedAllList = function () {
        if ($('#listaAttr').attr("aria-expanded"))
            $('#listaAttr').removeClass("in");
        if ($('#listaMet').attr("aria-expanded"))
            $('#listaMet').removeClass("in");
        if ($('#addAttr').attr("aria-expanded"))
            $('#addAttr').removeClass("in");
        if ($('.listaModAttr').attr("aria-expanded"))
            $('.listaModAttr').removeClass("in");
        if ($('#addMetodo').attr("aria-expanded"))
            $('#addMetodo').removeClass("in");
    };
    return ClassMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('staticMet'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], ClassMenuComponent.prototype, "staticMetCheckbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('constructor'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], ClassMenuComponent.prototype, "constructorCheckbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('checkStaticAtt'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], ClassMenuComponent.prototype, "checkStaticAtt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('checkFinalAtt'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _d || Object)
], ClassMenuComponent.prototype, "checkFinalAtt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('checkStaticAttMod'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _e || Object)
], ClassMenuComponent.prototype, "checkStaticAttMod", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('checkFinalAttMod'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _f || Object)
], ClassMenuComponent.prototype, "checkFinalAttMod", void 0);
ClassMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'class-menu',
        template: __webpack_require__(275),
        styles: [__webpack_require__(226)]
    })
    /**
     * Interacts with the HTML template and provides methods to interact with the classes present
     * into the class diagram of the EditorComponent.
     */
    ,
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */]) === "function" && _j || Object])
], ClassMenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=class-menu.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributo__ = __webpack_require__(125);
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
        /**
         * The class extended by this class
         */
        this.classePadre = null;
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
    Classe.prototype.addAttributo = function (tipo, nome, acc, stat) {
        this.attributi.forEach(function (attr) {
            if (attr.getNome() == nome)
                throw new Error('NomePresente');
        });
        var attr;
        attr = new __WEBPACK_IMPORTED_MODULE_0__attributo__["a" /* Attributo */](tipo, nome, acc, stat);
        this.attributi.push(attr);
    };
    /**
     * Sets the name of the class which is extended by this class
     * @param superclass the name of the superclass
     */
    Classe.prototype.addSuperclass = function (superclass) {
        this.classePadre = superclass;
    };
    /**
     * Adds a new method for this Java class
     * @param metodo it takes a pre-built method and adds it into the array of methods
     */
    Classe.prototype.addMetodo = function (metodo) {
        this.metodi.forEach(function (met) {
            if (met.getNome() == metodo.getNome())
                throw new Error('NomePresente');
        });
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
    Classe.prototype.retrievePublicAttr = function () {
        var attr = new Array();
        this.attributi.forEach(function (element) {
            if (element.getAccesso() == "public") {
                attr.push(element);
            }
        });
        return attr;
    };
    Classe.prototype.retrievePrivateAttr = function () {
        var attr = new Array();
        this.attributi.forEach(function (element) {
            if (element.getAccesso() == "private") {
                attr.push(element);
            }
        });
        return attr;
    };
    Classe.prototype.getInfoPublic = function (x) {
        var infoAttr = new Array();
        x.forEach(function (element, i) {
            var attr = element.toMU();
            if (i != x.length - 1)
                attr += ',';
            infoAttr.push(attr);
        });
        return infoAttr;
    };
    Classe.prototype.getInfoPrivate = function (x) {
        var infoAttr = new Array();
        x.forEach(function (element, i) {
            var attr = JSON.stringify(element.toMU());
            if (i != x.length - 1)
                attr += ',';
            infoAttr.push(attr);
        });
        return infoAttr;
    };
    Classe.prototype.toMU = function () {
        var program;
        var attListPrivate = this.retrievePrivateAttr();
        var attListPublic = this.retrievePublicAttr();
        var pub;
        var priv;
        if (attListPrivate.length == 0) {
            priv = false;
        }
        else {
            priv = true;
        }
        if (attListPublic.length == 0) {
            pub = false;
        }
        else {
            pub = true;
        }
        if (pub && !priv) {
            program = {
                name: this.nome,
                public: true,
                attrPU: [
                    JSON.stringify(this.getInfoPublic(attListPublic))
                ],
                methodsPU: []
            };
        }
        else if (!pub && priv) {
            program = {
                name: this.nome,
                private: true,
                attrP: [
                    JSON.stringify(this.getInfoPrivate(attListPrivate))
                ]
            };
        }
        else if (pub & priv) {
            program = {
                name: this.nome,
                private: true,
                attrP: [
                    JSON.stringify(this.getInfoPrivate(attListPrivate))
                ],
                public: true,
                attrPU: [
                    JSON.stringify(this.getInfoPublic(attListPublic))
                ]
            };
        }
        return JSON.stringify(program);
    };
    return Classe;
}());

//# sourceMappingURL=classe.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__all_shape__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jointjs__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jointjs__);
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
    function Metodo(stat, costr, nome, acc, tipo, listaArg) {
        this.shapeList = new __WEBPACK_IMPORTED_MODULE_0__all_shape__["a" /* allShape */]();
        this.main = false;
        this.statico = stat;
        this.costruttore = costr;
        this.nome = nome;
        this.accesso = acc;
        this.tipoRitorno = tipo;
        this.diagramma = (new __WEBPACK_IMPORTED_MODULE_1_jointjs__["dia"].Graph).toJSON();
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
    Metodo.prototype.getShapeList = function () {
        return this.shapeList;
    };
    Metodo.prototype.isConstructor = function () {
        return this.costruttore;
    };
    Metodo.prototype.isStatic = function () {
        return this.statico;
    };
    Metodo.prototype.staticString = function () {
        var sta = '';
        if (this.statico) {
            sta = 'static';
        }
        return sta;
    };
    Metodo.prototype.paramToString = function () {
        var params = this.listaArgomenti;
        if (this.listaArgomenti) {
            var paramString = '';
            for (var i = 0; i < params.length; i++) {
                paramString += params[i].getNome() + ' : ' + params[i].getTipo();
                if (i != params.length - 1)
                    paramString += ', ';
            }
        }
        return paramString;
    };
    return Metodo;
}());

//# sourceMappingURL=metodo.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
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
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(139);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_editor_services_activity_service__ = __webpack_require__(25);
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
        this.selectedGraph = null;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(272),
        styles: [__webpack_require__(223)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */], __WEBPACK_IMPORTED_MODULE_3__components_editor_services_activity_service__["a" /* ActivityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_components_file_file_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_components_profilo_profilo_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menu_components_progetto_progetto_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_components_modifica_modifica_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_components_template_template_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_components_layer_layer_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_editor_components_toolbar_toolbar_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_editor_editor_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_activity_frame_activity_frame_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editor_components_class_menu_class_menu_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_components_activity_menu_activity_menu_component__ = __webpack_require__(121);
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
/* 120 */
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
        template: __webpack_require__(273),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], ActivityFrameComponent);

//# sourceMappingURL=activity-frame.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_service__ = __webpack_require__(25);
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
    function ActivityMenuComponent(mainEditorService, activityService) {
        this.mainEditorService = mainEditorService;
        this.activityService = activityService;
        this.decisions = ['for', 'while', 'if'];
        this.operators = ['<', '<=', '>', '>=', '==', '!='];
        this.nomeInd = '';
        this.valInd = '';
        this.maxInd = '';
    }
    ActivityMenuComponent.prototype.enterClassMode = function () {
        this.mainEditorService.enterClassMode(this.activityService.getSelectedMethod());
    };
    ActivityMenuComponent.prototype.modBody = function (text) {
        this.activityService.modBody(text);
    };
    ActivityMenuComponent.prototype.generaCodice = function () {
        this.activityService.generaCodice();
    };
    ActivityMenuComponent.prototype.changeName = function (name) {
        this.activityService.changeName(name);
    };
    ActivityMenuComponent.prototype.generaDecisione = function () {
        this.activityService.setDecisione(this.dec);
        this.mainEditorService.setCode([this.nomeInd, this.valInd, this.maxInd]);
    };
    return ActivityMenuComponent;
}());
ActivityMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'activity-menu',
        template: __webpack_require__(274),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */]) === "function" && _b || Object])
], ActivityMenuComponent);

var _a, _b;
//# sourceMappingURL=activity-menu.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_classe__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jointjs__ = __webpack_require__(61);
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
    function ToolbarComponent(mainEditorService, activityService) {
        this.mainEditorService = mainEditorService;
        this.activityService = activityService;
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
        var nomeClasse = 'Classe#' + this.classCouter++;
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
        var nomeInterf = 'Interfaccia#' + this.interCounter++;
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
        var nomeClassAbst = 'ClasseAstratta#' + this.abstCounter++;
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
        // this.mainEditorService.addClass(new ClasseAstratta(nomeClassAbst), abstract);
    };
    /**
     * Method selects association as connector
     */
    ToolbarComponent.prototype.addAssociazione = function () {
        //   this.addConnettore(new joint.shapes.uml.Association);
    };
    /**
     * Method selects implementation as connector
     */
    ToolbarComponent.prototype.addImplementazione = function () {
        //   this.addConnettore(new joint.shapes.uml.Implementation);
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
    ToolbarComponent.prototype.addCommento = function () {
        var comm = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Rect({
            position: { x: 60, y: 10 },
            size: { width: 160, height: 35 },
            attrs: {
                rect: {
                    fill: '#ffffff'
                },
                text: {
                    text: 'prova',
                    fill: '#000000',
                    'font-size': 12,
                }
            }
        });
    };
    /**
     * Method add selected connector to editor if target element is selected, else the method selects the source element
     * @param cellView
     * Source or target element
     */
    ToolbarComponent.prototype.addConnettore = function (cellView) {
        this.mainEditorService.addConnettore(cellView);
    };
    ToolbarComponent.prototype.addStart = function () {
        var start = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml.StartState({
            position: { x: 200, y: 20 },
            size: { width: 30, height: 30 },
            attrs: {
                'circle': {
                    fill: '#000000',
                    stroke: 'none'
                }
            }
        });
        this.activityService.addStart(start);
    };
    ToolbarComponent.prototype.addEnd = function () {
        var end = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].uml.EndState({
            position: { x: 750, y: 550 },
            size: { width: 30, height: 30 },
            attrs: {
                '.outer': {
                    stroke: "#000000",
                    'stroke-width': 3
                },
                '.inner': {
                    fill: '#000000'
                }
            }
        });
        this.activityService.addEnd(end);
    };
    ToolbarComponent.prototype.addActivityShape = function () {
        var prova = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].basic.Rect({
            position: { x: 400, y: 400 },
            size: { height: 100, width: 150 },
            attrs: {
                rect: {
                    'rx': '5',
                    'ry': '5',
                    'stroke-width': '0',
                    'ref-width': '100%',
                    'ref-height': '100%',
                    fill: '#797d9a'
                },
                text: { text: 'Operation', fill: '#ffffff' }
            }
        });
        this.activityService.addOperation(prova);
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
            position: {
                x: 100,
                y: 100
            },
            size: {
                width: 100,
                height: 100
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
        this.mainEditorService.connetActivity(new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].fsa.Arrow);
    };
    ToolbarComponent.prototype.addDecision = function () {
        var rombo = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].erd.Relationship({
            position: { x: 300, y: 390 },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: 'Decision',
                    'letter-spacing': 0
                },
                '.outer': {
                    fill: '#797d9a',
                    stroke: 'none'
                }
            }
        });
        this.activityService.addIfNode(rombo);
    };
    ToolbarComponent.prototype.addEndDecision = function () {
        var romboNero = new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].erd.Relationship({
            position: { x: 300, y: 390 },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: '',
                    'letter-spacing': 0
                },
                '.outer': {
                    fill: 'ffff',
                    stroke: 'none'
                }
            }
        });
        this.activityService.addEndIfNode(romboNero);
    };
    ToolbarComponent.prototype.addRettangoloAngolo = function () {
        new __WEBPACK_IMPORTED_MODULE_4_jointjs__["shapes"].erd.Entity({
            position: { x: 100, y: 200 },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: 'Cazzo ridi',
                    'letter-spacing': 0
                },
                '.outer, .inner': {
                    fill: '#797d9a',
                    stroke: 'none'
                }
            }
        });
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__(276),
        styles: [__webpack_require__(227)]
    })
    /**
     * it rappresent the model that contain the shapesthat will be draw into the editor
     * @param classCouter [number] it's a counter class
     * @param interCounter [number] it's a counter interface
     * @param abstCounter [number] it's a counter astract class
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jointjs__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jointjs__);
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
    function EditorComponent(classMenuService, menuService, mainEditorService, activityService) {
        var _this = this;
        this.classMenuService = classMenuService;
        this.menuService = menuService;
        this.mainEditorService = mainEditorService;
        this.activityService = activityService;
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
        this.graph = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["dia"].Graph;
        this.paper = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["dia"].Paper({
            el: $("#paper"),
            width: $('#paper').width(),
            height: $('#paper').height(),
            gridSize: 10,
            model: this.graph
        });
        this.paper.drawGrid("dot");
        this.paper.scale(this.xAx, this.xAx);
        /**
         * This methods allows to the mouse's pointer to recognize when a class is clicked and select it
         */
        this.paper.on('cell:pointerdown', function (cellView) {
            if (!_this.connettore) {
                var type = cellView.model.attributes.type;
                if ((type != 'uml.Generalization') &&
                    (type != 'uml.Implementation') &&
                    (type != 'uml.Association') &&
                    (type != 'fsa.Arrow')) {
                    _this.elementSelection(cellView);
                }
            }
            else if (!_this.mainEditorService.getActivityModeStatus())
                _this.selectElementsToConnect(cellView);
            else
                _this.selectElementActivity(cellView);
        });
        // Funzione per deselezionare le classi selezionate, rimuove l'highlight
        // dall'elemento e pone a null l'oggetto selectedCell del component
        /**
         * This methods allows to the mouse's pointer to recognize when the class is unselected by click outside that shape
         */
        this.paper.on('blank:pointerdown', function () {
            if (_this.selectedCell) {
                _this.selectedCell.unhighlight();
                _this.ClassMenuComponent.closeCollapsedAllList();
            }
            _this.selectedCell = null;
            _this.activityService.deselectElement();
        });
        this.mainEditorService.storeGraph(this.graph.toJSON()); // ELIMINARE
        this.mainEditorService.setEditorComp(this);
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
            console.log(cell);
            if (this.connettore === __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.Generalization) {
                this.mainEditorService.addSuperclass(this.elementToConnect.model.attributes.name, cell.model.attributes.name);
            }
            var element1 = this.elementToConnect;
            var freccia = new this.connettore.constructor({
                source: { id: element1.model.id },
                target: { id: cell.model.id }
            });
            this.graph.addCells([freccia]);
            $('.freccia').blur();
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
            this.selectedCell = cellView;
            this.activityService.setSelectedElement(cellView.model);
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
    EditorComponent.prototype.deleteElement = function (cell) {
        this.graph.removeCells(cell);
        this.selectedCell = null;
    };
    EditorComponent.prototype.selectElementActivity = function (cell) {
        if (this.elementToConnect) {
            var element1 = this.elementToConnect;
            var freccia = new this.connettore.constructor({
                source: { id: element1.model.id },
                target: { id: cell.model.id }
            });
            this.graph.addCells([freccia]);
            this.elementToConnect.unhighlight();
            this.elementToConnect = this.connettore = null;
            this.activityService.setConnector([element1.model.id, cell.model.id]);
        }
        else {
            this.elementToConnect = cell;
            cell.highlight();
        }
    };
    return EditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */]) === "function" && _a || Object)
], EditorComponent.prototype, "ClassMenuComponent", void 0);
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(277),
        styles: [__webpack_require__(228)],
        // host: {
        //   '(window:resize)': 'onResize($event)'
        // }
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]]
    })
    /**
     * This class is the main component used to drae the UML shapes
     */
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__["a" /* ClassMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */]) === "function" && _e || Object])
], EditorComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=editor.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allShape; });
var allShape = (function () {
    function allShape() {
        this.allShap = new Array();
    }
    allShape.prototype.getAllShape = function () {
        return this.allShap;
    };
    allShape.prototype.getElementById = function (id) {
        var element;
        this.allShap.forEach(function (el) {
            if (el.getId() == id)
                element = el;
        });
        return element;
    };
    allShape.prototype.addShape = function (shap) {
        this.allShap.push(shap);
    };
    //V Verifica di essere all'interno di un loop
    allShape.prototype.existMyLoop = function (id) {
        this.allShap.forEach(function (a) {
            if (a.getSucc() == id || a.getSuccElse() == id) {
                a.getIfPassed().forEach(function (a1) {
                    if (a1 == id)
                        return true;
                });
            }
        });
        return false;
    };
    // Stampa il nodo successivo
    allShape.prototype.printSucc = function (id) {
        var _this = this;
        this.allShap.forEach(function (a) {
            if (a.getId() == id) {
                a.toCode(_this);
            }
        });
    };
    return allShape;
}());

//# sourceMappingURL=all-shape.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__param__ = __webpack_require__(43);
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
    function Attributo(tipo, nome, acc, sta) {
        var _this = _super.call(this, tipo, nome) || this;
        _this.visibility = acc;
        _this.staticAtt = sta;
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
    Attributo.prototype.changeAcc = function (acc) {
        this.visibility = acc;
    };
    Attributo.prototype.toMU = function () {
        var attr;
        if (this.visibility == "public") {
            attr = '{\"typePU\":\"' + this.getTipo() +
                '\", \"varPU\":\"' + this.getNome() + '\"}';
        }
        else {
            attr = '{\"typeP\":\"' + this.getTipo() +
                '\", \"varP\":\"' + this.getNome() + '\"}';
        }
        return JSON.stringify(attr);
    };
    return Attributo;
}(__WEBPACK_IMPORTED_MODULE_0__param__["a" /* Param */]));

//# sourceMappingURL=attributo.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endIfNode; });
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

var endIfNode = (function (_super) {
    __extends(endIfNode, _super);
    function endIfNode(id) {
        return _super.call(this, id) || this;
    }
    endIfNode.prototype.getType = function () {
        return 'endIfNode';
    };
    endIfNode.prototype.toCode = function (sh) {
        if (!(this.getPrinted())) {
            this.setPrinted(true);
            console.log("}");
            if (this.getSucc())
                sh.printSucc(this.getSucc());
        }
    };
    return endIfNode;
}(__WEBPACK_IMPORTED_MODULE_0__shape__["a" /* Shape */]));

//# sourceMappingURL=end-if-node.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return End; });
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

var End = (function (_super) {
    __extends(End, _super);
    function End(id) {
        return _super.call(this, id) || this;
    }
    End.prototype.getType = function () {
        return 'End';
    };
    End.prototype.toCode = function (sh) {
        console.log('End');
        sh.getAllShape().forEach(function (element) {
            element.setPrinted(false);
        });
    };
    return End;
}(__WEBPACK_IMPORTED_MODULE_0__shape__["a" /* Shape */]));

//# sourceMappingURL=end.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ifNode; });
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

var ifNode = (function (_super) {
    __extends(ifNode, _super);
    function ifNode(id) {
        return _super.call(this, id) || this;
    }
    ifNode.prototype.getType = function () {
        return 'ifNode';
    };
    ifNode.prototype.toCode = function (sh) {
        if (!(this.getPrinted())) {
            this.setPrinted(true);
            if (sh.existMyLoop(this.getId())) {
                console.log("while(");
                console.log(this.getBody());
                console.log("){");
                sh.printSucc(this.getSucc());
            }
            else {
                if (this.getSucc()) {
                    console.log("if(");
                    console.log(this.getBody());
                    console.log("){");
                    sh.printSucc(this.getSucc());
                }
                if (this.getSuccElse()) {
                    console.log("else(");
                    console.log(this.getBody());
                    console.log("){");
                    sh.printSucc(this.getSuccElse());
                }
            }
        }
        else {
            console.log("}");
            sh.printSucc(this.getSuccElse());
        }
    };
    return ifNode;
}(__WEBPACK_IMPORTED_MODULE_0__shape__["a" /* Shape */]));

//# sourceMappingURL=if-node.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return operation; });
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

var operation = (function (_super) {
    __extends(operation, _super);
    function operation(id) {
        return _super.call(this, id) || this;
    }
    operation.prototype.getType = function () {
        return 'operation';
    };
    operation.prototype.toCode = function (sh) {
        if (!(this.getPrinted())) {
            this.setPrinted(true);
            console.log(this.getBody());
            console.log(";");
            if (this.getSucc())
                sh.printSucc(this.getSucc());
        }
    };
    return operation;
}(__WEBPACK_IMPORTED_MODULE_0__shape__["a" /* Shape */]));

//# sourceMappingURL=operation.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Start; });
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

var Start = (function (_super) {
    __extends(Start, _super);
    function Start(id) {
        return _super.call(this, id) || this;
    }
    Start.prototype.getType = function () {
        return 'Start';
    };
    Start.prototype.toCode = function (sh) {
        console.log('start');
        sh.printSucc(this.getSucc());
    };
    return Start;
}(__WEBPACK_IMPORTED_MODULE_0__shape__["a" /* Shape */]));

//# sourceMappingURL=start.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(14);
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
    FileComponent.prototype.importa = function (event) {
        this.menuService.import(event);
    };
    FileComponent.prototype.genera = function () {
        this.menuService.code();
    };
    return FileComponent;
}());
FileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-file',
        template: __webpack_require__(278),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], FileComponent);

var _a, _b;
//# sourceMappingURL=file.component.js.map

/***/ }),
/* 132 */
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
        template: __webpack_require__(279),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], LayerComponent);

//# sourceMappingURL=layer.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(34);
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
        template: __webpack_require__(280),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], ModificaComponent);

var _a;
//# sourceMappingURL=modifica.component.js.map

/***/ }),
/* 134 */
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
        template: __webpack_require__(281),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], ProfiloComponent);

//# sourceMappingURL=profilo.component.js.map

/***/ }),
/* 135 */
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
        template: __webpack_require__(282),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [])
], ProgettoComponent);

//# sourceMappingURL=progetto.component.js.map

/***/ }),
/* 136 */
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
        template: __webpack_require__(283),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], TemplateComponent);

//# sourceMappingURL=template.component.js.map

/***/ }),
/* 137 */
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
        template: __webpack_require__(284),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_editor_models_classe__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_models_metodo__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_models_param__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });



/**
 * It stores the data of the project and povides the methods
 * to retrive it's inforations
 */
var Global = (function () {
    function Global() {
        this.nome_progetto = "Proj";
        this.classi = new Array();
        this.main = false;
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
    Global.prototype.setName = function (name) {
        this.nome_progetto = name;
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
    Global.prototype.setMain = function () {
        this.main = true;
    };
    Global.prototype.getMainStat = function () {
        return this.main;
    };
    Global.prototype.removeClass = function (name) {
        for (var i = 0; i < this.classi.length; i++) {
            if (this.classi[i].getNome() == name)
                this.classi.splice(i, 1);
        }
    };
    Global.prototype.import = function (proj) {
        console.log(proj);
        this.setName(proj.nome_progetto);
        this.setDiagramma(JSON.stringify(proj.project.graph));
        this.generateClassArray(proj.project.classi);
    };
    Global.prototype.generateClassArray = function (classArray) {
        var _this = this;
        classArray.forEach(function (classe) {
            var c = new __WEBPACK_IMPORTED_MODULE_0__components_editor_models_classe__["a" /* Classe */](classe.name);
            _this.generateMethods(c, classe.methods);
            _this.generateAttributes(c, classe.attributes);
            c.addSuperclass(classe.superclass);
            _this.classi.push(c);
        });
    };
    Global.prototype.generateMethods = function (classe, methods) {
        var _this = this;
        methods.forEach(function (met) {
            var m = new __WEBPACK_IMPORTED_MODULE_1__components_editor_models_metodo__["a" /* Metodo */](met.statico, met.costruttore, met.nome, met.accesso, met.tipo, _this.generateParams(met.listaArgomenti));
            m.addDiagram(met.diagramma);
            classe.addMetodo(m);
        });
    };
    Global.prototype.generateParams = function (params) {
        var parametri = new Array();
        params.forEach(function (param) {
            parametri.push(new __WEBPACK_IMPORTED_MODULE_2__components_editor_models_param__["a" /* Param */](param.name, param.type));
        });
        return parametri;
    };
    Global.prototype.generateAttributes = function (classe, attributi) {
        attributi.forEach(function (att) {
            classe.addAttributo(att.type, att.name, att.visibility, att.staticAtt);
        });
    };
    // I campi devono ritornare come string
    Global.prototype.toJSON = function () {
        var global = '{\"nome_progetto\":\"' + this.nome_progetto +
            '\",\"project":{\"graph\":' + JSON.stringify(this.diagramma) +
            ',\"classi\":' + JSON.stringify(this.classi) + '}}';
        console.log(global);
        return global;
    };
    Global.prototype.getInfoClasse = function (x) {
        var info = new Array();
        x.forEach(function (element, i) {
            var classe = element.toMU();
            if (i != x.length - 1)
                classe += ',';
            info.push(classe);
        });
        return info;
    };
    // I campi devono ritornare come string
    Global.prototype.toMU = function () {
        var global = '{' +
            JSON.stringify(this.getInfoClasse(this.classi))
            + '}';
        console.log(global);
        return JSON.stringify(global);
    };
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),
/* 139 */
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
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0;\n  padding: 0;\n  height: 94vh;\n}\n.editor {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n}\n\n.activityframe {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n  background-color: #03A9F4;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #E0E0E0;\n   /*#EAEAF1;*/\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  border-top: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #E0E0E0;\n   /*#EAEAF1;*/\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  border-top: none;\n}\n\n.row {\n  padding: 3% 0;\n  border-top: 1px solid black;\n}\n.selezionato {\n  /*font-size: 16px;*/\n  border-top: none;\n}\n\n.campiAttributo {\n  padding-bottom: 3%;\n}\n\n.iconaMirrow {\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.aggiungiAttributo {\n  display: block;\n}\n\n#listaAttr {\n  padding-bottom: 2%;\n  border-bottom: 1px solid black;\n  border-top: none;\n}\n\n.listaAttributi {\n  position: absolute;\n  background-color: #EAEAF1;\n  top: 0;\n  left: -100%;\n  z-index: 10;\n  max-width: 100%;\n  border-left: 1px solid black;\n}\n\n.listaAttributi ul {\n  margin-bottom: 0;\n}\n\n#listaMet {\n  /*padding-bottom: 2%;*/\n  border-bottom: 1px solid black;\n  border-top: none;\n}\n\n/*velocità di animazione del menù della lista attributi*/\n.collapsing {\n    transition: height 0.1s;\n}\n\n.tipiMetodo {\n  vertical-align: -webkit-baseline-middle;\n}\n\n#tabellaParametri {\n  max-height:200px;\n  overflow:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  height: 100%;\n  background-color: #F1EDEA;\n  overflow: hidden;\n}\n\n.classi {\n  /*display: none;*/\n}\n\n.tipo {\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n}\n\n.icona {\n  margin:0 auto;\n  display: block;\n  height: 40px;\n  width: 40px;\n}\n\n.add {\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  outline:none;\n  vertical-align: middle;\n  padding: 0;\n\n}\n\n.add:hover {\n  opacity: 0.4;\n}\n\n.addClasse {\n    background: url(" + __webpack_require__(246) + ") no-repeat top left;\n    background-size: contain;\n\n}\n\n.addInterfaccia {\n    background: url(" + __webpack_require__(248) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAstratta {\n    background: url(" + __webpack_require__(245) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addCommento {\n    background: url(" + __webpack_require__(247) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAssociazione {\n    background: url(" + __webpack_require__(249) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addGeneralizzazione {\n    background: url(" + __webpack_require__(250) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addImplementazione {\n    background: url(" + __webpack_require__(251) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addStart {\n  background: url(" + __webpack_require__(237) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addEnd {\n  background: url(" + __webpack_require__(238) + ") no-repeat;\n  background-size:100%;\n}\n\n.addAttivita {\n  background: url(" + __webpack_require__(240) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addAttivitaFor {\n  background: url(" + __webpack_require__(242) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addConnettore {\n  background: url(" + __webpack_require__(239) + ") no-repeat;\n  background-size:100%;\n}\n\n.addDecision {\n  background: url(" + __webpack_require__(243) + ") no-repeat;\n  background-size:100%;\n}\n\n.addEndDecision {\n  background: url(" + __webpack_require__(244) + ") no-repeat;\n  background-size:100%;\n}\n\n.addRettangoloAngolo {\n  background: url(" + __webpack_require__(241) + ") no-repeat;\n  background-size:100%;\n}\n\n/*Blocco di icone inizialmente settato a false*/\n.activity {\n  /*display: none;*/\n}\n\n.freccia:focus {\n  border: 2px red solid;\n  opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#paper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.editClass {\n  z-index: 10;\n  position: absolute;\n  width: 33.4%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 100%;\n}\n\n.toolbar {\n  position: absolute;\n  width: 95px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  border-right: 1px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n\n#upload {\n  display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".barra-menu {\n  background: #42413D;\n  height: 6vh;\n}\n\n.row {\n  padding: 0;\n  margin: 0;\n}\n.logo {\n    display: inline-block;\n    color: #EE7500;\n    margin-left: 1%;\n  }\n\n.logo img{\n  display: inline-block;\n  width: 30px;\n}\n\n.logoText {\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 236 */,
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Cerchio.39ee067438843db9e6fa.svg";

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CerchioCerchio.8b1850c7e37c766e8dbb.svg";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Freccia.a4c499fd315ae52afecc.svg";

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rettangolo.70ad5344a1a2ba3b5c29.svg";

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RettangoloAngolo.273bf4f00b5c31c15274.svg";

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RettangoloForchetta.18beb1c6c069027e2f37.svg";

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rombo.f40f0455691a69a821ad.svg";

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RomboNero.2a60b493a7d5cc3927f5.svg";

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Abstract.c6e97eeb61e215b9db88.svg";

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Class.16df5b7229f5c33c2af5.svg";

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Commento.82f02152bdaa973ffb93.svg";

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Interface.3a9ef1baee68153d68e1.svg";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Association.92977cfedaee16baf9b0.svg";

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Generalization.e97844f3e5a27c0f9c2c.svg";

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Implementation.03e2d3a8adc68c375556.svg";

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */
/***/ (function(module, exports) {

module.exports = "<!-- component padre che racchiude gli elementi del menù -->\n<div class=\".container-fluid\">\n<app-menu></app-menu>\n<div class=\"row\">\n  <!-- component padre che racchiude gli elementi dell'editor -->\n  <div class=\"col-md-9 col-xs-9 editor\">\n    <app-editor></app-editor>\n  </div>\n  <!-- component  che racchiude gli elementi del acrivity frame, la quale rappresenta il flusso del programma -->\n  <div class=\"col-md-3 col-xs-3 activityframe\">\n    <app-activity-frame></app-activity-frame>\n  </div>\n</div>\n"

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "Activity Explorer\n"

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"selemetedMethod\" class=\"container-fluid menu\">\n  <div class=\"row selezionato\">\n    <span class=\"glyphicon glyphicon-wrench iconaMirrow\" aria-hidden=\"true\"></span>&nbsp;&nbsp;{{this.activityService.getNameMethod()}}\n  </div>\n  <div class=\"row changeNome\">\n    Modifica nome:\n    <input #changeName id=\"changeName\"\n    (keyup.enter)=\"changeNome(changeName.value)\">\n    <button class=\"btn btn-default\" (click)=\"changeNome(changeName.value)\">\n      <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div [hidden]=\"!this.activityService.isOperation()\">\n    <div class=\"container-fluid\">\n      <div class=\"row changeNome\">\n        <label>Corpo operazione</label>\n        <input #corpo id=\"changeName\"\n        (keyup.enter)=\"modBody(corpo.value)\">\n        <button class=\"btn btn-default\" (click)=\"modBody(corpo.value)\">\n          <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"!this.activityService.isDecision()\">\n    <div class=\"container-fluid\">\n      <div class=\"row changeNome\">\n        <label>Tipo decisione</label><br />\n        <select [(ngModel)]=\"dec\">\n          <option *ngFor=\"let dec of decisions\" [value]=\"dec\">{{ dec }}</option>\n        </select>\n      </div>\n      <div [hidden]=\"dec != 'for'\" class=\"row changeNome\">\n        <label>Nome indice</label>\n        <input [(ngModel)]=\"nomeInd\"  /><br />\n        <label>Valore iniziale indice</label>\n        <input [(ngModel)]=\"valInd\" /><br />\n        <label>Guardia indice</label>\n        <input [(ngModel)]=\"maxInd\"/><br />\n        <label>Operatore guardia</label>\n        <select>\n          <option *ngFor=\"let op of operators\" [value]=\"op\">{{ op }}</option>\n        </select><br />\n        <button class=\"btn btn-default\" (click)=\"generaDecisione()\">\n          Genera decisione\n        </button>\n      </div>\n    </div>\n  </div>\n  <div>\n    <button class=\"btn btn-default\" (click)=\"enterClassMode()\">\n      <span class=\"glyphicon glyphicon-arrow-left freccia\"></span>\n      Diagramma delle Classi</button>\n  </div>\n</div>"

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid menu\">\n  <div class=\"row selezionato\">\n    <span class=\"glyphicon glyphicon-wrench iconaMirrow\" aria-hidden=\"true\"></span>&nbsp;&nbsp;{{name}}&nbsp;\n    <button class=\"btn btn-default\" (click)=\"removeClass(name)\" title=\"Rimuovi classe\">\n      <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div class=\"row changeNome\">\n    Modifica nome:\n    <input #changeName id=\"changeName\"\n    (keyup.enter)=\"changeNome(changeName.value)\">\n    <button class=\"btn btn-default\" (click)=\"changeNome(changeName.value)\">\n      <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <!-- div per aggiungere un attributo -->\n  <div class=\"aggiungiAttributo\">\n    <div class=\"row\">\n      <button href=\"#addAttr\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Attributo\n      </button>\n    </div>\n    <div id=\"addAttr\" class=\"campiAttributo collapse\">\n      <div class=\"aggiungiAttributo staticAttr\">\n        <label>Static <input #checkStaticAtt id=\"staticAtt\" type=\"checkbox\" name=\"static\" class=\"checkbox-circle\" value=\"Static\" (change)='updateCheckbox(checkStaticAtt.id)'/></label>\n        <label>Final <input #checkFinalAtt id=\"finalAtt\" type=\"checkbox\" name=\"final\" class=\"checkbox-circle\" value=\"Final\" (change)='updateCheckbox(checkFinalAtt.id)'/></label>\n      </div>\n      <div class=\"aggiungiAttributo accessoAttr\">\n        <label>Seleziona Visibilità</label>\n        <select #accAtt  [(ngModel)]=\"selectedAccAtt\">\n          <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo selezionaTipo\">\n        <label>Seleziona tipo</label>\n        <select #tipiAtt [(ngModel)]=\"selectedTipoAtt\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo nomeAttr\">\n        <label>Nome</label>\n        <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAtt\n        (keyup.enter)=\"addAttributo(nomeAtt.value)\">\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"addAttributo(nomeAtt.value, checkStaticAtt.checked, checkFinalAtt.checked, tipiAtt.value, accAtt.value)\">Aggiungi Attributo</button>\n    </div>\n\n  </div>\n  <button href=\"#listaAttr\" #lista class=\"btn btn-default listaAttr\" data-toggle=\"collapse\" (click)=\"closeCollapsedList(lista)\">\n    <span class=\"glyphicon glyphicon-triangle-left\" aria-hidden=\"true\"></span>&nbsp;Lista Attributi\n  </button>\n  <!-- lista attributi della classe -->\n  <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaAttributi\">\n    <div id=\"listaAttr\" class=\"row collapse\" *ngIf=\"name\">\n      Lista attributi\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let attr of this.mainEditorService.selectedClasse.getAttributi()\">\n          <span>{{attr.name}}: {{attr.type}}\n            <button class=\"btn btn-default\" (click)=\"removeAttributo(attr.name)\">\n              <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n            </button>\n            <!-- icona di modifica che farà apparire un menù a tendina per la modifica attributo-->\n            <button class=\"btn btn-default\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+attr.name\" title=\"Modifica\">\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n            </button>\n          </span>\n          <!-- menù a comparsa (collapse) per modificare un attributo-->\n          <div class=\"campiAttributo collapse listaModAttr\" attr.id=\"{{attr.name}}\">\n            <div class=\"modificaAttributo accessoAttr\">\n              <div class=\"aggiungiAttributo staticAttr\">\n                <label>Static <input #checkStaticAttMod id=\"staticAttMod\" type=\"checkbox\" name=\"static\" class=\".checkbox-circle\" value=\"Static\" (change)='updateCheckbox(checkStaticAttMod.id)'/></label>\n                <label>Final <input #checkFinalAttMod id=\"finalAttMod\" type=\"checkbox\" name=\"final\" class=\"checkbox-circle\" value=\"Final\" (change)='updateCheckbox(checkFinalAttMod.id)'/></label>\n              </div>\n              <label>Seleziona Visibilità</label>\n              <select  #accAttMod [(ngModel)]=\"selectedAccAtt\">\n                <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n              </select>\n            </div>\n            <div class=\"modificaAttributo selezionaTipo\">\n              <label>Seleziona tipo</label>\n              <select #tipiAttMod [(ngModel)]=\"selectedTipoAtt\">\n                <option value=\"\"></option>\n                <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n              </select>\n            </div>\n            <div class=\"modificaAttributo nomeAttr\">\n              <label>Nome</label>\n              <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAttMod\n              (keyup.enter)=\"changeAttributo(nomeAtt.value, attr.name)\">\n            </div>\n            <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"changeAttributo(nomeAttMod.value, attr.name,tipiAttMod.value, accAttMod.value , checkStaticAttMod.checked , checkFinalAttMod.checked)\">Modifica Attributo</button>\n            </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- blocco per aggiungere un metodo alla classe -->\n  <div class=\"aggiungiMetodo\">\n    <div class=\"row\">\n      <button href=\"#addMetodo\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Metodo\n      </button>\n    </div>\n    <div id=\"addMetodo\" class=\"campiMetodo collapse\">\n      <!-- blocco per aggiunta parametri metodo -->\n      <div class=\"aggiungiMetodo .selezionaTipo\">\n        <div class=\"aggiungiAttributo staticAttr\">\n          <label>Static <input #staticMet type=\"checkbox\" id=\"static\" name=\"static\" classe=\"checkbox-circle\" value=\"Static\" (change)='updateCheckbox(staticMet.id)'></label>\n          <label> Costruttore <input #constructor [(ngModel)]=\"costruttore\" type=\"checkbox\" id=\"constructor\" name=\"constructor\" classe=\"checkbox-circle\" value=\"Constructor\" (change)='updateCheckbox(constructor.id)'></label>\n        </div>\n        <div class=\"aggiungiMeotdo accessoMetodo\">\n          <label>Seleziona Visibilità</label>\n          <select #accMetodo [(ngModel)]=\"selectedAccMet\">\n            <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n          </select>\n        </div>\n        <div [hidden]=\"costruttore\">\n          <label>Seleziona tipo di ritorno</label>\n          <select #tipiMetodo [(ngModel)]=\"selectedTipoMet\">\n            <option value=\"void\"></option>\n            <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n          </select>\n        </div>\n      </div>\n      <div [hidden]=\"costruttore\" class=\"aggiungiMetodo nomeMet\">\n        <label>Nome</label>\n        <input id=\"nome-metodo\" #nomeMetodo [(ngModel)]=\"nomeMet\">\n      </div>\n      <div class=\"container-fluid\" [hidden]=\"isAddableMethod()\">\n        <div class=\"row clearfix\">\n          <div class=\"col-md-12 column\" id=\"tabellaParametri\">\n            Parametri attuali\n            <table class=\"table table-bordered table-hover\" id=\"tab_logic\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Tipo</th>        \n                  <th class=\"text-center\">Nome</th>          \n                  <th class=\"text-center\"></th>                \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let param of parametriMetodo\" class=\"tipiMetodo\">\n                  <td>{{param.getTipo()}}</td>\n                  <td>{{param.getNome()}}</td>\n                </tr>\n                <tr #parametro>\n                  <td>\n                    <select #tipiParam id=\"tipiParam\" class=\"tipiMetodo\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <input #nomeParam id=\"nomeParam\" type=\"text\" placeholder=\"Nome\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <button class=\"btn btn-default\" title=\"Aggiungi Parmetro\" (click)=\"addParam(tipiParam.value, nomeParam.value)\">\n                      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"isAddableMethod()\" (click)=\"addMetodo(nomeMetodo.value, staticMet.checked, constructor.checked, tipiMetodo.value, accMetodo.value)\">Aggiungi Metodo</button>\n    </div>   \n  </div>\n  <button href=\"#listaMet\" #listac class=\"btn btn-default\" data-toggle=\"collapse\" (click)='closeCollapsedList(listac)'>\n    <span class=\"glyphicon glyphicon-triangle-left\" aria-hidden=\"true\"></span>&nbsp;Lista Metodi\n  </button>\n  <!-- lista metodi della classe -->\n  <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaAttributi\">\n    <div id=\"listaMet\" class=\"row collapse\" *ngIf=\"name\">\n      Lista metodi\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let met of getMetodi()\">\n          <span>{{met.accesso}} {{met.staticString()}} {{met.nome}}({{met.paramToString()}}): {{met.tipoRitorno}}\n            <button class=\"btn btn-default\" (click)=\"removeMetodo(met.nome)\">\n               <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n            </button>\n            <button class=\"btn btn-default\" (click)=\"modifyMetodo(met.nome)\" title=\"Modifica\">\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n            </button>\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"aggiungiMetodo\">\n    <div class=\"row\">\n      <button [disabled]=\"this.mainEditorService.isThereAMain()\" class=\"btn btn-default\" (click)=\"addMain()\">\n        <span class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Metodo Main\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar classi\">\n  <div class=\"tipo\"> Classi </div>\n    <div class=\"icona\"><button (click)=\"addClasse()\" class=\"add addClasse\" title=\"Aggiungi classe\"></button></div>\n    <div class=\"icona\"><button (click)=\"addInterfaccia()\" class=\"add addInterfaccia\" title=\"Aggiungi interfaccia\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAstratta()\" class=\"add addAstratta\" title=\"Aggiungi classe astratta\"></button></div>\n\n  <div class=\"tipo\"> Connettori </div>\n    <div class=\"icona\"><button (click)=\"addImplementazione()\" class=\"add addImplementazione freccia\" title=\"Aggiungi implementazione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addGeneralizzazione()\" class=\"add addGeneralizzazione freccia\" title=\"Aggiungi generalizzazione\"></button></div>\n\n  <div class=\"tipo\"> Commenti </div>\n    <div class=\"icona\"><button (click)=\"addCommento()\" class=\"add addCommento\" title=\"Agiungi commento\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAssociazione()\" class=\"add addAssociazione freccia\" title=\"Aggiungi associazione\"></button></div>\n</div>\n<div [hidden]=\"!mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar activity\">\n  <div class=\"tipo\"> Activity </div>\n    <div class=\"icona\"><button [disabled]=\"this.activityService.start()\" (click)=\"addStart()\" class=\"add addStart\" title=\"Aggiungi start\"></button></div>\n    <div class=\"icona\"><button (click)=\"addEnd()\" class=\"add addEnd\" title=\"Aggiungi End\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityShape()\" class=\"add addAttivita\" title=\"Aggiungi azione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityForShape()\" class=\"add addAttivitaFor\" title=\"Richiama l'attività/azione \"></button></div>\n    <div class=\"icona\"><button (click)=\"addRettangoloAngolo()\" class=\"add addRettangoloAngolo\" title=\"Aggiungi attività \"></button></div>\n    <div class=\"icona\"><button (click)=\"addConnector()\" class=\"add addConnettore\" title=\"Aggiungi connettore\"></button></div>\n    <div class=\"icona\"><button (click)=\"addDecision()\" class=\"add addDecision\" title=\"Aggiungi decisione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addEndDecision()\" class=\"add addEndDecision\" title=\"Aggiungi fine decisione\"></button></div>\n</div>\n"

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = "<div id=\"paper\"></div>\n<div class=\"toolbar\">\n  <app-toolbar></app-toolbar>\n\n</div>\n<div [hidden]=\"!selectedCell\" class=\"editClass\">\n    <class-menu [hidden]=\"mainEditorService.getActivityModeStatus()\"></class-menu>\n</div>\n<div class=\"editClass\">\n  <activity-menu [hidden]=\"!mainEditorService.getActivityModeStatus()\"></activity-menu>\n</div>\n"

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuFile>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    File\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Salva</a></li>\n    <li><a (click)=\"esporta()\" href=\"#\" >Esporta</a></li>\n    <li>\n      <input id=\"upload\" type=\"file\" class=\"custom-file-input\" (change)=\"importa($event)\" placeholder=\"Upload file\" accept=\".json\">\n      <a href=\"#\" onclick=\"$('input[id=upload]').click();\">Importa progetto </a>\n    </li>\n    <li><a href=\"#\" (click)=\"genera()\" >Genera codice</a></li>\n    <li><a href=\"#\" >Salva template</a></li>\n    <li><a href=\"#\" >Chiudi</a></li>\n  </ul>\n</div>\n\n"

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuLayer>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Layer\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi laver</a></li>\n    <li><a href=\"#\" >Lista layer</a></li>\n    <li><a href=\"#\" >Rinomina laver</a></li>\n    <li><a href=\"#\" >Elimina layer</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuModifica>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Modifica\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Annulla</a></li>\n    <li><a href=\"#\" >Ripristina</a></li>\n    <li><a href=\"#\" >Taglia</a></li>\n    <li><a href=\"#\" >Copia</a></li>\n    <li><a href=\"#\">Incolla</a></li>\n    <li><a href=\"#\">Elimina</a></li>\n    <li><a href=\"#\"  (click)=\"doZoomIn()\" >Zoom In</a></li>\n    <li><a href=\"#\"  (click)=\"doZoomOut()\" >Zoom Out</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProfilo>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Profilo\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Modifica password</a></li>\n    <li><a href=\"#\" >Modifica email</a></li>\n    <li><a href=\"#\" >Elimina profilo</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProgetto>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Progetto\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Nuovo</a></li>\n    <li><a href=\"#\" >Apri progetto</a></li>\n    <li><a href=\"#\" >Elimina progetto</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuTemplate>\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Template\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi template</a></li>\n    <li><a href=\"#\" >Elimina template</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = "<div class=\".container-fluid barra-menu\">\n  <div class=\"row\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n      <div class=\"logoText\">SWEDesigner</div>\n    </div>\n    <div class=\"menu btn\">  <app-file></app-file>  </div>\n    <div class=\"menu btn\">  <app-progetto></app-progetto>  </div>\n    <div class=\"menu btn\">  <app-modifica></app-modifica>  </div>\n    <div class=\"menu btn\">  <app-template></app-template>  </div>\n    <div class=\"menu btn\">  <app-layer></app-layer>  </div>\n    <div class=\"menu btn\">  <app-profilo></app-profilo>  </div>\n\n  </div>\n</div>\n"

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ })
],[318]);
//# sourceMappingURL=main.bundle.js.map