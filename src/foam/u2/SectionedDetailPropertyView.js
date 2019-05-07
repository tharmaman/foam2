/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2',
  name: 'SectionedDetailPropertyView',
  extends: 'foam.u2.View',

  documentation: `
    View for one property of a SectionedDetailView.
  `,

  requires: [
    'foam.u2.layout.Rows',
    'foam.u2.layout.Cols',
    'foam.u2.layout.Col'
  ],

  properties: [
    'prop',
  ],

  methods: [
    function initE() {
      var self = this;
      this.SUPER();

      this.addClass(this.myClass())

        
        .add(this.slot(function(prop) {
        var errorSlot = self.slot(function(data, prop$validateObj){
          return data && prop$validateObj && data.slot(prop$validateObj);
        });

        /**
         * FIXME: When you uncomment line 43 and line 49 the addition of columns breaks the layout, the 
         * self.Rows does not get rendered and the prop.label$ gets clobbered and does not appear
         */ 
        return self.E()
          .start(self.Rows)
            // .start(self.Cols)
            .add(prop.label$)
              // .start(self.Col, { flex: 1 })
                .add(prop)
              // .end()
              .attrs({ title: prop.help$ })
            // .end()
            .add(errorSlot.map((s) => {
              return self.E().add(s);
            }))
      }));
    }
  ]
});
