webpackJsonp([0,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = (function () {
    /**
    * Create an instantiation of AuthenticationGuard
    * @param isUserLoggedIn to default that variable is set to false
    * @param router used to create a new instantiation of Router
    * @param http used to create a new instantiation of Http
    */
    function AccountService(router, http) {
        this.router = router;
        this.http = http;
        this.isUserLoggedIn = false;
    }
    /**
    * Send, by POST, data to server and catch its response.
    * This function is used for user's registration
    * @param usr
    * @param mail
    * @param pwd
    */
    AccountService.prototype.register = function (usr, mail, pwd, cb) {
        var _this = this;
        var err = false;
        var user = {
            "username": usr,
            "email": mail,
            "pass": pwd
        };
        this.http.post('/insUsr', user, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Text
        })
            .subscribe(function (data) {
            var response = data.text();
            if (response == "true") {
                _this.setUserLoggedIn();
                cb(err);
            }
        });
    };
    /**
    * This function retrive the password by the associated user's mail
    * @param mail is the user's information that allow to retrive the pawwsord
    */
    AccountService.prototype.retrivePwd = function (mail) {
        var email = {
            "mail": mail
        };
        this.http.post('/forgotPwd', email, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Text
        })
            .subscribe(function (data) {
            var response = data.text();
            console.log(response);
        });
    };
    /**
    * Send, by POST, data to server and catch its response
    * This function is used for user's login
    * @param email
    * @param pass
    * @param cb
    */
    AccountService.prototype.checkLogin = function (email, pass, cb) {
        var _this = this;
        var err = false;
        var usr = {
            "mail": email,
            "pass": pass
        };
        this.http.post('/login', usr, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json
        })
            .subscribe(function (data) {
            var response = data.json();
            console.log(response);
            if (response.logged == true) {
                console.log(response);
                _this.setUserLoggedIn();
                _this.setUsername(response.username);
                _this.makeCokie();
                cb(err);
            }
            else {
                console.log("errore nel login");
            }
        });
    };
    AccountService.prototype.changePwd = function (username, pass) {
        var userData = {
            "username": username,
            "new_password": pass
        };
        this.http.post('/updatePwd', userData, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Text
        })
            .subscribe(function (data) {
            var response = data.text();
            if (response == "true") {
                console.log("password cambiata con successo");
            }
            else {
                console.log("password non cambiata");
            }
        });
    };
    /**
    * Change the authenticatio status of the user
    */
    AccountService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    /**
    * A getter method that return if the user is logged
    */
    AccountService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    /**
    * This function redirect the current component to the 'destination' component
    * @param destination is the route destination component
    */
    AccountService.prototype.redirectComponent = function (destination) {
        this.router.navigate(['/' + destination]);
    };
    AccountService.prototype.setUsername = function (usr) {
        console.log(usr);
        this.username = usr;
    };
    /**
     * This function make 3 cookie with the 3 user's information
     */
    AccountService.prototype.makeCokie = function () {
        __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('email', this.email);
        __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('password', this.password);
        __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('username', this.username);
    };
    /**
     * This function set the 'AccountService' variables by the input information
     * @param {string} user used to set the username
     * @param {string} mail used to set the email
     * @param {string} pwd  used to set the password
     * @memberof AccountService
     */
    AccountService.prototype.setParam = function (user, mail, pwd) {
        this.email = mail;
        this.password = pwd;
        this.username = user;
    };
    /**
     * This funcion delete all cookie and make the user logout
     */
    AccountService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].deleteAll();
        this.isUserLoggedIn = false;
        this.redirectComponent('home');
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    /**
    * 'AccountService' stores information about the account's information.
    * 'AccountService' provides methods to interact with the whole application, and allow to change the account information.
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], AccountService);

var _a, _b;
//# sourceMappingURL=account.service.js.map

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_global__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_container_components_editor_models_metodo__ = __webpack_require__(81);
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
        this.selectedClasse.addMetodo(new __WEBPACK_IMPORTED_MODULE_2__components_editor_container_components_editor_models_metodo__["a" /* Metodo */](staticMet, costr, nome, acc, tipo, listArgs));
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
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributo__ = __webpack_require__(149);
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_if_node__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_end_if_node__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_operation__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_start__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_end__ = __webpack_require__(151);
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
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_editor_service__ = __webpack_require__(16);
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
    /**
    *This method copy the selected shapes in the editor.
    */
    MenuService.prototype.copyElement = function () {
        this.selectedGraphService.next('copied');
    };
    /**
    *This method paste the selected shapes in the editor.
    */
    MenuService.prototype.pasteElement = function () {
        this.selectedGraphService.next('pasted');
    };
    /**
    *This method cut the selected shapes in the editor.
    */
    MenuService.prototype.cutElement = function () {
        this.selectedGraphService.next('cuted');
    };
    MenuService.prototype.undo = function () {
        this.selectedGraphService.next('undo');
    };
    MenuService.prototype.elimina = function () {
        this.selectedGraphService.next('elimina');
    };
    MenuService.prototype.encrypt = function (proj) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http.post('/encrypt', proj, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json; charset=UTF-8' })
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
                    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json' })
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
    //servizio di download
    MenuService.prototype.donwload = function () {
        //robo da inviare
        var j = {
            "name": "Main",
            "public": true,
            "methodsPU": [
                { "main": "true", "corpoM": "System.out.println('H');" }
            ]
        };
        return this.http.post('\parsing', j, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob
        })
            .map(function (res) {
            return new Blob([res.blob()], { type: 'application/zip' });
        });
    };
    MenuService.prototype.code = function () {
        this.donwload().subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](res, "progetto.zip");
            var fileURL = URL.createObjectURL(res);
            window.open(fileURL);
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], MenuService);

var _a, _b;
/*code() {
   let var1 = this.mainEditorService.varCode;
   let code = 'import javafx.application.Application; import javafx.event.ActionEvent; import javafx.event.EventHandler; import javafx.scene.Scene ; import javafx.scene.control.Button ; import javafx.scene.layout.StackPane ; import javafx.stage.Stage ; class Hello{ private String text ; public int i ; protected String prova ; public static void main(String Args[]) { for ( int '+var1[0]+' = '+var1[1]+' ; '+var1[0]+' < '+var1[2]+' ; '+var1[0]+'++ ) { System.out.println( '+var1[0]+' ) ; } } }'
   let blob = new Blob([code], {type: 'text/plain'});
   var filename = 'hello.java';
   FileSaver.saveAs(blob,filename);
   let proj = this.toCode('10');
   this.http.post('/parsing',proj,{
             method: RequestMethod.Post,
             responseType: ResponseContentType.Blob,
             headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})})
            .subscribe((data) => {
              console.log('code generated')
             },
             error => {console.log(JSON.stringify(error));});
 }*/ 
//# sourceMappingURL=menu.service.js.map

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
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
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_param__ = __webpack_require__(49);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('staticMet'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], ClassMenuComponent.prototype, "staticMetCheckbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('constructor'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], ClassMenuComponent.prototype, "constructorCheckbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('checkStaticAtt'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], ClassMenuComponent.prototype, "checkStaticAtt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('checkFinalAtt'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object)
], ClassMenuComponent.prototype, "checkFinalAtt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('checkStaticAttMod'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object)
], ClassMenuComponent.prototype, "checkStaticAttMod", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('checkFinalAttMod'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _f || Object)
], ClassMenuComponent.prototype, "checkFinalAttMod", void 0);
ClassMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'class-menu',
        template: __webpack_require__(316),
        styles: [__webpack_require__(256)]
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classe__ = __webpack_require__(29);
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classe__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interface; });
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

// class MetodiAstratti{
//     constructor(public nome: string, 
//                 public tipo: string, 
//                 public listaParam: string[]){}
// }
var Interface = (function (_super) {
    __extends(Interface, _super);
    // abstractMethods = new Array<MetodiAstratti>();
    function Interface(nome) {
        return _super.call(this, nome) || this;
    }
    return Interface;
}(__WEBPACK_IMPORTED_MODULE_0__classe__["a" /* Classe */]));

//# sourceMappingURL=interface.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__all_shape__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jointjs__ = __webpack_require__(67);
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_editor_services_activity_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorContainerComponent = (function () {
    function EditorContainerComponent(myService, account) {
        this.myService = myService;
        this.account = account;
        this.selectedGraph = null;
    }
    EditorContainerComponent.prototype.ngOnInit = function () {
    };
    return EditorContainerComponent;
}());
EditorContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editor-container',
        template: __webpack_require__(332),
        styles: [__webpack_require__(272)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */], __WEBPACK_IMPORTED_MODULE_3__components_editor_services_activity_service__["a" /* ActivityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */]) === "function" && _b || Object])
], EditorContainerComponent);

