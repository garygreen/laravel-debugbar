var RouteWidget = PhpDebugBar.Widget.extend({

    tagName: 'div', // optional as 'div' is the default

    className: 'route-widget',

    render: function() {
        debugger;
        this.bindAttr('data', this.$el);
    }

});
