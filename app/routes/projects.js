import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
            title: 'Top Taco ATX',
            category: 'Estate',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
            }, 
        ];
    }
});
