# MultipleSelect

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/multiple-select.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for making a selection from a list of options.

## Getting started

````
npm install @cmds/multiple-select --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| alignLeft | Boolean |  | Whether the dropdown should align left |
| value | String | ✓ | Selection of option id's |
| options | Boolean | ✓ | List of options to choose from. |
| onChange | Function | ✓ | Triggers when the selection value changes: `({id: string, value: string})` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/multiple-select.svg
[npm]: https://www.npmjs.org/package/@cmds/multiple-select
