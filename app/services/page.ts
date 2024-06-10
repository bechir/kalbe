import axios from "./api";

export function find(id: string): Promise<{ content: string }> {
    return axios.get(`/pages/${id}`, { cache: true }).then((res) => res.data);
}
