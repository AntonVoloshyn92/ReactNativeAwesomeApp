import axios, { AxiosInstance } from "axios";
import { Articles } from "../interfaces/NewsInterface";

class NewsService {
  constructor(
    private readonly url: string,
    private readonly asios: AxiosInstance
  ) {}

  public async getNewsDate() {
    try {
      const response = await this.asios.get<Articles>(this.url);
      if (response.data) {
        return { response: response.data };
      }
    } catch (err) {
      throw Error();
    }
  }
}

export default new NewsService(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca9dbb585bf54ea6a04a51bc7b48b2df",
  axios
);
