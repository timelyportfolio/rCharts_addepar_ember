// copied most from Addepar
(function() {

  window.App = Ember.Application.create({
    customEvents: {
      blur: 'blur'
    }
  });

  App.ApplicationView = Ember.View.extend({
    classNames: 'ember-app',
    templateName: 'application'
  });

  App.ApplicationController = Ember.Controller.extend({
    rChartsController: Ember.computed(function() {
      return Ember.get('App.rCharts.TableController').create();
    }).property()

  });

}).call(this);