import "bootstrap/dist/css/bootstrap.css";
import "./../../scss/session_details.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { database } from "./../../js/database.js";
import { headerApp } from "./../widgets/_header_app";
import {
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import moment from "moment";
import Chartist from "chartist";
import "chartist/dist/chartist.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { dialogTooltip, dialogWithTimer } from "../utils/_swal_dialogs";
moment.locale("en");
const auth = getAuth();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var session_id,
  session_patient,
  session_date,
  session_data = [],
  session_metrics = [];
let is_valid_user = false;
const loader_page = document.querySelector(".loader-page");
let session_date_dom = document.querySelector(".data-date");
let data_item_patient_dom = document.querySelectorAll(".data-text");
const metrics_results_dom = document.querySelector(".list-metrics-results");
let chart_crude_data = document.querySelector(".ct-crude-chart");
let chart_rrs_data = document.querySelector(".ct-rrs-chart");
const sesion_delete_button = document.querySelector(".btn-delete");
const btn_download_dom = document.querySelector(".btn-dowload");
let metrics_name = [
  "Promedio RR [ ms ]",
  "Promedio F.C [ LPM ]",
  "F.C Mínima [ LPM ]",
  "F.C Máxima [ LPM ]",
  "SDNN [ ms ]",
  "RMSSD [ ms ]",
  "NN50",
  "pNN50 [ % ]",
  "SD1 [ ms ]",
  "SD2 [ ms ]",
  "Pico B.F [ Hz ]",
  "Pico A.F [ Hz ]",
  "Potencia B.F [ ms² ]",
  "Potencia A.F [ m/s² ]",
  "Potencia Logarítmica B.F",
  "Potencia Logarítmica A.F",
  "% B.F [ % ]",
  "% A.F [ % ]",
  "Tasa de Potencia",
];

sesion_delete_button.addEventListener("click", async (e) => {
  if (is_valid_user) {
    Swal.fire({
      title: `¿Está seguro de borrar esta sesion?`,
      text: "No podra recuperarlas.",
      icon: "question",
      confirmButtonText: "continuar",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#2a95bf",
    }).then(async (confirm) => {
      if (session_id) {
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
      setTimeout(() => {
        window.location.assign("http://thealth.smarthinkscorp.com/herons");
      }, 3200);
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

btn_download_dom.addEventListener("click", () => {
  let session_name = session_patient.name;
  let consciousness =
    session_patient.consciousness != undefined
      ? session_patient.consciousness.split(".")[1]
      : "N/A";
  let covid =
    session_patient.covid != undefined
      ? session_patient.covid.split(".")[1]
      : "N/A";
  var session_xlsx_book = XLSX.utils.book_new();
  session_xlsx_book.Props = {
    Title: session_name,
  };
  session_xlsx_book.SheetNames.push("Paciente");
  var session_xlsx_patient = [
    ["Paciente", ""],
    ["Nombre", session_patient.name],
    ["Edad", `${session_patient.age}`],
    [
      "Frecuencia respiratoria",
      `${session_patient.breathFrecuency} breath/min`,
    ],
    ["Falla respiratoria hipercápnica", `${session_patient.hypercapneic}`],
    ["Oxígeno suplementario", `${session_patient.hypercapneic}`],
    ["Saturación de oxígeno", `${session_patient.onSuplementalOTwo}`],
    ["Saturación de oxígeno", `${session_patient.oTwoSaturation} %`],
    [
      "Presión sanguinea sistólica",
      `${session_patient.systolicBloodPressure} mmHg`,
    ],
    ["Nivel de conciencia", `${consciousness}`],
    ["Temperatura", `${session_patient.temperature} °C`],
    ["Paciente COVID", `${covid}`],
  ];

  var session_xlsx_data_patient = XLSX.utils.aoa_to_sheet(session_xlsx_patient);
  session_xlsx_book.Sheets["Paciente"] = session_xlsx_data_patient;

  session_xlsx_book.SheetNames.push("Sesión");
  var session_xlsx_datarray = [];
  for (let i = 0; i < session_data.crude.length; i++) {
    const element_crude = session_data.crude[i];
    const element_rss = session_data.rrs[i];
    session_xlsx_datarray.push({
      adquirido: element_crude,
      RR: element_rss,
    });
  }
  var session_xlsx_data = XLSX.utils.json_to_sheet(session_xlsx_datarray);
  session_xlsx_book.Sheets["Sesión"] = session_xlsx_data;

  session_xlsx_book.SheetNames.push("Metricas");
  var session_xlsx_metrics = [];
  if (Array.isArray(session_metrics)) {
    for (let i = 0; i < session_metrics.length; i++) {
      let metric_name_pos = metrics_name[i];
      let session_metric_pos = session_metrics[i];
      session_xlsx_metrics.push({
        Metrica: metric_name_pos,
        Valor: session_metric_pos,
      });
    }
  } else {
    let metrics_keys = Object.keys(session_metrics);
    let metrics_value = Object.values(session_metrics);
    for (let i = 0; i < metrics_keys.length; i++) {
      let metric_name_pos = metrics_name[i];
      let session_metric_pos = session_metrics[i];
      session_xlsx_metrics.push({
        Metrica: metric_name_pos,
        Valor: session_metric_pos,
      });
    }
  }
  var session_xlsx_metrics_data =
    XLSX.utils.json_to_sheet(session_xlsx_metrics);
  session_xlsx_book.Sheets["Metricas"] = session_xlsx_metrics_data;
  var session_export_xlsx = XLSX.write(session_xlsx_book, {
    bookType: "xlsx",
    type: "binary",
  });
  saveAs(
    new Blob([s2ab(session_export_xlsx)], { type: "application/octet-stream" }),
    `${session_name}.xlsx`
  );
  dialogTooltip(
    "top-end",
    3000,
    "success",
    "Iniciando la descarga del archivo"
  );
});

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
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

async function getSessionDetails(session_id) {
  const session_query = doc(database, "sessions", session_id);
  const session_doc = await getDoc(session_query);
  if (!session_doc.exists) {
    console.log("no doc width this id");
  }
  session_date = parseInt(session_doc.data().date);
  session_date_dom.innerHTML = moment(session_date).format(
    "DD MMM YYYY HH:mm:ss"
  );
  session_metrics = session_doc.data().metrics;
  destructDataMetrics(session_metrics);
  setMetaDataPatient(session_doc.data().patient);
  session_patient = session_doc.data().patient;
  session_data = {
    crude: session_doc.data().crudeData,
    rrs: session_doc.data().rrsData,
  };
  setResultsChart(chart_crude_data, session_doc.data().crudeData, "crude");
  setResultsChart(chart_rrs_data, session_doc.data().rrsData, "rrs");
  loader_page.classList.add("hide-loader");
}

function setMetaDataPatient(data) {
  console.log(data);
  let name = data.name;
  let age = data.age;
  let breathFrecuency = data.breathFrecuency ? data.breathFrecuency : "N/A";
  let hypercapneic = data.hypercapneic ? data.hypercapneic : "N/A";
  let onSuplementalOTwo = data.onSuplementalOTwo
    ? data.onSuplementalOTwo
    : "N/A";
  let oTwoSaturation = data.oTwoSaturation ? data.oTwoSaturation : "N/A";
  let systolicBloodPressure = data.systolicBloodPressure
    ? data.systolicBloodPressure
    : "N/A";
  let consciousness = data.consciousness ? data.consciousness : "N/A";
  let temperature = data.temperature ? data.temperature : "N/A";
  let covid = data.covid ? data.covid : "N/A";

  data_item_patient_dom[0].innerHTML = name;
  data_item_patient_dom[1].innerHTML = age;
  data_item_patient_dom[3].innerHTML = breathFrecuency + " breath/min";
  data_item_patient_dom[4].innerHTML = hypercapneic;
  data_item_patient_dom[5].innerHTML = onSuplementalOTwo;
  data_item_patient_dom[6].innerHTML = oTwoSaturation + " %";
  data_item_patient_dom[7].innerHTML = systolicBloodPressure + " mmHg";
  data_item_patient_dom[8].innerHTML = consciousness.split(".")[1];
  data_item_patient_dom[9].innerHTML = temperature + " °C";
  data_item_patient_dom[10].innerHTML = covid.split(".")[1];
}

function destructDataMetrics(metrics) {
  if (Array.isArray(metrics)) {
    for (let i = 0; i < metrics.length; i++) {
      metricCard(metrics_name[i], metrics[i]);
    }
  } else {
    let metrics_keys = Object.keys(metrics);
    let metrics_value = Object.values(metrics);
    for (let i = 0; i < metrics_keys.length; i++) {
      metricCard(metrics_keys[i], metrics_value[i]);
    }
  }
}

function metricCard(key, value) {
  const dom_card = `
        <div class="card-body flex-between-center">
            <p class="title-metric">${key}</p>
            <p class="value-metric">${value.toFixed(3)}</p>
        </div>
    `;
  const father_card = document.createElement("div");
  father_card.classList.add("card", "metric-card");
  father_card.innerHTML = dom_card;
  metrics_results_dom.appendChild(father_card);
}

function setResultsChart(dom_element, data_array, type) {
  let data = {
    labels: [],
    series: [[]],
  };

  for (let i = 0; i < data_array.length; i++) {
    const element = data_array[i];
    if (type == "rrs") {
      if (element != 0) {
        data.labels.push(i);
        data.series[0].push(element);
      }
    } else {
      data.labels.push(i);
      data.series[0].push(element);
    }
  }
  let chart_options = {
    width: type == "rrs" ? "100%" : data_array.length > 10000 ? 100000 : 20000,
    height: 500,
    chartPadding: {
      right: 40,
    },
    showLabels: false,
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 2,
    }),
  };

  new Chartist.Line(dom_element, data, chart_options);
}

window.onload = () => {
  loader_page.classList.remove("hide-loader");
  var session_id_query = urlParams.has("session_id");
  if (!session_id_query) {
    console.log("no id url param");
  }
  session_id = urlParams.get("session_id");
  getSessionDetails(session_id);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      is_valid_user = true;
      headerApp(await getUserProfile(user.uid), true);
    } else {
      headerApp(null, false);
    }
  });
};
