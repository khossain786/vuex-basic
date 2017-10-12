<template>
    <div id="registrations" v-if="total > 0">
        <div class="summary">
            <h3>Registrations</h3>
            <h5>Total: {{ total }}</h5>
        </div>
        <hr>
        <div class="row" v-for="(registration, i) in registrations" :key="registration.userId">
            <h4>{{ registration.name }}</h4>
            <button @click="unregister(registration, i)">Unregister</button>
            <div class="date">{{ registration.date }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            unregister(registration, i) {
                this.$store.commit({
                    type: "unregister",
                    uid: registration.userId,
                    index: i
                });
            }
        },
        computed: {
            total() {
                return this.$store.state.registrations.length;
            },
            registrations() {
                return this.$store.state.registrations
            }
        }
    }
</script>

<style scoped>
    #registrations {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }

    .summary {
        text-align: center;
    }

    .row h4 {
        display: inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }

    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }

    .row span:hover {
        color: darkred;
    }

    .date {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }

    button {
        text-align: center;
        background-color: gray;
        font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
        color: greenyellow;
        cursor: pointer;
    }
</style>