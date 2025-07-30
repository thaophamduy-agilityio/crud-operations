// Libs
import axios from "axios";

// Constants
import { endpoint } from '@constants/endpoint';

// Interface
import { IStudent } from "@interface/student";

// Utils
import { handleAxiosError } from "@utils/handle-axios-error";

const axiosInstance = axios.create({
    baseURL: `${endpoint.ENPOINT}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getStudent = async () => {
    try {
        const res = await axiosInstance.get<IStudent[]>(`/${endpoint.API_ROUTES}`);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
};

export const addNewStudent = async (data: Omit<IStudent, 'id'> | IStudent) => {
    try {
        const res = await axiosInstance.post<IStudent>(`/${endpoint.API_ROUTES}`, data);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export const updateStudent = async (data: IStudent, id: string ) => {
    try {        
        const res = await axiosInstance.put<IStudent>(`/${endpoint.API_ROUTES}/${id}`, data);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export const deleteStudent = async (id: string ) => {
    try {
        const res = await axiosInstance.delete<IStudent>(`/${endpoint.API_ROUTES}/${id}`);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}