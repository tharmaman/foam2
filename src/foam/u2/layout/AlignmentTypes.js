foam.ENUM({
  package: 'foam.u2.layout',
  name: 'AlignmentTypes',

  documentation: `
      An enum for the alignment types of a ~row of columns~
  `,

  values: [
    { name: "START", label: 'Normal', },
    { name: "END", label: 'Reverse', },
    { name: "CENTER", label: 'Center', },
    { name: "SPACED_AROUND", label: 'Spaced Around' },
    { name: "SPACED_BETWEEN", label: 'Spaced Between' },
  ]
});
