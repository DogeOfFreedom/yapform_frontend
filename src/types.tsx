interface friend {
    id: number,
    username: string,
    password: string,
    friends: number[],
    profile_pic: string,
    description: string,
    date_joined: Date,
    status: "offline" | "online",
}

export type {friend}