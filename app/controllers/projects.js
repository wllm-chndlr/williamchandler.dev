import Controller from '@ember/controller';
// import { computed } from '@ember/object';

export default Controller.extend({
    // classNameBindings: ['selectedProject'],

    didRender() {
        this.element.querySelector('.project-button .active');
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
