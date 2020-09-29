<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{url('/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{url('/css/owl.carousel.min.css')}}">
        <link rel="stylesheet" href="{{url('/css/flaticon.css')}}">
        <link rel="stylesheet" href="{{url('/css/price_rangs.css')}}">
        <link rel="stylesheet" href="{{url('/css/slicknav.css')}}">
        <link rel="stylesheet" href="{{url('/css/animate.min.css')}}">
        <link rel="stylesheet" href="{{url('/css/magnific-popup.css')}}">
        <link rel="stylesheet" href="{{url('/css/fontawesome-all.min.css')}}">
        <link rel="stylesheet" href="{{url('/css/themify-icons.css')}}">
        <link rel="stylesheet" href="{{url('/css/slick.css')}}">
        <link rel="stylesheet" href="{{url('/css/nice-select.css')}}">
        <link rel="stylesheet" href="{{url('/css/style.css')}}">
        
       

            
    </head>
    <body>
         <div id="preloader-active">
            <div class="preloader d-flex align-items-center justify-content-center">
                <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                        <img src="{{url('/img/logo/logo.png')}}" alt="">
                    </div>
                </div>
            </div>
      </div>
    <!-- Preloader Start -->
        <div id="root"></div>
        <div class="footer-bottom-area footer-bg">
            <div class="container">
                <div class="footer-border">
                     <div class="row d-flex justify-content-between align-items-center">
                         <div class="col-xl-10 col-lg-10 ">
                             <div class="footer-copy-right">
                                 <p>All rights reserved | Job Portal
                             </div>
                         </div>
                         <div class="col-xl-2 col-lg-2">
                             <div class="footer-social f-right">
                                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                                 <a href="#"><i class="fab fa-twitter"></i></a>
                                 <a href="#"><i class="fas fa-globe"></i></a>
                                 <a href="#"><i class="fab fa-behance"></i></a>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        <!-- Footer End-->
    </footer>
        <script src="{{mix('js/app.js')}}" ></script>
        <!-- All JS Custom Plugins Link Here here -->
        <script src="{{url('/js/vendor/modernizr-3.5.0.min.js')}}"></script>
        <!-- Jquery, Popper, Bootstrap -->
        <script src="{{url('/js/vendor/jquery-1.12.4.min.js')}}"></script>
        <script src="{{url('/js/popper.min.js')}}"></script>
        <script src="{{url('/js/bootstrap.min.js')}}"></script>
        <!-- Jquery Mobile Menu -->
        <script src="{{url('/js/jquery.slicknav.min.js')}}"></script>

        <!-- Jquery Slick , Owl-Carousel Plugins -->
        <script src="{{url('/js/owl.carousel.min.js')}}"></script>
        <script src="{{url('/js/slick.min.js')}}"></script>
        <script src="{{url('/js/price_rangs.js')}}"></script>
        
        <!-- One Page, Animated-HeadLin -->
        <script src="{{url('/js/wow.min.js')}}"></script>
        <script src="{{url('/js/animated.headline.js')}}"></script>
        <script src="{{url('/js/jquery.magnific-popup.js')}}"></script>

        <!-- Scrollup, nice-select, sticky -->
        <script src="{{url('/js/jquery.scrollUp.min.js')}}"></script>
        <script src="{{url('/js/jquery.nice-select.min.js')}}"></script>
        <script src="{{url('/js/jquery.sticky.js')}}"></script>
        
        <!-- contact js -->
        <script src="{{url('/js/contact.js')}}"></script>
        <script src="{{url('/js/jquery.form.js')}}"></script>
        <script src="{{url('/js/jquery.validate.min.js')}}"></script>
        <script src="{{url('/js/mail-script.js')}}"></script>
        <script src="{{url('/js/jquery.ajaxchimp.min.js')}}"></script>
        
        <!-- Jquery Plugins, main Jquery -->    
        <script src="{{url('/js/plugins.js')}}"></script>
        <script src="{{url('/js/main.js')}}"></script>
        
    </body>
</html>