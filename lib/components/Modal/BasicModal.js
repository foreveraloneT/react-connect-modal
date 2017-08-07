'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = require('./modal.css');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BasicModal = function BasicModal(_ref) {
    var _ref$show = _ref.show,
        show = _ref$show === undefined ? true : _ref$show,
        _ref$header = _ref.header,
        header = _ref$header === undefined ? 'Modal Header' : _ref$header,
        _ref$content = _ref.content,
        content = _ref$content === undefined ? 'test' : _ref$content,
        onClose = _ref.onClose;
    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)(_modal2.default['modal'], _defineProperty({}, _modal2.default['modal-hide'], !show), _defineProperty({}, _modal2.default['modal-show'], show)) },
        _react2.default.createElement(
            'div',
            { className: _modal2.default['modal-content'] },
            _react2.default.createElement(
                'div',
                { className: _modal2.default['modal-header'] },
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: _modal2.default['close'], onClick: function onClick() {
                            return onClose();
                        } },
                    _react2.default.createElement(
                        'span',
                        { 'aria-hidden': 'true' },
                        '\xD7'
                    )
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    header
                )
            ),
            _react2.default.createElement(
                'div',
                { className: _modal2.default['modal-body'] },
                content
            ),
            _react2.default.createElement(
                'div',
                { className: _modal2.default['modal-footer'] },
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: _modal2.default['close-button'], onClick: function onClick() {
                            return onClose();
                        } },
                    'Close'
                )
            )
        )
    );
};

BasicModal.propTypes = {
    show: _propTypes2.default.bool.isRequired,
    header: _propTypes2.default.string,
    content: _propTypes2.default.any,
    onClose: _propTypes2.default.func.isRequired
};

exports.default = BasicModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL0Jhc2ljTW9kYWwuanMiXSwibmFtZXMiOlsiQmFzaWNNb2RhbCIsInNob3ciLCJoZWFkZXIiLCJjb250ZW50Iiwib25DbG9zZSIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYW55IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEseUJBQ2ZDLElBRGU7QUFBQSxRQUNmQSxJQURlLDZCQUNWLElBRFU7QUFBQSwyQkFFZkMsTUFGZTtBQUFBLFFBRWZBLE1BRmUsK0JBRVIsY0FGUTtBQUFBLDRCQUdmQyxPQUhlO0FBQUEsUUFHZkEsT0FIZSxnQ0FHUCxNQUhPO0FBQUEsUUFJZkMsT0FKZSxRQUlmQSxPQUplO0FBQUEsV0FNZjtBQUFBO0FBQUE7QUFDSSx1QkFDSSwwQkFBVyxnQkFBTyxPQUFQLENBQVgsc0JBQThCLGdCQUFPLFlBQVAsQ0FBOUIsRUFBcUQsQ0FBQ0gsSUFBdEQsdUJBQStELGdCQUFPLFlBQVAsQ0FBL0QsRUFBc0ZBLElBQXRGLEVBRlI7QUFHSTtBQUFBO0FBQUEsY0FBSyxXQUFXLGdCQUFPLGVBQVAsQ0FBaEI7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxnQkFBTyxjQUFQLENBQWhCO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixXQUFXLGdCQUFPLE9BQVAsQ0FBakMsRUFBa0QsU0FBUztBQUFBLG1DQUFNRyxTQUFOO0FBQUEseUJBQTNEO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLGVBQVksTUFBbEI7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUE7QUFBS0Y7QUFBTDtBQUpKLGFBREo7QUFPSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxnQkFBTyxZQUFQLENBQWhCO0FBQ0tDO0FBREwsYUFQSjtBQVVJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLGdCQUFPLGNBQVAsQ0FBaEI7QUFDSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVcsZ0JBQU8sY0FBUCxDQUFqQyxFQUF5RCxTQUFTO0FBQUEsbUNBQU1DLFNBQU47QUFBQSx5QkFBbEU7QUFBQTtBQUFBO0FBREo7QUFWSjtBQUhKLEtBTmU7QUFBQSxDQUFuQjs7QUE0QkFKLFdBQVdLLFNBQVgsR0FBdUI7QUFDbkJKLFVBQU0sb0JBQVVLLElBQVYsQ0FBZUMsVUFERjtBQUVuQkwsWUFBUSxvQkFBVU0sTUFGQztBQUduQkwsYUFBUyxvQkFBVU0sR0FIQTtBQUluQkwsYUFBUyxvQkFBVU0sSUFBVixDQUFlSDtBQUpMLENBQXZCOztrQkFPZVAsVSIsImZpbGUiOiJCYXNpY01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2RhbC5jc3MnXG5cbmNvbnN0IEJhc2ljTW9kYWwgPSAoe1xuICAgIHNob3c9dHJ1ZSxcbiAgICBoZWFkZXI9J01vZGFsIEhlYWRlcicsXG4gICAgY29udGVudD0ndGVzdCcsXG4gICAgb25DbG9zZSxcbn0pID0+IChcbiAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgY2xhc3NOYW1lcyhzdHlsZXNbJ21vZGFsJ10sIHtbc3R5bGVzWydtb2RhbC1oaWRlJ11dOiAhc2hvd30sIHtbc3R5bGVzWydtb2RhbC1zaG93J11dOiBzaG93fSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2RhbC1jb250ZW50J119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9kYWwtaGVhZGVyJ119PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9e3N0eWxlc1snY2xvc2UnXX0gb25DbGljaz17KCkgPT4gb25DbG9zZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgzPntoZWFkZXJ9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9kYWwtYm9keSddfT5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9kYWwtZm9vdGVyJ119PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9e3N0eWxlc1snY2xvc2UtYnV0dG9uJ119IG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX0+XG4gICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbkJhc2ljTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNNb2RhbCJdfQ==