foam.ENUM({
  package: 'foam.u2.layout',
  name: 'AlignmentTypes',

  documentation: `
      An enum for the alignment types of a ~row of columns~
  `,

  values: [
    { name: "START", label: 'Normal', webFlexProp: 'flex-start' },
    { name: "END", label: 'Reverse', webFlexProp: 'flex-end' },
    { name: "CENTER", label: 'Center', webFlexProp: 'center' },
    { name: "SPACED_AROUND", label: 'Spaced Around', webFlexProp: 'space-around' },
    { name: "SPACED_BETWEEN", label: 'Spaced Between', webFlexProp: 'space-between' },
  ],

  properties:  [
    {
      class: 'String',
      name: 'webFlexProp',
      value: ''
    },
  ]
});
