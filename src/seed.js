/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
// NOTE: replace '0WKf4vIlByfb8xYKQZA5vYGUIo63' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
        {
            userId: '0WKf4vIlByfb8xYKQZA5vYGUIo63',
            username: 'vincent',
            fullName: 'Itanael Vincent',
            emailAddress: 'vn.emploi@laposte.net',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now(),
        },
        {
            userId: '2',
            username: 'jean',
            fullName: 'Dupont Jean',
            emailAddress: 'jdupont@laposte.net',
            following: [],
            followers: ['0WKf4vIlByfb8xYKQZA5vYGUIo63'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'david',
            fullName: 'Martin David',
            emailAddress: 'dmartin@laposte.net',
            following: [],
            followers: ['0WKf4vIlByfb8xYKQZA5vYGUIo63'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['0WKf4vIlByfb8xYKQZA5vYGUIo63'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [
                    {
                        displayName: 'dali',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'orwell',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
    }
}
