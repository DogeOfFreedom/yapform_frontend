import { message } from "../types";

const messages: message[] = [
  {
    id: 1,
    recipient: 1,
    sender: 21,
    content: "Hey, how's everything going?",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 2,
    recipient: 1,
    sender: 21,
    content: "Just wanted to check in.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 3,
    recipient: 1,
    sender: 21,
    content: "Have you seen the latest update?",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 4,
    recipient: 1,
    sender: 21,
    content: "Let me know if you need anything.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 5,
    recipient: 1,
    sender: 21,
    content: "I'll be available later if you need to talk.",
    attachment: [1],
    sent: true,
    read: true
  },
  {
    id: 6,
    recipient: 211,
    sender: 21,
    content: "Hey, how's the project going?",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 7,
    recipient: 211,
    sender: 21,
    content: "I was thinking about our last meeting.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 8,
    recipient: 211,
    sender: 21,
    content: "Do you need any help with that task?",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 9,
    recipient: 211,
    sender: 21,
    content: "Let me know if you need any additional info.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 10,
    recipient: 211,
    sender: 21,
    content: "I'll catch up with you soon about the next steps.",
    attachment: [2],
    sent: true,
    read: true
  },
  {
    id: 11,
    recipient: 215,
    sender: 21,
    content: "How's everything on your end?",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 12,
    recipient: 215,
    sender: 21,
    content: "I have some updates I need to share with you.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 13,
    recipient: 215,
    sender: 21,
    content: "Just following up on our last conversation.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 14,
    recipient: 215,
    sender: 21,
    content: "I have attached the files we discussed.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 15,
    recipient: 215,
    sender: 21,
    content: "Let's connect soon for the next phase.",
    attachment: [3],
    sent: true,
    read: true
  },
  {
    id: 16,
    recipient: 220,
    sender: 21,
    content: "Hope you're doing well!",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 17,
    recipient: 220,
    sender: 21,
    content: "I wanted to get your thoughts on something.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 18,
    recipient: 220,
    sender: 21,
    content: "Just wanted to confirm our plans for tomorrow.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 19,
    recipient: 220,
    sender: 21,
    content: "I have some updates for you.",
    attachment: [],
    sent: true,
    read: true
  },
  {
    id: 20,
    recipient: 220,
    sender: 21,
    content: "Let me know if you'd like to schedule a call.",
    attachment: [4],
    sent: true,
    read: true
  },
  {
    id: 21,
    recipient: 211,
    sender: 2,
    content: "Hey, can we meet tomorrow to go over the details?",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 22,
    recipient: 211,
    sender: 3,
    content: "Just checking if you got my last message.",
    attachment: [5],
    sent: true,
    read: false
  },
  {
    id: 23,
    recipient: 211,
    sender: 2,
    content: "I’ve attached the report for you to review.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 24,
    recipient: 211,
    sender: 3,
    content: "Let’s finalize the schedule by the end of the day.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 25,
    recipient: 211,
    sender: 2,
    content: "I’ll send you the files as soon as I can.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 26,
    recipient: 215,
    sender: 16,
    content: "Just checking in to see if you need anything.",
    attachment: [6],
    sent: true,
    read: false
  },
  {
    id: 27,
    recipient: 215,
    sender: 17,
    content: "I've sent over the updated report. Let me know what you think.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 28,
    recipient: 215,
    sender: 18,
    content: "I’ll be available later today if you need to discuss anything.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 29,
    recipient: 215,
    sender: 16,
    content: "Please let me know if you have any questions about the proposal.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 30,
    recipient: 215,
    sender: 17,
    content: "Just wanted to follow up on the meeting schedule.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 31,
    recipient: 220,
    sender: 20,
    content: "Can you send me the updated files when you get a chance?",
    attachment: [7],
    sent: true,
    read: false
  },
  {
    id: 32,
    recipient: 220,
    sender: 1,
    content: "Just wanted to confirm our meeting time for tomorrow.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 33,
    recipient: 220,
    sender: 2,
    content: "Here’s the document we discussed. Please review it.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 34,
    recipient: 220,
    sender: 3,
    content: "Let’s touch base after lunch to finalize the plans.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 35,
    recipient: 220,
    sender: 20,
    content: "Just checking if you received my earlier message.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 36,
    recipient: 220,
    sender: 1,
    content: "I’m looking forward to our chat tomorrow. Let me know if you need anything before then.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 37,
    recipient: 220,
    sender: 2,
    content: "I’ll be available for a call at 3 PM. Let me know if that works.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 38,
    recipient: 220,
    sender: 3,
    content: "We should probably wrap up the discussion by Friday.",
    attachment: [8],
    sent: true,
    read: false
  },
  {
    id: 39,
    recipient: 220,
    sender: 20,
    content: "Please confirm if you received the documents I sent earlier.",
    attachment: [],
    sent: true,
    read: false
  },
  {
    id: 40,
    recipient: 220,
    sender: 1,
    content: "Looking forward to your feedback on the draft.",
    attachment: [],
    sent: true,
    read: false
  }
]



export default messages;
