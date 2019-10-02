<template>
     <modal 
            title="Login"
            @close="onClose"
          >
            <!-- use <form> <ul> or other tag with slot name-->
            <div slot="body" class="modal-login-body">
                  <form @submit.prevent="onSubmit">

                    <!-- <h1>Login modal</h1> -->
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

                     <!-- <div>{{email}}</div> -->
                    
                    <button class="btn btnPrimary">Submit</button>
                    
                  </form>
    
            </div>

            <div slot="footer" class="modal-login-footer">
              <button @click="onRedirect">Мне нужен аккаунт</button>
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
            password: ''

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
        }
        
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        //Done
        this.onClose()
      }
    },
    onClose() {
      this.email=''
      this.password=''
      this.$v.$reset() 
      this.$emit('close')
      
    },
    onRedirect() {
      this.onClose()
      this.$emit('redirect_registration')
    }
  }
}
</script>

<style lang="scss">

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
