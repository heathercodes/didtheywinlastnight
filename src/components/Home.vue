<template>
  <main id="home">

      <HeaderUI></HeaderUI>

      <LandingPage></LandingPage>

      <FooterUI></FooterUI>

  </main>
</template>

<script>

import LandingPage from './LandingPage';
import HeaderUI from './HeaderUI';
import FooterUI from './FooterUI';

export default {
  components: {
    HeaderUI,
    LandingPage,
    FooterUI,
  },
  data() {
    return {
    };
  },
};

</script>
