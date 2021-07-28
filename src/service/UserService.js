import http from "./http";

class UserService {
  async authenticateUser(user) {
    try {
      let response = await http.post("api/auth/sign_in", user);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: { token: null, user: {} }, status: error.response.status };
    }
  }

  async createUser(user) {
    try {
      let response = await http.post("api/auth/register", user);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }
}

export default new UserService();
