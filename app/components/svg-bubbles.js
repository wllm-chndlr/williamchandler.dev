import Component from '@ember/component';
import { computed } from '@ember/object';
import moveSVG from 'ember-animated/motions/move-svg';
import { parallel } from 'ember-animated';

export default Component.extend({
  classNames: ['bubble-container'],
  bubbles: computed(function() {
    let list = [];
    for (let id = 0; id < 30; id++) {
      list.push({
        id,
        x: Math.floor(Math.random()*100),
        y: Math.floor(Math.random()*100),
        radius: Math.floor(Math.random()*75),
        // color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        stroke: `#${Math.floor(Math.random()*16777215).toString(16)}`

      });
    }
    return list;
  }),

  moveThem: function * ({ keptSprites }) {
    keptSprites.forEach(
      parallel(
        moveSVG.property('cx'),
        moveSVG.property('cy'),
        moveSVG.property('r'),
      )
    );
  },

  actions: {
    move() {
      this.notifyPropertyChange('bubbles');
    }
  }
});