// Libs
import axios, { AxiosResponse } from "axios";

// Constants
import { endpoint } from '@constants/endpoint';

// Interface
import { IStudent } from "@interface/student";

// Get students
export const getData = <T>(url: string): Promise<AxiosResponse<T, string>> => axios.get<T>(url);

export const getStudent = async (): Promise<IStudent[] | undefined> => {
    const res = await getData<IStudent[]>(`${endpoint.ENPOINT}/${endpoint.API_ROUTES}`);

    try {
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Add student
export const addNewStudent = async (data: Omit<IStudent, 'id'> | IStudent) => {
    return await axios.post<IStudent>(`${endpoint.ENPOINT}/${endpoint.API_ROUTES}`, data);
}

// Edit student
export const updateStudent = async (data: IStudent, id: string ) => {
    return await axios.put<IStudent>(`${endpoint.ENPOINT}/${endpoint.API_ROUTES}/${id}`, data);
}

// Delete student
export const deleteStudent = async (id: string ) => {
    return await axios.delete<IStudent>(`${endpoint.ENPOINT}/${endpoint.API_ROUTES}/${id}`);
}