// Generated by CoffeeScript 1.6.1
(function() {
  var $, ItemView, ItemsFilterView, ItemsView, cdict, h, root, w,
    _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  $ = jQuery;

  console.log("In groupprofile");

  h = teacup;

  w = widgets;

  cdict = function(fqin, l) {
    var d;
    d = {};
    d[fqin] = l;
    return d;
  };

  ItemView = (function(_super) {

    __extends(ItemView, _super);

    function ItemView() {
      var _this = this;
      this.submitNote = function() {
        return ItemView.prototype.submitNote.apply(_this, arguments);
      };
      this.render = function() {
        return ItemView.prototype.render.apply(_this, arguments);
      };
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.tagName = 'div';

    ItemView.prototype.className = 'control-group postalnote';

    ItemView.prototype.events = {
      "click .notebtn": "submitNote"
    };

    ItemView.prototype.initialize = function(options) {
      this.stags = options.stags, this.notes = options.notes, this.item = options.item, this.postings = options.postings, this.memberable = options.memberable;
      return console.log("PVIN", this.memberable);
    };

    ItemView.prototype.render = function() {
      var additional, adslocation, content, fqin, htmlstring, url;
      adslocation = "http://labs.adsabs.harvard.edu/adsabs/abs/";
      url = adslocation + ("" + this.item.basic.name);
      htmlstring = "<a href=\"" + url + "\">" + this.item.basic.name + "</a><br/>";
      fqin = this.item.basic.fqin;
      content = '';
      content = content + htmlstring;
      additional = format_stuff(fqin, this.memberable, cdict(fqin, this.stags), cdict(fqin, this.postings), cdict(fqin, this.notes));
      content = content + additional;
      content = content + w.postalnote_form("make note");
      this.$el.append(content);
      return this;
    };

    ItemView.prototype.submitNote = function() {
      var cback, eback, item, loc, notetext;
      console.log("IN SUBMIT NOTE");
      item = this.item.basic.fqin;
      notetext = this.$('.txt').val();
      console.log(notetext);
      loc = window.location;
      cback = function(data) {
        console.log("return data", data, loc);
        return window.location = location;
      };
      eback = function(xhr, etext) {
        console.log("ERROR", etext, loc);
        return alert('Did not succeed');
      };
      syncs.submit_note(item, notetext, cback, eback);
      return false;
    };

    return ItemView;

  })(Backbone.View);

  ItemsView = (function(_super) {

    __extends(ItemsView, _super);

    function ItemsView() {
      var _this = this;
      this.submitTags = function() {
        return ItemsView.prototype.submitTags.apply(_this, arguments);
      };
      this.submitPosts = function() {
        return ItemsView.prototype.submitPosts.apply(_this, arguments);
      };
      this.iDone = function() {
        return ItemsView.prototype.iDone.apply(_this, arguments);
      };
      this.render = function() {
        return ItemsView.prototype.render.apply(_this, arguments);
      };
      return ItemsView.__super__.constructor.apply(this, arguments);
    }

    ItemsView.prototype.events = {
      "click .post": "submitPosts",
      "click .tag": "submitTags",
      "click .done": "iDone"
    };

    ItemsView.prototype.initialize = function(options) {
      this.stags = options.stags, this.notes = options.notes, this.$el = options.$el, this.postings = options.postings, this.memberable = options.memberable, this.items = options.items, this.nameable = options.nameable, this.itemtype = options.itemtype;
      return console.log("ITEMS", this.items);
    };

    ItemsView.prototype.render = function() {
      var $ctrls, $lister, cback, eback, fqin, i, ins, v, _i, _len, _ref;
      $lister = this.$('.items');
      $ctrls = this.$('.ctrls');
      _ref = this.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        fqin = i.basic.fqin;
        ins = {
          stags: this.stags[fqin],
          notes: this.notes[fqin],
          postings: this.postings[fqin],
          item: i,
          memberable: this.memberable
        };
        console.log("INS", ins);
        v = new ItemView(ins);
        $lister.append(v.render().el);
      }
      eback = function(xhr, etext) {
        console.log("ERROR", etext, loc);
        return alert('Did not succeed');
      };
      cback = function(data) {
        console.log(data);
        return $ctrls.append(w.postalall_form(this.nameable, this.itemtype, data.groups, data.libraries));
      };
      syncs.get_postables(this.memberable, cback, eback);
      return this;
    };

    ItemsView.prototype.iDone = function() {
      var cback, eback, loc;
      loc = window.location;
      cback = function(data) {
        console.log("return data", data, loc);
        return window.location = location;
      };
      eback = function(xhr, etext) {
        console.log("ERROR", etext, loc);
        return alert('Did not succeed');
      };
      syncs.save_items(this.items, cback, eback);
      window.close();
      return false;
    };

    ItemsView.prototype.submitPosts = function() {
      var cback, eback, groups, libs, loc, makepublic, postables;
      libs = this.$('.multilibrary').val();
      if (libs === null) {
        libs = [];
      }
      groups = this.$('.multigroup').val();
      if (groups === null) {
        groups = [];
      }
      postables = libs.concat(groups);
      makepublic = this.$('.makepublic').is(':checked');
      console.log("MAKEPUBLIC", makepublic);
      if (makepublic) {
        postables = postables.concat(['adsgut/group:public']);
      }
      loc = window.location;
      cback = function(data) {
        console.log("return data", data, loc);
        return window.location = location;
      };
      eback = function(xhr, etext) {
        console.log("ERROR", etext, loc);
        return alert('Did not succeed');
      };
      syncs.submit_posts(this.items, postables, cback, eback);
      return false;
    };

    ItemsView.prototype.submitTags = function() {
      var cback, e, eback, loc, tags, tagstring;
      tagstring = this.$('.tagsinput').val();
      console.log("TAGSTRING", tagstring);
      if (tagstring === "") {
        console.log("a");
        tags = [];
      } else {
        console.log("b", (function() {
          var _i, _len, _ref, _results;
          _ref = tagstring.split(',');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            _results.push(e);
          }
          return _results;
        })());
        tags = (function() {
          var _i, _len, _ref, _results;
          _ref = tagstring.split(',');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            _results.push(e.trim());
          }
          return _results;
        })();
        tags = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = tags.length; _i < _len; _i++) {
            e = tags[_i];
            if (e !== "") {
              _results.push(e);
            }
          }
          return _results;
        })();
      }
      loc = window.location;
      cback = function(data) {
        console.log("return data", data, loc);
        return window.location = location;
      };
      eback = function(xhr, etext) {
        console.log("ERROR", etext, loc);
        return alert('Did not succeed');
      };
      syncs.submit_tags(this.items, tags, cback, eback);
      return false;
    };

    return ItemsView;

  })(Backbone.View);

  ItemsFilterView = (function(_super) {

    __extends(ItemsFilterView, _super);

    function ItemsFilterView() {
      var _this = this;
      this.render = function() {
        return ItemsFilterView.prototype.render.apply(_this, arguments);
      };
      return ItemsFilterView.__super__.constructor.apply(this, arguments);
    }

    ItemsFilterView.prototype.initialize = function(options) {
      this.stags = options.stags, this.notes = options.notes, this.$el = options.$el, this.postings = options.postings, this.memberable = options.memberable, this.items = options.items, this.nameable = options.nameable, this.itemtype = options.itemtype;
      return console.log("ITEMS", this.items);
    };

    ItemsFilterView.prototype.render = function() {
      var fqin, i, ins, v, _i, _len, _ref;
      console.log("EL", this.$el);
      _ref = this.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        fqin = i.basic.fqin;
        ins = {
          stags: this.stags[fqin],
          notes: this.notes[fqin],
          postings: this.postings[fqin],
          item: i,
          memberable: this.memberable
        };
        console.log("INS", ins);
        v = new ItemView(ins);
        this.$el.append(v.render().el);
      }
      return this;
    };

    return ItemsFilterView;

  })(Backbone.View);

  root.itemsdo = {
    ItemView: ItemView,
    ItemsView: ItemsView,
    ItemsFilterView: ItemsFilterView
  };

}).call(this);
