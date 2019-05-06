import { computed } from '@ember/object';
import { all } from 'rsvp';
import { isNone } from '@ember/utils';
import EditController from 'alpha-amber/controllers/application/edit';

export default EditController.extend({
  successMessage: 'Incasso aangepast!',
  users: computed(function() {
    return this.get('store').findAll('user');
  }),
  actions: {
    addUser(user) {
      this.get('model').get('transactions').pushObject(
        this.get('store').createRecord('debit/transaction', { user })
      );
    },
    removeTransaction(transaction) {
      transaction.deleteRecord();
    },
    submit() {
      const collection = this.get('model');
      const flashNotice = this.get('flashNotice');
      this.set('errorMessage', null);

      if (!isNone(collection)) {
        let failedTransactions = 0;
        collection.save().then(() => {
          return all(collection.get('transactions').map((transaction) => {
            if (transaction.get('hasDirtyAttributes')) {
              return transaction.save().catch(() => {
                failedTransactions++;
              });
            }
          }));
        }).then(() => {
          if (failedTransactions) {
            const prefix = failedTransactions > 1 ? 'zijn' : 'is';
            this.set('errorMessage', `Er ${prefix} ${failedTransactions} transacties niet juist opgeslagen`);
          } else {
            flashNotice.sendSuccess('Incasso aangepast!');
            this.transitionToRoute('debit.collections.show', collection.id);
          }
        }).catch(error => {
          this.set('errorMessage', error.message);
        });
      }
    }
  }
});
