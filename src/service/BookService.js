import http from "./http";
class BookService {
  async getFrontBooks() {
    try {
      let response = await http.get("/api/frontbooks");
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: [], status: error.response.status };
    }
  }

  async getBook(name) {
    try {
      let response = await http.get(`/api/book/${name}`);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return { data: {}, status: error.response.status };
    }
  }
}

export default new BookService();
