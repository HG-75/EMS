const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Submit Report",
        description: "Prepare and submit the weekly report.",
        date: "2024-10-31",
        category: "Reporting",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Participate in the monthly team meeting.",
        date: "2024-10-25",
        category: "Meetings",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Client Follow-up",
        description: "Follow up with clients for project updates.",
        date: "2024-10-28",
        category: "Client Relations",
      },
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Alice",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review code for the latest project module.",
        date: "2024-10-30",
        category: "Development",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Training Session",
        description: "Attend the cybersecurity training.",
        date: "2024-10-29",
        category: "Training",
      },
      {
        active: false,
        new_task: true,
        completed: false,
        failed: true,
        title: "Submit Budget",
        description: "Submit the quarterly budget proposal.",
        date: "2024-10-27",
        category: "Finance",
      },
    ],
    taskCounts: {
      active: 1,
      new_task: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Michael",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Inventory Check",
        description: "Complete the monthly inventory check.",
        date: "2024-10-26",
        category: "Operations",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Prepare presentation slides for Q4.",
        date: "2024-11-01",
        category: "Planning",
      },
    ],
    taskCounts: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Sarah",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Customer Feedback",
        description: "Collect and analyze customer feedback.",
        date: "2024-10-31",
        category: "Research",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Product Demo",
        description: "Conduct product demo for new clients.",
        date: "2024-10-29",
        category: "Sales",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Deadline Check",
        description: "Ensure all projects meet their deadlines.",
        date: "2024-10-28",
        category: "Project Management",
      },
    ],
    taskCounts: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Emma",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Social Media Update",
        description: "Update social media with new content.",
        date: "2024-11-01",
        category: "Marketing",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Market Analysis",
        description: "Analyze the market trends for Q4.",
        date: "2024-10-30",
        category: "Research",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Budget Approval",
        description: "Get approval for the annual budget.",
        date: "2024-10-27",
        category: "Finance",
      },
    ],
    taskCounts: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
