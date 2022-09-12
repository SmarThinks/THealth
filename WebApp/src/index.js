import "bootstrap/dist/css/bootstrap.css";

import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./scss/main.css";

import { database } from "./js/database.js";
import { headerApp } from "./js/widgets/_header_app";
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

import { sessionCard } from "./js/widgets/session_card";
import { dialogTooltip, dialogWithTimer } from "./js/utils/_swal_dialogs";

const auth = getAuth();
const loader_page = document.querySelector(".loader-page");
const patology_filter_dom = document.querySelector("#patology-filter");
const patient_filter_dom = document.querySelector("#patient-filter");
const date_filter_dom = document.querySelector("#date-filter");
const modal_filter_dom = document.querySelector(".modal-filter");
const modal_button_filter_dom = document.querySelector(".modal-button-close");
const search_input_dom = document.querySelector("#patient-search");
const summary_total_time_dom = document.querySelector("#total-time-sesions");
const summary_total_patients_dom = document.querySelector(
  "#total-pacient-sesions"
);
const summary_total_sessions_dom = document.querySelector(
  "#total-complete-sesions"
);
let patient_filter_title_dom,
  swiper_filter_dom,
  is_valid_user = false;
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let reader_sessions = [];
let onload_page = false;

const swiper_patology = new Swiper("#swiper-patology", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const swiper_patient = new Swiper("#swiper-patient", {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const swiper_date = new Swiper("#swiper-date", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

modal_button_filter_dom.addEventListener("click", () => {
  if (modal_filter_dom.classList.contains("modal-show")) {
    modal_filter_dom.classList.remove("modal-show");
  } else {
    modal_filter_dom.classList.add("modal-show");
  }
});

search_input_dom.addEventListener("input", (e) => {
  e.preventDefault();
  const input_value = e.target.value.toLowerCase();
  patient_filter_title_dom.forEach((element) => {
    let isValid = element.innerHTML.toLowerCase().includes(input_value)
      ? true
      : false;
    let parent_item = element.parentNode.parentNode;
    parent_item.classList.toggle("hide", !isValid);
  });
});

function setFilterSessionsData(data, dom_filter, filter_type) {
  let patology_filter = {},
    patology_sort = [],
    counter_lastest = 0,
    total_patient_counter = 0;
  data.forEach((document) => {
    if (filter_type == "lastest") {
      let server_time = moment();
      let session_time = document.date;
      counter_lastest++;
      if (counter_lastest < 7) {
        setModalFilterCards(filter_type, document);
      }
    } else if (filter_type == "date") {
      let data_month = months[moment(document.date).month()];
      patology_filter[data_month] = (patology_filter[data_month] || 0) + 1;
    } else {
      total_patient_counter += 1;
      let patient_name = document.patient.name;
      patology_filter[patient_name.toLowerCase().trim()] =
        (patology_filter[patient_name.toLowerCase().trim()] || 0) + 1;
      summary_total_patients_dom.innerHTML =
        Object.keys(patology_filter).length;
    }
  });

  for (const key in patology_filter) {
    if (Object.hasOwnProperty.call(patology_filter, key)) {
      const element = patology_filter[key];
      patology_sort.push([key, element]);
    }
  }

  patology_sort.forEach((element) => {
    let filter_card_template = `
    <div class="content flex-center-start">
      <h4 class="filter-title" id="${filter_type}-title">${element[0]}</h4>
      <div class="metadata-filter flex-center-start">
        <div class="metadata-item"><small>Cantidad:</small> ${element[1]}</div>
      </div>
      <div class="filter-actions flex-start-center">
        <button class="btn btn-details" id="modal-${filter_type}-${element[0].toLowerCase()}">Ver todas</button>
        <button class="btn btn-delete" id="delete-${filter_type}-${element[0].toLowerCase()}">Borrar</button>                       
      </div>
    </div>
    `;
    const filter_card = document.createElement("div");
    filter_card.classList.add(
      "filter-item",
      "swiper-slide",
      `filter-${filter_type}`
    );
    filter_card.innerHTML = filter_card_template;
    dom_filter.appendChild(filter_card);

    let modal_filter_button = document.getElementById(
      `modal-${filter_type}-${element[0].toLowerCase()}`
    );

    modal_filter_button.addEventListener("click", () => {
      if (modal_filter_dom.classList.contains("modal-show")) {
        modal_filter_dom.classList.remove("modal-show");
      } else {
        document.querySelector(".modal-title").innerHTML = element[0];
        modal_filter_dom.classList.add("modal-show");
        setModalFilterCards(filter_type, element[0]);
      }
    });

    let delete_sessions = document.getElementById(
      `delete-${filter_type}-${element[0].toLowerCase()}`
    );
    delete_sessions.addEventListener("click", () => {
      if (is_valid_user) {
        Swal.fire({
          title: `¿Está seguro de borrar la coleccion de sesiones de ${element[0]}?`,
          text: "No podra recuperarlas.",
          icon: "question",
          confirmButtonText: "continuar",
          confirmButtonColor: "red",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          cancelButtonColor: "#2a95bf",
        }).then((confirm) => {
          reader_sessions.forEach(async (document) => {
            if (filter_type == "patology") {
              if (document.patient.patology == element[0]) {
                let id = document.id;
                const session_query = await deleteDoc(
                  doc(database, "sessions", id)
                );
              }
            } else if (filter_type == "patient") {
              if (document.patient.name.toLowerCase() == element[0]) {
                let id = document.id;
                const session_query = await deleteDoc(
                  doc(database, "sessions", id)
                );
              }
            }
          });
          dialogTooltip(
            "top-end",
            3000,
            "success",
            "Se han eliminado las sesiones con exito"
          );
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
  });
  patient_filter_title_dom = document.querySelectorAll("#patient-title");
  swiper_filter_dom = document.querySelectorAll("#filter-patient");
}

function setModalFilterCards(filter_type, element) {
  document.querySelector(".grid-modal-filter").innerHTML = "";
  console.log(filter_type);
  if (filter_type == "lastest") {
    reader_sessions.forEach((document) => {
      if (document == element) {
        sessionCard(document, true, is_valid_user);
      }
    });
  } else if (filter_type == "patient") {
    reader_sessions.forEach((document) => {
      if (document.patient.name.toLowerCase().trim() == element) {
        sessionCard(document, false, is_valid_user);
      }
    });
  } else if (filter_type == "date") {
    reader_sessions.forEach((document) => {
      if (months[moment(document.date).month()] == element) {
        sessionCard(document, false, is_valid_user);
      }
    });
  }
}

async function getAllSessions() {
  let sessions_counter = 0;
  const session_query = query(
    collection(database, "sessions"),
    orderBy("date", "asc")
  );

  const unsubscribe = onSnapshot(session_query, (snapshot) => {
    let reader_data_array = [],
      total_sesions_time = 0,
      total_sessions = 0;
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added" || change.type === "modified") {
        total_sessions += 1;
        total_sesions_time += change.doc.data().session_time;
        summary_total_time_dom.innerHTML = `${(
          total_sesions_time / 3600
        ).toFixed(2)}`;
        summary_total_sessions_dom.innerHTML = total_sessions;
        reader_data_array.unshift(change.doc.data());
        reader_sessions = reader_data_array;
      }
      if (change.type === "removed") {
        let id = change.doc.data().id;
        for (let i = 0; i < reader_sessions.length; i++) {
          const element = reader_sessions[i];
          if (element.id === id) {
            reader_sessions.splice(i, 1);
            summary_total_sessions_dom.innerHTML = reader_sessions.length;
            break;
          }
        }
        date_filter_dom.innerHTML = "";
        patient_filter_dom.innerHTML = "";
        reader_data_array = reader_sessions;
      }
    });
    setFilterSessionsData(reader_data_array, patology_filter_dom, "lastest");
    setFilterSessionsData(reader_data_array, patient_filter_dom, "patient");
    setFilterSessionsData(reader_data_array, date_filter_dom, "date");
    loader_page.classList.add("hide-loader");
  });
}
async function getUserProfile(userId) {
  let user_login = {};
  const user_query = query(
    collection(database, "users"),
    where("uid", "==", userId)
  );
  const querySnapshot = await getDocs(user_query);
  querySnapshot.forEach((doc) => {
    user_login = doc.data();
  });
  return user_login;
}
const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
window.onload = () => {
  loader_page.classList.remove("hide-loader");
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      is_valid_user = true;
      headerApp(await getUserProfile(user.uid), true);
    } else {
      headerApp(null, false);
    }
  });
  getAllSessions();
};