var _a, _b;
//# sourceMappingURL=editor-container.component.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPswComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ForgotPswComponent = (function () {
    /**
    * Create an instantiation of ForgotPswComponent
    */
    function ForgotPswComponent(accountService) {
        this.accountService = accountService;
    }
    // restituisce true se non ci son errori
    ForgotPswComponent.prototype.tryGetNewPassword = function (e) {
        this.accountService.email = e.target.elements[0].value;
        this.accountService.retrivePwd(this.accountService.email);
    };
    ForgotPswComponent.prototype.ngAfterViewInit = function () {
        /**
        * !IMPORANT the next function is just to add animation on the page
        */
        /**
        * This call make the animation that allow to the content to apper from left to right and stop in the middle of the page
        */
        $("#mainDiv").css({ left: $('#mainDiv').offset().left }).animate({ "left": "50%" }, "slow");
        /**
        * This function make the animation that allow to the content of page to diasappear from right to left
        */
    };
    return ForgotPswComponent;
}());
ForgotPswComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-forgot-psw',
        template: __webpack_require__(333),
        styles: [__webpack_require__(273)]
    })
    /**
    * 'ForgotPswComponent' allow to the user to authenticate to the editor by the passowrd's reset
    * @param accountService used to create a new instantiation of AccountService
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], ForgotPswComponent);

var _a;
//# sourceMappingURL=forgot-psw.component.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
        /*Cookie.set('email', 'prova@Mail');
        Cookie.set('password', 'provapsw');
        Cookie.set('username', 'gianfrancioschio');
        this.accountService.email = Cookie.get('email');
        this.accountService.password = Cookie.get('password');
        this.accountService.username = Cookie.get('username');*/
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.cookieUser = __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('username');
        if (this.cookieUser) {
            this.accountService.setParam(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('username'), __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('email'), __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('password'));
            this.accountService.setUserLoggedIn();
            this.router.navigate(['/editor']);
        }
    };
    // e solo una funzione che logga sempre
    LoginComponent.prototype.loginUserProva = function () {
        this.accountService.setUserLoggedIn();
        this.router.navigate(['/editor']);
    };
    // funzione per login
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        this.accountService.email = e.target.elements[0].value;
        this.accountService.password = e.target.elements[1].value;
        this.accountService.checkLogin(this.accountService.email, this.accountService.password, function (err) {
            if (!err) {
                if (_this.accountService.getUserLoggedIn()) {
                    _this.router.navigate(['/editor']);
                }
            }
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        /**
        * !IMPORANT the next function is just to add animation on the page
        */
        /**
        * This function just make a refresh of the page.
        */
        function refresh() {
            location.reload();
        }
        /**
        * This function make a call of showElement after
        */
        $(function () {
            setTimeout(function () {
                showElement();
            }, 600);
        });
        /**
        * This function make some animation on the image logo, text logo and the form
        */
        function showElement() {
            $('img').addClass('rotate360');
            $('.box').toggleClass('active');
            setInterval(function () {
                $('img').addClass('logo');
                setInterval(function () { $('.text').removeClass('hide'); }, 400);
            }, 900);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(334),
        styles: [__webpack_require__(274)]
    })
    /**
    * 'LoginComponent' allow the authentication to the user
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var RegistrationComponent = (function () {
    /**
    * Create an instantiation of RegistrationComponent
    * @param accountService used to create a new instantiation of AccountService
    */
    function RegistrationComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    /**
     * This function try to register an user
     * @param e event
     */
    RegistrationComponent.prototype.tryRegistration = function (e) {
        var _this = this;
        this.accountService.username = e.target.elements[0].value;
        this.accountService.email = e.target.elements[1].value;
        this.accountService.password = e.target.elements[2].value;
        this.accountService.register(this.accountService.username, this.accountService.email, this.accountService.password, function (err) {
            if (!err) {
                _this.accountService.makeCokie();
                alert("Registrazione effettuata con successo!");
                console.log("noerr");
                _this.router.navigate(['/editor']);
            }
        });
    };
    RegistrationComponent.prototype.ngAfterViewInit = function () {
        /**
        * !IMPORANT the next function is just to add animation on the page
        */
        /**
        * This call make the animation that allow to the content to apper from left to right and stop in the middle of the page
        */
        $("#mainDiv").css({ left: $('#mainDiv').offset().left }).animate({ "left": "50%" }, "slow");
        /**
        * This function make the animation that allow to the content of page to diasappear from right to left
        */
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__(335),
        styles: [__webpack_require__(275)]
    })
    /**
    * 'RegistrationComponent' allow to create a new user
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

// Router

var AuthenticationGuard = (function () {
    /**
    * Create an instantiation of AuthenticationGuard
    * @param account used to create a new instantiation of AccountService
    * @param router used to create a new instantiation of Router
    */
    function AuthenticationGuard(account, router) {
        this.account = account;
        this.router = router;
    }
    /**
    * Checks to see if a user can visit a route, Guards are implemented as services that need to be provided
    * so we typically create them as @Injectable classes.
    * @param next it's a method of interface
    * @param state it's the bololen of the interface
    */
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        if (this.account.getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    /**
    * In traditional server side applications the application would check permissions on the server and return an empty page
    * if the user didn’t have permissions, or perhaps redirect them to a login/register page if they were not signed up.
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication.guard.js.map

/***/ }),
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
/* 100 */,
/* 101 */,
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
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(169);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_container_editor_container_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_forgot_psw_forgot_psw_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_authentication_guard__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components




// Guard

var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'registrazione', component: __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'passwordDimenticata', component: __WEBPACK_IMPORTED_MODULE_5__components_forgot_psw_forgot_psw_component__["a" /* ForgotPswComponent */] },
    { path: 'editor', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_authentication_guard__["a" /* AuthenticationGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__components_editor_container_editor_container_component__["a" /* EditorContainerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(313),
        styles: [__webpack_require__(253)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editor_container_components_menu_menu_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editor_container_components_menu_components_file_file_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_editor_container_components_menu_components_profilo_profilo_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_editor_container_components_menu_components_progetto_progetto_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_editor_container_components_menu_components_modifica_modifica_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_editor_container_components_menu_components_template_template_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_editor_container_components_menu_components_layer_layer_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_editor_container_components_editor_components_toolbar_toolbar_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_editor_container_components_editor_editor_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_editor_container_components_activity_frame_activity_frame_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editor_container_components_editor_components_class_menu_class_menu_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_container_components_editor_components_activity_menu_activity_menu_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_registration_registration_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editor_container_editor_container_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_forgot_psw_forgot_psw_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_editor_container_components_menu_components_profilo_components_manage_profile_manage_profile_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_psw_edit_psw_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_email_edit_email_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_editor_container_components_menu_components_profilo_components_manage_profile_components_erase_profile_erase_profile_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_editor_container_components_menu_components_profilo_components_manage_profile_components_proj_list_proj_list_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_account_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_routing_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guards_authentication_guard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_username_edit_username_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components






















// Services

// Modules

// Guard


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_editor_container_components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_editor_container_components_menu_components_file_file_component__["a" /* FileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_editor_container_components_menu_components_profilo_profilo_component__["a" /* ProfiloComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_editor_container_components_menu_components_progetto_progetto_component__["a" /* ProgettoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_editor_container_components_menu_components_modifica_modifica_component__["a" /* ModificaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_editor_container_components_menu_components_template_template_component__["a" /* TemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_editor_container_components_menu_components_layer_layer_component__["a" /* LayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_editor_container_components_editor_components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_editor_container_components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_editor_container_components_activity_frame_activity_frame_component__["a" /* ActivityFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_editor_container_components_editor_components_class_menu_class_menu_component__["a" /* ClassMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_editor_container_components_editor_components_activity_menu_activity_menu_component__["a" /* ActivityMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_editor_container_editor_container_component__["a" /* EditorContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_forgot_psw_forgot_psw_component__["a" /* ForgotPswComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_editor_container_components_menu_components_profilo_components_manage_profile_manage_profile_component__["a" /* ManageProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_psw_edit_psw_component__["a" /* EditPswComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_email_edit_email_component__["a" /* EditEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_editor_container_components_menu_components_profilo_components_manage_profile_components_erase_profile_erase_profile_component__["a" /* EraseProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_editor_container_components_menu_components_profilo_components_manage_profile_components_proj_list_proj_list_component__["a" /* ProjListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_editor_container_components_menu_components_profilo_components_manage_profile_components_edit_username_edit_username_component__["a" /* EditUsernameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_27__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_26__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_28__guards_authentication_guard__["a" /* AuthenticationGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-activity-frame',
        template: __webpack_require__(314),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [])
], ActivityFrameComponent);

//# sourceMappingURL=activity-frame.component.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_service__ = __webpack_require__(31);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'activity-menu',
        template: __webpack_require__(315),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */]) === "function" && _b || Object])
], ActivityMenuComponent);

