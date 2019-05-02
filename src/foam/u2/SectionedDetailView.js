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
    'foam.u2.DetailView'
  ],

  properties: [
    {
      class: 'Class',
      name: 'of',
      expression: function(data) {
        return data.cls_;
      }
    },
    {
      class: 'FObjectArray',
      of: 'foam.layout.Section',
      name: 'sections',
      factory: function() {
        var of = this.of;
        // expression: function(of) { // We should fix this!
        return of.getAxiomsByClass(this.SectionAxiom)
          .map(sectionAxiom => this.Section.create({
            isAvailable: sectionAxiom.isAvailable,
            detailViewArgs: {
              title: sectionAxiom.label,
              properties: of.getAxiomsByClass(this.Property)
                .filter(p => p.section == sectionAxiom.name)
                .filter(p => ! p.hidden),
              actions: of.getAxiomsByClass(this.Action)
                .filter(a => a.section == sectionAxiom.name)
            }
          })).concat(this.Section.create({
            detailViewArgs: {
              properties: of.getAxiomsByClass(this.Property)
                .filter(p => ! p.section)
                .filter(p => ! p.hidden),
              actions: of.getAxiomsByClass(this.Action)
                .filter(a => ! a.section)
            }
          }));
      }
    }
  ],
  methods: [
    function initE() {
      var self = this;
      this.SUPER();
      this
        .add(this.slot(function(sections, data) {
          return self.E()
            .forEach(sections, function(s) {
              s = s.clone();
              s.detailViewArgs['data'] = data;
              this.tag(self.DetailView, s.detailViewArgs);
            });
        }));
    }
  ]
});