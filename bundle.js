"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoa = function Pessoa(nome, altura, peso) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.altura = altura;
  this.peso = peso;
};

var Vingador = /*#__PURE__*/function (_Pessoa) {
  _inherits(Vingador, _Pessoa);

  var _super = _createSuper(Vingador);

  function Vingador(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    var _this;

    _classCallCheck(this, Vingador);

    _this = _super.call(this, nome, altura, peso);
    _this.poderes = poderes;
    _this.temArmadura = temArmadura;
    _this.isMembroFundador = isMembroFundador;
    return _this;
  }

  _createClass(Vingador, [{
    key: "lutar",
    value: function lutar() {
      alert("".concat(this.nome, " esta lutando usando ").concat(this.poderes[0]));
    }
  }]);

  return Vingador;
}(Pessoa);

var thor = new Vingador('thor', '1.85', '100kg', ['Super força', 'raio'], true, true);

document.getElementById('lutar').onclick = function () {
  thor.lutar();
};

var OperacoesMatematicas = /*#__PURE__*/function () {
  function OperacoesMatematicas() {
    _classCallCheck(this, OperacoesMatematicas);
  }

  _createClass(OperacoesMatematicas, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return OperacoesMatematicas;
}();

var sun = OperacoesMatematicas.soma(1, 3);
alert(sun);
