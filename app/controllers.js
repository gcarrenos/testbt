angular.module('BelatrixApp.controllers', []).

  controller('directorsController', function($scope, $location) {
    $scope.nameFilter = null;
    $scope.directorslist = [];

    function slugify(text)
    {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')         
        .replace(/[^\w\-]+/g, '')     
        .replace(/\-\-+/g, '-')       
        .replace(/^-+/, '')           
        .replace(/-+$/, '');          
    }

    $scope.showDirector = function(director) {
      $location.path('directors/' + slugify(director.name));
    };

    $scope.searchFilter = function (director) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(director.name) || re.test(director.blockbuster);
    };

        $scope.directorslist = [
    {
        "name": "Pedro Almodóvar",
        "sex": "M",
        "nationality": "Spanish",
        "city": "Almería",
        "dob": -639535067,
        "age": 66,
        "blockbuster": "Todo sobre mi madre"
    },
    {
        "name": "Giuseppe Tornatore",
        "sex": "M",
        "nationality": "Italian",
        "city": "Bagheria",
        "dob": -429064667,
        "age": 59,
        "blockbuster": "Cinema paradiso"
    },
    {
        "name": "Sofia Coppola",
        "sex": "F",
        "nationality": "American",
        "city": "New York",
        "dob": 43111333,
        "age": 44,
        "blockbuster": "Lost in translation"
    },
    {
        "name": "Luc Besson",
        "sex": "M",
        "nationality": "French",
        "city": "Paris",
        "dob": -340504667,
        "age": 59,
        "blockbuster": "Léon"
    },
    {
        "name": "Alfred Hitchcock",
        "sex": "M",
        "nationality": "British",
        "city": "London",
        "dob": -2221087067,
        "age": "dead",
        "blockbuster": "Psicosis"
    },
    {
        "name": "Lucía Puenzo",
        "sex": "F",
        "nationality": "Argentinian",
        "city": "Buenos Aires",
        "dob": 218071333,
        "age": 38,
        "blockbuster": "Wakolda"
    },
    {
        "name": "Alejandro González Iñárritu",
        "sex": "M",
        "nationality": "Mexican",
        "city": "Mexico DF",
        "dob": -201314267,
        "age": 52,
        "blockbuster": "Birdman"
    }
];

  }).

  controller('directorController', function($scope, $routeParams) {
    $scope.director = {
    "fullName": "David Lynch",
    "image": "http://www.interviewmagazine.com/files/2012/01/08/img-david-lynch-01-_184117216071.jpg",
    "sex": "Male",
    "nationality": "United States",
    "state": "Montana",
    "city": "Missoula",
    "dob": -755699867,
    "age": 69,
    "blockbusters": [
        {
            "movieName": "Blue Velvet",
            "release": "1986"
        },
        {
            "movieName": "Wild at Heart",
            "release": "1990"
        },
        {
            "movieName": "Mulholland Drive",
            "release": "2001"
        }
    ],
    "bio": "is an American director, screenwriter, visual artist, musician, actor, and author. Known for his surrealist films, he has developed a unique cinematic style. The surreal and, in many cases, violent elements contained within his films have been known to 'disturb, offend or mystify' audiences.",
    "spouse": "Emily Stofle",
    "children": ""
}
  });