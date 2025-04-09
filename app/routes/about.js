import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return [
            {
                id: 1,
                title: "Tech",
                items: [
                    "JavaScript",
                    "React",
                    "TypeScript",
                    "GraphQL",
                    "Next.js",
                    "HTML",
                    "CSS",
                    "Node.js",
                    "Python",
                    "SQL",
                ],
            },
            {
                id: 2,
                title: "Education",
                items: [
                    "Full Stack Web Development Bootcamp, UT Austin",
                    "MS, International Relations, University of Glasgow",
                    "BA, Spanish, Davidson College",
                ],
            },
            {
                id: 3,
                title: "Presentations",
                items: [
                    {
                        title: "Ember Octane: Fueling the Future",
                        url: "https://youtu.be/y3B0s6SHTEM",
                        event: "EmberATX Meetup",
                        date: "March 28, 2019",
                    },
                ],
            },
        ];
    },

    setupController(controller, model) {
        controller.setProperties({
            model,
            infoToDisplay: model.get("firstObject"),
        });
    },
});
