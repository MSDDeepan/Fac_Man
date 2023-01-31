<template>
    <div>
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
              <img  class="Image" src="https://cdn.dribbble.com/users/6147920/screenshots/14325672/media/82dc88c61fe3d073711706256023e7c6.jpg" width="400px" height="350px" style="position:relative;left:80px;bottom:10px;"> 
              <h1 class="fw-bold" style="position:relative;left:60px;bottom:20px;font-family:'Courier New', Courier, monospace">FACILTY MANAGEMENT</h1>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                       <h1> LOGIN</h1>
                      </div>
                    </div> 
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control" v-model="email"/>
                    <label class="form-label" for="form3Example3">Email address</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" class="form-control" v-model="password"/>
                    <label class="form-label" for="form3Example4">Password</label>
                  </div>
                  <button @click="Login" type="button" class="btn btn-primary btn-block mb-4">
                     Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </template>
    <script src="../js/LoginComponent.js">
    
    </script>
    <style>
        
      </style>