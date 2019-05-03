import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        const tech = [
            'Ember.js',
            'Node.js',
            'HTML5',
            'CSS3',
            'Sass',
            'CSS Grid',
            'React.js',
            'D3',
            'Express',
            'MongoDB',
        ]

        return tech;
    }
});
