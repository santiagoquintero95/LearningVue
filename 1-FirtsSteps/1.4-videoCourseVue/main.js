var app = new Vue({
    el: '#app',
    data:{
        title: "Vuelos Internacionales",
        flights: ["Mexico","Colombia","Arentina"],
        nationals: [
            {
                idFlight: "2255",
                flight: "Ciudad de Mexico"
            },
            {
                idFlight: "2256",
                flight: "Cancún"
            }
        ]
    }
})

