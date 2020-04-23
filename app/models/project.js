import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr(),
    url: DS.attr('string'),
    blurb: DS.attr('string'),
    category: DS.attr('string'),
    active: DS.attr('boolean', { defaultValue: false }),
});
