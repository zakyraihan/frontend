import { useToast } from "@/hook/useToast";
import { useRouter } from "next/navigation";
import { RegisterPayload, RegisterResponse } from "../interface/auth_interface";
import axiosClient from "@/lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

const useAuthModule = () => {
  const { toastSuccess, toastWarning, toastError } = useToast();
  const router = useRouter();

  const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    return axiosClient.post("/auth/register", payload).then((response) => response.data);
    };

  const useRegister = () => {
    const { mutate, isLoading } = useMutation(
      {
        mutationFn: (payload: RegisterPayload) => register(payload),
        onSuccess: (response) => {
          toastSuccess(response.message)
          router.push('auth/login')
        },
        onError: () => {
          toastError()
        }
      }
    );
    return {mutate, isLoading};
  };

  return {useRegister}
};

export default useAuthModule;
