import { Box, Typography } from "@mui/material";
import React from "react";

const ChatHistory = () => {
  const chatGroups = {
    Today: [
      "What is the best way to learn React?",
      "How to implement authentication in Node.js?",
      "Explain machine learning algorithms",
      "Best practices for responsive web design",
      "How to optimize database queries?",
      "Latest trends in artificial intelligence",
      "Debugging techniques in JavaScript",
      "What are design patterns?",
      "How to deploy on AWS?",
      "React Native vs Flutter comparison",
    ],
    Yesterday: [
      "Understanding blockchain technology",
      "Python vs JavaScript for beginners",
      "How to manage state in React?",
      "Best tools for web development",
      "SQL query optimization techniques",
      "Mobile app development guidelines",
      "Cloud computing fundamentals",
      "API security best practices",
    ],
    "Last Week": [
      "DevOps pipeline setup guide",
      "Microservices architecture explained",
      "Docker container management",
      "UI/UX design principles",
      "Testing strategies in software",
      "Git workflow best practices",
      "Database indexing techniques",
    ],
    "Last Month": [
      "Kubernetes deployment strategies",
      "Machine learning model training",
      "Web security fundamentals",
      "Frontend performance optimization",
      "Backend scalability techniques",
      "Data structures and algorithms",
      "System design principles",
      "CI/CD implementation guide",
    ],
    "Older": [
      "Software architecture patterns",
      "Code review guidelines",
      "Design system implementation",
      "Agile development practices",
      "Technical debt management",
      "Code optimization techniques",
      "Database design patterns",
    ],
  };

  return (
    <Box 
      sx={{ 
        mb: 2, 
        overflowY: "auto", 
        height: "calc(100% - 353px)",
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {Object.entries(chatGroups).map(([timeframe, chats]) => (
        <Box 
          key={timeframe} 
          sx={{
            mb: 2.5,
            '&:last-child': {
              mb: 0
            }
          }}
        >
          <Typography 
            fontWeight={500} 
            marginBottom={1}
            sx={{
              color: '#1a1a1a',
              fontSize: '0.95rem',
              position: 'sticky',
              top: 0,
              backgroundColor: '#fff',
              py: 0.5,
              zIndex: 1,
            }}
          >
            {timeframe}
          </Typography>
          {chats.map((chat, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 15,
                color: "#4A4C4D",
                fontWeight: 400,
                mb: 0.75,
                cursor: 'pointer',
                py: 0.5,
                px: 1,
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                noWrap: true,
                '&:hover': {
                  backgroundColor: 'rgba(0,123,255,0.08)',
                  color: '#007BFF',
                },
                '&:last-child': {
                  mb: 0
                }
              }}
            >
              {chat}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ChatHistory;