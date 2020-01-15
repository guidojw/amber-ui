import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  userId: attr('number'),
  messagesTotal: attr('number'),
  messagesLastWeek: attr('number'),
  messagesLastMonth: attr('number')
});
