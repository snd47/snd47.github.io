<template>
     <modal 
            title="Registration"
            @close="onClose"
          >
            <!-- use <form> <ul> or other tag with slot name-->
            <div slot="body" class="modal-login-body">
                  <form @submit.prevent="onSubmit">

                    
                     <div class="form-item" :class="{ errorInput: $v.email.$error }">
                        <label>Email(login):</label>
                          <p class="errorText" v-if="!$v.email.required">Filed is required!</p>
                          <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
                          <input 
                           v-model="email"
                           :class="{ error: $v.email.$error }"
                           @change="$v.email.$touch()"
                           >
                     </div>
                        <!-- password -->
                     <div class="form-item" :class="{ errorInput: $v.password.$error }">
                        <label>Password:</label>
                          <p class="errorText" v-if="!$v.password.required">Filed is required!</p>
                          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</p>
                          <input 
                           v-model="password"
                           :class="{ error: $v.password.$error }"
                           @change="$v.password.$touch()"
                           type="password"
                           >
                     </div>

                     <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
                        <label>Password again:</label>
                          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
                          
                          <input 
                           v-model="repeatPassword"
                           :class="{ error: $v.repeatPassword.$error }"
                           @change="$v.repeatPassword.$touch()"
                           type="password"
                           >
                     </div>

                    <!-- <div>{{email}}</div> -->
                    
                    <button class="btn btnPrimary">Submit</button>
                  </form>
    
            </div>

            <div slot="footer" class="modal-login-footer">
                  <!-- <p>real footer</p> -->
            <!-- if delete that div - "default footer" will appear -->
              <button @click="onRedirect">У меня есть аккаунт, войти</button>
            </div>

          </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'


export default {
    components :{
        modal
    },
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        
        email: {
          required,
          email
        },
        password: {
          required,
          minLength:minLength(4)
        },
        repeatPassword: {
          sameAsPassword: sameAs('password')
        }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword
        }
        console.log(user)
        //Done
        this.onClose()
      }
    },
    onClose() {
      this.email=''
      this.password=''
      this.repeatPassword=''
      this.$v.$reset() 
      this.$emit('close')
      
    },
    onRedirect() {
      this.onClose()
      this.$emit('redirect_login')
    }
  }
}
</script>

<style lang="scss">


    // button {
    //   background-color: rgba(10, 87, 110, 0.404) !important;
    //   border: rgba(10, 87, 110, 0.404) !important;
    //   // width: 30%;
    //   // margin: 0 0 30px 0;

    // }


.form-item .errorText {
  display:none;
  margin-bottom: 8px;
  font-size: 14px;
  color: rgb(190, 91, 91);
}
.form-item {
  &.errorInput .errorText {
  display:block;
}
}


input.error {
  border-color: rgb(190, 91, 91)
}

.modal-login-body {
  button {
    margin-bottom:10px;
  }
}
.modal-login-footer {
  font-size: 14px;
  text-align:center;
  // text-decoration:underline;
  
  margin: 10px;
  // background-color:wheat;
  button {
    background-color:transparent;
    border:none;
    border-bottom: 2px dotted blue;
    cursor: pointer;
    padding:0;
  }
}

</style>
