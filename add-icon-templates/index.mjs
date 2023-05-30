var prefix = "fas";

{{#icons}}
var {{id}} = {
    prefix: "fas",
    iconName: "{{iconName}}",
    icon: {{{icon}}},
};
{{/icons}}

var icons = {
    {{#icons}}
    {{id}}: {{id}},
    {{/icons}}
};

export {
    icons as fas,
    prefix,
    {{#icons}}
    {{id}},
    {{/icons}}
};