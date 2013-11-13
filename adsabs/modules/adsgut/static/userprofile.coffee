#we'll start with user profile funcs
root = exports ? this
$=jQuery
console.log "In userprofile"
h = teacup
w = widgets
prefix = "/adsgut"

parse_fqin = (fqin) -> 
    vals=fqin.split(':')
    return vals[-1+vals.length]

parse_userinfo = (data) ->
    publ= "adsgut/group:public"
    priv= data.user.nick+"/group:default"
    postablesin=data.user.postablesin
    postablesowned=data.user.postablesowned
    postablesinvitedto=data.user.postablesinvitedto

    userdict=
        groupsin: (e.fqpn for e in postablesin when e.ptype is 'group' and e.fqpn not in [publ, priv])
        groupsowned: (e.fqpn for e in postablesowned when e.ptype is 'group' and e.fqpn not in [publ, priv])
        groupsinvitedto: (e.fqpn for e in postablesinvitedto when e.ptype is 'group')
        userinfo:
            nick: data.user.nick
            email: data.user.adsid
            whenjoined: data.user.basic.whencreated
            name: data.user.basic.name

    userdict.librariesin = _.union((e.fqpn for e in postablesin when e.ptype is 'library'), userdict.groupsin)
    userdict.librariesowned =  _.union((e.fqpn for e in postablesowned when e.ptype is 'library'), userdict.groupsowned)
    userdict.librariesinvitedto = _.union((e.fqpn for e in postablesinvitedto when e.ptype is 'library'), userdict.groupsinvitedto)

        
    console.log "LIBGRPSSIN", userdict.librariesin

    return userdict

make_postable_link = h.renderable (fqpn, libmode) ->
    h.a href:prefix+"/postable/#{fqpn}/profile/html", ->
        h.text parse_fqin(fqpn)
    if libmode is true
        h.raw "&nbsp;("
        h.a href:prefix+"/postable/#{fqpn}/filter/html", ->
            h.text "items"
        h.raw ")"


class Postable extends Backbone.Model


class PostableView extends Backbone.View

    tagName: "tr"
       
    events:
        "click .yesbtn" : "clickedYes"
    
    initialize: (options) ->
        @libmode=options.libmode

    render: =>

        if @model.get('invite')
            @$el.html(w.table_from_dict_partial(make_postable_link(@model.get('fqpn'), false), w.single_button('Yes')))
        else
            content = w.one_col_table_partial(make_postable_link(@model.get('fqpn'), libmode=@libmode))
            console.log "CONTENT", content
            @$el.html(content)
        return this

    clickedYes: =>
        loc=window.location
        cback = (data) ->
            console.log "return data", data, loc
            window.location=location
        eback = (xhr, etext) ->
            console.log "ERROR", etext, loc
            #replace by a div alert from bootstrap
            alert 'Did not succeed'
        console.log("GGG",@model, @$el)
        useremail=@model.get('email')
        syncs.accept_invitation(useremail, @model.get('fqpn'), cback, eback)



class PostableList extends Backbone.Collection
    
    model: Postable

    initialize: (models, options) ->
        @listtype=options.listtype
        @invite=options.invite
        @nick=options.nick
        @email=options.email

#BUG: do we not need to destroy when we move things around?
#also invite isnt enough to have the event based interplay between 2 lists
class PostableListView extends Backbone.View
    tmap:
        in: "In"
        ow: "Owned"
        iv: "Invited"

    initialize: (options) ->
        @$el=options.$e_el
        @libmode=options.libmode

    render: =>
        views = (new PostableView(model:m, libmode:@libmode) for m in @collection.models)
        rendered = (v.render().el for v in views)
        console.log "RENDER1", rendered
        console.log "RENDER2"
        if @collection.invite
            $widget=w.$table_from_dict("Invitations", "Accept?", rendered)
        else
            $widget=w.$one_col_table(@tmap[@collection.listtype], rendered)
        @$el.append($widget)
        return this


root.userprofile=
    parse_userinfo: parse_userinfo
    Postable: Postable
    PostableList: PostableList
    PostableListView: PostableListView