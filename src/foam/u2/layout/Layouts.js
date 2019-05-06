foam.CLASS({
  package: 'foam.u2.layout',
  name: 'RowLayout',
  extends: 'foam.u2.Element',

  methods: [
    function add() {
      return this.SUPER.apply(this, arguments);
    },
    function initE() {
      this.SUPER();
      this.style({ 'display': 'block;' }) // more specificity should enforce
    }
  ],
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'ColumnLayout',
  extends: 'foam.u2.Element',
  requires: [
    'foam.u2.layout.Col'
  ],
  properties: [
    {
      class: 'Map',
      name: 'defaultConfig'
    }
  ],
  css: `
    ^ {
      display: flex;
    }
  `,
  methods: [
    function add() {
      [...arguments].forEach(value => {
        console.log(value);
        if ( this.Col.isInstance(value) ) {
          console.log('inside is instance');
          console.log(value);
          this.SUPER(value);
        }
        else {
          console.log('inside else is instance');
          this.start(this.Col, this.defaultConfig).add(value).end();
        }
      })
      return this;
    },

    function initE() {
      this.SUPER();
      this.addClass(this.myClass());
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Col',
  extends: 'foam.u2.Element',

  requires: [
    'foam.u2.layout.AlignmentTypes',
  ],

  properties: [
    {
      class: 'Float',
      name: 'flex',
      value: 1,
    },
    {
      class: 'String',
      name: 'alignmentValue',
      expression: function(rowAlignment){
        switch(rowAlignment){
          case foam.u2.layout.AlignmentTypes.START:
            return 'flex-start';
          case foam.u2.layout.AlignmentTypes.END:
            return 'flex-end';
          case foam.u2.layout.AlignmentTypes.CENTER:
            return 'center';
          case foam.u2.layout.AlignmentTypes.SPACED_AROUND:
            return 'space-around';
          case foam.u2.layout.AlignmentTypes.SPACED_BETWEEN:
            return 'space-between';
          default:
            return 'flex-start';
        }
      }
    }
  ],
  methods: [
    function initE() {
      this.SUPER();

      console.log(this);
      console.log(this.flex$);
      console.log(this.)

      // we can make a map here based on the values

      this.style({ 'flex-grow': this.flex$ })
    }
  ]
});