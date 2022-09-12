import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { database } from "./../../js/database.js";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { dialogWithTimer } from "../utils/_swal_dialogs.js";
moment.locale("es");

const dom_content = document.querySelector(".grid-modal-filter");
const patology_filter_dom = document.querySelector("#patology-filter");

export function sessionCard(data, isForDashboard, isValidUser) {
  let session_id = data.id;
  let session_date = moment(data.date).format("MMMM DD, YYYY");
  let sesson_time = data.session_time;
  let session_patient = data.patient;
  const dom_session_card = `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${session_patient.name}</h4>
        <div class="card-metadata flex-between-center">
          <p class="card-time">${session_date}</p>
          <div class="metadata-session flex-center">
            <div class="metadata-item">
              <div class="wrapper">
                <div class="data-item">${sesson_time / 60} min.</div>
                <div class="data-tooltip"><span>Duración</span></div>
              </div>
            </div>
            <div class="metadata-item">
              <div class="wrapper">
                <div class="data-item">${session_patient.age}</div>
                <div class="data-tooltip"><span>Edad</span></div>
              </div>           
            </div>
          </div>
        </div>          
        <div class="card-actions flex-start-center">
          <button class="btn btn-details" id="details-${session_id}">Detalles</button>
          <button class="btn btn-delete" id="delete-${session_id}">Borrar</button>
        </div>
      </div>
    </div>
    `;
  const card_father = document.createElement("div");
  if (isForDashboard) {
    card_father.classList.add("swiper-slide", "single-card", "flex-center");
    card_father.innerHTML = dom_session_card;
    card_father.id = session_id;
    patology_filter_dom.appendChild(card_father);
  } else {
    card_father.classList.add("single-card", "flex-center");
    card_father.innerHTML = dom_session_card;
    card_father.id = session_id;
    dom_content.appendChild(card_father);
  }
  if (session_id != undefined) {
    let details_button = document.getElementById(
      `details-${session_id.trim()}`
    );
    let delete_button = document.getElementById(`delete-${session_id.trim()}`);
    details_button.addEventListener("click", (e) => {
      window.location.assign(
        `http://thealth.smarthinkscorp.com/herons/sessions/details.html?session_id=${session_id}`
      );
    });
    delete_button.addEventListener("click", async (e) => {
      if (isValidUser) {
        Swal.fire({
          title: `¿Está seguro de borrar la coleccion de sesiones de ${session_patient.name}?`,
          text: "No podra recuperarlas.",
          icon: "question",
          confirmButtonText: "continuar",
          confirmButtonColor: "red",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          cancelButtonColor: "#2a95bf",
        }).then(async (confirm) => {
          if (confirm) {
            const session_query = await deleteDoc(
              doc(database, "sessions", session_id)
            );
          }

          dialogTooltip(
            "top-end",
            3000,
            "success",
            "Se han eliminado las sesiones con exito"
          );
          document
            .querySelector(".modal-filter")
            .classList.remove("modal-show");
        });
      } else {
        dialogWithTimer(
          "No se puede completar la operación",
          "No cuenta con los permisos de administrador para borrar sesiones",
          "error",
          5000
        );
      }
    });
  }
}
