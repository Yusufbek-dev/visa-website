<template>
    <header>
        <div class="logo">
            <router-link to="home">
                <img src="../../images/visaLogo2.png" alt="logo">
            </router-link>
        </div>
        <ul class="nav-list">
            <li class="nav-list__item">
                <router-link to="home" class="link" href="#">Asosiy</router-link>
            </li>
            <li class="nav-list__item">
                <router-link to="service" class="link">Xizmatlarimiz</router-link>
            </li>
            <li class="nav-list__item">
                <router-link to="contact" class="link" href="#">Bog'lanish</router-link>
            </li>
            <li class="nav-list__item" >
                <router-link to="tel:+998912931771">📞 +998912931771</router-link>
            </li>
        </ul>
    </header>
</template>
📞
<script>
export default {
    
}

</script>

<style scoped>
header {
    padding: 0 5%;
    background:rgb(33, 33, 33, 0.9);
    box-shadow: 0 0 10px wheat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13vh;
    /* box-shadow: 0px 0px 10px 0px gray; */
}
.nav-list {
    display: flex;
    justify-content: space-between;
    
}
.nav-list__item {
    margin-left: 35px;
    font-size: 1.4rem;
    transition: 0.2s;
    padding: 0 8px;
}
.nav-list__item:last-child {
    background-color: rgb(134, 35, 227);
    padding: 0 8px;
    border-radius: 15px;
}
a {
    font-family:"Poppins", sans-serif;
    position: relative;
    color: rgb(42, 40, 40);
    text-decoration:none;
    color: #a0a0a0;
    padding: 0 10px;
    transition: 0.3s;
}
.link::after {
    transition: 0.3s;
    left: 0;
    bottom: -10px;
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: rgb(134, 35, 227);
}
.router-link-active::after {
    width: 100%;
}
.router-link-active {
    color: #fff;
}
a:hover {
    color: #fff;
}
a:hover::after {
    width: 100%;
}
.logo img{

    width: 120px;
    height: 120px;
}
</style>