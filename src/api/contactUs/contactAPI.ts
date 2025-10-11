import { ContactTimes } from '../../Types/ContactTimeType';
import { ContactsMsg } from '../../Types/apiTypes';
import axios from '../axios';
import { Endpoints } from '../endpoints';

type Data = {
    phone: string;
    name: string;
    time: ContactTimes;
    subject?: string;
    text?: string;
};

export const addContact = async (data: Data) => {
    const response = await axios.post(Endpoints.contactAdd, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    if (response.status === 200) {
        axios.post('https://curly-forest-6131.developer-476.workers.dev/', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const getAllContacts = async (): Promise<ContactsMsg[]> => {
    const response = await axios.get(Endpoints.getAllContacts);
    if (response.status === 200) {
        return response.data.getAllContact;
    } else {
        throw new Error(response.statusText);
    }
};

export const setContactStatus = async (id: string) => {
    const endpoint = Endpoints.setContactStatus(id);
    const response = await axios.get(endpoint);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
