/**
* @license
* Copyright 2020 The FOAM Authors. All Rights Reserved.
* http://www.apache.org/licenses/LICENSE-2.0
*/

foam.CLASS({
  package: 'foam.u2.filter.advanced',
  name: 'AdvancedFilterView',
  extends: 'foam.u2.View',

  requires: [
    'foam.u2.ModalHeader',
    'foam.u2.filter.advanced.CriteriaView'
  ],

  imports: [
    'closeDialog'
  ],

  css: `
    ^ {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    ^container-advanced {
      flex: 1;
      padding: 16px 8px;

      overflow-y: scroll;
    }

    ^container-handle {
      height: 40px;

      padding: 0 16px;
      box-sizing: border-box;

      border: 1px solid /*%GREY4%*/ #e7eaec;
      border-radius: 5px;

      display: flex;
      align-items: center;

      margin-top: 8px;
    }

    ^container-handle:first-child {
      margin: 0;
    }

    ^container-handle:hover {
      cursor: pointer;
    }

    ^handle-title {
      flex: 1;
      margin: 0;
    }

    ^handle-remove {
      margin: 0;
      padding: 0 8px;
      color: red;
    }

    ^handle-remove:hover {
      cursor: pointer;
      color: darkred;
    }

    ^ .foam-u2-filter-advanced-CriteriaView {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.24s ease-in-out;
    }

    ^isOpen {
      max-height: 1000px !important;
    }

    ^ .foam-u2-ActionView-addCriteria {
      width: 100%;

      margin-top: 16px;
      padding: 0;
    }

    ^ .foam-u2-ActionView-tertiary {
      color: #4D7AF7;
    }

    ^ .foam-u2-ActionView-tertiary:hover {
      color: #233E8B;
    }

    ^container-footer {
      display: flex;
      justify-content: flex-end;

      padding: 8px;
    }
  `,

  messages: [
    { name: 'TITLE_HEADER', message: 'Advanced Filters' },
    { name: 'LABEL_CRITERIA', message: 'Criteria'},
    { name: 'LABEL_REMOVE', message: 'Remove'}
  ],

  properties: [
    {
      name: 'filterController',
      documentation: 'To be passed in from the FilterView'
    },
    {
      class: 'Map',
      name: 'criterias',
      documentation: 'Each criteria to be treated with an OR',
      factory: function() {
        return {
          0: {}
        };
      }
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      documentation: 'DAO this filter is filtering on, passed by FilterView'
    },
    {
      class: 'Long',
      name: 'isOpenIndex',
      value: 0
    }
  ],

  methods: [
    function initE() {
      var self = this;
      this.addClass(this.myClass())
        .start(this.ModalHeader.create({
          title: this.TITLE_HEADER
        })).end()
        .add(this.slot(function(criterias) {
          var keys = Object.keys(criterias);
          return this.E().addClass(self.myClass('container-advanced'))
            .forEach(keys, function(key, index) {
              var criteria = criterias[key];
              this.start().addClass(self.myClass('container-handle'))
                .on('click', () => { self.toggleDrawer(key); })
                .start('p').addClass(self.myClass('handle-title')).add(`${self.LABEL_CRITERIA} ${Number.parseInt(key) + 1}`).end()
                .start('p').addClass(self.myClass('handle-remove'))
                  .on('click', () => { self.removeCriteria(key); })
                  .add(`${self.LABEL_REMOVE}`)
                .end()
                .add(self.slot(function(isOpenIndex) {
                  var iconPath = self.getIconPath(key);
                  return this.E().start({ class: 'foam.u2.tag.Image', data: iconPath}).end()
                }))
              .end()

              .start(self.CriteriaView.create({
                filterController$: self.filterController$
              })).enableClass(
                self.myClass('isOpen'),
                self.slot(function(isOpenIndex){ return key == isOpenIndex; })
              ).end();
            })
            // TODO: Style button
            .startContext({data: self})
              .start(self.ADD_CRITERIA, { buttonStyle: 'TERTIARY' }).end()
            .endContext();
        }))
        .start().addClass(this.myClass('container-footer'))
          .startContext({ data: this })
            .start(this.CLEAR_ALL).end()
            .start(this.FILTER).end()
          .endContext()
        .end();

    },

    function getIconPath(key) {
      return key == this.isOpenIndex ? 'images/expand-less.svg' : 'images/expand-more.svg';
    }
  ],

  actions: [
    {
      name: 'addCriteria',
      label: 'Add another criteria',
      code: function(X) {
        var keys = Object.keys(this.criterias);
        var newIndex = Number.parseInt(keys[keys.length - 1]) + 1;
        this.criterias$set(newIndex, {});
        this.isOpenIndex = newIndex;
      }
    },
    {
      name: 'closeModal',
      label: 'Cancel',
      code: function(X) {
        X.closeDialog();
      }
    },
    {
      name: 'clearAll',
      label: 'Clear All',
      code: function(X) {
        this.criterias = {
          0: {}
        };
        this.isOpenIndex = 0;
        console.log('TODO: Remove all local predicate changes')
      }
    },
    {
      name: 'filter',
      label: 'Filter',
      isEnabled: function(criterias) {
        console.log('TODO: Check if the criteria is filtering');
        return criterias && Object.keys(criterias).length > 0;
      },
      code: function(X) {
        console.log('TODO: Apply advanced mode and create predicates');
        this.filterController.isAdvanced = true;
        X.closeDialog();
      }
    }
  ],

  listeners: [
    {
      name: 'toggleDrawer',
      code: function(key) {
        if ( key == this.isOpenIndex ) {
          this.isOpenIndex = -1;
          return;
        }
        this.isOpenIndex = key;
      }
    },
    {
      name: 'removeCriteria',
      code: function(key) {
        if ( key == this.isOpenIndex ) this.isOpenIndex = -1;
        if ( Object.keys(this.criterias).length === 1 ) {
          this.clearAll();
          return;
        }
        debugger;
        this.criterias$remove(key);
      }
    }
  ]
});
