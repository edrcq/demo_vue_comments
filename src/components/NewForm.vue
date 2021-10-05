<template>
	<form v-on:submit.prevent>
		<div>
			<label for="email">Email</label>
			<input :value="email" @input="onInputEmail" @keypress.enter="onPressEnter" type="text" name="email" id="email">
		</div>
		{{ list }}
	</form>
</template>

<script>
/*
Tapez vue, ensuite Tab
le plugin Vetur doit etre installé

Et si on ne pouvait pas utiliser le v-model pour lier
la donnée (data) a l'input ?

On utilisea la directive v-bind:value pour inséré la data vers
l'input.
Par contre cela ne fonctionne que dans UN SENS.
Pour récuperer ce que l'utilisateur écrit on utilisera un event

On a différent choix :
v-on:input pour récupéré le contenu en live.

Les raccourcis pour v-on:NomEvent est @NomEvent
					v-bind:Prop est :prop

C'est la meme qu'avant.

@keypress.enter="function"

.enter est un modificateur d'event qui permet de filtrer.
Ici on detectera uniquement une pression sur la touche "enter"

.prevent permet de "preventDefault", d'annuler un event

*/
export default {
	data() {
		return {
			email: 'hello@world.com',
			list: []
		}
	},

	methods: {
		onInputEmail(event) {
			console.log('email', event.target.value)
			this.email = event.target.value
		},

		onPressEnter() {
			this.list.push(this.email)
			this.email = ''
		}
	}
}
</script>

<style>

</style>
