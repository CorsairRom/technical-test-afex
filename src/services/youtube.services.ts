import axios from 'axios';
import { YoutubeResponse, Item, Snippet, Thumbnails } from "../interfaces/InterfaceMin";


export const getData = async (idVideo: string) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${idVideo}&key=AIzaSyA-LIOov3NxzdsCoJs_rvH3Z3UXWSQ0oP4&part=snippet`);
        const data: YoutubeResponse = response.data;
        const itemResponse: Item = data.items[0];
        const snippetResponse: Snippet = itemResponse.snippet;
        const thumbResponse: Thumbnails = snippetResponse.thumbnails;
        console.log(thumbResponse);
        return snippetResponse

    } catch (error) {
        console.error(error);
    }
};