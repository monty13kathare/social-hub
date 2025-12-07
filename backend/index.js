import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import userPostRoutes from "./routes/userPost.routes.js";
import communityPostRoutes from "./routes/communityPost.routes.js";
import communityRoutes from "./routes/community.routes.js";

import { createServer } from "http"; 
import { Server } from "socket.io";

dotenv.config();

const app = express();
const httpServer = createServer(app); // create HTTP server for Socket.IO

const io = new Server(httpServer, {
  cors: {
    origin: "*", // for development, change this in production
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", userPostRoutes);
app.use("/api/community/post", communityPostRoutes);
app.use("/api/communities", communityRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is Running...");
});

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("Message:", data);
    io.emit("receiveMessage", data); // broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server using httpServer (NOT app.listen)
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
