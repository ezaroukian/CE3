define_ibex_controller({
    name: "MySeparator",
    jqueryWidget: {
        _init: function () {
            //this.options.transfer = null; // Remove 'click to continue message'.         
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "SeparatorHTML", this.options,
                    "Question", this.options,
					"Message", this.options,
                ]
            });
        }
    },

    properties: { }
});