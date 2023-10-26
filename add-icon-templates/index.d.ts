import { IconDefinition, IconLookup, IconName, IconPrefix, IconPack } from '@fortawesome/fontawesome-common-types';
export { IconDefinition, IconLookup, IconName, IconPrefix, IconPack } from '@fortawesome/fontawesome-common-types';
export const prefix: IconPrefix;
export const fab: IconPack;

{{#icons}}
export const {{id}}: IconDefinition;
{{/icons}}