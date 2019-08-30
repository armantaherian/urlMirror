const axios = require("axios");

async function request(url: string, config?: object, type: string = "get"): Promise<any> {
  if (!url) throw Error("You should provide an url to send the request!");

  return axios[type](url, config)
    .then((res: any) => res.data)
    .catch((error: any) => {
      console.error(error);
    });
}

export async function get(url: string, config?: object): Promise<any> {
  return request(url, config);
}

export async function post(url: string, config?: object): Promise<any> {
  return request(url, config, "post");
}
