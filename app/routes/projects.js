import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: 1,
                title: 'Top Taco ATX',
                image: 'assets/images/toptaco.png',
                description: 'Real-time ratings aggregator for ATX taco joints',
                url: 'https://wllm-chndlr.github.io/TopTaco/',
                github: 'https://github.com/wllm-chndlr/TopTaco'
            },
            {
                id: 2,
                title: 'Simpsons Clicky Game',
                image: 'assets/images/simpsons.png',
                description: 'Memory game built with React',
                url: 'https://wllm-chndlr.github.io/clicky-game/',
                github: 'https://github.com/wllm-chndlr/clicky-game'
            },
            {
                id: 3,
                title: 'Rad Drumkit',
                image: 'assets/images/drumkit.png',
                description: 'A pretty rad keyboard-based drumkit',
                url: 'https://wllm-chndlr.github.io/drumkit/',
                github: 'https://github.com/wllm-chndlr/drumkit'
            },
            {
                id: 4,
                title: 'Guac-a-mole',
                image: 'assets/images/guac.png',
                description: 'Tex-Mex twist on the classic Whack-a-Mole game',
                url: 'https://wllm-chndlr.github.io/guac-a-mole/',
                github: 'https://github.com/wllm-chndlr/guac-a-mole'
            },
            {
                id: 5,
                title: 'Birth Works ATX',
                image: 'assets/images/jsc.png',
                description: 'Site for Austin-based birth doula and educator',
                url: 'https://www.birthworksatx.com/',
                github: 'https://github.com/wllm-chndlr/jsc'
            },
            // {
            //     id: 6,
            //     title: 'Rock & Roll with Ember',
            //     image: 'assets/images/jsc.png',
            //     description: 'Site for Austin-based birth doula and educator',
            //     url: 'https://www.birthworksatx.com/',
            //     github: 'https://github.com/wllm-chndlr/jsc'
            // }
        ];
    }
});
