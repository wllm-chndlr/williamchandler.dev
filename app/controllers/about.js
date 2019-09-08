import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        launchInfo(info) {
            console.log(info);

            this.set('infoToDisplay', info);
        },
    }
});
