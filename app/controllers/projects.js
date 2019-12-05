import Controller from '@ember/controller';
// import { computed } from '@ember/object';

export default Controller.extend({
    // classNameBindings: ['activeProject'],

    actions: {
        launchProject(project) {
            this.set('projectToDisplay', project);
        },

        resetProjects() {
            this.set('projectToDisplay', null);
        },
    }
});
