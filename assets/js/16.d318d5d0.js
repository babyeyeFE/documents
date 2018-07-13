(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{152:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("HTML注释规范写法应该遵循以下标准：")]),t._m(2),t._m(3),a("p",[t._v("标准写法：")]),t._m(4),a("p",[t._v("错误的写法：")]),t._m(5),a("p",[t._v("参考 www.w3.org "),a("a",{attrs:{href:"http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("#Comments"),a("OutboundLink")],1)]),t._m(6),t._m(7),a("p",[t._v("一般用于简单的描述，如某些状态描述、属性描述等")]),a("p",[t._v("注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("一般用于描述模块的名称以及模块开始与结束的位置")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用")]),t._m(19),a("p",[t._v("而改用")]),t._m(20),a("p",[t._v("注释写在模块结尾标签底部，单独一行。")]),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"title-注释规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-注释规范","aria-hidden":"true"}},[this._v("#")]),this._v(" title: 注释规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"遵循标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遵循标准","aria-hidden":"true"}},[this._v("#")]),this._v(" 遵循标准")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v('Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (\x3c!--). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single ">" (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a ">" (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (--), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (--\x3e).')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("必须以4个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS横线 ，即 “\x3c!--”")]),s("li",[this._v("在此之后是注释内容，注释的内容有以下限制：\n"),s("ul",[s("li",[this._v('不能以单个 ">" (U+003E) 字符开始')]),s("li",[this._v("不能以由 “-“（U+002D HYPHEN-MINUS）和 ”>” (U+003E) 组合的字符开始，即 “->”")]),s("li",[this._v("不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “--”")]),s("li",[this._v("不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”")])])]),s("li",[this._v("必须以3个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “--\x3e”")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("\x3c!--Comment Text--\x3e")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--\x3eThe Wrong Comment Text--\x3e")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!---\x3eThe Wrong Comment Text--\x3e")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--The--Wrong--Comment Text--\x3e")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--The Wrong Comment Text---\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"团队约定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#团队约定","aria-hidden":"true"}},[this._v("#")]),this._v(" 团队约定")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"单行注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单行注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 单行注释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Comment Text --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Comment Text --\x3e")]),t._v("\t\n\t\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Comment Text --\x3e")]),t._v("\n    ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块注释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注释内容前后各一个空格字符，"),s("code",[this._v("\x3c!-- S Comment Text --\x3e")]),this._v(" 表示模块开始，"),s("code",[this._v("\x3c!-- E Comment Text --\x3e")]),this._v(" 表示模块结束，模块与模块之间相隔一行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐写法：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- S Comment Text A --\x3e")]),t._v("\t\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_a"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- E Comment Text A --\x3e")]),t._v("\n\t\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- S Comment Text B --\x3e")]),t._v("\t\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_b"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- E Comment Text B --\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐写法：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- S Comment Text A --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_a"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- E Comment Text A --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- S Comment Text B --\x3e")]),t._v("\t\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_b"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- E Comment Text B --\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"嵌套模块注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套模块注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 嵌套模块注释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("\x3c!-- S Comment Text --\x3e")]),this._v("\n"),s("span",{attrs:{class:"token comment"}},[this._v("\x3c!-- E Comment Text --\x3e")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("\x3c!-- /Comment Text --\x3e")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- S Comment Text A --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_a"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_b"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        ...\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- /mod_b --\x3e")]),t._v("\n    \t\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mod_c"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \t...\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- /mod_c --\x3e")]),t._v("\n\t\t\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- E Comment Text A --\x3e")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);