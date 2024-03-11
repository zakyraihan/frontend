import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useToast } from "@/hook/useToast";
import axiosClient from "@/lib/axiosClient";
import {
  LoginPayload,
  LoginResponse,
  LupaPasswordPayload,
  LupaPasswordResponse,
  ProfileResponse,
  RegisterPayload,
  RegisterResponse,
} from "../interface/auth_interface";
import { signIn } from "next-auth/react";

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const router = useRouter();
  const register = async (
    payload: RegisterPayload
  ): Promise<RegisterResponse> => {
    return axiosClient
      .post("/auth/register", payload)
      .then((res: any) => res.data);
  };

  const useRegister = () => {
    const { mutate, isLoading, isError, error } = useMutation({
      mutationFn: (payload: RegisterPayload) => register(payload),
      onSuccess: (response) => {
        toastSuccess(response.message);
        router.push("/auth/login");
      },
      onError: (error: any) => {
        if (error.response && error.response.status) {
          toastWarning(error.response.data.message);
        }
      },
    });

    return { mutate, isLoading, isError, error };
  };

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };

  const useLogin = () => {
    const router = useRouter();
    const { mutate, isLoading } = useMutation(
      (payload: LoginPayload) => login(payload),
      {
        onSuccess: async (response: any) => {
          console.log("response", response);
          await signIn("credentials", {
            id: response.data.id,
            name: response.data.nama,
            email: response.data.email,
            accessToken: response.data.access_token,
            role: response.data.role,
            refreshToken: response.data.refresh_token,
            redirect: false,
          });
          // await signIn("google");
          toastSuccess(response.message);

          if (response.data.role === "admin") {
            return router.push("/admin");
          } else {
            return router.push("/siswa");
          }
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );
    return { mutate, isLoading };
  };

  // Helper function for password recovery
  const lupaPassword = async (
    payload: LupaPasswordPayload
  ): Promise<LupaPasswordResponse> => {
    try {
      const response = await axiosClient.post("/auth/lupa-password", payload);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Hook for using password recovery functionality
  const useLupaPw = () => {
    const { mutate, isLoading, isError, error } = useMutation({
      mutationFn: (payload: LupaPasswordPayload) => lupaPassword(payload),
      onSuccess: (response) => {
        toastSuccess(response.message);
        // router.push("/auth/login");
      },
      onError: (error: any) => {
        if (error.response && error.response.status) {
          toastWarning(error.response.data.message);
        }
      },
    });

    return { mutate, isLoading, isError, error };
  };

  const resetPassword = async (
    payload: LupaPasswordPayload,
    id: string,
    token: string
  ): Promise<LupaPasswordResponse> => {
    try {
      const response = await axiosClient.post(
        `/auth/reset-password/${id}/${token}`,
        payload
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const useResetPassword = (id: string, token: string) => {
    const { mutate, isLoading, isError, error } = useMutation({
      mutationFn: (payload: LupaPasswordPayload) =>
        resetPassword(payload, id, token),
      onSuccess: (response) => {
        toastSuccess(response.message);
        router.push("/auth/login");
      },
      onError: (error: any) => {
        if (error.response && error.response.status) {
          toastWarning(error.response.data.message);
        }
      },
    });

    return { mutate, isLoading, isError, error };
  };

  const getProfile = async (): Promise<ProfileResponse> => {
    return axiosClient.get("/auth/profile").then((res) => res.data);
  };

  const useProfile = () => {
    const { data, isLoading, isFetching } = useQuery(
      ["/auth/profile"],
      () => getProfile(),
      {
        select: (response) => response,
        staleTime: 1000 * 60 * 60,
        refetchInterval: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
      }
    );

    return { data, isFetching, isLoading };
  };

  return { useRegister, useLogin, useProfile, useLupaPw, useResetPassword };
};

export default useAuthModule;
