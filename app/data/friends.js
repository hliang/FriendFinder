var friendsArray = [
    {
        "name": "Alice",
        "photo": "https://picsum.photos/100/100/?random",
        "scores": [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
    },
    {
        "name": "Bob",
        "photo": "https://picsum.photos/100/100/?random",
        "scores": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    },
    {
        "name": "Charles",
        "photo": "https://picsum.photos/100/100/?random",
        "scores": [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
