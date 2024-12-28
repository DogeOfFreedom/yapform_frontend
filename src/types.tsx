interface user {
  id: number;
  username: string;
  password: string;
  friends: number[];
  profile_pic: string;
  description: string;
  date_joined: Date;
  status: "offline" | "online";
}

interface group {
  id: number;
  name?: string;
  profile_pic?: string;
  description?: string;
  isDM: boolean;
}

interface userGroup {
  id: number;
  userId: number;
  groupId: number;
}

interface message {
  id: number;
  recipient: number;
  sender: number;
  content: string;
  attachment: number[];
  sent: boolean;
  read: boolean;
}

interface attachment {
  id: number;
  file_type: string;
  url: string;
}

export type { user, group, userGroup, message, attachment };