var _a, _b;
//# sourceMappingURL=activity-menu.component.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_classe__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_classe_astratta__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_interface__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jointjs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jointjs__);
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
        var uml = __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml;
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
        var uml = __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml;
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
        this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_4__models_interface__["a" /* Interface */](nomeInterf), interfaccia);
    };
    /**
     * Method add abstract class to editor
     */
    ToolbarComponent.prototype.addAstratta = function () {
        var uml = __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml;
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
        this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_3__models_classe_astratta__["a" /* ClasseAstratta */](nomeClassAbst), abstract);
    };
    /**
     * Method selects association as connector
     */
    ToolbarComponent.prototype.addAssociazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.Association);
    };
    /**
     * Method selects implementation as connector
     */
    ToolbarComponent.prototype.addImplementazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.Implementation);
    };
    /**
     * Method selects generalization as connector
     */
    ToolbarComponent.prototype.addGeneralizzazione = function () {
        this.addConnettore(new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.Generalization);
    };
    /**
     * Method add comment cell to editor
     */
    ToolbarComponent.prototype.addCommento = function () {
        var comm = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].basic.Rect({
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
        var start = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.StartState({
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
        var end = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].uml.EndState({
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
        var prova = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].basic.Rect({
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
        var start = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].basic.Image({
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
        this.mainEditorService.connetActivity(new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].fsa.Arrow);
    };
    ToolbarComponent.prototype.addDecision = function () {
        var rombo = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].erd.Relationship({
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
        var romboNero = new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].erd.Relationship({
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
        new __WEBPACK_IMPORTED_MODULE_6_jointjs__["shapes"].erd.Entity({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__(317),
        styles: [__webpack_require__(257)]
    })
    /**
     * it rappresent the model that contain the shapesthat will be draw into the editor
     * @param classCouter [number] it's a counter class
     * @param interCounter [number] it's a counter interface
     * @param abstCounter [number] it's a counter astract class
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_class_menu_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_editor_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_classe__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_interface__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_classe_astratta__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jointjs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jointjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jointjs__);
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
        // Subscribe all'oggetto observable per la funzione di zoom e di copia
        this.sub = menuService.selectedGrapg$.subscribe(function (x) {
            if (x == '+')
                _this.zoomIn();
            else if (x == '-')
                _this.zoomOut();
            else if (x == 'copied')
                _this.copyElement();
            else if (x == 'pasted')
                _this.pasteElement();
            else if (x == 'cuted')
                _this.cutElement();
            else if (x == 'undo')
                _this.undo();
            else if (x == 'elimina')
                _this.elimina();
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graph = new __WEBPACK_IMPORTED_MODULE_9_jointjs__["dia"].Graph;
        this.paper = new __WEBPACK_IMPORTED_MODULE_9_jointjs__["dia"].Paper({
            el: $("#paper"),
            width: $('#paper').width(),
            height: $('#paper').height(),
            gridSize: 10,
            model: this.graph
        });
        this.paper.drawGrid("dot");
        this.paper.scale(this.xAx, this.xAx);
        /**
         * This methods allows to recognize when there is a change in the graph
         */
        /* this.graph.on('change', ()=> {
           this.undoGraph= new joint.dia.Graph;
           this.actualGraph=new joint.dia.Graph;
           let i;
           let a= new Array();
           let cont= this.actualGraph.getCells();
           for(i=0; i<this.actualGraph.length; i++){
             a[i]= cont[i].clone();
           }
           this.undoGraph.clear();
           this.undoGraph.addCell(a);
           cont= this.graph.getCells();
           for(i=0; i<this.graph.getCells().length; i++){
             a[i]= cont[i].clone();
           }
           this.actualGraph.clear();
           this.actualGraph.addCell(a);
           console.log("change");
         })*/
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
            if (this.connettore === __WEBPACK_IMPORTED_MODULE_9_jointjs__["shapes"].uml.Generalization) {
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
    /**
     * This methods copy the selected element
     */
    EditorComponent.prototype.copyElement = function () {
        if (this.selectedCell != null) {
            this.copiedElement = this.selectedCell;
        }
    };
    /**
     * This methods pastes the element copied earlier
     */
    EditorComponent.prototype.pasteElement = function () {
        if (this.copiedElement != null) {
            this.elementSelection(this.copiedElement);
            var nome = this.selectedCell.model.getClassName();
            this.ClassMenuComponent.changeNome(nome + '_copia');
            if (this.selectedCell.model.attributes.type == 'uml.Class')
                this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_6__models_classe__["a" /* Classe */](this.copiedElement.model.getClassName() + '_copia'), this.copiedElement.model.clone());
            if (this.selectedCell.model.attributes.type == 'uml.Interface')
                this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_7__models_interface__["a" /* Interface */](this.copiedElement.model.getClassName() + '_copia'), this.copiedElement.model.clone());
            if (this.selectedCell.model.attributes.type == 'uml.Abstract')
                this.mainEditorService.addClass(new __WEBPACK_IMPORTED_MODULE_8__models_classe_astratta__["a" /* ClasseAstratta */](this.copiedElement.model.getClassName() + '_copia'), this.copiedElement.model.clone());
            this.ClassMenuComponent.changeNome(nome);
        }
        this.copiedElement = null;
    };
    /**
     * This methods cut the selected element
     */
    EditorComponent.prototype.cutElement = function () {
        if (this.selectedCell != null) {
            this.copiedElement = this.selectedCell;
            this.ClassMenuComponent.removeClass(this.selectedCell.model.getClassName());
        }
    };
    EditorComponent.prototype.elimina = function () {
        if (this.selectedCell != null)
            this.deleteElement(this.selectedCell.model);
    };
    /**
     * This methods undo the last change in the graph
     */
    EditorComponent.prototype.undo = function () {
        if (this.undoGraph != null) {
            this.redoGraph = new __WEBPACK_IMPORTED_MODULE_9_jointjs__["dia"].Graph;
            this.redoGraph.clear();
            var a = new Array();
            var i = void 0;
            var cont = this.graph.getCells();
            for (i = 0; i < this.graph.getCells().length; i++) {
                a[i] = cont[i].clone();
            }
            this.redoGraph.clear();
            this.redoGraph.addCell(a);
            cont = this.undoGraph.getCells();
            for (i = 0; i < this.undoGraph.getCells().length; i++) {
                a[i] = cont[i].clone();
            }
            this.graph.clear();
            this.graph.addCell(a);
            this.undoGraph = null;
            console.log("modificato");
        }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_class_menu_class_menu_component__["a" /* ClassMenuComponent */]) === "function" && _a || Object)
], EditorComponent.prototype, "ClassMenuComponent", void 0);
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(318),
        styles: [__webpack_require__(258)],
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
/* 148 */
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
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__param__ = __webpack_require__(49);
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
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(30);
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
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(30);
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
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(30);
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
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(30);
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
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(30);
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
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__ = __webpack_require__(16);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-file',
        template: __webpack_require__(319),
        styles: [__webpack_require__(259)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_editor_service__["a" /* MainEditorService */]) === "function" && _b || Object])
], FileComponent);

var _a, _b;
//# sourceMappingURL=file.component.js.map

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-layer',
        template: __webpack_require__(320),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [])
], LayerComponent);

//# sourceMappingURL=layer.component.js.map

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__(38);
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
    /**
    *This method starts the copy of the selected element.
    */
    ModificaComponent.prototype.doCopy = function () {
        this.menuService.copyElement();
    };
    /**
    *This method starts the cut of the selected element.
    */
    ModificaComponent.prototype.doCut = function () {
        this.menuService.cutElement();
    };
    /**
    *This method starts the paste of the selected element.
    */
    ModificaComponent.prototype.doPaste = function () {
        this.menuService.pasteElement();
    };
    ModificaComponent.prototype.doUndo = function () {
        this.menuService.undo();
    };
    ModificaComponent.prototype.doElimina = function () {
        this.menuService.elimina();
    };
    ModificaComponent.prototype.ngOnInit = function () {
    };
    return ModificaComponent;
}());
ModificaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-modifica',
        template: __webpack_require__(321),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], ModificaComponent);

var _a;
//# sourceMappingURL=modifica.component.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmailComponent; });
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
* Allow the email's upgrade
*/
var EditEmailComponent = (function () {
    /**
    * Create an instantiation of EditEmailComponent and set 'newEmail' to null
    * @param accountService used to create a new instantiation of AccountService
    */
    function EditEmailComponent(accountService) {
        this.accountService = accountService;
        this.newEmail = '';
    }
    /**
    * This function change the username's value and reset the input box to null
    */
    EditEmailComponent.prototype.changeEmail = function () {
        var oldEmail = this.accountService.email;
        console.log(oldEmail + ',' + this.newEmail);
        if (true) {
            this.newEmail = '';
            alert("Modifica effettuata");
        }
    };
    return EditEmailComponent;
}());
EditEmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-email',
        template: __webpack_require__(322),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], EditEmailComponent);

