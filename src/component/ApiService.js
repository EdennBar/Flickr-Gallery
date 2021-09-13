
import axios from 'axios';



const ApiService = {
    
    getImages: async (page) => {       
            const { data } = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1&page=${page}`);
               
            return data;      
    },
 
}

export default ApiService;



