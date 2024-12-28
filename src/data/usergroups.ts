import { userGroup } from "../types";

const userGroups: userGroup[] = [];

let idCount = 1;
let groupCount = 1;
for (let i = 1; i < 21; i++) {
  for (let j = i + 1; j <= 21; j++) {
    const tmp1 = {
      id: idCount++,
      userId: i,
      groupId: groupCount,
    };
    const tmp2 = {
      id: idCount++,
      userId: j,
      groupId: groupCount++,
    };
    userGroups.push(tmp1, tmp2);
  }
}

userGroups.push(
  {"id": 421, "userId": 1, "groupId": 211},
  {"id": 422, "userId": 2, "groupId": 211},
  {"id": 423, "userId": 3, "groupId": 211},
  {"id": 424, "userId": 4, "groupId": 212},
  {"id": 425, "userId": 5, "groupId": 212},
  {"id": 426, "userId": 6, "groupId": 212},
  {"id": 427, "userId": 7, "groupId": 212},
  {"id": 428, "userId": 8, "groupId": 213},
  {"id": 429, "userId": 9, "groupId": 213},
  {"id": 430, "userId": 10, "groupId": 213},
  {"id": 431, "userId": 11, "groupId": 213},
  {"id": 432, "userId": 12, "groupId": 213},
  {"id": 433, "userId": 13, "groupId": 214},
  {"id": 434, "userId": 14, "groupId": 214},
  {"id": 435, "userId": 15, "groupId": 214},
  {"id": 436, "userId": 16, "groupId": 215},
  {"id": 437, "userId": 17, "groupId": 215},
  {"id": 438, "userId": 18, "groupId": 215},
  {"id": 439, "userId": 19, "groupId": 215},
  {"id": 440, "userId": 20, "groupId": 215},
  {"id": 441, "userId": 21, "groupId": 215},
  {"id": 442, "userId": 1, "groupId": 216},
  {"id": 443, "userId": 2, "groupId": 216},
  {"id": 444, "userId": 3, "groupId": 216},
  {"id": 445, "userId": 4, "groupId": 216},
  {"id": 446, "userId": 5, "groupId": 217},
  {"id": 447, "userId": 6, "groupId": 217},
  {"id": 448, "userId": 7, "groupId": 217},
  {"id": 449, "userId": 8, "groupId": 217},
  {"id": 450, "userId": 9, "groupId": 217},
  {"id": 451, "userId": 10, "groupId": 218},
  {"id": 452, "userId": 11, "groupId": 218},
  {"id": 453, "userId": 12, "groupId": 218},
  {"id": 454, "userId": 13, "groupId": 218},
  {"id": 455, "userId": 14, "groupId": 218},
  {"id": 456, "userId": 15, "groupId": 218},
  {"id": 457, "userId": 16, "groupId": 219},
  {"id": 458, "userId": 17, "groupId": 219},
  {"id": 459, "userId": 18, "groupId": 219},
  {"id": 460, "userId": 19, "groupId": 219},
  {"id": 461, "userId": 20, "groupId": 220},
  {"id": 462, "userId": 21, "groupId": 220},
  {"id": 463, "userId": 1, "groupId": 220},
  {"id": 464, "userId": 2, "groupId": 220},
  {"id": 465, "userId": 3, "groupId": 220}
)

export default userGroups;