var _a;
//# sourceMappingURL=edit-email.component.js.map

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPswComponent; });
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
* Allow the password's upgrade
*/
var EditPswComponent = (function () {
    /**
    * Create an instantiation of EditPswComponent and set 'newPassword' to null
    * @param accountService used to create a new instantiation of AccountService
    */
    function EditPswComponent(accountService) {
        this.accountService = accountService;
        this.newPassword = '';
    }
    /**
    * This function change the password's value and reset the input box to null
    */
    EditPswComponent.prototype.changePsw = function () {
        var username = this.accountService.username;
        var newPwd = this.newPassword;
        this.accountService.changePwd(username, newPwd);
    };
    return EditPswComponent;
}());
EditPswComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-psw',
        template: __webpack_require__(323),
        styles: [__webpack_require__(263)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], EditPswComponent);

var _a;
//# sourceMappingURL=edit-psw.component.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUsernameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditUsernameComponent = (function () {
    /**
    * Create an instantiation of EditUsernameComponent and set 'newUsername' to null
    * @param accountService used to create a new instantiation of AccountService
    */
    function EditUsernameComponent(accountService) {
        this.accountService = accountService;
        this.newUsername = '';
    }
    /**
     * This function change the username's value and reset the input box to null
     */
    EditUsernameComponent.prototype.changeUsername = function () {
        var oldUsername = this.accountService.username;
        console.log(oldUsername + ',' + this.newUsername);
        if (true) {
            this.newUsername = '';
            alert("Modifica effettuata");
        }
    };
    return EditUsernameComponent;
}());
EditUsernameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-username',
        template: __webpack_require__(324),
        styles: [__webpack_require__(264)]
    })
    /**
    * Allow the username's upgrade
    */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], EditUsernameComponent);

var _a;
//# sourceMappingURL=edit-username.component.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EraseProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EraseProfileComponent = (function () {
    function EraseProfileComponent() {
    }
    /**
    * This function delete the profile and all the project binf to it
    */
    EraseProfileComponent.prototype.deleteProfile = function () {
        console.log("Profilo cancellato");
    };
    return EraseProfileComponent;
}());
EraseProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-erase-profile',
        template: __webpack_require__(325),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [])
], EraseProfileComponent);

//# sourceMappingURL=erase-profile.component.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjListComponent = (function () {
    function ProjListComponent() {
    }
    ProjListComponent.prototype.ngOnInit = function () {
    };
    return ProjListComponent;
}());
ProjListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-proj-list',
        template: __webpack_require__(326),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [])
], ProjListComponent);

//# sourceMappingURL=proj-list.component.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ManageProfileComponent = (function () {
    function ManageProfileComponent(accountService) {
        this.accountService = accountService;
    }
    ManageProfileComponent.prototype.ngAfterViewInit = function () {
        /**
        * This function allow to the icon like a cross in to the right top corner the close of the component
        */
        $('.close').click(function () {
            $('#manage-profile').removeClass("in");
            $('.tmp-disable').removeClass('disabled');
        });
    };
    return ManageProfileComponent;
}());
ManageProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-manage-profile',
        template: __webpack_require__(327),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], ManageProfileComponent);

var _a;
//# sourceMappingURL=manage-profile.component.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
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
    function ProfiloComponent(accountService) {
        this.accountService = accountService;
    }
    ProfiloComponent.prototype.ngAfterViewInit = function () {
        // CSS Function
        /**
        * This directiove disable all the button in the top menu while the manage profile div is open
        */
        $(window).resize(function () {
            var y = -$("#qwerty").position().left;
            $('#manage-profile').css({ left: y });
            $('#manage-profile').width($(window).width());
        });
        $('#menuProfilo').click(function () {
            if (!$('#manage-profile').is(':visible')) {
                $('.tmp-disable').addClass('disabled');
                $('#manage-profile').width($(window).width());
                var y = -$("#qwerty").position().left;
                $('#manage-profile').css({ left: y });
            }
            else
                $('.tmp-disable').removeClass('disabled');
        });
    };
    return ProfiloComponent;
}());
ProfiloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profilo',
        template: __webpack_require__(328),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], ProfiloComponent);

var _a;
//# sourceMappingURL=profilo.component.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-progetto',
        template: __webpack_require__(329),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [])
], ProgettoComponent);

//# sourceMappingURL=progetto.component.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-template',
        template: __webpack_require__(330),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [])
], TemplateComponent);

