import Controller from '@ember/controller';
// import { computed } from '@ember/object';

export default Controller.extend({
    // classNameBindings: ['selectedProject'],

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
