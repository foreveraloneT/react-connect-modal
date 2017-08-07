'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var connectModal = exports.connectModal = function connectModal(ModalWraper) {
    return function (_Component) {
        _inherits(ModalContainer, _Component);

        function ModalContainer() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, ModalContainer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                show: false
            }, _this.open = function () {
                _this.setState({ show: true });
            }, _this.close = function () {
                _this.setState({ show: false });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(ModalContainer, [{
            key: 'render',
            value: function render() {
                var newProps = {
                    modalHandler: {
                        open: this.open,
                        close: this.close
                    },
                    modalStatus: {
                        show: this.state.show
                    }
                };

                return _react2.default.createElement(ModalWraper, _extends({}, this.props, newProps));
            }
        }]);

        return ModalContainer;
    }(_react.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25uZWN0TW9kYWwvaW5kZXguanMiXSwibmFtZXMiOlsiY29ubmVjdE1vZGFsIiwiTW9kYWxXcmFwZXIiLCJzdGF0ZSIsInNob3ciLCJvcGVuIiwic2V0U3RhdGUiLCJjbG9zZSIsIm5ld1Byb3BzIiwibW9kYWxIYW5kbGVyIiwibW9kYWxTdGF0dXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxXQUFEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSw4TUFFcEJDLEtBRm9CLEdBRVo7QUFDSkMsc0JBQU07QUFERixhQUZZLFFBTXBCQyxJQU5vQixHQU1iLFlBQU07QUFDVCxzQkFBS0MsUUFBTCxDQUFjLEVBQUNGLE1BQU0sSUFBUCxFQUFkO0FBQ0gsYUFSbUIsUUFVcEJHLEtBVm9CLEdBVVosWUFBTTtBQUNWLHNCQUFLRCxRQUFMLENBQWMsRUFBQ0YsTUFBTSxLQUFQLEVBQWQ7QUFDSCxhQVptQjtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQ0FjWDtBQUNMLG9CQUFNSSxXQUFXO0FBQ2JDLGtDQUFjO0FBQ1ZKLDhCQUFNLEtBQUtBLElBREQ7QUFFVkUsK0JBQU8sS0FBS0E7QUFGRixxQkFERDtBQUtiRyxpQ0FBYTtBQUNUTiw4QkFBTSxLQUFLRCxLQUFMLENBQVdDO0FBRFI7QUFMQSxpQkFBakI7O0FBVUEsdUJBQ0ksOEJBQUMsV0FBRCxlQUNRLEtBQUtPLEtBRGIsRUFFUUgsUUFGUixFQURKO0FBS0g7QUE5Qm1COztBQUFBO0FBQUE7QUFBQSxDQUFyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb2RhbCA9IChNb2RhbFdyYXBlcikgPT4gKFxuICAgIGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgbW9kYWxIYW5kbGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IHRoaXMuY2xvc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RhbFN0YXR1czoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0aGlzLnN0YXRlLnNob3csXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNb2RhbFdyYXBlclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuKSJdfQ==