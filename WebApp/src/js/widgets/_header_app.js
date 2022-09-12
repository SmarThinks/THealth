import { auth } from "../database";
import { dialogTooltip } from "./../utils/_swal_dialogs";
export function headerApp(user_data, isUserLogg) {
  const headerHTML = `
    <div class="wapper_header default flex-between-center">
        <h4 class="title-app">Herons Dashboard</h4>
        ${
          isUserLogg
            ? `
        <div class="user-container">
            <div class="wrapper flex-center">
            <div class="user-profile-pick">
                <img class="user-pick" alt="user-pick default" id="user-pick" src="${user_data.photo}" />
            </div>
            <div class="user-profile-data">
                <p class="user-profile-owner" id="user-owner">${user_data.name}</p>
                <p class="user-profile-type" id="user-type">${user_data.type}</p>
            </div>
            <div class="user-action-buttons">
                <span class="icon-action"
                ><i class="fas fa-question-circle"></i
                ></span>
                <span class="icon-action icon-logout"
                ><i class="fas fa-power-off"></i
                ></span>
            </div>
            </div>
        </div>`
            : `<div class="not-user-container" id="loging-button">
            <div class="wrapper flex-center">
                <p>Iniciar Sesión</p>
                <span class="icon-action"
                    ><i class="fas fa-long-arrow-alt-right"></i
                ></span>
            </div>
        </div>
        `
        }

    </div>
    `;
  const headerAppContainer = document.createElement("header");
  headerAppContainer.innerHTML = headerHTML;
  document.body.prepend(headerAppContainer);

  if (!isUserLogg) {
    let login_button = document.querySelector("#loging-button");
    login_button.addEventListener("click", () => {
      window.location.assign(
        `http://thealth.smarthinkscorp.com/herons/auth/login-panel.html`
      );
    });
  } else {
    let logout_button = document.querySelector(".icon-logout");
    logout_button.addEventListener("click", () => {
      auth.signOut();
      dialogTooltip("top-end", 3000, "success", "Sesión cerrada");
      window.location.reload();
    });
  }
}
