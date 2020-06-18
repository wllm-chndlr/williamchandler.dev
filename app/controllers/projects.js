import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        launchProject(project) {
            this.set('projectToDisplay', project);
        },

        resetProjects() {
            this.set('projectToDisplay', null);
        },
    }
});
