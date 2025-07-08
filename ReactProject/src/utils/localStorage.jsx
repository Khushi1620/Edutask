const studentsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "student1@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the website layout with modern, consistent, visually appealing, and responsive styling across all website pages to enhance user experience, accessibility, and performance.",
        taskDate: "15 March 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "DSA Practice",
        taskDescription: "Solve medium to hard level linked list and tree questions for better coding skills, improving logic, problem-solving techniques, and preparing effectively for coding interviews",
        taskDate: "9 May 2025",
        category: "DSA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Wireframe design",
        taskDescription: "Design wireframes for a mobile shopping app with clear navigation and CTAs, focusing on user experience, clean structure, usability, and consistent design components.",
        taskDate: "20 June 2025",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "React bug fix",
        taskDescription: "Design wireframes for a mobile shopping app with clear navigation and CTAs, focusing on user experience, clean structure, usability, and consistent design components.",
        taskDate: "4 April 2025",
        category: "Web Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SQL queries",
        taskDescription: "Practice SQL joins, nested queries, and group by statements to improve query logic, understanding data relationships, and optimizing database queries for performance.",
        taskDate: "11 July 2025",
        category: "Database"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Competitive coding",
        taskDescription: "Participate in contests to solve time-bound algorithm problems for better speed, improving logical skills, data structure knowledge, and enhancing coding practices under pressure.",
        taskDate: "23 August 2025",
        category: "DSA"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "student2@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Portfolio update",
        taskDescription: "Update personal portfolio with recent projects and a cleaner UI design, showcasing skills, experience, technologies used, and adding clear navigation for visitors.",
        taskDate: "12 February 2025",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "System design basics",
        taskDescription: "Study scalability, caching, and sharding strategies for distributed systems, understanding trade-offs, designing reliable systems, ensuring high availability, and efficient resource use.",
        taskDate: "18 March 2025",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Node.js crash course",
        taskDescription: "Build a REST API with Express and learn about async patterns, routing, error handling, middleware, and connect with databases to understand backend fundamentals",
        taskDate: "25 April 2025",
        category: "Backend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Java debugging",
        taskDescription: "Fix exceptions and errors in Java classes, test thoroughly using JUnit, improve code quality, handle corner cases, and follow object-oriented principles for better design.",
        taskDate: "8 May 2025",
        category: "Programming"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "MongoDB practice",
        taskDescription: "Learn MongoDB queries, aggregation pipelines, indexing, schema design, and replication, understanding NoSQL data modeling concepts and improving performance of queries.",
        taskDate: "14 June 2025",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug fix react app",
        taskDescription: "Resolve major bugs in the React app related to hooks, state updates, props, improving user experience, handling errors, and following clean code best practices.",
        taskDate: "20 July 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Python practice",
        taskDescription: "Revise Python object-oriented programming concepts, design patterns, practice writing clean code, reusable classes, and build a simple application to strengthen understanding.",
        taskDate: "2 September 2025",
        category: "Programming"
      }
    ]
  },
  {
    id: 3,
    name: "Raj Patel",
    email: "student3@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "React hooks practice",
        taskDescription: "Implement custom React hooks with useMemo and useReducer for advanced use cases, optimizing performance, managing state cleanly, and understanding functional components better",
        taskDate: "14 January 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data structures revision",
        taskDescription: "Revise arrays, linked lists, stacks, and queues with simple implementation codes, analyzing their time complexities and applying them to practical coding interview problems.",
        taskDate: "19 February 2025",
        category: "DSA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Debug Node.js project",
        taskDescription: "Fix async and callback issues in a Node.js REST API, ensure proper error handling, follow best practices, improve code readability, and test for consistent functionality.",
        taskDate: "10 March 2025",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SQL practice",
        taskDescription: "Solve SQL interview questions using joins, nested queries, group by, and aggregation, learning to write efficient queries and understanding relational data modeling principles.",
        taskDate: "28 April 2025",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design landing page",
        taskDescription: "Create a modern responsive landing page with animations, clean layout, reusable components, accessibility considerations, and optimized performance for cross-browser compatibility",
        taskDate: "15 May 2025",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "System design",
        taskDescription: "Understand design patterns like microservices, event-driven architecture, scalability, high availability, consistency, redundancy, and trade-offs involved in building large systems.",
        taskDate: "22 June 2025",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "student4@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 3,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dynamic programming",
        taskDescription: "Solve dynamic programming problems using recursion, memoization, tabulation techniques, understanding overlapping subproblems, and applying optimal solutions in coding interviews.",
        taskDate: "5 February 2025",
        category: "DSA"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "React basics",
        taskDescription: "Learn basics of React like JSX, components, props, state, and event handling to build interactive user interfaces with a component-based architecture and reusable code",
        taskDate: "12 March 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "HTML CSS practice",
        taskDescription: "Build responsive designs with HTML5 and modern CSS flex/grid techniques, focusing on accessibility, semantic tags, consistent styling, and optimizing for better performance.",
        taskDate: "19 April 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Competitive programming",
        taskDescription: "Participate in weekly contests on coding platforms to practice algorithms, improve logical thinking, problem-solving speed, and gain confidence for coding competitions.",
        taskDate: "25 May 2025",
        category: "DSA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "MongoDB practice",
        taskDescription: "Practice MongoDB aggregation pipelines, indexes, replication features, improving data retrieval, understanding schema design, and enhancing the performance of NoSQL queries.",
        taskDate: "18 June 2025",
        category: "Database"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Java debugging",
        taskDescription: "Debug inheritance issues and interfaces with examples, write unit tests, refactor Java code, and apply object-oriented principles to improve application structure and maintainability.",
        taskDate: "2 July 2025",
        category: "Programming"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "React errors fix",
        taskDescription: "Fix common errors in React hooks, event handlers, state logic components, improve debugging skills, and apply best practices for writing stable, clean React applications.",
        taskDate: "9 August 2025",
        category: "Web Development"
      }
    ]
  },
  {
    id: 5,
    name: "Karthik Iyer",
    email: "student5@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Landing page design",
        taskDescription: "Design and build a modern landing page with responsive layout, smooth animations, reusable components, optimized performance, and good accessibility for better user experience.",
        taskDate: "10 March 2025",
        category: "Web Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "System architecture",
        taskDescription: "Study how to build scalable systems using caching, sharding, queues, high availability, consistency models, redundancy strategies, and efficient resource utilization.",
        taskDate: "22 April 2025",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Python OOPs",
        taskDescription: "Practice Python object-oriented programming with classes, inheritance, polymorphism, encapsulation, abstraction, and apply those principles to build structured applications.",
        taskDate: "18 May 2025",
        category: "Programming"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Node.js practice",
        taskDescription: "Fix bugs and refactor code in a Node.js Express project with MongoDB backend, improve routing, error handling, and apply middleware for consistent functionality",
        taskDate: "15 June 2025",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "React app",
        taskDescription: "Build a React app with routing, context API, deploy it on cloud platforms, follow best practices, improve performance, handle state, and create reusable functional components",
        taskDate: "28 July 2025",
        category: "Web Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Competitive coding",
        taskDescription: "Participate in coding contests, practice advanced algorithms under timed conditions, improve logical thinking, apply data structures, and strengthen problem-solving techniques.",
        taskDate: "8 August 2025",
        category: "DSA"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SQL revision",
        taskDescription: "Revise SQL advanced topics like CTEs, window functions, triggers, indexing, and understand how to write efficient, maintainable, and performant database queries",
        taskDate: "18 September 2025",
        category: "Database"
      }
    ]
  }
];
const teachersData = [
  {
    id: 1,
    name: "Anjali Mehta",
    email: "teacher1@example.com",
    password: "123"
  },
  {
    id: 2,
    name: "Rohit Sinha",
    email: "teacher2@example.com",
    password: "123"
  },
  {
    id: 3,
    name: "Sunita Iyer",
    email: "teacher3@example.com",
    password: "123"
  },
  {
    id: 4,
    name: "Vikram Patel",
    email: "teacher4@example.com",
    password: "123"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    email: "teacher5@example.com",
    password: "123"
  }
];
export const setLocalStorage = ()=> {
   localStorage.setItem('students', JSON.stringify(studentsData));
   localStorage.setItem('teachers', JSON.stringify(teachersData));
}
export const getLocalStorage = ()=> {
   const dataStudent = JSON.parse(localStorage.getItem('students'));
   const dataTeacher = JSON.parse(localStorage.getItem('teachers'));
   return {dataStudent, dataTeacher};
}