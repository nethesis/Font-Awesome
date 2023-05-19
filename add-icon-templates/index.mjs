var prefix = "fal";

{{#icons}}
var {{id}} = {
    prefix: "fal",
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
    icons as fal,
    prefix,
    {{#icons}}
    {{id}},
    {{/icons}}
};