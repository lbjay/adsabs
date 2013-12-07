// Generated by CoffeeScript 1.6.1
(function() {
  var $, $one_col_table, $table_from_dict, $table_from_dict_many, HideableView, HoverHelpDecoratorView, decohelp, dropdown_submit, dropdown_submit_with_cb, editable_text, h, info_layout, inline_list, link, multiselect, one_col_table, one_col_table_partial, one_submit, one_submit_with_cb, parse_fqin, postalall_form, postalnote_form, regular_list, root, single_button, single_button_label, table_from_dict, table_from_dict_many, table_from_dict_partial, table_from_dict_partial_many, two_submit,
    _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  $ = jQuery;

  console.log("In Funcs");

  h = teacup;

  editable_text = function(text) {
    return h.render(function() {
      return h.span(".edsp", function() {
        h.span(".edtext", text);
        return h.a(".edclick", {
          href: '#'
        }, function() {
          return h.i(".icon-pencil", {
            style: "padding-left: 5px;"
          });
        });
      });
    });
  };

  parse_fqin = function(fqin) {
    var vals;
    vals = fqin.split(':');
    return vals[-1 + vals.length];
  };

  inline_list = h.renderable(function(items) {
    return h.ul('.inline', function() {
      var i, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        i = items[_i];
        _results.push(h.li(i));
      }
      return _results;
    });
  });

  regular_list = h.renderable(function(items) {
    return h.ul('.regular', function() {
      var i, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        i = items[_i];
        _results.push(h.li(i));
      }
      return _results;
    });
  });

  table_from_dict_partial = h.renderable(function(k, v) {
    h.td(function() {
      return h.raw(k);
    });
    return h.td(function() {
      return h.raw(v);
    });
  });

  table_from_dict = h.renderable(function(kcol, vcol, dict) {
    return h.table('.table.table-bordered.table-condensed.table-striped', function() {
      h.thead(function() {
        return h.tr(function() {
          h.th(kcol);
          return h.th(vcol);
        });
      });
      return h.tbody(function() {
        var k, v, _results;
        _results = [];
        for (k in dict) {
          v = dict[k];
          _results.push(h.tr(function() {
            return table_from_dict_partial(k, v);
          }));
        }
        return _results;
      });
    });
  });

  $table_from_dict = function(kcol, vcol, vlist) {
    var $f, f, k, _i, _len;
    f = h.renderable(function(kcol, vcol) {
      return h.table('.table.table-bordered.table-condensed.table-striped', function() {
        h.thead(function() {
          return h.tr(function() {
            h.th(kcol);
            return h.th(vcol);
          });
        });
        return h.tbody;
      });
    });
    $f = $(f(kcol, vcol));
    for (_i = 0, _len = vlist.length; _i < _len; _i++) {
      k = vlist[_i];
      $f.append(k);
    }
    return $f;
  };

  table_from_dict_partial_many = h.renderable(function(k, vlist) {
    var ele, _i, _len, _results;
    h.td(function() {
      return h.raw(k);
    });
    _results = [];
    for (_i = 0, _len = vlist.length; _i < _len; _i++) {
      ele = vlist[_i];
      _results.push(h.td(function() {
        return h.raw(ele);
      }));
    }
    return _results;
  });

  table_from_dict_many = h.renderable(function(kcol, vcollist, dict) {
    return h.table('.table.table-bordered.table-condensed.table-striped', function() {
      h.thead(function() {
        return h.tr(function() {
          var ele, _i, _len, _results;
          h.th(kcol);
          _results = [];
          for (_i = 0, _len = vcollist.length; _i < _len; _i++) {
            ele = vcollist[_i];
            _results.push(h.th(ele));
          }
          return _results;
        });
      });
      return h.tbody(function() {
        var k, vlist, _results;
        _results = [];
        for (k in dict) {
          vlist = dict[k];
          _results.push(h.tr(function() {
            return table_from_dict_partial_many(k, vlist);
          }));
        }
        return _results;
      });
    });
  });

  $table_from_dict_many = function(kcol, vcollist, vlist) {
    var $f, f, k, _i, _len;
    f = h.renderable(function(kcol, vcollist) {
      return h.table('.table.table-bordered.table-condensed.table-striped', function() {
        h.thead(function() {
          return h.tr(function() {
            var ele, _i, _len, _results;
            h.th(kcol);
            _results = [];
            for (_i = 0, _len = vcollist.length; _i < _len; _i++) {
              ele = vcollist[_i];
              _results.push(h.th(ele));
            }
            return _results;
          });
        });
        return h.tbody;
      });
    });
    $f = $(f(kcol, vcollist));
    for (_i = 0, _len = vlist.length; _i < _len; _i++) {
      k = vlist[_i];
      $f.append(k);
    }
    return $f;
  };

  one_col_table_partial = h.renderable(function(k) {
    return h.td(function() {
      return h.raw(k);
    });
  });

  one_col_table = h.renderable(function(kcol, tlist) {
    return h.table('.table.table-bordered.table-condensed.table-striped', function() {
      h.thead(function() {
        return h.tr(function() {
          return h.th(kcol);
        });
      });
      return h.tbody(function() {
        var k, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = tlist.length; _i < _len; _i++) {
          k = tlist[_i];
          _results.push(h.tr(function() {
            return one_col_table_partial(k);
          }));
        }
        return _results;
      });
    });
  });

  $one_col_table = function(kcol, vlist) {
    var $f, f, k, _i, _len;
    f = h.renderable(function(kcol) {
      return h.table('.table.table-bordered.table-condensed.table-striped', function() {
        h.thead(function() {
          return h.tr(function() {
            return h.th(kcol);
          });
        });
        return h.tbody;
      });
    });
    $f = $(f(kcol));
    for (_i = 0, _len = vlist.length; _i < _len; _i++) {
      k = vlist[_i];
      $f.append(k);
    }
    return $f;
  };

  one_submit = h.renderable(function(ltext, btext) {
    h.label(ltext);
    return h.form(".form-inline", function() {
      h.input(".span3.txt", {
        type: 'text'
      });
      h.raw("&nbsp;&nbsp;&nbsp;");
      return h.button(".btn.btn-primary.sub", {
        type: 'button'
      }, btext);
    });
  });

  two_submit = h.renderable(function(ltext1, ltext2, btext) {
    return h.form(".form-horizontal", function() {
      h.div(".control-group", function() {
        h.label(".control-label", ltext1);
        return h.div(".controls", function() {
          return h.input(".span3.txt1", {
            type: 'text'
          });
        });
      });
      return h.div(".control-group", function() {
        h.label(".control-label", ltext2);
        return h.div(".controls", function() {
          h.textarea(".span3.txt2", {
            rows: 2
          });
          h.raw("&nbsp;&nbsp;&nbsp;");
          return h.button(".btn.btn-primary.sub", {
            type: 'button'
          }, btext);
        });
      });
    });
  });

  one_submit_with_cb = h.renderable(function(ltext, btext, ctext) {
    h.label(ltext);
    return h.form(".form-inline", function() {
      h.input(".span3.txt", {
        type: 'text'
      });
      h.raw("&nbsp;&nbsp;");
      h.label('.checkbox', function() {
        h.input(".cb", {
          type: 'checkbox'
        });
        return h.text(ctext);
      });
      h.raw("&nbsp;&nbsp;&nbsp;");
      return h.button(".btn.btn-primary.sub", {
        type: 'button'
      }, btext);
    });
  });

  dropdown_submit = h.renderable(function(selects, selectnames, ltext, btext) {
    h.label(ltext);
    return h.form('##{wname}.form-inline', function() {
      h.select(".sel", function() {
        var s, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = selects.length; _i < _len; _i++) {
          s = selects[_i];
          _results.push(h.option({
            value: s
          }, selectnames[s]));
        }
        return _results;
      });
      h.raw("&nbsp;&nbsp;&nbsp;");
      return h.button(".btn.btn-primary.sub", {
        type: 'button'
      }, btext);
    });
  });

  dropdown_submit_with_cb = h.renderable(function(selects, selectnames, ltext, btext, ctext) {
    h.label(ltext);
    return h.form('.form-inline', function() {
      h.select(".sel", function() {
        var s, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = selects.length; _i < _len; _i++) {
          s = selects[_i];
          _results.push(h.option({
            value: s
          }, selectnames[s]));
        }
        return _results;
      });
      h.raw("&nbsp;&nbsp;");
      h.label('.checkbox', function() {
        h.input(".cb", {
          type: 'checkbox'
        });
        return h.text(ctext);
      });
      h.raw("&nbsp;&nbsp;&nbsp;");
      return h.button(".btn.btn-primary.sub", {
        type: 'button'
      }, btext);
    });
  });

  info_layout = h.renderable(function(dict, keysdict) {
    return h.dl('.dl-horizontal', function() {
      var k, _results;
      _results = [];
      for (k in keysdict) {
        h.dt(keysdict[k]);
        _results.push(h.dd(dict[k]));
      }
      return _results;
    });
  });

  single_button = h.renderable(function(btext) {
    return h.button('.btn.btn-mini.btn-primary.yesbtn', {
      type: 'button'
    }, btext);
  });

  single_button_label = h.renderable(function(ltext, btext) {
    h.text(ltext);
    h.raw("&nbsp;&nbsp;");
    return h.button('.btn.btn-mini.btn-primary.yesbtn', {
      type: 'button'
    }, btext);
  });

  HideableView = (function(_super) {

    __extends(HideableView, _super);

    function HideableView() {
      var _this = this;
      this.render = function(htext) {
        return HideableView.prototype.render.apply(_this, arguments);
      };
      this.show = function() {
        return HideableView.prototype.show.apply(_this, arguments);
      };
      this.hide = function() {
        return HideableView.prototype.hide.apply(_this, arguments);
      };
      this.toggle = function() {
        return HideableView.prototype.toggle.apply(_this, arguments);
      };
      return HideableView.__super__.constructor.apply(this, arguments);
    }

    HideableView.prototype.tagName = 'div';

    HideableView.prototype.className = 'hideable';

    HideableView.prototype.events = {
      "click .hider": "toggle"
    };

    HideableView.prototype.initialize = function(options) {
      return this.widget = options.widget, this.state = options.state, this.theclass = options.theclass, options;
    };

    HideableView.prototype.toggle = function() {
      console.log("in toggle", this.state);
      if (this.state === 0) {
        this.show();
      } else {
        this.hide();
      }
      return false;
    };

    HideableView.prototype.hide = function() {
      console.log("HIDE");
      this.$('.hider .i').html('+');
      this.state = 0;
      return this.$(this.theclass).hide();
    };

    HideableView.prototype.show = function() {
      this.state = 1;
      this.$(this.theclass).show();
      return this.$('.hider .i').html('-&nbsp;');
    };

    HideableView.prototype.render = function(htext) {
      var content;
      content = h.render(function() {
        return h.span(function() {
          var href;
          h.raw(htext);
          h.raw("&nbsp;");
          return h.a(".hider", href = '#', function() {
            return h.span('.i.label.label-info', '+');
          });
        });
      });
      this.$el.append(content + this.widget);
      return this;
    };

    return HideableView;

  })(Backbone.View);

  $.fn.andFind = function(expr) {
    return this.find(expr).add(this.filter(expr));
  };

  HoverHelpDecoratorView = (function(_super) {

    __extends(HoverHelpDecoratorView, _super);

    function HoverHelpDecoratorView() {
      var _this = this;
      this.render = function() {
        return HoverHelpDecoratorView.prototype.render.apply(_this, arguments);
      };
      return HoverHelpDecoratorView.__super__.constructor.apply(this, arguments);
    }

    HoverHelpDecoratorView.prototype.initialize = function(options) {
      return this.titletext = options.titletext, this.helptext = options.helptext, this.position = options.position, this.htype = options.htype, options;
    };

    HoverHelpDecoratorView.prototype.render = function() {
      var optpo;
      optpo = {
        placement: this.position,
        trigger: 'hover',
        title: this.titletext,
        content: this.helptext
      };
      if (this.htype === "tooltip") {
        this.$el.andFind('.hoverhelp').tooltip(optpo);
      } else if (this.htype === "popover") {
        this.$el.andFind('.hoverhelp').popover(optpo);
      }
      return this;
    };

    return HoverHelpDecoratorView;

  })(Backbone.View);

  decohelp = function(el, helptext, htype, position) {
    var opt;
    opt = {
      titletext: "",
      helptext: helptext,
      position: position,
      htype: htype,
      el: el
    };
    return new HoverHelpDecoratorView(opt).render();
  };

  postalnote_form = h.renderable(function(btext, nrows) {
    if (nrows == null) {
      nrows = 2;
    }
    return h.div(".postalnote", function() {
      h.textarea(".controls.input-xlarge.txt", {
        type: "text",
        rows: '#{nrows}',
        placeholder: "Type a note"
      });
      h.label(".control-label", function() {
        h.input(".control.cb", {
          type: 'checkbox'
        });
        h.text("note private?");
        return h.raw("&nbsp;&nbsp;");
      });
      return h.button('.btn.btn-primary.btn-mini.notebtn', {
        type: 'button'
      }, btext);
    });
  });

  multiselect = h.renderable(function(daclass, choices, choicedict) {
    console.log("IN MULTISELECT");
    return h.select(".multi" + daclass, {
      multiple: "multiple"
    }, function() {
      var c, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = choices.length; _i < _len; _i++) {
        c = choices[_i];
        _results.push(h.option({
          value: c
        }, choicedict[c]));
      }
      return _results;
    });
  });

  postalall_form = h.renderable(function(nameable, itemtype, librarychoices) {
    var c, librarychoicedict, _i, _len;
    librarychoicedict = {};
    for (_i = 0, _len = librarychoices.length; _i < _len; _i++) {
      c = librarychoices[_i];
      librarychoicedict[c] = parse_fqin(c);
    }
    console.log("WEE", librarychoicedict);
    h.legend("Save all of these items");
    if (nameable) {
      h.div(".control-group", function() {
        h.label(".control-label", "Name this " + itemtype);
        return h.input(".controls", {
          type: text,
          placeholder: "Name for " + itemtype
        });
      });
    }
    h.div(".control-group", function() {
      h.label(".control-label", "Libraries");
      return multiselect("library", librarychoices, librarychoicedict);
    });
    h.button(".btn.btn-primary.post", {
      type: 'button'
    }, "Add");
    h.br();
    h.br();
    h.legend("Tag all of these items");
    h.p("Note: Tags will be automatically visible in the groups these items are posted to! Tags may not contain commas.");
    h.span("#alltags.tagls");
    h.br();
    return h.button(".btn.btn-inverse.done.pull-right", {
      type: 'button'
    }, "Save");
  });

  link = h.renderable(function(url, txt) {
    return h.raw("<a href=\"" + url + "\">" + txt + "</a>");
  });

  root.widgets = {
    postalall_form: postalall_form,
    postalnote_form: postalnote_form,
    single_button: single_button,
    single_button_label: single_button_label,
    inline_list: inline_list,
    regular_list: regular_list,
    info_layout: info_layout,
    one_col_table_partial: one_col_table_partial,
    one_col_table: one_col_table,
    $one_col_table: $one_col_table,
    table_from_dict_partial: table_from_dict_partial,
    table_from_dict: table_from_dict,
    $table_from_dict: $table_from_dict,
    table_from_dict_partial_many: table_from_dict_partial_many,
    table_from_dict_many: table_from_dict_many,
    $table_from_dict_many: $table_from_dict_many,
    one_submit: one_submit,
    dropdown_submit: dropdown_submit,
    one_submit_with_cb: one_submit_with_cb,
    dropdown_submit_with_cb: dropdown_submit_with_cb,
    link: link,
    HideableView: HideableView,
    HoverHelpDecoratorView: HoverHelpDecoratorView,
    decohelp: decohelp,
    two_submit: two_submit,
    editable_text: editable_text
  };

}).call(this);