//# sourceMappingURL=template.component.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(8);
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
    /**
    * Create an instantiation of LoginComponent
    * @param accountService used to create a new instantiation of AccountService
    */
    function MenuComponent(accountService) {
        this.accountService = accountService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(331),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_editor_container_components_editor_models_classe__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_container_components_editor_models_metodo__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_container_components_editor_models_param__ = __webpack_require__(49);
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
        c = new __WEBPACK_IMPORTED_MODULE_0__components_editor_container_components_editor_models_classe__["a" /* Classe */](nome);
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
            var c = new __WEBPACK_IMPORTED_MODULE_0__components_editor_container_components_editor_models_classe__["a" /* Classe */](classe.name);
            _this.generateMethods(c, classe.methods);
            _this.generateAttributes(c, classe.attributes);
            c.addSuperclass(classe.superclass);
            _this.classi.push(c);
        });
    };
    Global.prototype.generateMethods = function (classe, methods) {
        var _this = this;
        methods.forEach(function (met) {
            var m = new __WEBPACK_IMPORTED_MODULE_1__components_editor_container_components_editor_models_metodo__["a" /* Metodo */](met.statico, met.costruttore, met.nome, met.accesso, met.tipo, _this.generateParams(met.listaArgomenti));
            m.addDiagram(met.diagramma);
            classe.addMetodo(m);
        });
    };
    Global.prototype.generateParams = function (params) {
        var parametri = new Array();
        params.forEach(function (param) {
            parametri.push(new __WEBPACK_IMPORTED_MODULE_2__components_editor_container_components_editor_models_param__["a" /* Param */](param.name, param.type));
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
/* 169 */
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
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #E0E0E0;\n   /*#EAEAF1;*/\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  border-top: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".menu {\n  background-color: #E0E0E0;\n   /*#EAEAF1;*/\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  border-top: none;\n}\n\n.row {\n  padding: 3% 0;\n  border-top: 1px solid black;\n}\n.selezionato {\n  /*font-size: 16px;*/\n  border-top: none;\n}\n\n.campiAttributo {\n  padding-bottom: 3%;\n}\n\n.iconaMirrow {\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.aggiungiAttributo {\n  display: block;\n}\n\n#listaAttr {\n  padding-bottom: 2%;\n  border-bottom: 1px solid black;\n  border-top: none;\n}\n\n.listaAttributi {\n  position: absolute;\n  background-color: #EAEAF1;\n  top: 0;\n  left: -100%;\n  z-index: 10;\n  max-width: 100%;\n  border-left: 1px solid black;\n}\n\n.listaAttributi ul {\n  margin-bottom: 0;\n}\n\n#listaMet {\n  /*padding-bottom: 2%;*/\n  border-bottom: 1px solid black;\n  border-top: none;\n}\n\n/*velocità di animazione del menù della lista attributi*/\n.collapsing {\n    transition: height 0.1s;\n}\n\n.tipiMetodo {\n  vertical-align: -webkit-baseline-middle;\n}\n\n#tabellaParametri {\n  max-height:200px;\n  overflow:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  height: 100%;\n  background-color: #F1EDEA;\n  overflow: hidden;\n}\n\n.classi {\n  /*display: none;*/\n}\n\n.tipo {\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n}\n\n.icona {\n  margin:0 auto;\n  display: block;\n  height: 40px;\n  width: 40px;\n}\n\n.add {\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  outline:none;\n  vertical-align: middle;\n  padding: 0;\n\n}\n\n.add:hover {\n  opacity: 0.4;\n}\n\n.addClasse {\n    background: url(" + __webpack_require__(286) + ") no-repeat top left;\n    background-size: contain;\n\n}\n\n.addInterfaccia {\n    background: url(" + __webpack_require__(288) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAstratta {\n    background: url(" + __webpack_require__(285) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addCommento {\n    background: url(" + __webpack_require__(287) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addAssociazione {\n    background: url(" + __webpack_require__(289) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addGeneralizzazione {\n    background: url(" + __webpack_require__(290) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addImplementazione {\n    background: url(" + __webpack_require__(291) + ") no-repeat top left;\n    background-size: contain;\n}\n\n.addStart {\n  background: url(" + __webpack_require__(277) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addEnd {\n  background: url(" + __webpack_require__(278) + ") no-repeat;\n  background-size:100%;\n}\n\n.addAttivita {\n  background: url(" + __webpack_require__(280) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addAttivitaFor {\n  background: url(" + __webpack_require__(282) + ") no-repeat top left;\n  background-size:100%;\n}\n\n.addConnettore {\n  background: url(" + __webpack_require__(279) + ") no-repeat;\n  background-size:100%;\n}\n\n.addDecision {\n  background: url(" + __webpack_require__(283) + ") no-repeat;\n  background-size:100%;\n}\n\n.addEndDecision {\n  background: url(" + __webpack_require__(284) + ") no-repeat;\n  background-size:100%;\n}\n\n.addRettangoloAngolo {\n  background: url(" + __webpack_require__(281) + ") no-repeat;\n  background-size:100%;\n}\n\n/*Blocco di icone inizialmente settato a false*/\n.activity {\n  /*display: none;*/\n}\n\n.freccia:focus {\n  border: 2px red solid;\n  opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "#paper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.editClass {\n  z-index: 10;\n  position: absolute;\n  width: 33.4%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 100%;\n}\n\n.toolbar {\n  position: absolute;\n  width: 95px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  border-right: 1px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n\n#upload {\n  display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 0;\n}\n\n.ng-invalid:not(form)  {\n    border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 0;\n}\n.ng-invalid:not(form)  {\n    border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 0;\n}\n\n.ng-invalid:not(form)  {\n    border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 0;\n}\n\nbutton.choice {\n    width: 44px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ":host {\n    height: 94vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    top: 5vh;\n    z-index: 9999;\n    position: absolute;\n    background-color: #636363;\n    cursor: default;\n    overflow: hidden;\n    transition : height 0.5s;\n    color: #FFCE2B; \n}\n\nh3 {\n    color: #eea236;\n}\n\n.close {\n    float: right;\n    color: #FFCE2B;\n    opacity: 0.65;\n    text-shadow: 0 1px 0 #636363;\n}\n\n.close:hover {\n    opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\nul {\n  background-color: #42413D;\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n\n#manage-profile {\n  margin: 0;\n  padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".btn {\n  border: none;\n  border-radius: 0;\n  background-color: #42413D;\n  color: #FFCE2B;\n}\n\n.btn:hover {\n  background-color: none;\n  border-color: #FFCE2B;\n}\n\nul {\n  background-color: #42413D;\n}\n\n.btn:active {\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.dropdown-toggle {\n background-color: transparent;\n border-color: #42413D;\n border-style: solid;\n border-top: none;\n border-right: none;\n border-left: none;\n}\n\n.dropdown-toggle:active, .open .dropdown-toggle {\n      background: #FFCE2B !important;\n      color:#42413D !important;\n      border-style: none;\n  }\n\n.dropdown-menu{\n  background-color: #42413D;\n}\n\n.dropdown-menu>li>a{\n  color: #FFCE2B;\n}\n\n.dropdown-menu>li>a:hover{\n  background-color: #636363;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".barra-menu {\n  background: #42413D;\n  height: 6vh; \n}\n\n.rowEdit {\n  padding: 0;\n  margin: 0;\n}\n.logoEdit {\n    display: inline-block;\n    color: #EE7500;\n    margin-left: 1%;\n  }\n\n.logoEdit img{\n  display: inline-block;\n  width: 30px;\n}\n\n.logoText {\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0;\n  padding: 0;\n  height: 94vh;\n}\n.editor {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n}\n\n.activityframe {\n  padding: 0;\n  border-left: 1px solid black;\n  height: 100%;\n  background-color: #03A9F4;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Neuton);", ""]);

// module
exports.push([module.i, ".container {\n    position:absolute;\n    top:40%;\n    left:-100%;\n    padding: 0;\n    -webkit-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%);\n}\n\n.row {\n    margin: 0;\n}\n\nimg {  \n    padding: 0;\n    margin-left: 0;\n    max-height: 60px;\n    max-width: 60px;\n}\n\n.text{\n    font-family: 'Neuton', serif;\n    color: rgb(238,117,0);\n    color: rgb(255, 195, 76);\n    font-size: 40px;\n    font-weight: 400;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: rgb(129,161,184);\n    opacity: .9;\n}   \n\n#submit {\n    float: left;\n}\n\n#back {\n    float: right;\n}\n\n.ng-invalid:not(form)  {\n  border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Neuton);", ""]);

// module
exports.push([module.i, ".container {\n    position:absolute;\n    top:40%;\n    left:50%;\n    padding: 0;\n    -webkit-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%);\n}\n\n.row {\n    margin: 0;\n}\n\nimg {  \n    padding: 0;\n    margin-left: 25%;\n    max-height: 150px;\n    max-width: 150px;\n}\n\n.logo {\n    margin-left: 0; \n    max-height: 100px;\n    max-width: 100px; \n    -webkit-transform-origin: left top; \n            transform-origin: left top; \n    -webkit-animation: scale 800ms ease-in-out forwards; \n            animation: scale 800ms ease-in-out forwards; \n    \n}\n\n@-webkit-keyframes scale {\n    to {\n        -webkit-transform: scale(0.6);\n                transform: scale(0.6);\n    }\n}\n\n@keyframes scale {\n    to {\n        -webkit-transform: scale(0.6);\n                transform: scale(0.6);\n    }\n}\n\n.rotate360 {\n    transition: all 0.7s;\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg); \n    -moz-transform: rotate(360deg);\n}\n\n.hide {\n    display: none;\n}\n\n.box {\n    min-height: 0;\n    max-height: 0;\n    opacity: 0;\n    transition: all .8s ease-in-out;    \n}\n\n.active {\n    max-height: 100%;\n    opacity: 1;\n    margin-top: -20px;\n}\n\n.text{\n    font-family: 'Neuton', serif;\n    color: rgb(238,117,0);\n    color: rgb(255, 195, 76); \n    font-size: 50px;\n    line-height: 1;\n    font-weight: 400;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: rgb(129,161,184);\n    opacity: .9;\n    margin-left: -30px;\n}   \n\n.ng-invalid:not(form)  {\n  border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Neuton);", ""]);

// module
exports.push([module.i, ".container {\n    position:absolute;\n    top:40%;\n    left:-100%;\n    padding: 0;\n    -webkit-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%);\n}\n\n.row {\n    margin: 0;\n}\n\nimg {  \n    padding: 0;\n    margin-left: 0;\n    max-height: 60px;\n    max-width: 60px;\n}\n\n.text{\n    font-family: 'Neuton', serif;\n    color: rgb(238,117,0);\n    color: rgb(255, 195, 76);\n    font-size: 40px;\n    font-weight:400;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: rgb(129,161,184);\n    opacity: .9;\n}   \n\n#submit {\n    float: left;\n}\n\n#back {\n    float: right;\n}\n\n.ng-invalid:not(form)  {\n  border-right: 5px solid crimson; /* red */\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-right: 5px solid springgreen; /* green */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 276 */,
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Cerchio.39ee067438843db9e6fa.svg";

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CerchioCerchio.8b1850c7e37c766e8dbb.svg";

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Freccia.a4c499fd315ae52afecc.svg";

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rettangolo.70ad5344a1a2ba3b5c29.svg";

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RettangoloAngolo.273bf4f00b5c31c15274.svg";

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RettangoloForchetta.18beb1c6c069027e2f37.svg";

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Rombo.f40f0455691a69a821ad.svg";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "RomboNero.2a60b493a7d5cc3927f5.svg";

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Abstract.c6e97eeb61e215b9db88.svg";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Class.16df5b7229f5c33c2af5.svg";

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Commento.82f02152bdaa973ffb93.svg";

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Interface.3a9ef1baee68153d68e1.svg";

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Association.92977cfedaee16baf9b0.svg";

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Generalization.e97844f3e5a27c0f9c2c.svg";

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Implementation.03e2d3a8adc68c375556.svg";

/***/ }),
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
/* 313 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = "Activity Explorer\n"

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"selemetedMethod\" class=\"container-fluid menu\">\n  <div class=\"row selezionato\">\n    <span class=\"glyphicon glyphicon-wrench iconaMirrow\" aria-hidden=\"true\"></span>&nbsp;&nbsp;{{this.activityService.getNameMethod()}}\n  </div>\n  <div class=\"row changeNome\">\n    Modifica nome:\n    <input #changeName id=\"changeName\"\n    (keyup.enter)=\"changeNome(changeName.value)\">\n    <button class=\"btn btn-default\" (click)=\"changeNome(changeName.value)\">\n      <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div [hidden]=\"!this.activityService.isOperation()\">\n    <div class=\"container-fluid\">\n      <div class=\"row changeNome\">\n        <label>Corpo operazione</label>\n        <input #corpo id=\"changeName\"\n        (keyup.enter)=\"modBody(corpo.value)\">\n        <button class=\"btn btn-default\" (click)=\"modBody(corpo.value)\">\n          <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"!this.activityService.isDecision()\">\n    <div class=\"container-fluid\">\n      <div class=\"row changeNome\">\n        <label>Tipo decisione</label><br />\n        <select [(ngModel)]=\"dec\">\n          <option *ngFor=\"let dec of decisions\" [value]=\"dec\">{{ dec }}</option>\n        </select>\n      </div>\n      <div [hidden]=\"dec != 'for'\" class=\"row changeNome\">\n        <label>Nome indice</label>\n        <input [(ngModel)]=\"nomeInd\"  /><br />\n        <label>Valore iniziale indice</label>\n        <input [(ngModel)]=\"valInd\" /><br />\n        <label>Guardia indice</label>\n        <input [(ngModel)]=\"maxInd\"/><br />\n        <label>Operatore guardia</label>\n        <select>\n          <option *ngFor=\"let op of operators\" [value]=\"op\">{{ op }}</option>\n        </select><br />\n        <button class=\"btn btn-default\" (click)=\"generaDecisione()\">\n          Genera decisione\n        </button>\n      </div>\n    </div>\n  </div>\n  <div>\n    <button class=\"btn btn-default\" (click)=\"enterClassMode()\">\n      <span class=\"glyphicon glyphicon-arrow-left freccia\"></span>\n      Diagramma delle Classi</button>\n  </div>\n</div>"

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid menu\">\n  <div class=\"row selezionato\">\n    <span class=\"glyphicon glyphicon-wrench iconaMirrow\" aria-hidden=\"true\"></span>&nbsp;&nbsp;{{name}}&nbsp;\n    <button class=\"btn btn-default\" (click)=\"removeClass(name)\" title=\"Rimuovi classe\">\n      <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div class=\"row changeNome\">\n    Modifica nome:\n    <input #changeName id=\"changeName\"\n    (keyup.enter)=\"changeNome(changeName.value)\">\n    <button class=\"btn btn-default\" (click)=\"changeNome(changeName.value)\">\n      <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <!-- div per aggiungere un attributo -->\n  <div class=\"aggiungiAttributo\">\n    <div class=\"row\">\n      <button href=\"#addAttr\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Attributo\n      </button>\n    </div>\n    <div id=\"addAttr\" class=\"campiAttributo collapse\">\n      <div class=\"aggiungiAttributo staticAttr\">\n        <label>Static <input #checkStaticAtt id=\"staticAtt\" type=\"checkbox\" name=\"static\" class=\"checkbox-circle\" value=\"Static\" (change)='updateCheckbox(checkStaticAtt.id)'/></label>\n        <label>Final <input #checkFinalAtt id=\"finalAtt\" type=\"checkbox\" name=\"final\" class=\"checkbox-circle\" value=\"Final\" (change)='updateCheckbox(checkFinalAtt.id)'/></label>\n      </div>\n      <div class=\"aggiungiAttributo accessoAttr\">\n        <label>Seleziona Visibilità</label>\n        <select #accAtt  [(ngModel)]=\"selectedAccAtt\">\n          <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo selezionaTipo\">\n        <label>Seleziona tipo</label>\n        <select #tipiAtt [(ngModel)]=\"selectedTipoAtt\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n        </select>\n      </div>\n      <div class=\"aggiungiAttributo nomeAttr\">\n        <label>Nome</label>\n        <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAtt\n        (keyup.enter)=\"addAttributo(nomeAtt.value)\">\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"addAttributo(nomeAtt.value, checkStaticAtt.checked, checkFinalAtt.checked, tipiAtt.value, accAtt.value)\">Aggiungi Attributo</button>\n    </div>\n\n  </div>\n  <button href=\"#listaAttr\" #lista class=\"btn btn-default listaAttr\" data-toggle=\"collapse\" (click)=\"closeCollapsedList(lista)\">\n    <span class=\"glyphicon glyphicon-triangle-left\" aria-hidden=\"true\"></span>&nbsp;Lista Attributi\n  </button>\n  <!-- lista attributi della classe -->\n  <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaAttributi\">\n    <div id=\"listaAttr\" class=\"row collapse\" *ngIf=\"name\">\n      Lista attributi\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let attr of this.mainEditorService.selectedClasse.getAttributi()\">\n          <span>{{attr.name}}: {{attr.type}}\n            <button class=\"btn btn-default\" (click)=\"removeAttributo(attr.name)\">\n              <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n            </button>\n            <!-- icona di modifica che farà apparire un menù a tendina per la modifica attributo-->\n            <button class=\"btn btn-default\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+attr.name\" title=\"Modifica\">\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n            </button>\n          </span>\n          <!-- menù a comparsa (collapse) per modificare un attributo-->\n          <div class=\"campiAttributo collapse listaModAttr\" attr.id=\"{{attr.name}}\">\n            <div class=\"modificaAttributo accessoAttr\">\n              <div class=\"aggiungiAttributo staticAttr\">\n                <label>Static <input #checkStaticAttMod id=\"staticAttMod\" type=\"checkbox\" name=\"static\" class=\".checkbox-circle\" value=\"Static\" (change)='updateCheckbox(checkStaticAttMod.id)'/></label>\n                <label>Final <input #checkFinalAttMod id=\"finalAttMod\" type=\"checkbox\" name=\"final\" class=\"checkbox-circle\" value=\"Final\" (change)='updateCheckbox(checkFinalAttMod.id)'/></label>\n              </div>\n              <label>Seleziona Visibilità</label>\n              <select  #accAttMod [(ngModel)]=\"selectedAccAtt\">\n                <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n              </select>\n            </div>\n            <div class=\"modificaAttributo selezionaTipo\">\n              <label>Seleziona tipo</label>\n              <select #tipiAttMod [(ngModel)]=\"selectedTipoAtt\">\n                <option value=\"\"></option>\n                <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n              </select>\n            </div>\n            <div class=\"modificaAttributo nomeAttr\">\n              <label>Nome</label>\n              <input [disabled]=\"!selectedTipoAtt\" id=\"nome-attributo\" #nomeAttMod\n              (keyup.enter)=\"changeAttributo(nomeAtt.value, attr.name)\">\n            </div>\n            <button class=\"btn btn-default\" [disabled]=\"!selectedTipoAtt\" (click)=\"changeAttributo(nomeAttMod.value, attr.name,tipiAttMod.value, accAttMod.value , checkStaticAttMod.checked , checkFinalAttMod.checked)\">Modifica Attributo</button>\n            </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- blocco per aggiungere un metodo alla classe -->\n  <div class=\"aggiungiMetodo\">\n    <div class=\"row\">\n      <button href=\"#addMetodo\" class=\"btn btn-default\" data-toggle=\"collapse\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Metodo\n      </button>\n    </div>\n    <div id=\"addMetodo\" class=\"campiMetodo collapse\">\n      <!-- blocco per aggiunta parametri metodo -->\n      <div class=\"aggiungiMetodo .selezionaTipo\">\n        <div class=\"aggiungiAttributo staticAttr\">\n          <label>Static <input #staticMet type=\"checkbox\" id=\"static\" name=\"static\" classe=\"checkbox-circle\" value=\"Static\" (change)='updateCheckbox(staticMet.id)'></label>\n          <label> Costruttore <input #constructor [(ngModel)]=\"costruttore\" type=\"checkbox\" id=\"constructor\" name=\"constructor\" classe=\"checkbox-circle\" value=\"Constructor\" (change)='updateCheckbox(constructor.id)'></label>\n        </div>\n        <div class=\"aggiungiMeotdo accessoMetodo\">\n          <label>Seleziona Visibilità</label>\n          <select #accMetodo [(ngModel)]=\"selectedAccMet\">\n            <option *ngFor=\"let acc of accessoAttr\" [value]=\"acc\">{{ acc }}</option>\n          </select>\n        </div>\n        <div [hidden]=\"costruttore\">\n          <label>Seleziona tipo di ritorno</label>\n          <select #tipiMetodo [(ngModel)]=\"selectedTipoMet\">\n            <option value=\"void\"></option>\n            <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n          </select>\n        </div>\n      </div>\n      <div [hidden]=\"costruttore\" class=\"aggiungiMetodo nomeMet\">\n        <label>Nome</label>\n        <input id=\"nome-metodo\" #nomeMetodo [(ngModel)]=\"nomeMet\">\n      </div>\n      <div class=\"container-fluid\" [hidden]=\"isAddableMethod()\">\n        <div class=\"row clearfix\">\n          <div class=\"col-md-12 column\" id=\"tabellaParametri\">\n            Parametri attuali\n            <table class=\"table table-bordered table-hover\" id=\"tab_logic\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">Tipo</th>        \n                  <th class=\"text-center\">Nome</th>          \n                  <th class=\"text-center\"></th>                \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let param of parametriMetodo\" class=\"tipiMetodo\">\n                  <td>{{param.getTipo()}}</td>\n                  <td>{{param.getNome()}}</td>\n                </tr>\n                <tr #parametro>\n                  <td>\n                    <select #tipiParam id=\"tipiParam\" class=\"tipiMetodo\">\n                      <option value=\"\"></option>\n                      <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <input #nomeParam id=\"nomeParam\" type=\"text\" placeholder=\"Nome\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <button class=\"btn btn-default\" title=\"Aggiungi Parmetro\" (click)=\"addParam(tipiParam.value, nomeParam.value)\">\n                      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-default\" [disabled]=\"isAddableMethod()\" (click)=\"addMetodo(nomeMetodo.value, staticMet.checked, constructor.checked, tipiMetodo.value, accMetodo.value)\">Aggiungi Metodo</button>\n    </div>   \n  </div>\n  <button href=\"#listaMet\" #listac class=\"btn btn-default\" data-toggle=\"collapse\" (click)='closeCollapsedList(listac)'>\n    <span class=\"glyphicon glyphicon-triangle-left\" aria-hidden=\"true\"></span>&nbsp;Lista Metodi\n  </button>\n  <!-- lista metodi della classe -->\n  <div *ngIf=\"this.mainEditorService.selectedClasse\" class=\"container listaAttributi\">\n    <div id=\"listaMet\" class=\"row collapse\" *ngIf=\"name\">\n      Lista metodi\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let met of getMetodi()\">\n          <span>{{met.accesso}} {{met.staticString()}} {{met.nome}}({{met.paramToString()}}): {{met.tipoRitorno}}\n            <button class=\"btn btn-default\" (click)=\"removeMetodo(met.nome)\">\n               <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" title=\"Rimuovi\"></span>\n            </button>\n            <button class=\"btn btn-default\" (click)=\"modifyMetodo(met.nome)\" title=\"Modifica\">\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Modifica\"></span>\n            </button>\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"aggiungiMetodo\">\n    <div class=\"row\">\n      <button [disabled]=\"this.mainEditorService.isThereAMain()\" class=\"btn btn-default\" (click)=\"addMain()\">\n        <span class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\"></span>&nbsp;Aggiungi Metodo Main\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar classi\">\n  <div class=\"tipo\"> Classi </div>\n    <div class=\"icona\"><button (click)=\"addClasse()\" class=\"add addClasse\" title=\"Aggiungi classe\"></button></div>\n    <div class=\"icona\"><button (click)=\"addInterfaccia()\" class=\"add addInterfaccia\" title=\"Aggiungi interfaccia\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAstratta()\" class=\"add addAstratta\" title=\"Aggiungi classe astratta\"></button></div>\n\n  <div class=\"tipo\"> Connettori </div>\n    <div class=\"icona\"><button (click)=\"addImplementazione()\" class=\"add addImplementazione freccia\" title=\"Aggiungi implementazione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addGeneralizzazione()\" class=\"add addGeneralizzazione freccia\" title=\"Aggiungi generalizzazione\"></button></div>\n\n  <div class=\"tipo\"> Commenti </div>\n    <div class=\"icona\"><button (click)=\"addCommento()\" class=\"add addCommento\" title=\"Agiungi commento\"></button></div>\n    <div class=\"icona\"><button (click)=\"addAssociazione()\" class=\"add addAssociazione freccia\" title=\"Aggiungi associazione\"></button></div>\n</div>\n<div [hidden]=\"!mainEditorService.getActivityModeStatus()\" class=\"container-fluid toolbar activity\">\n  <div class=\"tipo\"> Activity </div>\n    <div class=\"icona\"><button [disabled]=\"this.activityService.start()\" (click)=\"addStart()\" class=\"add addStart\" title=\"Aggiungi start\"></button></div>\n    <div class=\"icona\"><button (click)=\"addEnd()\" class=\"add addEnd\" title=\"Aggiungi End\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityShape()\" class=\"add addAttivita\" title=\"Aggiungi azione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addActivityForShape()\" class=\"add addAttivitaFor\" title=\"Richiama l'attività/azione \"></button></div>\n    <div class=\"icona\"><button (click)=\"addRettangoloAngolo()\" class=\"add addRettangoloAngolo\" title=\"Aggiungi attività \"></button></div>\n    <div class=\"icona\"><button (click)=\"addConnector()\" class=\"add addConnettore\" title=\"Aggiungi connettore\"></button></div>\n    <div class=\"icona\"><button (click)=\"addDecision()\" class=\"add addDecision\" title=\"Aggiungi decisione\"></button></div>\n    <div class=\"icona\"><button (click)=\"addEndDecision()\" class=\"add addEndDecision\" title=\"Aggiungi fine decisione\"></button></div>\n</div>\n"

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = "<div id=\"paper\"></div>\n<div class=\"toolbar\">\n  <app-toolbar></app-toolbar>\n\n</div>\n<div [hidden]=\"!selectedCell\" class=\"editClass\">\n    <class-menu [hidden]=\"mainEditorService.getActivityModeStatus()\"></class-menu>\n</div>\n<div class=\"editClass\">\n  <activity-menu [hidden]=\"!mainEditorService.getActivityModeStatus()\"></activity-menu>\n</div>\n"

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuFile>\n  <button class=\"btn btn-default dropdown-toggle tmp-disable\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    File\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Salva</a></li>\n    <li><a (click)=\"esporta()\" href=\"#\" >Esporta</a></li>\n    <li>\n      <input id=\"upload\" type=\"file\" class=\"custom-file-input\" (change)=\"importa($event)\" placeholder=\"Upload file\" accept=\".json\">\n      <a href=\"#\" onclick=\"$('input[id=upload]').click();\">Importa progetto </a>\n    </li>\n    <li><a href=\"#\" (click)=\"genera()\" >Genera codice</a></li>\n    <li><a href=\"#\" >Salva template</a></li>\n    <li><a href=\"#\" >Chiudi</a></li>\n  </ul>\n</div>\n\n"

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuLayer>\n  <button class=\"btn btn-default dropdown-toggle tmp-disable\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Layer\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi laver</a></li>\n    <li><a href=\"#\" >Lista layer</a></li>\n    <li><a href=\"#\" >Rinomina laver</a></li>\n    <li><a href=\"#\" >Elimina layer</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuModifica>\n  <button class=\"btn btn-default dropdown-toggle tmp-disable\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Modifica\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a (click)=\"doUndo()\" >Annulla</a></li>\n    <li><a  >Ripristina</a></li>\n    <li><a (click)=\"doCut()\" >Taglia</a></li>\n    <li><a  (click)=\"doCopy()\" >Copia</a></li>\n    <li><a  (click)=\"doPaste()\" >Incolla</a></li>\n    <li><a (click)=\"doElimina()\" >Elimina</a></li>\n    <li><a  (click)=\"doZoomIn()\" >Zoom In</a></li>\n    <li><a  (click)=\"doZoomOut()\" >Zoom Out</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n      <form name=\"form\"  #changeEmailForm=\"ngForm\" (submit)=\"changeEmail()\">\n        <div class=\"form-group has-warning\" >\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-envelope\"></i>\n            </span>  \n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required\n            ngModel email\n            [(ngModel)]=\"newEmail\" name=\"email\"\n            id=\"email\" />\n          </div>\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Modifica email\" [disabled]=\"!changeEmailForm.form.valid\"/> \n        </div></form>\n</div>\n"

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n      <form name=\"form\"  #changePswForm=\"ngForm\" (submit)=\"changePsw()\">\n        <div class=\"form-group has-warning\" >\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span>  \n            <input type=\"password\" class=\"form-control\" name=\"password\" required placeholder=\"Password\"\n            [(ngModel)]=\"newPassword\"\n            id=\"password\"/>\n          </div>\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Modifica passowrd\" [disabled]=\"!changePswForm.form.valid\"/> \n        </div></form>\n</div>"

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n      <form name=\"form\"  #changeUsernameForm=\"ngForm\" (submit)=\"changeUsername()\">\n        <div class=\"form-group has-warning\" >\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>  \n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required\n            [(ngModel)]=\"newUsername\" name=\"username\"\n            id=\"username\" />\n          </div>\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Modifica username\" [disabled]=\"!changeUsernameForm.form.valid\"/> \n        </div></form>\n</div>"

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#confirmation\">Elimina profilo</button>\n    <div id=\"confirmation\" class=\"collapse\">\n    <div> Sei sicuro?</div>\n    <div>\n        <button type=\"button\" class=\"btn btn-success choice\" data-toggle=\"collapse\" (click)=deleteProfile()>Si</button>\n        <button type=\"button\" class=\"btn btn-danger choice\" data-toggle=\"collapse\" data-target=\"#confirmation\">No</button>\n    </div>    \n    </div>\n</div>"

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "<p>\n  proj-list works!\n</p>\n"

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <div class=\"container-fluid\">\n    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#confirmation\">Logout</button>\n    <div id=\"confirmation\" class=\"collapse\">\n    <div> Sei sicuro?</div>\n    <div>\n        <button type=\"button\" class=\"btn btn-success choice\" data-toggle=\"collapse\" (click)=accountService.logout()>Si</button>\n        <button type=\"button\" class=\"btn btn-danger choice\" data-toggle=\"collapse\" data-target=\"#confirmation\">No</button>\n    </div>\n    </div>\n</div>\n    <i class=\"glyphicon glyphicon-remove-sign close\"></i>\n  </div>\n  <div class=\"col-md-4 col-xs-4 accountSetting\">\n    <div class=\"col\">\n      <h3> Gestione profilo</h3>\n      <hr/>\n      <app-edit-username></app-edit-username>\n      <hr/>\n      <app-edit-email></app-edit-email>\n      <hr/>\n      <app-edit-psw></app-edit-psw>\n      <hr/>\n      <app-erase-profile></app-erase-profile>\n      <hr/>\n    </div>\n  </div>\n  <div class=\"col-md-8 col-xs-8 list\">\n    <h3>Lista progetti</h3>\n    <app-proj-list></app-proj-list>\n  </div>\n</div>\n\n"

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProfilo id=\"qwerty\">\n  <button class=\"btn btn-default\" data-toggle=\"collapse\" id=\"menuProfilo\" href=\"#manage-profile\">\n    <i class=\"glyphicon glyphicon-user\"></i> &nbsp;{{accountService.username}}\n    <span class=\"caret\"></span>\n  </button>\n  <div >\n  <app-manage-profile class=\"collapse\" id=\"manage-profile\"></app-manage-profile></div>\n</div>\n"

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuProgetto>\n  <button class=\"btn btn-default dropdown-toggle tmp-disable\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Progetto\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Nuovo</a></li>\n    <li><a href=\"#\" >Apri progetto</a></li>\n    <li><a href=\"#\" >Elimina progetto</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" #menuTemplate>\n  <button class=\"btn btn-default dropdown-toggle tmp-disable\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Template\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\" >Aggiungi template</a></li>\n    <li><a href=\"#\" >Elimina template</a></li>\n  </ul>\n</div>\n"

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "<div class=\".container-fluid barra-menu\">\n  <div class=\"rowEdit\">\n    <div class=\"logoEdit\">\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n      <div class=\"logoText\">SWEDesigner</div>\n    </div>\n    <div class=\"menu btn\">  <app-file></app-file>  </div>\n    <div class=\"menu btn\">  <app-progetto></app-progetto>  </div>\n    <div class=\"menu btn\">  <app-modifica></app-modifica>  </div>\n    <div class=\"menu btn\">  <app-template></app-template>  </div>\n    <div class=\"menu btn\">  <app-layer></app-layer>  </div>\n    <div class=\"menu btn\">  <app-profilo></app-profilo>  </div>\n  </div>\n</div>\n"

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = "<!-- component padre che racchiude gli elementi del menù -->\n<div class=\".container-fluid\">\n<app-menu></app-menu>\n<div class=\"row\">\n  <!-- component padre che racchiude gli elementi dell'editor -->\n  <div class=\"col-md-9 col-xs-9 editor\">\n    <app-editor></app-editor>\n  </div>\n  <!-- component  che racchiude gli elementi del acrivity frame, la quale rappresenta il flusso del programma -->\n  <div class=\"col-md-3 col-xs-3 activityframe\">\n    <app-activity-frame></app-activity-frame>\n  </div>\n</div>\n"

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainDiv\" class=\"container col-xs-6 col-md-4\">\n  <div class=\"sub-container\">\n    <div class=\"row\" >      \n      <img src=\"assets/images/logo.png\" alt=\"logo\" class=\"col-xs-6\" />\n      <span class=\"text\"> SWEDesigner </span>\n    </div> \n    <div>  \n      <h3 class=\"text-warning\">Password dimenticata</h3>\n      <form name=\"form\" (submit)=\"tryGetNewPassword($event)\" #forgotPswForm=\"ngForm\">\n        <div class=\"form-group has-warning\">\n          <label for=\"email\" class=\"control-label\">Email</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-envelope\"></i>\n            </span>\n            <input type=\"email\" class=\"form-control\" name=\"email\" required placeholder=\"Email\"\n            id=\"email\"\n            ngModel email\n            [(ngModel)]=\"accountService.email\"/>\n            <!-- <div class=\"help-block\">Email is required</div> -->\n          </div>\n        </div>\n        <div class=\"form-group\">        \n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Invia\" [disabled]=\"!forgotPswForm.form.valid\"/>       \n          <button class=\"btn btn-warning\" id=\"back\" (click)='accountService.redirectComponent(\"home\")'>Back</button> \n        </div>\n      </form>\n    </div>    \n  </div>\n</div>"

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = " <div class=\"container col-xs-6 col-md-4\">\n  <div class=\"sub-container\">\n    <!-- Logo -->\n    <div class=\"row\" >\n      <img src=\"assets/images/logo.png\" alt=\"logo\" class=\"col-xs-6\" />\n      <span id=\"content\" class=\"text hide\"> SWEDesigner </span>\n    </div>\n    <!-- Form -->\n    <div class=\"box\">\n      <h2 class=\"text-warning\">Login</h2>\n      <form name=\"form\"  #loginForm=\"ngForm\" (submit)=\"loginUser($event)\">\n        <div class=\"form-group has-warning\" >\n          <label class=\"control-label\" for=\"email\"> Email </label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-envelope\"></i>\n            </span>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required\n            ngModel email\n            [(ngModel)]=\"accountService.email\" name=\"email\"\n            id=\"email\" />\n          </div>\n        </div>\n        <div class=\"form-group has-warning\">\n          <label for=\"password\" class=\"control-label\">Password</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span>\n            <input type=\"password\" class=\"form-control\" name=\"password\" required placeholder=\"Password\"\n            [(ngModel)]=\"accountService.password\"\n            id=\"password\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Login\" [disabled]=\"!loginForm.form.valid\"/>\n          <a class=\"btn btn-link text-warning .warning\t\" (click)='accountService.redirectComponent(\"registrazione\")'>Registrati</a>\n          <a class=\"btn btn-link text-warning\" (click)='accountService.redirectComponent(\"passwordDimenticata\")'>Password dimenticata</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainDiv\" class=\"container col-xs-6 col-md-4\">\n  <div class=\"sub-container\">\n    <div class=\"row\" >      \n      <img src=\"assets/images/logo.png\" alt=\"logo\" class=\"col-xs-6\" />\n      <span class=\"text\"> SWEDesigner </span>\n    </div> \n    <div>  \n      <h2 class=\"text-warning\">Registrazione</h2>\n      <form name=\"form\" (submit)=\"tryRegistration($event)\" #registrationForm=\"ngForm\">\n        <div class=\"form-group has-warning\">\n          <label for=\"username\" class=\"control-label\">Username</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>  \n            <input type=\"text\" class=\"form-control\" name=\"username\" required placeholder=\"Username\" \n            id=\"username\"\n            [(ngModel)]=\"accountService.username\"/>      \n          </div>\n        </div>\n        <div class=\"form-group has-warning\">\n          <label for=\"email\" class=\"control-label\">Email</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-envelope\"></i>\n            </span>  \n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" required\n            id=\"email\"\n            ngModel email\n            [(ngModel)]=\"accountService.email\"/>\n          </div>        \n        </div>\n        <div class=\"form-group has-warning\">\n          <label for=\"password\" class=\"control-label\">Password</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span> \n            <input type=\"password\" class=\"form-control\" name=\"password\" required placeholder=\"Password\"\n            id=\"password\"\n            [(ngModel)]=\"accountService.password\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-warning\" value=\"Registrati\" id=\"submit\" [disabled]=\"!registrationForm.form.valid\"/> \n          <button class=\"btn btn-warning\" id=\"back\" (click)='accountService.redirectComponent(\"home\")'>Back</button>       \n        </div>\n      </form>\n    </div>    \n  </div>\n</div>\n\n\n"

/***/ }),
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ })
],[374]);
//# sourceMappingURL=main.bundle.js.map