<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      this.widget = new OktaSignIn({
        baseUrl: 'https://powerhour.okta.com/',
        clientId: '0oahyrzgOBx3e0pcP5d5',
        redirectUri: 'http://10.1.1.140:8080/login/callback',
        authParams: {
          pkce: false,
          issuer: 'https://powerhour.okta.com/oauth2/default',
          display: 'page',
          scopes: ['openid', 'profile', 'email']
        }
      })
      this.widget.renderEl(
        { el: '#okta-signin-container' },
        () => {
          /**
           * In this flow, the success handler will not be called because
           * there's a redirect to the Okta org for the authentication workflow.
           */
        },
        (err) => {
          throw err
        }
      )
    })
  },
  destroyed () {
    // Remove the widget from the DOM on path change
    this.widget.remove()
  }
}
</script>

