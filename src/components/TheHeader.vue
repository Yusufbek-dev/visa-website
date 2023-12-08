<template>
    <header>
        <div class="logo">
            <a href="#">
                <img src="../../images/visaLogo2.png" alt="logo">
            </a>
        </div>
        <ul class="nav-list">
            <li class="nav-list__item">
                <a href="#">Bosh Sahifa</a>
            </li>
            <li class="nav-list__item">
                <a href="#">Biz bilan bog'lanish</a>
            </li>
            <li class="nav-list__item">
                <a href="#">Bizning Hizmatlar</a>
            </li>
            <li class="nav-list__item">
                <a href="tel:+998912931771">📞 +998912931771</a>
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
    background:rgb(33, 33, 33, 0.6);
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
.nav-list__item:hover {
    background-color: rgb(134, 35, 227);
    border-radius: 15px;
}
.nav-list__item:last-child {
    background-color: rgb(134, 35, 227);
    padding: 0 8px;
    border-radius: 15px;
}
a {
    font-family:Arial, Helvetica, sans-serif;
    color: rgb(42, 40, 40);
    text-decoration:none;
    color:rgb(255, 251, 251);
    position: relative;

}
a:hover::before {
    display: inline-block;
    content: '';
    position: absolute;
    widows: 20px;
    height: 2px;
}
.logo img{

    width: 120px;
    height: 120px;
}
</style>