import { AxiosResponse } from "axios";
import { SmartFitApiResponse } from "../interfaces/SmartFitApiResponse";
import { axiosInstance } from "../libs/axios";

class SmartFitService {
  async getUnits() {
    const response: AxiosResponse<SmartFitApiResponse> = await axiosInstance.get("");

    return response.data.locations;
  }
}

export const smartFitService = new SmartFitService();
