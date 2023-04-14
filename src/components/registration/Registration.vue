<template>
  <div class="container">
    <div class="row">
      <div class="title col-6">
        <img src="@/assets/book.jpg" alt="book" />
        <div class="description">
          <h1>``</h1>
          <p>
            Those people who develop the ability to continuously acquire new and
            better forms of knowledge that they can apply to their work and to
            their lives will be the movers and shakers in our society for the
            indefinite future
            <br /><br />
            Brian Tracy
          </p>
          <div class="shape"></div>
        </div>
      </div>
      <div class="auth col-6 d-flex flex-column">
        <button class="btn back-btn d-flex align-items-center">
          <i class="fa-solid fa-chevron-left fa-sm" style="color: #8692a6"></i>
          <p>Back</p>
        </button>
        <form class="d-flex flex-column">
          <h1 class="register-text">Register to your Account</h1>
          <p class="register-description">register from your Email Address</p>
          <hr />
          <label for="email" class="email-text">Email address*</label>
          <input
            type="text"
            name="email"
            class="email"
            placeholder="Enter email address"
          /><br />
          <label for="password" class="password-text">Enter password*</label>
          <input
            type="text"
            name="password"
            class="password"
            placeholder="Password"
          /><br />
          <label for="password" class="password-text">Confirm password*</label>
          <input
            type="text"
            name="password"
            class="password"
            placeholder="Confirm password"
          /><br />
          <div class="remember-box d-flex flex-row align-items-center">
            <input type="checkbox" class="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">Remember my password</label><br /><br />
          </div>
          <button type="button" class="btn btn-active register-btn">register</button>
          <div class="line d-flex justify-content-center align-items-center">
            <hr width="100" />
            <p>Or</p>
            <hr width="100" />
          </div>
          <button class="btn d-flex justify-content-center align-items-center register-with-google">
            <img
              src="@/assets/google.png"
              alt="google"
              class="col-3"
            />
            <p class="col-10">register with Google</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style src="./registration.css" scoped></style>
