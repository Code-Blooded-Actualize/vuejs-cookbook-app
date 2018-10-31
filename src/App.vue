<template>
  <div id="app">
    <!-- Navigation Start -->
    <nav id="navigation" class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
            <div class="navbar-header d-lg-none">
                <a class="navbar-brand page-scroll" href="#page-top">BERG</a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-berg" aria-controls="navbar-berg" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <!-- //.navbar-header -->
            
            <div class="navbar-collapse collapse justify-content-center" id="navbar-berg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#resume">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#references">References</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- //.navbar-collapse -->
        </div>
        <!-- //.container -->
    </nav>
    <!-- //Navigation End -->

      <router-view/>

    <!-- Footer End -->
    <footer class="bg-gray-dark">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <ul class="m-0 p-0">
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-facebook ease"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-twitter ease"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-linkedin ease"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-dribbble ease"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-instagram ease"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" target="_blank" class="bg-gray-2 box-shadow-wide rounded text-white text-extra-large">
                                <i class="fa fa-pinterest ease"></i>
                            </a>
                        </li>
                    </ul>
                    
                    <p class="m-0 mt-4 text-gray text-medium">&copy; 2017 Nick Berg. All rights reserved.</p>
                </div>
                <!-- //.col -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </footer>
    <!-- //Footer End -->

  </div>
</template>

<style>
  
</style>
