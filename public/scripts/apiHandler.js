export default class apiHandler {
  constructor(url) {
    this.api = axios.create({
      baseURL: url
    });
  }

  async deleteSneaker(id, callback) {
    try {
      const deletedSneaker = await this.api.delete(`/sneakers/${id}/delete`);
      callback(deletedSneaker.data);
    } catch (error) {
      callback(error);
    }
  }

  async addTag(name, callback) {
    try {
      const addedTag = await this.api.post("/tags", { name: name });
      callback(addedTag.data);
    } catch (error) {
      callback(error);
    }
  }

  async getAllTags(callback) {
    try {
      const tags = await this.api.get("/tags");
      callback(tags.data);
    } catch (error) {
      callback(error);
    }
  }
}
