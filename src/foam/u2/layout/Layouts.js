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

  /**
   * NOTE: For here we set the flex-direction to column because each Row
   * is laid out VERTICALLY 
   */
  css: `
    ^ {
      display: flex;
      flex-direction: column;
    }
  `,

  properties: [
    {
      class: 'Map',
      name: 'defaultChildConfig',
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
      `,
      expression: function(alignmentType$webFlexProp){
        return alignmentType$webFlexProp;
      }
    }
  ],

  methods: [
    /**
     * This expects all child elements to be instances of foam.u2.layout.Col 
     * so we override the add method to enforce this.
     */
    function add() {
      [...arguments].forEach(value => {
        if ( this.Row.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          this
            .start(this.Row, this.defaultChildConfig)
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
  name: 'Row',
  extends: 'foam.u2.Element',

  documentation: `
    An individual row element within a group of rows.
  `,

  properties: [
    {
      class: 'Float',
      name: 'flex',
      documentation: `
        Defines how much this specific column will grow (take up space) relative 
        to the other Row elements within its Rows group
      `,
      value: 0
    },
  ],

  methods: [
    function initE() {
      this.SUPER();

      // we can add to this list as we go on when we have more style properties to consider
      const styles = {
        'flex-grow': this.flex$,
      }

      this.style(styles);
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
      `,
      expression: function(alignmentType$webFlexProp){
        return alignmentType$webFlexProp;
      }
    }
  ],

  methods: [
    /**
     * This expects all child elements to be instances of foam.u2.layout.Col 
     * so we override the add method to enforce this.
     */
    function add() {
      [...arguments].forEach(value => {
        if ( this.Col.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          console.log(this.defaultChildConfig);
          this
            .start(this.Col, this.defaultChildConfig)
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
        to the other Col elements within its Cols group
      `,
    },
  ],
  
  methods: [
    function initE() {
      console.log(this);

      this.SUPER();

      // we can add to this list as we go on when we have more style properties to consider
      const styles = {
        'flex-grow': this.flex$,
      }

      console.log(this.flex);

      console.log(styles);

      this.style(styles);
    },
  ]
});