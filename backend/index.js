import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import userPostRoutes from "./routes/userPost.routes.js";
import communityPostRoutes from "./routes/communityPost.routes.js";
import communityRoutes from "./routes/community.routes.js";

// import { createServer } from "http";
// import { Server } from "socket.io";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://social-hub-cd42.vercel.app/api",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

// Apply CORS middleware to handle cross-origin requests
app.use(cors(corsOptions));

// Preflight requests handling
// app.options("*", cors(corsOptions));

// Middleware
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
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("sendMessage", (data) => {
//     console.log("Message:", data);
//     io.emit("receiveMessage", data); // broadcast to all clients
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// Start server using httpServer (NOT app.listen)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
