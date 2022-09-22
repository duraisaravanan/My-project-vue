import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        places: [
            {
              id: 1,
              name: "Chennai",
              deatil:
                "Distance:500km,Tavelling Time:8hrs,Arrival Of Train:Monday 8:40pm",
            },
            {
              id: 2,
              name: "Kanyakumari",
              deatil:
                "Distance:300km,Tavelling Time:7hrs,Arrival Of Train:Tuesday 5:30pm",
            },
            {
              id: 3,
              name: "Madurai",
              deatil:
                "Distance:150km,Tavelling Time:3hrs,Arrival Of Train:Thursday 1:00pm",
            },
            {
              id: 4,
              name: "Dindigul",
              deatil:
                "Distance:120km,Tavelling Time:2:30hrs,Arrival Of Train:Thursday 9:00am",
            },
            {
              id: 5,
              name: "Salem",
              deatil:
                "Distance:100km,Tavelling Time:2hrs,Arrival Of Train:Wednesday 4:00pm",
            },
            {
              id: 6,
              name: "Tirupur",
              deatil:
                "Distance:80km,Tavelling Time:1:30hrs,Arrival Of Train:Friday 6:00pm",
            },
          ],
          about :" I am from state"
          
    }

})