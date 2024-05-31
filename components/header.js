class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <header>
          
        <!-- Topbar Start -->
        <div class="container-fluid bg-dark px-5 d-none d-lg-block">
            <div class="row gx-0 align-items-center" style="height: 45px;">
                <div class="col-lg-8 text-center text-lg-start mb-lg-0">
                    <div class="d-flex flex-wrap">
                        <a href="#" class="text-light me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                        <a href="#" class="text-light me-4"><i class="fas fa-phone-alt text-primary me-2"></i>+91 7019342787</a>
                        <a href="#" class="text-light me-0"><i class="fas fa-envelope text-primary me-2"></i>info@alledge.in</a>
                    </div>
                </div>
                <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-flex align-items-center justify-content-end">
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-0"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
          <!-- Navbar & Hero Start -->
          <div class="container-fluid position-relative p-0">
              <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                  <a href="index.html" class="navbar-brand p-0">
                      <img src="img/logo.png" alt="Log..o" >
                      <a class="text-primary mb-0 h2" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold;">AllEdge Soft & Logic</a>
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                      <span class="fa fa-bars"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                      <div class="navbar-nav ms-auto py-0">
                          <a href="index.html" class="nav-item nav-link">Home</a>
                          <a href="about.html" class="nav-item nav-link">About</a>
                          <div class="nav-item dropdown">
                              <a href="service.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                              <div class="dropdown-menu m-0">
                              <a href="freightforwarding.html" class="dropdown-item">Freight Forwarding</a>
                              <a href="warehousing.html" class="dropdown-item">Warehousing</a>
                              <a href="distribution.html" class="dropdown-item">Distribution</a>
                              <a href="valueadded.html" class="dropdown-item">Value Added</a>
                              <a href="softwaredevelopment.html" class="dropdown-item">Software Development</a>
                              <a href="hardware.html" class="dropdown-item">Hardware Installations and Maintenance</a>
                          </div>
                          </div>
                          
                          <div class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                              <div class="dropdown-menu m-0">
                                  <a href="appointment.html" class="dropdown-item">Appointment</a>
                                  <a href="feature.html" class="dropdown-item">Features</a>
                                  <a href="blog.html" class="dropdown-item">Our Blog</a>
                                  <a href="team.html" class="dropdown-item">Our Team</a>
                              </div>
                          </div>
                          <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                      </div>
                      <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Appointment</a>
                  </div>
              </nav>
  
            
          </div>
          <!-- Navbar & Hero End -->
    

        </header>
        
      `;
      this.highlightActiveLink();
    }

    highlightActiveLink() {
        const navLinks = this.querySelectorAll('.navbar-nav .nav-link');
        const currentUrl = window.location.href.split(/[?#]/)[0]; // Removes query string or hash from the URL

        navLinks.forEach(link => {
            if (link.href === currentUrl) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('header-component', Header);


