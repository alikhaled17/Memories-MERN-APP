import axios from 'axios';
import axsios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);