foam.CLASS({
  package: 'foam.u2.layout',
  name: 'RowLayout',
  extends: 'foam.u2.Element',

  documentation: `
    A layout for a group of rows layed out vertically.
    Was implemented to enforce display:block; to make sure elements
    get rendered vertically.
  `,

  methods: [
    function add() {
      return this.SUPER.apply(this, arguments);
    },
    function initE() {
      this.SUPER();
      this.style({ 'display': 'block;' }) // more specificity should enforce ruling
    }
  ],
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'ColumnLayout',
  extends: 'foam.u2.Element',

  documentation: `
    A layout for a group of columns layed out horizontally.
    A row can have numerous ColumnLayout elements.
  `,

  requires: [
    'foam.u2.layout.Col',
    'foam.u2.layout.AlignmentTypes',
  ],

  css: `
    ^ {
      display: flex;
      width: 100%;
    }
  `,

  properties: [
    {
      class: 'Map',
      name: 'defaultConfig'
    },
    {
      class: 'Enum',
      of: 'foam.u2.layout.AlignmentTypes',
      name: 'horizontalAlignmentTypes',
      documentation: `
        An enum on horizontal alignment types
        (i.e. on the web, this follows the 'justify-content' CSS property)
      `,
      value: foam.u2.layout.AlignmentTypes.START,
    },
    {
      class: 'String',
      name: 'horizontalAlignmentValue',
      documentation: `
        To render the proper CSS for web based on the alignment types enum.
        Will later be used to also account for mobile.
      `,
      expression: function(horizontalAlignmentTypes){
        switch(horizontalAlignmentTypes){
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
    function add() {

      /**
       * Here we are checking for two cases
       * 1. If a Col element is added (i.e. with .start(self.Col, { flex: 0.5 }), then call the super on it
       * 2. If another element is added, then wrap it in a column with default configuration
       */
      [...arguments].forEach(value => {
        if ( this.Col.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          this.start(this.Col, this.defaultConfig).add(value).end();
        }
      })
      return this;
    },

    function initE() {
      this.SUPER();
      this.addClass(this.myClass()).style({ 'justify-content': this.horizontalAlignmentValue$});
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Col',
  extends: 'foam.u2.Element',

  documentation: `
    An individual column element within a group of columns.
    Can be configured by default in ColumnLayout through defaultConfig
    Or instantiated for more customized configuration by defining it's properties
  `,

  properties: [
    {
      class: 'Float',
      name: 'flex',
      documentation: `
        Define how much this column will grow (take up space) relative to the other columns
        within column layout
      `,
    },
  ],
  
  methods: [
    function initE() {
      this.SUPER();

      // we can make a map here based on the values
      // we can add to this list as we go on
      // const styles = {
      //   'flex-grow': this.flex$,
      // }

      // this.style(styles)
    }
  ]
});