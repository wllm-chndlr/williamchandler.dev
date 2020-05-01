import Controller from '@ember/controller';

export default Controller.extend({
    didRender() {
        this.element.querySelectorAll('.project-button');
    },

    actions: {
        launchProject(project) {
            this.set('projectToDisplay', project);
        },

        resetProjects() {
            this.set('projectToDisplay', null);
        },
    }
});
