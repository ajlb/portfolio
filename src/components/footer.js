import React from "react";

function Footer() {
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
                        {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="mb-4">LOCATION</h4>
                            <p class="pre-wrap lead mb-0">SanDiego, CA and Worldwide</p>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="mb-4">AROUND THE WEB</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/nlbhacks" target="_blank"><i class="fab fa-fw fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.hackerrank.com/armydillo007" target="_blank"><i class="fab fa-fw fa-hackerrank"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/njlambert/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.codewars.com/users/n-lambert" target="_blank"><i class="iconify" data-icon="simple-icons:codewars" data-inline="false"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/n-lambert" target="_blank"><i class="fab fa-fw fa-github"></i></a>
                        </div>
                        {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                            <h4 class="mb-4">Résumé/CV</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="./assets/Nancy-Lambert.pdf" target="_blank"><i class="far fa-fw fa-file-pdf"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Copyright Section--> */}
            <section class="copyright py-4 text-center text-white">
                <div class="container"><small class="pre-wrap">Copyright © NLBMakes 2020 </small></div>
            </section>
            {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
            <div class="scroll-to-top d-lg-none position-fixed"><a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>

        </div>
    )
}

export default Footer;