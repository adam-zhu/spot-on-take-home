(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function (e, t, o) {},
    12: function (e, t, o) {
      'use strict';
      o.r(t);
      var n = o(0),
        a = o.n(n),
        r = o(4),
        c = o.n(r),
        i = o(2),
        l = o(1);
      var d = function (e) {
        var t = e.todo,
          o = e.index,
          n = e.toggleTodoCompletion,
          r = e.removeTodo;
        return a.a.createElement(
          'div',
          {
            className: 'todo',
            style: { textDecoration: t.isCompleted ? 'line-through' : '' },
          },
          t.text,
          a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'button',
              {
                onClick: function () {
                  return n(o);
                },
              },
              t.isCompleted ? 'Not done' : 'Done',
            ),
            a.a.createElement(
              'button',
              {
                onClick: function () {
                  return r(o);
                },
              },
              'x',
            ),
          ),
        );
      };
      var u = function (e) {
        var t = e.addTodo,
          o = Object(n.useState)(''),
          r = Object(l.a)(o, 2),
          c = r[0],
          i = r[1];
        return a.a.createElement(
          'form',
          {
            onSubmit: function (e) {
              e.preventDefault(), c && (t(c), i(''));
            },
          },
          a.a.createElement('input', {
            type: 'text',
            className: 'input',
            value: c,
            onChange: function (e) {
              return i(e.target.value);
            },
            placeholder: ' Enter your task',
          }),
        );
      };
      o(10);
      var s = function () {
        var e = Object(n.useState)([
            { text: 'React Hooks in Depth', isCompleted: !1 },
            { text: 'Write Articles @ Medium', isCompleted: !1 },
            { text: 'Share article at Reddit', isCompleted: !1 },
          ]),
          t = Object(l.a)(e, 2),
          o = t[0],
          r = t[1],
          c = function (e) {
            var t = Object(i.a)(o);
            (t[e].isCompleted = !t[e].isCompleted), r(t);
          },
          s = function (e) {
            var t = Object(i.a)(o);
            t.splice(e, 1), r(t);
          };
        return a.a.createElement(
          'div',
          { className: 'app' },
          a.a.createElement(
            'div',
            { className: 'todo-list' },
            a.a.createElement(
              'h1',
              { className: 'title' },
              'Create a Todo with React Hooks',
            ),
            o.map(function (e, t) {
              return a.a.createElement(d, {
                key: t,
                index: t,
                todo: e,
                toggleTodoCompletion: c,
                removeTodo: s,
              });
            }),
            a.a.createElement(u, {
              addTodo: function (e) {
                var t = Object(i.a)(o).concat([{ text: e }]);
                r(t);
              },
            }),
          ),
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      c.a.render(a.a.createElement(s, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    5: function (e, t, o) {
      e.exports = o(12);
    },
  },
  [[5, 2, 1]],
]);
//# sourceMappingURL=main.8314cfb3.chunk.js.map
