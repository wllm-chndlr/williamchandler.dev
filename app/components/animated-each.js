// import Component from '@ember/component';
// import move from 'ember-animated/motions/move';
// import { fadeOut } from 'ember-animated/motions/opacity';

// export default Component.extend({
//   init() {
//     this._super();
//     this.items = ['A', 'B', 'C', 'D', 'E'];
//   },

//   * transition({ keptSprites, removedSprites }) {
//     for (let sprite of keptSprites) {
//       move(sprite);
//     }

//     for (let sprite of removedSprites) {
//       fadeOut(sprite);
//     }
//   },

//   removeItem(item){
//     this.set('items', this.items.filter(i => i !== item));
//   }
// });