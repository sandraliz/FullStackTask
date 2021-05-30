import axios, { AxiosResponse } from 'axios';
import { ICustomer} from '../models/customers';

axios.defaults.baseURL = 'http://localhost:5000/';

const responseBody = (response: AxiosResponse) => response.data;


const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody)
};

const Customers = {
    list: (): Promise<ICustomer[]> => requests.get('/customers'),
    details: (id: string) => requests.get(`/customers/${id}`),
    create: (customer: ICustomer) => requests.post('/customers', customer),
    update: (customer: ICustomer) => requests.put(`/customers/${customer.customer_id}`, customer)
};

export default Customers;