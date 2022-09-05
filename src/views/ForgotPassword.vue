<template>
  <div class="reset-password">
    <modal-component
      v-if="modalActive"
      v-on:close-modal="closeModal"
      :modalMessage="modalMessage"
    ></modal-component>
    <loading-comp v-if="loading"></loading-comp>
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it..</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <div class="icon">
              <img src="../assets/Icons/envelope-regular.svg" />
            </div>
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import LoadingComp from "@/components/LoadingComp.vue";
import firebase from "firebase/compat/app";
export default {
  components: { ModalComponent, LoadingComp },
  name: "ForgotPassword",

  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },

  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your exists in our record, you will receive a reset link";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
