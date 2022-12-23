import { http } from "./config";

export default {
  get: () => {
    return http.get("orders");
  },
};
