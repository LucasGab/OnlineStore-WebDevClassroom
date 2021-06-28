import axios from "axios";

class UserService {
  async authenticateUser(user) {
    try {
      let response = await axios.post("/api/authenticate", user);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: { token: null, user: {} }, status: error.response.status };
    }
  }

  async createUser(user) {
    try {
      let response = await axios.post("/api/users", user);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }
}

export default new UserService();
