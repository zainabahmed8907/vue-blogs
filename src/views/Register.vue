<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'BlogsLogin' }"
          >Login</router-link
        >
      </p>
      <h2>Register to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="e.g John" v-model="firstName" />
          <div class="icon">
            <img src="../assets/Icons/user-alt-light.svg" />
          </div>
        </div>
        <div class="input">
          <input type="text" placeholder="e.g. Doe" v-model="lastName" />
          <div class="icon">
            <img src="../assets/Icons/user-alt-light.svg" />
          </div>
        </div>
        <div class="input">
          <input type="text" placeholder="e.g. johndoe11" v-model="userName" />
          <div class="icon">
            <img src="../assets/Icons/user-alt-light.svg" />
          </div>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <div class="icon">
            <img src="../assets/Icons/envelope-regular.svg" />
          </div>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <div class="icon">
            <img src="../assets/Icons/lock-alt-solid.svg" />
          </div>
        </div>
        <div class="error" v-if="error">
          {{ this.errorMessage }}
        </div>
      </div>

      <button class="sign-in" @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "BlogsRegister",

  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: false,
      errorMessage: "",
    };
  },

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.userName !== "" &&
        this.firstName !== "" &&
        this.lastName !== ""
      ) {
        this.error = false;
        this.errorMessage = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        console.log(result.user.email);
        const dataBase = db.collection("users").doc(result.user.uid);

        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.userName,
          email: this.email,
        });
        this.$router.push({ name: "BlogsLogin" });
        return;
      }
      this.error = true;
      this.errorMessage = "Please fill out all the fields";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;
    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .inputs {
      width: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }
    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }
    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
