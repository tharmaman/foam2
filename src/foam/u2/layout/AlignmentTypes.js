foam.ENUM({
  package: 'foam.u2.layout',
  name: 'RowAlignmentTypes',

  documentation: `
      An enum for basic row alignment types
  `,

  values: [
    { name: "START", label: 'Normal', },
    { name: "END", label: 'Reverse', },
    { name: "CENTER", label: 'Center', },
    { name: "SPACED_AROUND", label: 'Spaced Around' },
    { name: "SPACED_BETWEEN", label: 'Spaced Between' },
  ]
});
