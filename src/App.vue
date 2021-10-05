<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Maintenant on a 2 composants HelloWorld dans notre App" />
    <HelloWorld msg="Ce 'msg' est une props"/>
    <NewForm />
  </div>
</template>

<script>
/* Les composants sont séparés en 3 grandes parties
- template (html)
- script
- style

App.vue est le composant principal de la SPA
SPA = SIngle Page App

Chaque fichier .vue est un composant Vue
= Single File Component


*/

// On importe un composant, pour ensuite l'enregistrer (ENFANT)
import HelloWorld from './components/HelloWorld.vue'
import NewForm from './components/NewForm.vue'

/* Le script doit toujours exporter un objet,
contenant les options du composant Vue (la meme chose que dans:
new Vue(options))


*/
export default {

  // Nom du composant (la meme chose que le nom du fichier en general)
  name: 'App',

  // On enregistre les composants ENFANTS
  // Ici on a a disposition un composant HelloWorld,
  // utilisé dans le template ci-plus haut
  components: {
    HelloWorld,
    NewForm,
  },

  // la syntaxe de "data" change et devient
  // Une fonction qui retourne un objet
  data() {
    return {
      message: 'Bonjour'
    }
  },

  methods: {},
  computed: {},
  watch: {},



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
