import { user } from "../types";

const users: user[] = [
  {
    id: 1,
    username: "johndoe",
    password: "password123",
    friends: [2, 3, 4],
    profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Lover of the great outdoors, always chasing the next breathtaking view. Whether it's hiking up mountains or camping under the stars, I find peace in nature.",
    date_joined: new Date("2022-03-10"),
    status: "online",
  },
  {
    id: 2,
    username: "janedoe",
    password: "secure456",
    friends: [1, 5],
    profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
    description:
      "An imaginative writer with a penchant for crafting stories over cups of tea. When not lost in words, you'll find me collecting vintage teapots.",
    date_joined: new Date("2021-08-14"),
    status: "offline",
  },
  {
    id: 3,
    username: "gamerjohn",
    password: "gametime007",
    friends: [1, 6, 7],
    profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
    description:
      "A tech-savvy professional gamer who loves pushing the boundaries of competitive play. If it's not about gaming, it's about building the latest rig.",
    date_joined: new Date("2023-01-20"),
    status: "online",
  },
  {
    id: 4,
    username: "artsyamy",
    password: "colors789",
    friends: [1, 8],
    profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
    description:
      "An artist inspired by life’s vibrant palette. I pour my soul into paintings, turning fleeting moments into everlasting memories on canvas.",
    date_joined: new Date("2020-09-22"),
    status: "offline",
  },
  {
    id: 5,
    username: "fitman",
    password: "gym12345",
    friends: [2, 9, 10],
    profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
    description:
      "Fitness enthusiast and personal trainer. I live by the motto 'stronger every day' and help others unlock their full potential in the gym.",
    date_joined: new Date("2021-05-12"),
    status: "online",
  },
  {
    id: 6,
    username: "streamerella",
    password: "live247",
    friends: [3, 11],
    profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
    description:
      "Gaming streamer spreading positivity and good vibes online. Join me as I explore new worlds, take on epic challenges, and chat with my community.",
    date_joined: new Date("2023-03-15"),
    status: "offline",
  },
  {
    id: 7,
    username: "wildgeorge",
    password: "nature123",
    friends: [3, 12],
    profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
    description:
      "An adventurer who finds peace in the wild. I spend my time hiking, camping, and photographing nature's beauty, always seeking the next great escape.",
    date_joined: new Date("2020-10-10"),
    status: "online",
  },
  {
    id: 8,
    username: "chefkaren",
    password: "recipes123",
    friends: [4, 13],
    profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
    description:
      "A culinary artist passionate about crafting delicious dishes. Whether it's baking, grilling, or experimenting, I love sharing the joy of food.",
    date_joined: new Date("2021-12-08"),
    status: "offline",
  },
  {
    id: 9,
    username: "traveller21",
    password: "wanderlust456",
    friends: [5, 14],
    profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
    description:
      "Exploring the world one destination at a time. I thrive on adventure, from trekking through jungles to immersing myself in diverse cultures.",
    date_joined: new Date("2019-11-11"),
    status: "online",
  },
  {
    id: 10,
    username: "bookishbeth",
    password: "novels123",
    friends: [5, 15],
    profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
    description:
      "An avid reader who finds solace in the pages of novels. Whether it's fantasy, romance, or sci-fi, I’m always seeking my next literary escape.",
    date_joined: new Date("2021-06-20"),
    status: "offline",
  },
  {
    id: 11,
    username: "workoutpro",
    password: "weights456",
    friends: [6, 16],
    profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
    description:
      "A fitness coach dedicated to helping people transform their lives. I specialize in strength training, mindset coaching, and functional movement.",
    date_joined: new Date("2022-11-05"),
    status: "online",
  },
  {
    id: 12,
    username: "cinemafan",
    password: "popcorn999",
    friends: [7, 17],
    profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
    description:
      "Movie buff with a love for all genres. From classic films to modern blockbusters, I enjoy dissecting stories and sharing cinematic experiences.",
    date_joined: new Date("2020-05-14"),
    status: "offline",
  },
  {
    id: 13,
    username: "webdev123",
    password: "codinglife",
    friends: [8, 18],
    profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
    description:
      "A front-end developer who thrives on building beautiful, functional websites. Coding isn’t just my job; it’s my passion and creative outlet.",
    date_joined: new Date("2023-04-01"),
    status: "online",
  },
  {
    id: 14,
    username: "yogamaster",
    password: "zen789",
    friends: [9, 19],
    profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
    description:
      "Yoga instructor and mindfulness advocate. I aim to inspire balance and inner peace through the art of movement and meditation.",
    date_joined: new Date("2021-03-03"),
    status: "offline",
  },
  {
    id: 15,
    username: "plantguru",
    password: "greenworld",
    friends: [10, 20],
    profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
    description:
      "A plant enthusiast nurturing a lush indoor garden. From succulents to tropical plants, I bring greenery and life to every corner.",
    date_joined: new Date("2019-08-25"),
    status: "online",
  },
  {
    id: 16,
    username: "foodielife",
    password: "foodlove123",
    friends: [11, 1],
    profile_pic: "https://randomuser.me/api/portraits/women/16.jpg",
    description:
      "Passionate foodie on a quest to explore flavors from around the world. Cooking, tasting, and sharing meals is my ultimate joy.",
    date_joined: new Date("2023-07-18"),
    status: "offline",
  },
  {
    id: 17,
    username: "traveldream",
    password: "exploremore",
    friends: [12, 2],
    profile_pic: "https://randomuser.me/api/portraits/men/17.jpg",
    description:
      "Dreaming of faraway places and making them a reality. From road trips to international adventures, I live for the thrill of travel.",
    date_joined: new Date("2022-02-25"),
    status: "online",
  },
  {
    id: 18,
    username: "skaterlife",
    password: "ollieskate",
    friends: [13, 3],
    profile_pic: "https://randomuser.me/api/portraits/women/18.jpg",
    description:
      "Skateboarding enthusiast rolling through life with tricks and flips. I find freedom on my board, whether in skateparks or city streets.",
    date_joined: new Date("2021-12-02"),
    status: "offline",
  },
  {
    id: 19,
    username: "musiclover",
    password: "strummyguitar",
    friends: [14, 4],
    profile_pic: "https://randomuser.me/api/portraits/men/19.jpg",
    description:
      "A guitarist creating melodies that resonate. From strumming acoustics to electric solos, music is my ultimate form of expression.",
    date_joined: new Date("2023-05-06"),
    status: "online",
  },
  {
    id: 20,
    username: "fitnessqueen",
    password: "runfast123",
    friends: [15, 5],
    profile_pic: "https://randomuser.me/api/portraits/women/20.jpg",
    description:
      "A runner and fitness enthusiast. Whether it’s marathons, sprints, or weightlifting, I’m constantly pushing myself to be stronger and faster.",
    date_joined: new Date("2020-01-15"),
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
    status: "online",
  },
];

export default users;
