import React from 'react';
import { Box, Typography } from "@mui/material";

const ChatHistory = ({ setCurrentChat, currentChat }) => {
  const chatGroups = {
    Today: [
      {
        title: "Advanced Machine Learning Pipeline Design",
        messages: [
          {
            content: "I need help designing a ML pipeline for real-time image classification",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Here's a comprehensive approach to building a real-time ML pipeline:\n1. Data ingestion layer using Kafka\n2. Preprocessing with TensorFlow Data\n3. Model serving with TensorFlow Serving\n4. Load balancing with Kubernetes",
            role: "assistant",
            attachement: null,
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Here's my current architecture diagram",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "Cloud Native Architecture",
        messages: [
          {
            content: "How should I design a cloud-native application?",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "For cloud-native applications, consider:\n1. Containerization\n2. Service mesh\n3. Serverless architecture\n4. Event-driven design",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "Mobile App UX Design",
        messages: [
          {
            content: "Looking for modern mobile UI patterns",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Here are current mobile UX trends:\n1. Gesture-based navigation\n2. Dark mode\n3. Neumorphic design\n4. Microinteractions",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      }
    ],
    Yesterday: [
      {
        title: "DevOps Automation Pipeline",
        messages: [
          {
            content: "Need help with CI/CD automation",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Modern CI/CD pipeline should include:\n1. Infrastructure as Code\n2. Automated testing\n3. Security scanning\n4. Monitoring",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "Data Visualization Dashboard",
        messages: [
          {
            content: "Looking to create an analytics dashboard",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Effective dashboard design principles:\n1. Clear hierarchy\n2. Interactive elements\n3. Real-time updates\n4. Responsive layout",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      }
    ],
    "Last Week": [
      {
        title: "IoT System Architecture",
        messages: [
          {
            content: "Designing an IoT monitoring system",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Key components for IoT systems:\n1. Edge computing\n2. MQTT protocol\n3. Time-series database\n4. Real-time analytics",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "Blockchain Development",
        messages: [
          {
            content: "Help with DeFi smart contract architecture",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "DeFi architecture considerations:\n1. Gas optimization\n2. Security patterns\n3. Oracle integration\n4. Yield strategies",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1642006248419-7c2b311d862c?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      }
    ],
    "Last Month": [
      {
        title: "AR/VR Development",
        messages: [
          {
            content: "Building an AR shopping experience",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "AR shopping implementation:\n1. 3D model optimization\n2. Lighting estimation\n3. Surface detection\n4. Object tracking",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "API Security Implementation",
        messages: [
          {
            content: "Need to secure REST APIs",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "API security best practices:\n1. OAuth2 implementation\n2. Rate limiting\n3. Input validation\n4. JWT handling",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      }
    ],
    "Older": [
      {
        title: "Game Development Architecture",
        messages: [
          {
            content: "Designing a multiplayer game engine",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Game engine components:\n1. Physics engine\n2. Networking layer\n3. Asset management\n4. State synchronization",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      },
      {
        title: "Quantum Computing Applications",
        messages: [
          {
            content: "Exploring quantum algorithms for optimization",
            role: "user",
            attachement: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          },
          {
            content: "Quantum optimization approaches:\n1. Quantum annealing\n2. QAOA algorithm\n3. VQE implementation\n4. Error correction",
            role: "assistant",
            attachement: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&auto=format&fit=crop&q=60",
            isAudio: false,
            createdAt: new Date()
          }
        ]
      }
    ]
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
              onClick={() => setCurrentChat(chat)}
              sx={{
                fontSize: 15,
                color: currentChat?.title === chat.title ? "#007BFF" : "#4A4C4D",
                fontWeight: currentChat?.title === chat.title ? 500 : 400,
                mb: 0.75,
                cursor: 'pointer',
                py: 0.5,
                px: 1,
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                noWrap: true,
                backgroundColor: currentChat?.title === chat.title ? 'rgba(0,123,255,0.08)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0,123,255,0.08)',
                  color: '#007BFF',
                },
                '&:last-child': {
                  mb: 0
                }
              }}
            >
              {chat.title}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ChatHistory;