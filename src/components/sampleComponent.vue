<template>
    <div>
        <h3>bachbach</h3>
        <p>
            dfioajsiofjeiofjaweiowejiofgioaerngionaiohnateiohnateion
        </p>
        <label>
            Value:
            <input type="text" v-model="inputData">
            <br>
            <h3>{{ inputData }}</h3>
            <div v-bind:style="`width: 50px; height: 50px; background-color: ${inputData};`"></div>
<!--        <div :style="`width: 50px; height: 50px; background-color: ${inputData};`"></div>-->
        </label>

        <p>userID: {{ userId }}</p>
        <button @click="getData">yes</button>
        <div>{{filteredData}}</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "sampleComponent",
        data() {
            return {
                inputData: '',
                userId: ''
            }
        },
        mounted() {
            this.inputData = this.getData()
        },
        methods: {
            async getData() {
                const res = await axios.get('https://reqres.in/api/users/2')
                const jsonRes = res.data
                // promise 반환?
                this.userId = jsonRes['data']['id']
            }
        },
        computed: {
          filteredData() {
            return this.$store.getters.filteredList(this.inputData)
          }
        }
    }
</script>

<style scoped>

</style>