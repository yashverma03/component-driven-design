import critical_delay_icon from '../images/critical_delay_icon.jpeg';
import chat_icon from '../images/chat_icon.jpeg';
import follow_up_on_feedback_icon from '../images/follow_up_on_feedback_icon.jpeg';
import meeting_icon from '../images/meeting_icon.jpeg';
import new_feedback_icon from '../images/new_feedback_icon.jpeg';
import new_task_icon from '../images/new_task_icon.jpeg';
import project_review_icon from '../images/project_review_icon.jpeg';
import task_marked_completed_icon from '../images/task_marked_completed_icon.jpeg';
import task_name_updated_icon from '../images/task_name_updated_icon.jpeg';

export const data = [
  {
    id: 'e2d4f6c8-4a8a-4937-8e7b-103c9e5ab32f',
    date: 30,
    day: "WED",
    month: "Jul",
    event: [
      {
        id: 'b3f9dc45-6869-4ae2-b3cb-28e537f94f0f',
        time: "11:30 AM",
        taskName: "New task assigned to you",
        taskIcon: new_task_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: 'f7a28916-4f52-4915-ae97-650e1c43be36',
        time: "11:30 AM",
        taskName: "New feedback received for Task Name",
        taskIcon: new_feedback_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: '86c3f591-0e2c-4a8f-9e13-7d9289a09c5a',
        time: "11:30 AM",
        taskName: "Task marked completed by you",
        taskIcon: task_marked_completed_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: 'd95b8f20-eb5e-4d07-9e68-aa35c28ca299',
        time: "11:30 AM",
        taskName: "Task Name updated for journey Journey Name",
        taskIcon: task_name_updated_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: 'a14fbc89-5a4f-4f58-aa4a-148baf30f67c',
        time: "11:30 AM",
        taskName: "Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ",
        taskIcon: follow_up_on_feedback_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      }
    ]
  },

  {
    id: '7d1b98e6-9e18-47a7-af49-56784b50a0d5',
    date: 29,
    day: "THU",
    month: "Jul",
    event: [
      {
        id: 'b7a2c9e3-7a3e-4b4e-8df1-5c7b87403635',
        time: "11:30 AM",
        taskName: "Meeting with Bobby Charlie",
        taskIcon: meeting_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: 'c6f4a8d2-84e9-45b3-98a7-98a54e19c45d',
        time: "11:30 AM",
        taskName: "Chat about Design Mentorship",
        taskIcon: chat_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: '374fc5ea-5edc-40ce-8aa5-d0f98a2a68ea',
        time: "11:30 AM",
        taskName: "Critical delay observed in time line adherence",
        taskIcon: critical_delay_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      },
      {
        id: 'e8a496c7-c227-4a78-917c-b8f03e46f9a3',
        time: "11:30 AM",
        taskName: "Finish project documentation for review (1-1 checkin)",
        taskIcon: project_review_icon,
        userName: `Sheila O'Reiley`,
        userPhoto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
      }
    ]
  }
];
