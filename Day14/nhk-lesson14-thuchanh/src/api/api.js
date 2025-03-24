import axios from "axios";

const API_URL = "https://67e106b758cc6bf78523ea53.mockapi.io/K23cnt3_NguyenHongKien/nguyenhongkiencnt3";

/**
 * Lấy danh sách users
 */
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("✅ Danh sách users:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Lỗi khi lấy danh sách users:", error.message);
    return [];
  }
};

/**
 * Lấy thông tin user theo ID
 */
export const getUser = async (NhkId) => {
  if (!NhkId || NhkId === "undefined" || NhkId.trim() === "") {
    console.error(`❌ Lỗi: ID không hợp lệ! (ID = ${NhkId})`);
    return null;
  }

  try {
    const response = await axios.get(`${API_URL}/${NhkId}`);
    console.log(`✅ Dữ liệu user ${NhkId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`❌ Lỗi khi lấy user ID ${NhkId}:`, error.message);
    return null;
  }
};

/**
 * Tạo user mới
 */
export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    console.log("✅ User đã được tạo:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Lỗi khi tạo user:", error.message);
    return null;
  }
};

/**
 * Cập nhật thông tin user
 */
export const updateUser = async (NhkId, user) => {
  if (!NhkId || NhkId === "undefined" || NhkId.trim() === "") {
    console.error(`❌ Lỗi: ID không hợp lệ! (ID = ${NhkId})`);
    return null;
  }

  try {
    const response = await axios.put(`${API_URL}/${NhkId}`, user);
    console.log(`✅ User ${NhkId} đã được cập nhật:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`❌ Lỗi khi cập nhật user ${NhkId}:`, error.message);
    return null;
  }
};

/**
 * Xóa user
 */
export const deleteUser = async (NhkId) => {
  if (!NhkId || NhkId === "undefined" || NhkId.trim() === "") {
    console.error(`❌ Lỗi: ID không hợp lệ! (ID = ${NhkId})`);
    return null;
  }

  try {
    await axios.delete(`${API_URL}/${NhkId}`);
    console.log(`✅ User ${NhkId} đã bị xóa.`);
    return true;
  } catch (error) {
    console.error(`❌ Lỗi khi xóa user ${NhkId}:`, error.message);
    return false;
  }
};
