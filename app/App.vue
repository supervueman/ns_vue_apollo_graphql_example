<template>
  <Page>
    <ActionBar title="Example"></ActionBar>

    <StackLayout>
      <Label class="actionBarShadow"></Label>
      <Label class="message" text="Login" col="0" row="0"/>
      <Label class="message" :text="profileId" col="0" row="0"/>
      <TextField v-model="email" hint="E-mail:"/>
      <TextField v-model="password" :secure="true" hint="Password:"/>
      <Button text="Login" @tap="login"/>
    </StackLayout>
  </Page>
</template>

<script>
import { SIGN_IN } from "./graphql/signIn";
export default {
  data() {
    return {
      email: "",
      password: "",
      profileId: "ProfileID"
    };
  },
  methods: {
    login() {
      this.$apollo
        .query({
          query: SIGN_IN,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(res => {
          console.log(res);
          this.profileId = res.data.login.userId;
        })
        .catch(err => {
          console.log(err, "SIGNIN_ERROR");
        });
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/sass/_vars.sass";

ActionBar {
  background-color: $dark;
  color: $light;
  box-shadow: 0 0 10px rgba($pink, 0.5);
}

.actionBarShadow {
  background: linear-gradient(to bottom, rgba($pink, 0.3), rgba($pink, 0.1));
  height: 15px;
}

StackLayout {
  background-color: $dark;
}

button {
  background-color: $dark;
  color: $green;
  border-color: $pink;
  border-width: 2px;
  width: 70%;
  margin-top: 40px;
}

TextField {
  background-color: $dark;
  margin-bottom: 20px;
  width: 80%;
  border-color: $pink;
  border-width: 2px;
  color: $light;
  placeholder-color: $light;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>


