import React from "react";

function Sidebar(props) {
  return (
    <React.Fragment>
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a class="navbar-brand m-0" href="../../pages/dashboards/crm.html">
            <img
              src="../../assets/img/logo-ct-dark.png"
              class="navbar-brand-img"
              alt="main_logo"
            />
            <span class="ms-2 text-xxl font-weight-bold">Tremfya With Me</span>
          </a>
        </div>
        {/* <!--  User --> */}
        <hr class="horizontal dark" />
        <div
          class="collapse navbar-collapse w-auto h-auto"
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="../../pages/dev-pages/account/settings.html">
                <div class="nav-link p-3">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADea4I74_-_H7q-ze1cX7R_Tt761ZO-GsbAN9GtecMjcfw=s64-c-mo"
                    class="icon-shape shadow border-radius-lg text-center d-flex align-items-center justify-content-center p-1 me-2"
                  />
                  <div class="">
                    <span class="nav-link-text ms-1">Tyler Doyle</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          {/* <!--  Home --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#homePages"
                class="nav-link active p-3"
                aria-controls="dashboardsExamples"
                role="button"
                aria-expanded="true"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex bg-gradient-primary align-items-center justify-content-center me-2">
                  <i
                    class="fa-solid fa-house fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center"
                    aria-hidden="true"
                  ></i>
                </div>
                <span class="nav-link-text ms-1">Home</span>
              </a>
              <div class="collapse show" id="homePages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          href="../../pages/home/home-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/home/home-drivers.html"
                        >
                          <span class="sidenav-normal"> Drivers </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/home/home-engagement.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Sign Up --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#signUpPages"
                class="nav-link"
                aria-controls="pagesExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-pen-line fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Sign Up</span>
              </a>
              <div class="collapse" id="signUpPages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/signup/signup-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/signup/signup-conversion-drivers.html"
                        >
                          <span class="sidenav-normal"> Drivers </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/signup/signup-drivers.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/signup/signup-demographics.html"
                        >
                          <span class="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/signup/signup-hcp-performance.html"
                        >
                          <span class="sidenav-normal"> HCP Performance </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Enrollment --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#enrollmentPages"
                class="nav-link"
                aria-controls="applicationsExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-clipboard-user fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Enrollment</span>
              </a>
              <div class="collapse" id="enrollmentPages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/enrollment/enrollment-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/enrollment/enrollment-drivers.html"
                        >
                          <span class="sidenav-normal"> Drivers </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/enrollment/enrollment-engagement.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/enrollment/enrollment-demographics.html"
                        >
                          <span class="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/enrollment/enrollment-reasons.html"
                        >
                          <span class="sidenav-normal"> Reasons </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Fulfillment --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#fulfillmentPages"
                class="nav-link"
                aria-controls="ecommerceExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-prescription-bottle-medical fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Fulfillment</span>
              </a>
              <div class="collapse" id="fulfillmentPages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/fulfillment/fulfillment-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/fulfillment/fulfillment-engagement.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/fulfillment/fulfillment-demographics.html"
                        >
                          <span class="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Start Treatment --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#startTreatmentPages"
                class="nav-link"
                aria-controls="authExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-align-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-play fa-fw opacity-10 text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Start Treatment</span>
              </a>
              <div class="collapse" id="startTreatmentPages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/start-treatment/treatment-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/start-treatment/treatment-engagement.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/start-treatment/treatment-demographics.html"
                        >
                          <span class="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Keeping The Momentum --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#momentumPages"
                class="nav-link"
                aria-controls="basicExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-handshake-simple fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Momentum</span>
              </a>
              <div class="collapse" id="momentumPages">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/momentum/momentum-overview.html"
                        >
                          <span class="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/momentum/momentum-engagement.html"
                        >
                          <span class="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Manage Profile --> */}
            <li class="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#manageProfile"
                class="nav-link"
                aria-controls="basicExamples"
                role="button"
                aria-expanded="false"
              >
                <div class="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i class="fa-solid fa-building fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span class="nav-link-text ms-1">Manage</span>
              </a>
              <div class="collapse" id="manageProfile">
                <ul class="nav ms-4 ps-3">
                  <li class="nav-item">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/manage/manage-company.html"
                        >
                          <span class="sidenav-normal"> Manage Company </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/manage/manage-profile.html"
                        >
                          <span class="sidenav-normal"> Manage Profile </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/momentum/momentum-overview.html"
                        >
                          <span class="sidenav-normal"> Approvals </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../pages/momentum/momentum-engagement.html"
                        >
                          <span class="sidenav-normal"> Metrics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;