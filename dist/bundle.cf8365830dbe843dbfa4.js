webpackJsonp([1,2],{

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(46);

var _containers = __webpack_require__(154);

var _Functions = __webpack_require__(148);

var _CoordinateGeometry = __webpack_require__(145);

var _Sets = __webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/math', component: _containers.MainContainer },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.HomeContainer }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Sets/SetNotation', component: _Sets.SetNotation }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Sets/SetBuilder', component: _Sets.SetBuilder }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Functions/AbsoluteValueFunctions', component: _Functions.AbsoluteValueFunctions }),
		_react2.default.createElement(_reactRouter.Route, { path: 'Functions/ReciprocalFunctions', component: _Functions.ReciprocalFunctions }),
		_react2.default.createElement(_reactRouter.Route, { path: 'CoordinateGeometry/CirclesEllipsesAndHyperbolas', component: _CoordinateGeometry.CirclesEllipsesAndHyperbolas })
	)
);

exports.default = routes;

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	return state;
};

/***/ },

/***/ 134:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tex = function (_Component) {
	_inherits(Tex, _Component);

	function Tex() {
		_classCallCheck(this, Tex);

		return _possibleConstructorReturn(this, (Tex.__proto__ || Object.getPrototypeOf(Tex)).apply(this, arguments));
	}

	_createClass(Tex, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "getMarkup",
		value: function getMarkup() {
			if (this.props.t) {
				return {
					__html: "$" + this.props.t + "$"
				};
			}

			return {
				__html: "$" + this.props.children + "$"
			};
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("span", {
				dangerouslySetInnerHTML: this.getMarkup()
			});
		}
	}]);

	return Tex;
}(_react.Component);

exports.default = Tex;

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexMarkup = function (_Component) {
	_inherits(TexMarkup, _Component);

	function TexMarkup() {
		_classCallCheck(this, TexMarkup);

		return _possibleConstructorReturn(this, (TexMarkup.__proto__ || Object.getPrototypeOf(TexMarkup)).apply(this, arguments));
	}

	_createClass(TexMarkup, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}
	}, {
		key: "getMarkup",
		value: function getMarkup() {
			return {
				__html: this.props.children
			};
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.getMarkup().__html);
			return _react2.default.createElement("span", {
				dangerouslySetInnerHTML: this.getMarkup()
			});
		}
	}]);

	return TexMarkup;
}(_react.Component);

exports.default = TexMarkup;

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function Contents(_ref) {
	var children = _ref.children;

	children = _react2.default.Children.toArray(children);
	//	const col1 = children
	//								.filter((child, index) => index % 2 === 0)
	//								.map((topic, index) => (
	//									<topic.type 
	//										{...topic.props}
	//										topicNum={2*index + 1}
	//										key={index}
	//									/>
	//								))
	//	const col2 = children
	//								.filter((child, index) => index % 2 === 1)
	//								.map((topic, index) => (
	//									<topic.type 
	//										{...topic.props}
	//										topicNum={2*(index + 1)}
	//										key={index}
	//									/>
	//								))
	children = children.map(function (topic, index) {
		return _react2.default.createElement(topic.type, _extends({}, topic.props, {
			topicNum: index + 1
		}));
	});
	var rows = children.reduce(function (rows, topic, index, children) {
		if (index % 2 === 0) {
			rows.push(_react2.default.createElement(
				'div',
				{ key: index, className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					children[index]
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-6' },
					children[index + 1]
				)
			));
		}
		return rows;
	}, []);
	return _react2.default.createElement(
		'div',
		{ className: 'Contents container-fluid' },
		rows
	);
};

