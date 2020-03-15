import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [
            {
                id: 1,
                title: 'Tech',
                items: [
                    'JavaScript',
                    'Ember',
                    'React',
                    'HTML5',
                    'CSS3',
                    'Node',
                    'Sass',
                    'CSS Grid',
                    'JQuery',
                    'AJAX',
                    'REST APIs',
                    'D3',
                    'SQL',
                    'Express',
                    'MongoDB',
                ],
            },
            {
                id: 2,
                title: 'Presentations',
                items: [
                    {
                        title: 'Ember Octane: Fueling the Future',
                        url: 'https://youtu.be/y3B0s6SHTEM',
                        event: 'EmberATX Meetup',
                        date: 'March 28, 2019',
                    }
                ],
            },
            {
                id: 3,
                title: 'Events',
                items: [
                    'EmberConf 2019 (attendee)',
                    'ATX Hack for Change 2018 (participant)',
                    'EmberATX meetup (ongoing)',
                ],
            },
            {
                id: 4,
                title: 'Education',
                items: [
                    'Full Stack Web Development Bootcamp, UT Austin',
                    'MS, International Relations, University of Glasgow',
                    'BA, Spanish, Davidson College',
                ],
            },
            // {
            //     id: 5,
            //     title: 'Resume',
            //     items: [
            //         'Check it out'
            //     ],
            // },
        ]
    },

    setupController(controller, model) {
        controller.set('infoToLoad', model.get('firstObject'));
    },
});
