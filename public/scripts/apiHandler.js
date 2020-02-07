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
}