exports.default = Contents;

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: 'Home' },
		_react2.default.createElement(
			'h1',
			null,
			'Contents'
		),
		_react2.default.createElement(
			_components.Contents,
			null,
			_react2.default.createElement(
				_components.Topic,
				{ name: 'Sets' },
				_react2.default.createElement(_components.SubTopic, { name: 'Set Notation', path: '/math/Sets/SetNotation' }),
				_react2.default.createElement(_components.SubTopic, { name: 'Set Builder Notation', path: '/math/Sets/SetBuilder' })
			),
			_react2.default.createElement(
				_components.Topic,
				{ name: 'Functions' },
				_react2.default.createElement(_components.SubTopic, { name: 'Absolute Value Functions', path: '/math/Functions/AbsoluteValueFunctions' }),
				_react2.default.createElement(_components.SubTopic, { name: 'Reciprocal Functions', path: '/math/Functions/ReciprocalFunctions' })
			),
			_react2.default.createElement(
				_components.Topic,
				{ name: 'Coordinate Geometry' },
				_react2.default.createElement(_components.SubTopic, { name: 'Circles, Ellipses and Hyperbolas', path: '/math/CoordinateGeometry/CirclesEllipsesAndHyperbolas' })
			),
			_react2.default.createElement(_components.Topic, { name: 'Trigonometry and Circular Functions' }),
			_react2.default.createElement(_components.Topic, { name: 'Vectors' }),
			_react2.default.createElement(_components.Topic, { name: 'Complex Numbers' }),
			_react2.default.createElement(_components.Topic, { name: 'Kinematics' }),
			_react2.default.createElement(_components.Topic, { name: 'Differential Calculus' }),
			_react2.default.createElement(
				_components.Topic,
				{ name: 'Integral Calculus' },
				_react2.default.createElement(_components.SubTopic, { name: 'Introduction and Notation', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Substitution', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Integration by Parts', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Reverse Quotient Rule. No!', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Using Trigonometric Identities', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Partial Fractions', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Areas Under Curves', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Areas Between Curves', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Volumes of Solids of Revolutions', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true }),
				_react2.default.createElement(_components.SubTopic, { name: 'Area Approximation, Introduction to Rieman Integration', path: 'https://www.overleaf.com/read/mjkcdjwnvwvb', external: true })
			),
			_react2.default.createElement(_components.Topic, { name: 'Differential Equations' }),
			_react2.default.createElement(_components.Topic, { name: 'Mechanics' }),
			_react2.default.createElement(_components.Topic, { name: 'Vector Calculus' }),
			_react2.default.createElement(_components.Topic, { name: 'Probability' }),
			_react2.default.createElement(_components.Topic, { name: 'Statistics' })
		)
	);
};

exports.default = Home;

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		'div',
		{ className: 'Main' },
		children
	);
};

exports.default = Main;

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TexMarkup = exports.Tex = undefined;

var _Tex2 = __webpack_require__(135);

var _Tex3 = _interopRequireDefault(_Tex2);

var _TexMarkup2 = __webpack_require__(136);

