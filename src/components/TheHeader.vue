<template>
    <header>
        <div class="logo">
            <a href="#">VISA4UZB</a>
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
        </ul>
    </header>
</template>

<script>
export default {
    
}

</script>

<style scoped>
header {
    background-color:rgb(33, 33, 33);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    /* box-shadow: 0px 0px 10px 0px gray; */
}
.nav-list {
    display: flex;
    justify-content: space-between;
    
}
.nav-list__item {
    margin-left: 35px;
    font-size: 1.4rem;
}
a {
    color: rgb(42, 40, 40);
    text-decoration:none;
    color:rgb(255, 251, 251)

}
</style>