<template>
    <section class="main">
        <h1>Assalomu alaykum bizning online xizmat markazimizga xush kelibsiz!</h1>
        <p>
            Biz sizga sifatli xizmatlarimizni taklif etamiz. 
            Biz bilan ishingiz tez va oson hal bo'ladi.
        </p>
        <div class="btns">
            <a  class="tel" href="tel:+998912931771">Biz bilan aloqa</a>
            <a class="teg" href="https://t.me/Yusufbek_dev">Habar yo'llash</a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    background: rgb(33, 33, 33, 0.6);
    height: 72vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1,p{
    font-weight: 600;
    font-size: 1.7rem;
    letter-spacing: 4xp;
    width: 70vw;
    color: #fff;
    text-align: center;
}
h1 {
    letter-spacing: 4px;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
}
.btns {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.tel,.teg {
    display: inline-block;
    padding: 15px 20px;
    background-color: rgb(134, 35, 227);
    border: 1px solid rgb(134, 35, 227);
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    transition: 0.2s;
    font-size: 20px;
    /* box-shadow: 0 0 20px #fff; */
}
.tel:hover, .teg:hover {
    background-color: transparent;
    box-shadow: 0 0 20px #fff;
}
.teg {
    margin-left: 40px;
}
</style>