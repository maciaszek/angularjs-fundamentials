'use strict';

eventsApp.controller('EventController',
    function ($scope) {
        $scope.event = {
            name: "Angular Boot Camp",
            date: '1/1/2013',
            time: "10:30 am",
            location: {
                address: "Google Headquarter",
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: './img/angularjs-logo.png',
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Jhon Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.'
                },
                {
                    name: "Well behaved controlles",
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.'
                }
            ]
        };
    }
);