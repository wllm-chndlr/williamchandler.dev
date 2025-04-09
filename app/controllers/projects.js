import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
    projectToDisplay: null,
    isLoadingProject: false,
    projectToShow: null,

    projectCardStyle: computed('isLoadingProject', function() {
        const opacity = this.isLoadingProject ? '0' : '1';
        const styleString = `
            -webkit-transition: opacity 300ms ease-in-out;
            -moz-transition: opacity 300ms ease-in-out;
            -o-transition: opacity 300ms ease-in-out;
            transition: opacity 300ms ease-in-out;
            opacity: ${opacity};
        `;
        return htmlSafe(styleString);
    }),

    actions: {
        launchProject(project) {
            if (project === this.projectToShow || this.isLoadingProject) {
                 return;
            }

            this.set('isLoadingProject', true);

            later(this, () => {
                this.setProperties({
                    projectToShow: project,
                    isLoadingProject: false
                });
            }, 300);
        },

        resetProjects() {
            this.setProperties({
                projectToDisplay: null,
                projectToShow: (this.model && this.model.firstObject)
            });
        },
    }
});
