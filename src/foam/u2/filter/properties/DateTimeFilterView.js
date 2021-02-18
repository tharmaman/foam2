/**
 * @license
 * Copyright 2021 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2.filter.properties',
  name: 'DateTimeFilterView',
  extends: 'foam.u2.filter.properties.DateFilterView',

  documentation: 'A SearchView for properties of type DateTime.',

  css: `
    ^ {
      padding: 24px 16px;
      box-sizing: border-box;
      min-width: 214px;
    }

    ^ .foam-u2-tag-Select {
      width: 100%;
      height: 36px;

      border-radius: 3px;
      border: solid 1px #cbcfd4;
      background-color: #ffffff;
    }

    ^ .foam-u2-DateTimeView {
      width: 100%;
      height: 36px;

      margin-top: 16px;

      border-radius: 3px;
      border: solid 1px #cbcfd4;
      background-color: #ffffff;
    }
  `,

  properties: [
    {
      class: 'DateTime',
      name: 'date1',
      documentation: `
        A date selectable by the user. Used as the second argument to the
        predicate generated by this view.
      `,
    },
    {
      class: 'DateTime',
      name: 'date2',
      documentation: `
        A date selectable by the user. Used as the second argument to the
        predicate generated by this view.
      `,
      preSet: function(o, n) {
        if ( this.isSetFromPredicate )
          return n;
        return new Date(n);
      }
    },
  ]
});
