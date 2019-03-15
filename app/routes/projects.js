import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                title: 'Top Taco ATX',
                image: 'assets/images/toptaco.png',
                description: 'Real-time ratings aggregator for ATX taco joints',
            }, 
            {
                title: 'Simpsons Clicky Game',
                image: 'assets/images/simpsons.png',
                description: 'Memory game built with React',
            }, 
            {
                title: 'Rad Drumkit',
                image: 'assets/images/drumkit.png',
                description: 'A pretty rad keyboard-based drumkit',
            }, 
            {
                title: 'Birth Works ATX',
                image: 'assets/images/jsc.png',
                description: 'Site for Austin-based birth doula and educator',
            }, 
        ];
    }
});
