import Swal from "sweetalert2";
export const useToast = () => {
  const toastSuccess = (message: string) => {
    Swal.fire({
      position: "bottom-left",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 100000,
    });
  };

  const toastWarning = (message: string) => {
    Swal.fire({
      position: "bottom-left",
      icon: "warning",
      title: message,
      showConfirmButton: false,
      timer: 10000,
    });
  };
  const toastError = () => {
    Swal.fire({
      position: "bottom-left",
      icon: "warning",
      title: "Ada Kesalahan",
      showConfirmButton: false,
      timer: 10000,
    });
  };

  return { toastError, toastWarning, toastSuccess };
};
