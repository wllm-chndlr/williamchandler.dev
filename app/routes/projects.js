import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: 14,
                title: 'Slick\'s Slices',
                image: 'optimized/slicks.png',
                description: 'Marketing site for local pizza place created with Gatsby, GraphQL, and Sanity',
                url: 'https://sli-cks-sli-ces.netlify.app/',
                github: 'https://github.com/wllm-chndlr/gatsby-master',
                projectToDisplay: true,
            },
            {
                id: 13,
                title: 'Ember Animated',
                image: 'optimized/animated.png',
                description: 'Showcase of animations created with Ember Animated',
                url: 'https://ember-animated.netlify.app/',
                github: 'https://github.com/wllm-chndlr/anima',
            },
            {
                id: 1,
                title: 'Hoox User Management',
                image: 'optimized/hoox.png',
                description: 'Fast, responsive CRUD app built with React Hooks',
                url: 'https://wllm-chndlr.github.io/hoox/',
                github: 'https://github.com/wllm-chndlr/hoox',
            },
            {
                id: 14,
                title: 'Todo MVC',
                image: 'optimized/todomvc.png',
                description: 'Easy-to-use todo app built with Ember',
                url: 'https://to-do-mvc.netlify.app/',
                github: 'https://github.com/wllm-chndlr/todomvc',
            },
            {
                id: 12,
                title: 'Expense Tracker',
                image: 'optimized/expense-tracker.png',
                description: 'Expense and income tracker built with React Hooks',
                url: 'https://wllm-chndlr.github.io/expense-tracker/',
                github: 'https://github.com/wllm-chndlr/expense-tracker',
            },
            {
                id: 9,
                title: 'Lebowski Hangman',
                image: 'optimized/hangman.png',
                description: 'Classic hangman game based on The Big Lebowski',
                url: 'https://wllm-chndlr.github.io/Lebowski-Hangman/',
                github: 'https://github.com/wllm-chndlr/Lebowski-Hangman'
            },
            // {
            //     id: 1,
            //     title: 'Top Taco ATX',
            //     image: 'optimized/toptaco.png',
            //     description: 'Real-time ratings aggregator for ATX taco joints',
            //     url: 'https://wllm-chndlr.github.io/TopTaco/',
            //     github: 'https://github.com/wllm-chndlr/TopTaco',
            //     isSelected: true,
            // },
            {
                id: 2,
                title: 'Simpsons Clicky Game',
                image: 'optimized/simpsons.png',
                description: 'Memory game built with React',
                url: 'https://wllm-chndlr.github.io/clicky-game/',
                github: 'https://github.com/wllm-chndlr/clicky-game'
            },
            {
                id: 3,
                title: 'Rad Drumkit',
                // image: 'https://res.cloudinary.com/dkig5jdyj/image/upload/c_scale,w_676/v1553189709/drumkit(g).png',
                image: 'optimized/drumkit.png',
                description: 'A pretty rad keyboard-based drumkit',
                url: 'https://wllm-chndlr.github.io/drumkit/',
                github: 'https://github.com/wllm-chndlr/drumkit'
            },
            {
                id: 4,
                title: 'Guac-a-mole',
                image: 'optimized/guac.png',
                description: 'Tex-Mex twist on the classic Whack-a-Mole game',
                url: 'https://wllm-chndlr.github.io/guac-a-mole/',
                github: 'https://github.com/wllm-chndlr/guac-a-mole'
            },
            {
                id: 5,
                title: 'Birth Works ATX',
                image: 'optimized/jsc.png',
                description: 'Site for Austin-based birth doula and educator',
                url: 'https://www.birthworksatx.com/',
                github: 'https://github.com/wllm-chndlr/jsc'
            },
            {
                id: 6,
                title: 'Canvasketch',
                image: 'optimized/canvas.png',
                description: 'HTML5 canvas drawing fun',
                url: 'https://wllm-chndlr.github.io/canvasketch/',
                github: 'https://github.com/wllm-chndlr/canvasketch'
            },
            {
                id: 7,
                title: 'SuperRentals',
                image: 'optimized/rentals.png',
                description: 'Home rentals page built with Ember.js',
                url: 'https://youthful-bardeen-842f6d.netlify.com/',
                github: 'https://github.com/wllm-chndlr/super-rentals'
            },
            {
                id: 8,
                title: 'GIFGrub',
                image: 'optimized/grub.png',
                description: 'A showcase of super-delish food GIFs',
                url: 'https://wllm-chndlr.github.io/GIFgrub/',
                github: 'https://github.com/wllm-chndlr/GIFgrub'
            },
            {
                id: 10,
                title: 'Astronomy Trivia',
                image: 'optimized/astronomy.png',
                description: 'Test your knowledge of our universe, and try not to get blown out into space!',
                url: 'https://wllm-chndlr.github.io/Astronomy-Trivia/',
                github: 'https://github.com/wllm-chndlr/Astronomy-Trivia'
            },
            {
                id: 11,
                title: 'Shyny Crystalz',
                image: 'optimized/crystalz.png',
                description: 'Magic crystalz + math = fun',
                url: 'https://wllm-chndlr.github.io/shyny-crystalz/',
                github: 'https://github.com/wllm-chndlr/shyny-crystalz'
            },
            // {
            //     id: 6,
            //     title: 'Rock & Roll with Ember',
            //     image: 'optimized/jsc.png',
            //     description: 'Site for Austin-based birth doula and educator',
            //     url: 'https://www.birthworksatx.com/',
            //     github: 'https://github.com/wllm-chndlr/jsc'
            // }
        ];
    },

    setupController(controller, model) {
        const firstProject = model.get('firstObject');
        controller.setProperties({
            model,
            projectToDisplay: firstProject,
            projectToShow: firstProject
        });
    },
});
