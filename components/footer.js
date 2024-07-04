class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

<Footer>

<!-- Footer Start -->
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h3 class="text-white mb-3">AllEdge Soft and Logic (OPC) Pvt. Ltd.</h3>
                            <p>#1074/230 1st main 1st Cross Subbanna Garden Behind
                                Adams English School Patelamma Layout Kadugodi PostBengaluru – 560067
                            </p>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-share fa-2x text-white me-2"></i>
                                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href="https://www.facebook.com/alledgesoftlogic"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn-square btn btn-primary text-white rounded-circle mx-1" href="https://www.linkedin.com/company/42840311/admin/inbox/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Quick Links</h4>
                            <a href="about.html"><i class="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="contact.html"><i class="fas fa-angle-right me-2"></i> Contact Us</a>
                            <a href="privacypolicy.html"><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="termsconditions.html"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href="blog.html"><i class="fas fa-angle-right me-2"></i> Our Blog & News</a>
                            <a href="team.html"><i class="fas fa-angle-right me-2"></i> Our Team</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">AllEdge Services</h4>
                            <a href="freightforwarding.html"><i class="fas fa-angle-right me-2"></i> Freight Forwarding</a>
                            <a href="warehousing.html"><i class="fas fa-angle-right me-2"></i> Warehousing</a>
                            <a href="freightforwarding.html"><i class="fas fa-angle-right me-2"></i> Customs Clearance</a>
                            <a href="distribution.html"><i class="fas fa-angle-right me-2"></i> Distribution</a>
                            <a href="softwaredevelopment.html"><i class="fas fa-angle-right me-2"></i> Cloud Services</a>
                            <a href="softwaredevelopment.html"><i class="fas fa-angle-right me-2"></i> Software Development</a>
                            <a href="hardware.html"><i class="fas fa-angle-right me-2"></i> IT Solutions</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Value Added</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Contact Info</h4>
                            <a href=""><i class="fas fa-envelope me-2"></i> info@alledge.in</a>
                            <a href=""><i class="fas fa-envelope me-2"></i> Shankar.k@alledge.in</a>
                            <a href=""><i class="fas fa-phone me-2"></i> +91 7019342787</a>
                            <a href="" class="mb-3"><i class="fas bi bi-whatsapp me-2"></i> +91 7019342787</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        
        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-white"><a href="#"><i class="fas fa-copyright text-light me-2"></i>AllEdge Soft & Logic (OPC) Pvt. Ltd.</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-white">
                        <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
                        <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
                        <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
                        <!--/***Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a class="border-bottom" href="https://themewagon.com">ThemeWagon</a>***/-->
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->
        </Footer>  
        `;
    }
  }
        customElements.define('footer-component', Footer);