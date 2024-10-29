import React from "react";
import { Box } from "@mui/material";
import { PlayCircleRounded } from "@mui/icons-material";
import Actions from "./Actions";
import logo from "../../assets/logo1.svg";
import waveform from "../../assets/waveform.svg";

const Messages = ({ messages = [] }) => {
  return (
    <Box>
      {messages?.map((msg, idx) => (
        <Box
          key={idx}
          marginBottom={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            justifyContent: msg?.role === "user" ? "flex-end" : "flex-start",
          }}
        >
          {msg?.role === "assistant" && <img src={logo} alt="logo" />}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: msg?.role === "user" ? "flex-end" : "flex-start",
              gap: 1,
            }}
          >
            {msg?.attachement && !msg?.isAudio && (
              <img
                src={msg?.attachement}
                style={{ borderRadius: "10px", width: "200px" }}
                alt="attachment"
              />
            )}
            {msg?.content && (
              <Box
                component="pre"
                sx={{
                  p: 1,
                  bgcolor: "#f5f5f5",
                  borderRadius: "10px",
                  width: "fit-content",
                  maxWidth: "80%",
                  textWrap: "wrap",
                  border: "1px solid #E9ECEF",
                }}
              >
                {msg?.content}
              </Box>
            )}
            {msg?.isAudio && (
              <Box
                component="pre"
                sx={{
                  p: 1,
                  bgcolor: "#f5f5f5",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PlayCircleRounded color="info" sx={{ cursor: "pointer" }} />
                <img src={waveform} alt="waveform" />
                <span>0:05</span>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {msg?.role === "assistant" && <Actions />}
              <span style={{ fontSize: "12px" }}>
                {new Date(msg?.createdAt).toLocaleTimeString()}
              </span>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
