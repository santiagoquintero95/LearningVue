var app = new Vue({
    el: '#app',
    data:{
        backgroundColor: 'red',
        backgroundColor2:{
            backgroundColor: 'blue'
        },
        styleObject:{
            backgroundColor: 'green',
            fontSize: '2rem',
        },
        disabled:true,
        styleObject2:{
            fontSize:'1rem',
            borderRadius: '0.5rem'
        },
        styleObject3:{
            fontSize:'1rem',
            borderRadius: '0.5rem'
        },
        styleContect:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    }
})

