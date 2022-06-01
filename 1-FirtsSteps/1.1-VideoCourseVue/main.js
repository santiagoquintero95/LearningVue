var app = new Vue({
    el: '#app',
    data:{
        flights: "Vuelos"
    }
})
/*Now, try to write in the console app.flights = 'Vuelos Naciones'. So you could see Vue is reactive (DOM changes without reload the page)*/