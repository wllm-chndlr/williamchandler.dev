import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    url: DS.attr(),
    category: DS.attr(),
    active: DS.attr('boolean', { defaultValue: false }),
});
