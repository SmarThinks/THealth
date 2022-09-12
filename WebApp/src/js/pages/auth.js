import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../../scss/auth.css";
import {
  dialogWithConfirmation,
  dialogWithTimer,
} from "./../utils/_swal_dialogs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { auth, database } from "../database";

const input_email = document.querySelector("#input_mail_user");
const input_pass = document.querySelector("#input_pass_user");
const button_form = document.querySelector("#login-btn");
const loader_content_dom = document.querySelector(".overlay-loading");
const reg_email =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
let is_valid_email = false,
  is_valid_pass = false,
  is_valid_user = false;
input_email.addEventListener("keydown", (e) => {
  const input_value = e.target.value.toLowerCase();
  if (!reg_email.test(input_value)) {
    is_valid_email = false;
  } else {
    is_valid_email = true;
  }
});

input_pass.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    console.log("enter event");
    formValidation();
  }
  const input_value = e.target.value;
  if (input_value.length < 8) {
    is_valid_pass = false;
  } else {
    is_valid_pass = true;
  }
});

button_form.addEventListener("click", (e) => {
  formValidation();
});

function formValidation() {
  if (input_email.value == "") {
    dialogWithTimer(
      "¡Algo salió mal!",
      "El campo correo es obligatorio",
      "error",
      2000
    );
  } else if (!is_valid_email) {
    dialogWithTimer(
      "¡Algo salió mal!",
      "El campo correo no es valido",
      "error",
      2000
    );
  } else if (input_pass.value == "") {
    dialogWithTimer(
      "¡Algo salió mal!",
      "El campo contraseña es obligatorio",
      "error",
      2000
    );
  } else if (!is_valid_pass) {
    dialogWithTimer(
      "¡Algo salió mal!",
      "El campo contraseña no es valido",
      "error",
      2000
    );
  } else {
    goToSingIn();
  }
}

function goToSingIn() {
  loader_content_dom.classList.add("show-loader");
  let email = input_email.value;
  let pass = input_pass.value;
  signInWithEmailAndPassword(auth, email, pass)
    .then((user) => {
      const userCredentials = user.user;
      dialogWithTimer(
        "¡Inicio de sesión completo!",
        "Bienvenido Admin, será redirigido a el dashboard",
        "success",
        2000,
        true,
        "http://thealth.smarthinkscorp.com/herons"
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      let error_mesaje = "";
      if (errorCode == "auth/user-not-found") {
        error_mesaje =
          "El correo ingresado no corresponde a ninguna cuenta, intente de nuevo";
      } else if (errorCode == "auth/wrong-password") {
        error_mesaje =
          "La contraseña de este correo no es correcta, intente de nuevo";
      }
      dialogWithConfirmation(
        "¡Algo salió mal!",
        error_mesaje,
        "error",
        "Cerrar"
      );
    });
  loader_content_dom.classList.remove("show-loader");
}
//herons_admin_1234
