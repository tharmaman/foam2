foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Rows',
  extends: 'foam.u2.Element',

  requires: [
    'foam.u2.layout.Row',
  ],

  documentation: `
    The parent for a group of rows (laid out vertically)
  `,

  methods: [
    function add() {
      /**
       * FIXME: Breaks as it becomes one whole row element
       * Here we are checking for two cases
       * 1. If a Row element is added, then call the super on it
       * 2. If another element is added, then wrap it in a Row element with default configuration
       */ 
      [...arguments].forEach(value => {
        if ( this.Row.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          this
            .start(this.Row)
                .add(value)
            .end();
        }
      })
      return this;
    },

    function initE() {
      this.SUPER();
    }
  ]
});

// FIXME: Convert this to flex just like a col
foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Row',
  extends: 'foam.u2.Element',

  documentation: `
    An individual row element within a group of rows.
  `,

  methods: [
    function initE() {
      this.style({ 'display': 'block' }) // more specificity should enforce ruling
    }
  ],
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Cols',
  extends: 'foam.u2.Element',

  documentation: `
    The parent for a group of columns (laid out horizontally)
  `,

  requires: [
    'foam.u2.layout.Col',
  ],

  css: `
    ^ {
      display: flex;
    }
  `,

  properties: [
    {
      class: 'Map',
      name: 'defaultChildConfig'
    },
    {
      class: 'foam.u2.ViewSpec',
      name: 'border',
      value: { class: 'foam.u2.borders.NullBorder' }
    },
    {
      class: 'Enum',
      of: 'foam.u2.layout.AlignmentType',
      name: 'alignmentType',
      value: foam.u2.layout.AlignmentType.SPACE_BETWEEN,
    },
    {
      class: 'String',
      name: 'alignmentValue',
      documentation: `
        To render the proper CSS for web based on the alignment types enum.
        Will later be used to also account for mobile.

        NOTE: Added support for now to hedge for the future, but we will
        use the direct flex columning as shown in foam.comics.v2.Comics for now
      `,
      expression: function(alignmentType$webFlexProp){
        return alignmentType$webFlexProp;
      }
    }
  ],

  methods: [
    function add() {

      /**
       * Here we are checking for two cases
       * 1. If a Col element is added, then call the super on it
       * 2. If another element is added, then wrap it in a Col element with default configuration
       */
      [...arguments].forEach(value => {
        if ( this.Col.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          this
            .start(this.Col, this.defaultConfig)
              .start(this.border)
                .add(value)
              .end()
            .end();
        }
      })
      return this;
    },

    function initE() {
      this.SUPER();

      this.addClass(this.myClass())
        .style({ 'justify-content': this.alignmentValue$ });
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Col',
  extends: 'foam.u2.Element',

  documentation: `
    An individual column element within a group of columns.
  `,

  properties: [
    {
      class: 'Float',
      name: 'flex',
      documentation: `
        Defines how much this specific column will grow (take up space) relative 
        to the other Col elements in the Cols group
      `,
      value: 0
    },
  ],
  
  methods: [
    function initE() {
      this.SUPER();

      // we can make a map here based on the values
      // we can add to this list as we go on
      const styles = {
        'flex-grow': this.flex$,
      }

      this.style(styles);
    },
  ]
});