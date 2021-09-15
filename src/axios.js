import axios from 'axios';

/**base url to make requests to the new api database*/
const instance=axios.create({
  baseURL:"https://newsapi.org/v2/",
});

export default  instance;