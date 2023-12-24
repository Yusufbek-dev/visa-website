<template>
 <div class="admin">
    <h4>Hello Admin</h4>
    <h5>You have message from users</h5>
    <ul>
        <li >{{ results.map((item)=> item )}}</li>
    </ul>
    <button @click="loadMessage">load users message</button>
</div>
     
</template>

<script>
export default {
    data() {
        return {
            results:[],
        }
    },
    methods: {
        loadMessage() {
            fetch('https://data-visa-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then((response)=> {
                if(response.ok) {
                    return response.json();
                }
            }).then((data)=> {
                const results = [];
                for(const id in data) {
                    results.push({
                        id:id,
                        name:data[id].name,
                        lastName:data[id].lastName,
                        fatherName:data[id].fatherName,
                        matherName:data[id].matherName,
                        email:data[id].email,
                        number:data[id].phone
                    })
                }
                this.results = results
                console.log(this.results.map((item)=> {item.number}));
            })
        }
    }
}
</script>

<style scoped> 
.admin {
    height: 72vh;
    background-color: black;
    color: aliceblue;
}
.admin li {
    font-size: 2rem;
}
</style>