var _TexMarkup3 = _interopRequireDefault(_TexMarkup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tex = _Tex3.default;
exports.TexMarkup = _TexMarkup3.default;

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Answer = __webpack_require__(50);

var _Answer2 = _interopRequireDefault(_Answer);

var _Part = __webpack_require__(82);

var _Part2 = _interopRequireDefault(_Part);

var _MathJax = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionDescription = function QuestionDescription(_ref) {
	var description = _ref.description;

	return _react2.default.createElement(
		'div',
		{ className: 'QuestionDescription' },
		_react2.default.createElement(
			_MathJax.TexMarkup,
			null,
			description
		)
	);
};

QuestionDescription.propTypes = {
	question: _react.PropTypes.string.isRequired
};

exports.default = QuestionDescription;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Question = __webpack_require__(83);

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Questions = function Questions(_ref) {
	var children = _ref.children;

	children = _react2.default.Children.toArray(children);

	var questions = children.map(function (question, index) {
		return _react2.default.createElement(_Question2.default, _extends({}, question.props, { questionNum: index + 1, key: index }));
	});

	return _react2.default.createElement(
		'div',
		{ className: 'Questions' },
		questions
	);
};

exports.default = Questions;

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTopic = function SubTopic(props) {
	var internals = [_react2.default.createElement(
		'div',
		{ key: 0 },
		props.topicNum
	), _react2.default.createElement(
		'div',
		{ key: 1 },
		props.name
	)];
	return _react2.default.createElement(
		'div',
		{ className: 'SubTopic' },
		props.external ? _react2.default.createElement(
			'a',
			{ href: props.path },
			internals
		) : _react2.default.createElement(
			_reactRouter.Link,
			{ to: props.path },
			internals
		)
	);
};

SubTopic.defaultProps = {
	external: false,
	path: '/math',
	topicNum: 'error'
};

SubTopic.propTypes = {
	external: _react.PropTypes.bool.isRequired,
	path: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	topicNum: _react.PropTypes.string.isRequired
};

exports.default = SubTopic;

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topic = function Topic(_ref) {
	var name = _ref.name,
	    topicNum = _ref.topicNum,
	    children = _ref.children;

	children = _react2.default.Children.toArray(children);
	var key = 0;
	var subtopics = children.map(function (subtopic, index) {
		return _react2.default.createElement(_components.SubTopic, _extends({}, subtopic.props, {
			key: index,
			topicNum: topicNum + '.' + index
		}));
	});
	return _react2.default.createElement(
		'div',
		{ className: 'Topic' },
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			_react2.default.createElement('div', { className: 'col-sm-2' }),
			_react2.default.createElement(
				'div',
				{ className: 'col-sm-10' },
				_react2.default.createElement(
					'h2',
					null,
					topicNum + ' - ' + name
				)
			),
			_react2.default.createElement('div', { className: 'col-sm-0' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			_react2.default.createElement('div', { className: 'col-sm-3' }),
			_react2.default.createElement(
				'div',
				{ className: 'col-sm-9' },
				_react2.default.createElement(
					'ul',
					null,
					subtopics
				)
			),
			_react2.default.createElement('div', { className: 'col-sm-0' })
		)
	);
};

exports.default = Topic;

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

var _Markup = __webpack_require__(28);

var _CircleAtOrigin = __webpack_require__(298);

var _CircleAtOrigin2 = _interopRequireDefault(_CircleAtOrigin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_CircleAtOrigin2.default);

var CirclesEllipsesAndHyperbolas = function CirclesEllipsesAndHyperbolas() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Circles, Ellipses and Hyperbolas'
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Circles'
			),
			_react2.default.createElement(
				'p',
				null,
				'Consider a circle around the origin, it has a constant radius. The distance from a point to the origin is ',
				_react2.default.createElement(_MathJax.Tex, { t: '\\sqrt{x^2 + y^2}' }),
				'. So if our circle has constant radius $r$, then the equation of the circle must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r = \\sqrt{x^2 + y^2}'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r^2 = x^2 + y^2'
				),
				'.',
				_react2.default.createElement('img', { className: 'hcenter img-responsive', src: _CircleAtOrigin2.default, alt: 'CircleAtOrigin' })
			),
			_react2.default.createElement(
				'p',
				null,
				'The general equation of a circle of radius ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r'
				),
				' and center ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'(a,b)'
				),
				' is then ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r^2 = (x-a)^2 + (y-b)^2'
				),
				' as we can simply translate a circle centered at the origin.'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Ellipses'
			),
			_react2.default.createElement(
				'p',
				null,
				'Let\'s rewrite our circle equation as ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{x^2}{r^2} + \\frac{y^2}{r^2}'
				),
				'. In this form we can see why the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' intercepts are ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm r'
				),
				' as when either ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' are ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'0'
				),
				', the other must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'r'
				),
				' in order to equal ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1'
				),
				'.'
			),
			_react2.default.createElement(
				'p',
				null,
				'We also see that ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' are inversely related as when either ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' or ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' increase the other must decrease, and vice versa, consistent with the shape of a circle. Keeping this in mind, there is no reason that both denominators have to be the same.'
			),
			_react2.default.createElement(
				'p',
				null,
				'Consider ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}'
				),
				'. Using the same logic as before, the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' intercept must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm a'
				),
				' and the ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' intercept must be ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'\\pm b'
				),
				'. We also maintain the inverse relation between ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'x'
				),
				' and ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'y'
				),
				' so we end up with a \'circle\' that may not have the same height as width, ie, an ellipse.'
			),
			_react2.default.createElement(
				'p',
				null,
				'The general equation of an ellipse centered at ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'(h,k)'
				),
				' is then ',
				_react2.default.createElement(
					_MathJax.Tex,
					null,
					'1 = \\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2}'
				),
				' as we can simply translate an ellipse centered at the origin.'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Hyperbolas'
			)
		),
		_react2.default.createElement(
			'section',
			null,
			_react2.default.createElement(
				'h2',
				null,
				'Questions'
			),
			_react2.default.createElement(
				_Markup.Questions,
				null,
				_react2.default.createElement(
					_Markup.Question,
					{
						question: 'Question Tex tand things lots of things including tex compute $\\int_0^7 x^2 + \\sin(x) dx$'
					},
					_react2.default.createElement(_Markup.Answer, { answer: '$42$' })
				),
				_react2.default.createElement(
					_Markup.Question,
					{
						question: 'Another Question Tex tand things lots of things including tex compute $\\int_0^7 x^2 + \\sin(x) dx$'
					},
					_react2.default.createElement(_Markup.Answer, { answer: '42' })
				),
				_react2.default.createElement(
					_Markup.Question,
					{
						question: 'Another Question Tex tand things lots of things including tex compute $\\int_0^7 x^2 + \\sin(x) dx$'
					},
					_react2.default.createElement(_Markup.Answer, { answer: '42' })
				)
			)
		)
	);
};

