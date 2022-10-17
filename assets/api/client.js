import { create } from "apisauce";
import Cache from "../utilities/cache";

const apiClient= create({
    baseURL: 'https://reqres.in/api',
})

const setCache= apiClient.get;
apiClient.get= async (url,params,axiosConfig) => {
    const response= await setCache(url, params, axiosConfig);
    if (response.ok){
        Cache.storeCache(url, response.data);
        return response;
    }
    const data= await Cache.getCache(url);
    return data ? {ok: true, data}: response;
}

export default apiClient;