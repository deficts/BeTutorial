<template>
<div>
  <form class="md-layout md-alignment-center">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Sign Up</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item d-large-size-100 md-small-size-100">
            <md-field>
              <label for="first-name">First Name</label>
              <md-input name="first-name" id="first-name" />
            </md-field>
          </div>
          <div class="md-layout-item md-large-size-100 md-small-size-100">
            <md-field>
              <label for="last-name">Last Name</label>
              <md-input name="last-name" id="last-name" />
            </md-field>
          </div>
          <div class="md-layout-item md-large-size-100 md-small-size-100">
            <md-field>
              <label for="user-email">Email</label>
              <md-input v-model="email" type="email" name="user-email" id="user-email" />
            </md-field>
          </div>
          <div class="md-layout-item md-large-size-100 md-small-size-100">
            <md-field>
              <label for="user-password">Password</label>
              <md-input v-model="password" type="password" name="user-password" id="user-password" />
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="SignUp" type="button" class="md-primary">Crear Usuario</md-button>
      </md-card-actions>
    </md-card>
  </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data() {
    return{
      email:'',
      password:''
    }

  },
  methods: {
    SignUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style>

</style>
