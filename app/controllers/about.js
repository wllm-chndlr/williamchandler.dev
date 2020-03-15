import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        launchInfo(info) {
            this.set('infoToDisplay', info);
        },
    }
});
