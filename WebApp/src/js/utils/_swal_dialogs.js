import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export function dialogWithConfirmation(title, text, icon, buttonText) {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: buttonText,
    confirmButtonColor: "#2a95bf",
  });
}

export async function dialogWithTimer(
  title,
  text,
  icon,
  timer,
  onConfirm,
  redirectionURL
) {
  let timerInterval;
  return await Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: timer,
    timerProgressBar: false,
    showConfirmButton: false,
    willClose: () => {
      clearInterval(timerInterval);
      if (onConfirm) {
        window.location.assign(redirectionURL);
      }
    },
  });
}
export function dialogTooltip(position, timer, icon, title) {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
}
