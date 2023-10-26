var prefix = "fab";

{{#icons}}
var {{id}} = {
    prefix: "fab",
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
    icons as fab,
    prefix,
    {{#icons}}
    {{id}},
    {{/icons}}
};