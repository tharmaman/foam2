foam.CLASS({
  package: 'foam.u2.layout',
  name: 'RowLayout',
  extends: 'foam.u2.Element',

  methods: [
    function add() {
      console.log('Adding row!');
      return this.SUPER.apply(this, arguments);
    },

    function addRow(s) {
      console.log('Adding row!');
      return this.SUPER.apply(this, arguments);
    },

    function initE() {
      this.SUPER();

      this.style({ 'background-color': 'red' })
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
        if ( this.Col.isInstance(value) ) {
          this.SUPER(value);
        }
        else this.start(this.Col, this.defaultConfig).add(value).end();
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
  properties: [
    {
      class: 'Float',
      name: 'flex'
    }
  ],
  methods: [
    function initE() {
      this.SUPER();
      this.style({ 'flex-grow': this.flex$ })
    }
  ]
});