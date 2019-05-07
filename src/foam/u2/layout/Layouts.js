foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Rows',
  extends: 'foam.u2.Element',

  requires: [
    'foam.u2.layout.Row',
  ],

  documentation: `
    A layout for a group of rows layed out vertically.
  `,

  methods: [
    function add() {
      /**
       * ! Trying to add a border like with Col breaks the row, we can look into later
       * ! As card rows aren't probable right now
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

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Row',
  extends: 'foam.u2.Element',

  documentation: `
    An individual column row within a group of rows.
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
    A layout for a group of columns layed out horizontally.
    A row or div can contain numerous Cols elements
  `,

  requires: [
    'foam.u2.layout.Col',
    'foam.u2.layout.AlignmentTypes',
  ],

  css: `
    ^ {
      display: flex;
    }
  `,

  properties: [
    {
      class: 'Map',
      name: 'defaultConfig'
    },
    {
      class: 'foam.u2.ViewSpec',
      name: 'border',
      value: { class: 'foam.u2.borders.NullBorder' }
    },
    {
      class: 'Enum',
      of: 'foam.u2.layout.AlignmentTypes',
      name: 'horizontalAlignmentTypes',
      documentation: `
        An enum on horizontal alignment types
        (i.e. on the web, this follows the 'justify-content' CSS property)
      `,
      value: null,
    },
    {
      class: 'String',
      name: 'horizontalAlignmentValue',
      documentation: `
        To render the proper CSS for web based on the alignment types enum.
        Will later be used to also account for mobile.

        NOTE: Added support for now to hedge for the future, but we will
        use the direct flex columning as shown in foam.comics.v2.Comics for now
      `,
      expression: function(horizontalAlignmentTypes$webFlexProp){
        return horizontalAlignmentTypes$webFlexProp;
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
          // conditionally add isAlignmentAdded to defaultConfig if horizontal alignment was specified
          if (this.horizontalAlignmentTypes){
            this.defaultConfig.isAlignmentActivated = true;
          }

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

      // if horizontal alignment was specified
      if (this.horizontalAlignmentValue) {
        this.addClass(this.myClass())
          .style({ 'justify-content': this.horizontalAlignmentValue$ });
      } else {
        this.addClass(this.myClass())
      }
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
        Define how much this column will grow (take up space) relative to the other columns within the Cols element
      `,
      expression: function(isAlignmentActivated){
        return isAlignmentActivated ? 0 : 1;
      }
    },
    {
      class: 'Boolean',
      name: 'isAlignmentActivated',
      documentation: `
        Basically automatically checks if a horizontalAlignmentTypes enum has been
        passed, will therein disable the individual Col flex default of 1 and will
        apply justify-content (on the web) to the Cols element instead of modifying
        each individual Col

        NOTE: As mentioned above, Added support for now to hedge for the future, but we will use the direct flex columning as shown in foam.comics.v2.Comics for now
      `,
      value: false,
    }
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