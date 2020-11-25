import React from "react";

function Contact() {
    return (
    <div>
    {/* <!-- Contact Section --> */}
    <section class="page-section" id="contact">
        <div class="container">
            {/* <!-- Contact Section Heading--> */}
            <div class="text-center">
                <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
            </div>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Contact Section Content--> */}
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
                        <div class="text-muted">Phone</div>
                        <div class="lead font-weight-bold">404-954-2251</div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <div class="icon-contact mb-3"><i class="far fa-envelope"></i></div>
                        <div class="text-muted">Email</div><a class="lead font-weight-bold" href="mailto:NLBmakes@gmail.com">NLBmakes@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default Contact; 