exports.default = CirclesEllipsesAndHyperbolas;

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CirclesEllipsesAndHyperbolas = undefined;

var _CirclesEllipsesAndHyperbolas2 = __webpack_require__(144);

var _CirclesEllipsesAndHyperbolas3 = _interopRequireDefault(_CirclesEllipsesAndHyperbolas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CirclesEllipsesAndHyperbolas = _CirclesEllipsesAndHyperbolas3.default;

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

var _Markup = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbsoluteValueFunctions = function AbsoluteValueFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Absolute Value Functions'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Questions'
		),
		_react2.default.createElement(
			_Markup.Questions,
			null,
			_react2.default.createElement(
				_Markup.Question,
				null,
				_react2.default.createElement(_Markup.QuestionDescription, { description: 'hello $\\int_3&4xdx$' }),
				_react2.default.createElement(_Markup.Part, null)
			),
			_react2.default.createElement(
				_Markup.Question,
				null,
				_react2.default.createElement(_Markup.Part, null)
			)
		)
	);
};

exports.default = AbsoluteValueFunctions;

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

var _Markup = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReciprocalFunctions = function ReciprocalFunctions() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Reciprocal Functions'
		)
	);
};

exports.default = ReciprocalFunctions;

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReciprocalFunctions = exports.AbsoluteValueFunctions = undefined;

var _AbsoluteValueFunctions2 = __webpack_require__(146);

var _AbsoluteValueFunctions3 = _interopRequireDefault(_AbsoluteValueFunctions2);

var _ReciprocalFunctions2 = __webpack_require__(147);

var _ReciprocalFunctions3 = _interopRequireDefault(_ReciprocalFunctions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AbsoluteValueFunctions = _AbsoluteValueFunctions3.default;
exports.ReciprocalFunctions = _ReciprocalFunctions3.default;

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

var _Markup = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetBuilder = function SetBuilder() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Set Builder Notation'
		),
		_react2.default.createElement(
			'p',
			null,
			'Set builder notation is a way of compactly describing a set'
		),
		_react2.default.createElement(
			'h2',
			null,
			'Questions'
		)
	);
};

exports.default = SetBuilder;

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

var _Markup = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetNotation = function SetNotation() {
	return _react2.default.createElement(
		'div',
		{ className: 'MathMarkup' },
		_react2.default.createElement(
			'h1',
			null,
			'Set Notation'
		),
		_react2.default.createElement(
			'table',
			null,
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Name'
					),
					_react2.default.createElement(
						'th',
						null,
						'Symbol'
					),
					_react2.default.createElement(
						'th',
						null,
						'Meaning'
					),
					_react2.default.createElement(
						'th',
						null,
						'Example'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Set'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{\\}' })
					),
					_react2.default.createElement(
						'td',
						null,
						'a collection of elements'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3,4\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Union'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cup B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in either ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' or ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cup \\{4,5,6\\} = \\{1,2,3,4,5,6\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Intersect'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Proper Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not a Subset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Proper Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not a Superset'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Element of (in)'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Not an element of'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Complement'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Exclusion'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Empty Set'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Equality'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Natural Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Integers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Rational Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Real Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						'Complex Numbers'
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: 'A \\cap B' })
					),
					_react2.default.createElement(
						'td',
						null,
						'elements in both ',
						_react2.default.createElement(_MathJax.Tex, { t: 'A' }),
						' and ',
						_react2.default.createElement(_MathJax.Tex, { t: 'B' })
					),
					_react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(_MathJax.Tex, { t: '\\{1,2,3\\} \\cap \\{2,3,4\\} = \\{2,3\\}' })
					)
				)
			)
		)
	);
};

exports.default = SetNotation;

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetBuilder = exports.SetNotation = undefined;

var _SetNotation2 = __webpack_require__(150);

var _SetNotation3 = _interopRequireDefault(_SetNotation2);

var _SetBuilder2 = __webpack_require__(149);

var _SetBuilder3 = _interopRequireDefault(_SetBuilder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SetNotation = _SetNotation3.default;
exports.SetBuilder = _SetBuilder3.default;

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_Component) {
	_inherits(HomeContainer, _Component);

	function HomeContainer() {
		_classCallCheck(this, HomeContainer);

		return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
	}

	_createClass(HomeContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_components.Home, null);
		}
	}]);

	return HomeContainer;
}(_react.Component);

