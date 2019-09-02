import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        launchProject(project) {
            console.log(project);

            this.set('projectToDisplay', project);
        }
    }
});
