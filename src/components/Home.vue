<template>
  <div>
    <h1>Train Ticket booking</h1>
    <h2>Name of the booking person</h2>
    Firstname : <input type="text" v-model="firstname" /><br /><br />
    Lastname : <input type="text" v-model="lastname" />
    <h2>{{ getfullname }}</h2>
    <h2>Train Available From Coimbatore to</h2>
    <label>Select the place : </label>
    <select v-model="selected">
      <option
        v-for="place in places"
        :value="{ id: place.id, text: place.name, data: place.deatil }"
        :key="place.id"
      >
        {{ place.name }}
      </option></select
    ><br /><br />
    No. of people :
    <input name="value" type="number" v-model.number="people" /><br /><br />
    Amount :
    <input name="value" type="number" v-model.number="amt" /><br /><br />
    <button @click="getbook">Book</button>
    <h2>Details:</h2>
    <h3>{{ selected.data }}</h3>
  </div>
</template>

<script>
import store from '@/store';


export default {
  name: "Home",
  mounted() {
    console.log("DOM is ready to use");
  },
  created() {
    console.log("Created: Data and event are ready ,but not DOM");
  },
  data: () => {
    return {
      selected: "",
      place: "",
      people: "",
      amt: "",
      select: true,
      amount: [500, 450, 200, 250, 350, 300],
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    getbook() {
      if (this.selected.id) {
        alert(
          "welcome" +
            " " +
            this.firstname +
            " " +
            this.lastname +
            " " +
            "From Coimbatore to" +
            " " +
            this.selected.text +
            " " +
            "is booked successfuly"
        );
      } else {
        alert("please fill the all details");
      }
    },
  },
  computed: {
    places(){
      return store.state.places
    },
    getfullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  watch: {
    people(value) {
      this.people = value;
      this.amt = value * this.amount[this.selected.id - 1];
    },
    amt(value) {
      this.people = value / this.amount[this.selected.id - 1];
      this.amt = value;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
body {
  background-color: #89f7fe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}
h1 {
  background-color: #66a6ff;
  border-radius: 10px;
  padding: 5px;
}
button {
  font-size: medium;
}
</style>