exports.default = HomeContainer;

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContainer = function (_Component) {
	_inherits(MainContainer, _Component);

	function MainContainer() {
		_classCallCheck(this, MainContainer);

		return _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).apply(this, arguments));
	}

	_createClass(MainContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_components.Main, {
				children: this.props.children
			});
		}
	}]);

	return MainContainer;
}(_react.Component);

exports.default = MainContainer;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeContainer = exports.MainContainer = undefined;

var _MainContainer2 = __webpack_require__(153);

var _MainContainer3 = _interopRequireDefault(_MainContainer2);

var _HomeContainer2 = __webpack_require__(152);

var _HomeContainer3 = _interopRequireDefault(_HomeContainer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MainContainer = _MainContainer3.default;
exports.HomeContainer = _HomeContainer3.default;

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionDescription = exports.Questions = exports.Question = exports.Answer = undefined;

var _Answer2 = __webpack_require__(50);

var _Answer3 = _interopRequireDefault(_Answer2);

var _Question2 = __webpack_require__(83);

var _Question3 = _interopRequireDefault(_Question2);

var _Questions2 = __webpack_require__(141);

var _Questions3 = _interopRequireDefault(_Questions2);

var _QuestionDescription2 = __webpack_require__(140);

var _QuestionDescription3 = _interopRequireDefault(_QuestionDescription2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Answer = _Answer3.default;
exports.Question = _Question3.default;
exports.Questions = _Questions3.default;
exports.QuestionDescription = _QuestionDescription3.default;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contents = exports.SubTopic = exports.Topic = exports.Home = exports.Main = undefined;

var _Main2 = __webpack_require__(139);

var _Main3 = _interopRequireDefault(_Main2);

var _Home2 = __webpack_require__(138);

var _Home3 = _interopRequireDefault(_Home2);

var _Topic2 = __webpack_require__(143);

var _Topic3 = _interopRequireDefault(_Topic2);

var _SubTopic2 = __webpack_require__(142);

var _SubTopic3 = _interopRequireDefault(_SubTopic2);

var _Contents2 = __webpack_require__(137);

var _Contents3 = _interopRequireDefault(_Contents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Main = _Main3.default;
exports.Home = _Home3.default;
exports.Topic = _Topic3.default;
exports.SubTopic = _SubTopic3.default;
exports.Contents = _Contents3.default;

/***/ },

/***/ 298:
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(47);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(132);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(48);

var _redux = __webpack_require__(36);

var _reduxThunk = __webpack_require__(49);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _modules = __webpack_require__(133);

var reducers = _interopRequireWildcard(_modules);

__webpack_require__(134);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	return f;
}));

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_routes2.default
), document.querySelector('#app'));

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MathJax = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Answer = function (_Component) {
	_inherits(Answer, _Component);

	function Answer(props) {
		_classCallCheck(this, Answer);

		var _this = _possibleConstructorReturn(this, (Answer.__proto__ || Object.getPrototypeOf(Answer)).call(this, props));

		_this.state = { show: false };
		return _this;
	}

	_createClass(Answer, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{
						className: 'show-answer',
						onClick: function onClick() {
							return _this2.setState.bind(_this2)({ show: !_this2.state.show });
						}
					},
					this.state.showAnswer ? '-' : '+'
				),
				this.state.show ? _react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						_MathJax.TexMarkup,
						null,
						this.props.answer
					)
				) : null
			);
		}
	}]);

	return Answer;
}(_react.Component);

exports.default = Answer;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Part = function Part() {
	return _react2.default.createElement(
		'div',
		null,
		' Part '
	);
};

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Answer = __webpack_require__(50);

var _Answer2 = _interopRequireDefault(_Answer);

var _Part = __webpack_require__(82);

var _Part2 = _interopRequireDefault(_Part);

var _MathJax = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = function Question(_ref) {
	var questionNum = _ref.questionNum,
	    children = _ref.children,
	    question = _ref.question;

	children = _react2.default.Children.toArray(children);
	var parts = children.filter(function (child) {
		return child.type.name === 'Part';
	}).map(function (part, index) {
		return _react2.default.createElement(_Part2.default, _extends({}, part.props, { key: index, partNum: index + 1 }));
	});
	var answer = children[children.length - 1].type.name === 'Answer' ? children[children.length - 1] : null;
	return _react2.default.createElement(
		'div',
		{ className: 'Question' },
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'question-number' },
				questionNum + ') '
			),
			_react2.default.createElement(
				_MathJax.TexMarkup,
				null,
				question
			)
		),
		parts,
		answer
	);
};

Question.propTypes = {};

exports.default = Question;

/***/ }

},[300]);