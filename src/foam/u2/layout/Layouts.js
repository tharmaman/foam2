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

  properties: [
    {
      class: 'Float',
      name: 'flex'
    },
    {
      class: 'String',
      name: 'alignment'
    },
  ],
  methods: [
    function initE() {
      this.SUPER();

      console.log(this);
      console.log(this.flex$);

      // we can make a map here based on the values

      this.style({ 'flex-grow': this.flex$ })
    }
  ]
});