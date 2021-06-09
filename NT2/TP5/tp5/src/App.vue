<template>
  <body>
    <Header/>
  </body>
</template>

<script>
import Header from './components/header/index.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
</style>
