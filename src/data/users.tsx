import { friend } from "../types";

const users: friend[] = [
  {
    id: 1,
    username: "johndoe",
    password: "password123",
    friends: [2, 3, 4],
    profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Explorer of the outdoors.",
    date_joined: new Date("2022-03-10"),
    status: "online",
  },
  {
    id: 2,
    username: "janedoe",
    password: "secure456",
    friends: [1, 5],
    profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Writer and tea enthusiast.",
    date_joined: new Date("2021-08-14"),
    status: "offline",
  },
  {
    id: 3,
    username: "gamerjohn",
    password: "gametime007",
    friends: [1, 6, 7],
    profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Professional gamer and tech nerd.",
    date_joined: new Date("2023-01-20"),
    status: "online",
  },
  {
    id: 4,
    username: "artsyamy",
    password: "colors789",
    friends: [1, 8],
    profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Painting the world in vivid hues.",
    date_joined: new Date("2020-09-22"),
    status: "offline",
  },
  {
    id: 5,
    username: "fitman",
    password: "gym12345",
    friends: [2, 9, 10],
    profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Fitness is my superpower.",
    date_joined: new Date("2021-05-12"),
    status: "online",
  },
  {
    id: 6,
    username: "streamerella",
    password: "live247",
    friends: [3, 11],
    profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Streaming games and good vibes.",
    date_joined: new Date("2023-03-15"),
    status: "offline",
  },
  {
    id: 7,
    username: "wildgeorge",
    password: "nature123",
    friends: [3, 12],
    profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Nature is my escape.",
    date_joined: new Date("2020-10-10"),
    status: "online",
  },
  {
    id: 8,
    username: "chefkaren",
    password: "recipes123",
    friends: [4, 13],
    profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
    description: "Culinary artist and foodie.",
    date_joined: new Date("2021-12-08"),
    status: "offline",
  },
  {
    id: 9,
    username: "traveller21",
    password: "wanderlust456",
    friends: [5, 14],
    profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Globe-trotter and adventure seeker.",
    date_joined: new Date("2019-11-11"),
    status: "online",
  },
  {
    id: 10,
    username: "bookishbeth",
    password: "novels123",
    friends: [5, 15],
    profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
    description: "Living through books and stories.",
    date_joined: new Date("2021-06-20"),
    status: "offline",
  },
  {
    id: 11,
    username: "workoutpro",
    password: "weights456",
    friends: [6, 16],
    profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
    description: "Trainer and motivational coach.",
    date_joined: new Date("2022-11-05"),
    status: "online",
  },
  {
    id: 12,
    username: "cinemafan",
    password: "popcorn999",
    friends: [7, 17],
    profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
    description: "Movies are my escape.",
    date_joined: new Date("2020-05-14"),
    status: "offline",
  },
  {
    id: 13,
    username: "webdev123",
    password: "codinglife",
    friends: [8, 18],
    profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
    description: "Front-end wizard and tech lover.",
    date_joined: new Date("2023-04-01"),
    status: "online",
  },
  {
    id: 14,
    username: "yogamaster",
    password: "zen789",
    friends: [9, 19],
    profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
    description: "Yoga and mindfulness expert.",
    date_joined: new Date("2021-03-03"),
    status: "offline",
  },
  {
    id: 15,
    username: "plantguru",
    password: "greenworld",
    friends: [10, 20],
    profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
    description: "Loving and nurturing plants.",
    date_joined: new Date("2019-08-25"),
    status: "online",
  },
  {
    id: 16,
    username: "foodielife",
    password: "foodlove123",
    friends: [11, 1],
    profile_pic: "https://randomuser.me/api/portraits/women/16.jpg",
    description: "Taste buds are my best friends.",
    date_joined: new Date("2023-07-18"),
    status: "offline",
  },
  {
    id: 17,
    username: "traveldream",
    password: "exploremore",
    friends: [12, 2],
    profile_pic: "https://randomuser.me/api/portraits/men/17.jpg",
    description: "Life is short, travel far.",
    date_joined: new Date("2022-02-25"),
    status: "online",
  },
  {
    id: 18,
    username: "skaterlife",
    password: "ollieskate",
    friends: [13, 3],
    profile_pic: "https://randomuser.me/api/portraits/women/18.jpg",
    description: "Skating my way through life.",
    date_joined: new Date("2021-12-02"),
    status: "offline",
  },
  {
    id: 19,
    username: "musiclover",
    password: "strummyguitar",
    friends: [14, 4],
    profile_pic: "https://randomuser.me/api/portraits/men/19.jpg",
    description: "Guitarist and melody maker.",
    date_joined: new Date("2023-05-06"),
    status: "online",
  },
  {
    id: 20,
    username: "dancerella",
    password: "dance4life",
    friends: [15, 5],
    profile_pic: "https://randomuser.me/api/portraits/women/20.jpg",
    description: "Dancing is my ultimate joy.",
    date_joined: new Date("2020-04-10"),
    status: "offline",
  },
  {
    id: 21,
    username: "The Yapform",
    password: "osose00ep9sf",
    friends: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    profile_pic: "https://yippee.jpg",
    description: "Yap Yap Yap",
    date_joined: new Date("2024-12-17"),
    status: "online"
  },
];

export default users;
