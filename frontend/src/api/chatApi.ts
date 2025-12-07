import axios from "axios";

const API_URL = "http://localhost:5000/api/chat";

// Create OR get existing direct chat
export const getOrCreateConversation = async (userId: string, receiverId: string) => {
  const { data } = await axios.post(`${API_URL}/conversations/direct`, { 
    userId, 
    otherUserId: receiverId 
  });
  return data;
};

// Get all conversations for user
export const getUserConversations = async (userId: string) => {
  const { data } = await axios.get(`${API_URL}/conversations/${userId}`);
  return data;
};

// Get conversation details by ID
export const getConversationById = async (conversationId: string) => {
  const { data } = await axios.get(`${API_URL}/conversations/id/${conversationId}`);
  return data;
};

// Get messages with pagination
export const getMessages = async (conversationId: string, limit = 50, before?: string) => {
  const query = `${API_URL}/messages/${conversationId}?limit=${limit}${before ? `&before=${before}` : ""}`;
  const { data } = await axios.get(query);
  return data;
};

// Mark messages as read
export const markMessagesAsRead = async (conversationId: string, userId: string) => {
  const { data } = await axios.post(`${API_URL}/messages/read`, { conversationId, userId });
  return data;
};

// Send message (supports text, emoji, file later)
export const sendMessage = async (conversationId: string, senderId: string, content: string, type="text") => {
  const { data } = await axios.post(`${API_URL}/messages/send`, {
    conversationId,
    senderId,
    content,
    type
  });
  return data;
};

// Delete message
export const deleteMessage = async (messageId: string, userId: string) => {
  const { data } = await axios.delete(`${API_URL}/messages/${messageId}`, {
    data: { userId }
  });
  return data;
};

// Add/remove emoji reaction
export const toggleReaction = async (messageId: string, userId: string, emoji: string) => {
  const { data } = await axios.put(`${API_URL}/messages/${messageId}/reaction`, {
    userId,
    emoji,
  });
  return data;
};
