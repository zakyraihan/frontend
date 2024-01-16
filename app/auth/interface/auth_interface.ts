import { BaseResponseSucces } from "@/lib/axiosClient";

interface User {
  id?: number;
  nama: string;
  email: string;
  password: string;
}

export interface RegisterPayload extends Omit<User, "id"> {}

export interface RegisterResponse extends BaseResponseSucces {
    
}
