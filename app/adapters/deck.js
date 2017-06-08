import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  pathForType: function() {
    const currentUid = this.get('session.currentUser.uid');
    return `Decks/${currentUid}`;
  }
});
