/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2',
  name: 'SectionedDetailView',
  extends: 'foam.u2.View',

  requires: [
    'foam.core.Action',
    'foam.core.Property',
    'foam.layout.Section',
    'foam.layout.SectionAxiom',
    'foam.u2.layout.Rows',
    'foam.u2.DetailView',
  ],

  properties: [
    {
      class: 'Class',
      name: 'of',
      expression: function(data) {
        return data.cls_;
      }
    },
    // DONE: Respect order
    {
      class: 'FObjectArray',
      of: 'foam.layout.Section',
      name: 'sections',
      factory: function() {
        var of = this.of;
        // expression: function(of) { // We should fix this!
        
         var sectionAxioms = of.getAxiomsByClass(this.SectionAxiom)
          .forEach(sectionAxiom => this.Section.create({
            isAvailable: sectionAxiom.isAvailable,
            order: sectionAxiom.order,
            sectionedDetailViewArgs: {
              title: sectionAxiom.label,
              properties: of.getAxiomsByClass(this.Property)
                .filter(p => p.section == sectionAxiom.name)
                .filter(p => ! p.hidden),
              actions: of.getAxiomsByClass(this.Action)
                .filter(a => a.section == sectionAxiom.name)
            }
          }))

          // need to abide by the Order property and sort in increasing order
          var orderedSectionAxioms = sectionAxioms.sort((a,b) => a.order -  b.order);
          
          /**
           * We are gathering all the unsectioned properties 
           * and placing them in their own section at the  end
           */
          orderedSectionAxioms.concat(this.Section.create({
            sectionedDetailViewArgs: {
              title: 'Unsectioned Properties',
              properties: of.getAxiomsByClass(this.Property)
                .filter(p => ! p.section)
                .filter(p => ! p.hidden),
              actions: of.getAxiomsByClass(this.Action)
                .filter(a => ! a.section)
            }
          }));

          return orderedSectionAxioms;
      }
    }
  ],
  methods: [
    // DONE: use row layout here each section is a row
    // TODO: Within each section is a row of SectionedDetailPropertyViews
    function initE() {
      var self = this;
      this.SUPER();
      this
        .add(this.slot(function(sections, data) {
          return self.E()
            .start(this.Rows)
              .forEach(sections, function(s) {
                s = s.clone();
                s.detailViewArgs['data'] = data

                this.start(this.Rows,  { border: foam.u2.borders.CardBorder })
                  .forEach(s.properties,  function(p) {
                    this.add()
                  })
                .end()
              })
            .end()
        }));
    }
  ]
});