/**
 * DATA HELPERS
 */

export const data = {
  "me": {
    "id": 'user1',
    "phone": "0678233041",
    "name": "Emilia",
    "profile": "https://res.cloudinary.com/donglyhya/image/upload/v1515857706/user1_jwft1x.jpg"
  },
  "contacts": [
    {"id": 'user2', "phone": "0634234532", "name": "Julien",  "profile": "https://res.cloudinary.com/donglyhya/image/upload/v1515857705/user3_tgy9bd.jpg"},
    {"id": 'user3', "phone": "0623423423", "name": "Sophia",  "profile": "https://res.cloudinary.com/donglyhya/image/upload/v1515857705/user5_f7ls8m.jpg"},
    {"id": 'user4', "phone": "0787345873", "name": "Matt",    "profile": "https://res.cloudinary.com/donglyhya/image/upload/v1515857705/user4_g6lmmh.jpg"},
  ],
  "chats": {
    'user2': [
      {
        'sender': 'user1',
        'date': '2018-01-13T14:31:54+00:00',
        'content': `Hello José. What's up ?`
      },
      {
        'sender': 'user1',
        'date': '2018-01-13T14:31:59+00:00',
        'content': `I was wondering if you wanna go out today ?`
      },
      {
        'sender': 'user1',
        'date': '2018-01-13T14:32:54+00:00',
        'content': `Lemme know ;)`
      },
      {
        'sender': 'user2',
        'date': '2018-01-13T14:33:54+00:00',
        'content': `Sure. Where & when ?`
      },
    ],
    'user3': [
      {
        'sender': 'user1',
        'date': '2018-01-13T14:31:54+00:00',
        'content': `Hey Dude`
      },
      {
        'sender': 'user1',
        'date': '2018-01-13T14:31:59+00:00',
        'content': `Alice wanted to go out this afternoon`
      },
      {
        'sender': 'user1',
        'date': '2018-01-13T14:32:54+00:00',
        'content': `Walking along the Seine. You're in ?`
      },
      {
        'sender': 'user3',
        'date': '2018-01-13T14:33:23+00:00',
        'content': `Ok. Sounds fun. :)`
      },
      {
        'sender': 'user3',
        'date': '2018-01-14T14:25:23+00:00',
        'content': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`
      },
      {
        'sender': 'user3',
        'date': '2018-01-14T15:25:23+00:00',
        'content': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`
      },
      {
        'sender': 'user3',
        'date': '2018-01-14T16:25:23+00:00',
        'content': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`
      },
    ],
  },
};