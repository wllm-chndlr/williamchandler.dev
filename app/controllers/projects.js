import Controller from '@ember/controller';
// import { computed } from '@ember/object';

export default Controller.extend({
    // classNameBindings: ['selectedProject'],

    actions: {
        launchProject(project) {
            this.set('projectToDisplay', project);
        },

        resetProjects() {
            this.set('projectToDisplay', null);
        },
    }
});
