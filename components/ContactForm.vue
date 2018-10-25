<template>
  <form
    class="form__element"
    @submit.prevent="submit">
    <div
      :class="{'form-group_white': name}"
      class="form-group">
      <label
        for="name"
        class="form-group__label">Name                      
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-group__input">
      </label>
      <div
        v-if="errors.name.required"
        class="form-group__meassage">Name is required</div>
    </div>
    <div
      :class="{'form-group_white': phone}"
      class="form-group">
      <label
        for="phone"
        class="form-group__label">Phone                      
        <input
          id="phone"
          v-model="phone"
          name="phone"
          type="tel"
          class="form-group__input">
      </label>
      <div
        v-if="errors.phone.required"
        class="form-group__meassage">Phone is required</div>
      <div
        v-if="errors.phone.invalid && !errors.phone.required"
        class="form-group__meassage">Please enter correct phone</div>
    </div>
    <div
      :class="{'form-group_white': mail}"
      class="form-group">
      <label
        for="mail"
        class="form-group__label">E-mail                      
        <input
          id="mail"
          v-model="mail"
          name="mail"
          type="text"
          class="form-group__input">
      </label>
      <div
        v-if="errors.mail.required"
        class="form-group__meassage">E-mail is required</div>
      <div
        v-if="errors.mail.invalid && !errors.mail.required"
        class="form-group__meassage">Please enter correct e-mail</div>
    </div>
    <div
      :class="{'form-group_white': agree}"
      class="form-group form-group_no-border">
      <label
        for="agree"
        class="form-group__label">                 
        <input
          id="agree"
          v-model="agree"
          name="agree"
          type="checkbox"
          class="form-group__input form-group__input_right-margin">I agree the processing of personal data
      </label>
      <div
        v-if="errors.agree.required"
        class="form-group__meassage">Permission is required</div>
    </div>
    <button
      :disabled="formStatus != 'waiting'"
      class="form__submit"
      type="submit">
      <span
        :class="[formStatus == 'waiting' ? 'submit__status_active' : '']"
        class="submit__status">get in touch</span>
      <span
        :class="[formStatus == 'submitting' ? 'submit__status_active' : '']"
        class="submit__status submit__status_abs">
        <img
          class="loading"
          src="@/static/spinner.svg"
          alt="loading">
      </span>
      <span
        :class="[formStatus == 'success' ? 'submit__status_active' : '']"
        class="submit__status submit__status_abs">
        <img
          class="success"
          src="@/static/success.svg"
          alt="success">
      </span>
      <span
        :class="[formStatus == 'error' ? 'submit__status_active' : '']"
        class="submit__status submit__status_abs">
        <img
          class="error"
          src="@/static/error.svg"
          alt="error">
      </span>
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      phone: "",
      mail: "",
      agree: "",
      errors: {
        name: {
          required: false,
          invalid: false
        },
        phone: {
          required: false,
          invalid: false
        },
        mail: {
          required: false,
          invalid: false
        },
        agree: {
          required: false
        }
      },
      formStatus: "waiting"
    }
  },
  methods: {
    submit: function() {
      let formInvalid = false;
      let phoneRegExp = /^[0-9\+]{1,}[0-9\-]{3,15}$/;
      let mailRegExp = /[^@]+@[^\.]+\..+/;

      this.errors = {
        name: {
          required: false,
          invalid: false
        },
        phone: {
          required: false,
          invalid: false
        },
        mail: {
          required: false,
          invalid: false
        },
        agree: {
          required: false
        }
      }

      if (!this.name) {
        this.errors.name.required = true;
        formInvalid = true;
      };
      if (!this.phone) {
        this.errors.phone.required = true;
        formInvalid = true;
      };
      if (!this.mail) {
        this.errors.mail.required = true;
        formInvalid = true;
      };
      if (!this.agree) {
        this.errors.agree.required = true;
        formInvalid = true;
      };

      this.errors.phone.invalid = !phoneRegExp.test(this.phone);
      this.errors.mail.invalid = !mailRegExp.test(this.mail);

      if (this.errors.phone.invalid || this.errors.mail.invalid) {
        formInvalid = true;
      }

      if (!formInvalid) {
        this.formStatus = 'submitting';

        let self = this;
        let d = new Date();
        let options = {
          era: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };

        axios.post(
          "http://httpbin.org/post",
          {
            name: this.name,
            phone: this.phone,
            email: this.email,
            date: d.toLocaleDateString("en-US", options)
          }
        )
        .then(response => {
          if (response.status === 200) {
            self.formStatus = 'success';

            this.errors = {
              name: {
                required: false,
                invalid: false
              },
              phone: {
                required: false,
                invalid: false
              },
              mail: {
                required: false,
                invalid: false
              },
              agree: {
                required: false
              }
            }

            this.name = "";
            this.phone = "";
            this.mail = "";
            this.agree = "";
          }
        })
        .catch(err => {
          self.formStatus = 'error';
          window.console.log(err);
        });
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/components/form.scss";
</style>