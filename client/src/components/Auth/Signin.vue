<template>
  <v-container text-sm-center mt-10 pt-10>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome back</h1>
      </v-flex>
    </v-layout>
    <!-- Signin Form -->
    <v-layout mt-5>
      <v-flex xs12 sm6 offset-sm-3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form @submit.prevent="handleSubmit">
              <v-layout row py-5>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row py-5>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    prepend-icon="extension"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
                <v-layout row py-5>
                  <v-flex xs12>
                    <v-btn color="accent" type="submit">Sign In</v-btn>
                    <h3>Dont have an account yet?</h3>
                    <router-link to="/signup">Sign up</router-link>
                  </v-flex>
                </v-layout>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
