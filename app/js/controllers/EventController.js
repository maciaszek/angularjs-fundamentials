'use strict';

eventsApp.controller('EventController',
    function ($scope) {


        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        $scope.query = "";
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
                    name: "Directives Masterclass Introductory",
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Jhon Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.',
                    upVoteCount: 0
                },
                {
                    name: "Well behaved controlles",
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis metus, ac blandit metus. In consectetur ornare felis dictum lobortis. Aliquam nec est ac magna volutpat venenatis. Vestibulum vestibulum sed turpis eu suscipit.',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);