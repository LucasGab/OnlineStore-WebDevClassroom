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

  async modifyUser(user_id, body, token) {
    try {
      let response = await http.patch(`api/user/${user_id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }

  async addWishList(book_id, token) {
    try {
      let response = await http.post(
        "api/wishList",
        { book_id: book_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }

  async getWishList(token) {
    try {
      let response = await http.get("api/wishList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }

  async deleteWishList(book_id, token) {
    try {
      let response = await http.delete(`api/wishList/${book_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }
}

export default new UserService();
