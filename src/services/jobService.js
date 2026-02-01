import axios from "axios";


const API_URL = "http://localhost:8080/api/job";

const getAlljobs = () => axios.get(API_URL);
const getJobById = (id) => axios.getById(`${API_URL, id}`);
const createJob = (job) => axios.post(`${API_URL, job}`);
const editJob = (id, job) => axios.put(`${API_URL, job}`, id);
const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);
