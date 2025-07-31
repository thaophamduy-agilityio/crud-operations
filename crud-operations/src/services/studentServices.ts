// Constants
import { API } from '@constants/api';

// Interface
import { IStudent } from "@interface/student";

// Utils
import { handleAxiosError } from "@utils/handle-axios-error";

// Services
import { axiosInstance } from "@services/axiosInstance";

export const getStudent = async () => {
    try {
        const res = await axiosInstance.get<IStudent[]>(API.ENPOINT);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
};

export const addNewStudent = async (data: Omit<IStudent, 'id'> | IStudent) => {
    try {
        const res = await axiosInstance.post<IStudent>(API.ENPOINT, data);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export const updateStudent = async (data: IStudent, id: string ) => {
    try {        
        const res = await axiosInstance.put<IStudent>(`${API.ENPOINT}/${id}`, data);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export const deleteStudent = async (id: string ) => {
    try {
        const res = await axiosInstance.delete<IStudent>(`${API.ENPOINT}/${id}`);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}