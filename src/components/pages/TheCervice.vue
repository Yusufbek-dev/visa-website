<template>
    <section class="service">
        <div>
        <h2 class="service-title">Biznig xizmatlar</h2>
        <ol class="service-list">
            <li>
                <a href="https://t.me/Yusufbek_dev">-- Abu Dabi va Dubai uchun visa olish.</a>
            </li>
            <li>
                <a href="https://t.me/Yusufbek_dev">-- Saudia davlati uchun visa olish.</a>
            </li>
            <li>
                <a href="https://t.me/Yusufbek_dev">-- Istalgan davlatga Avia chipta olish.</a>
            </li>
            <li>
                <a href="https://t.me/Yusufbek_dev">--  Safarda yuzaga kelgan muammoli holatlarda online yordam berish.</a>
            </li>
        </ol>
        <router-link to="contact" class="contact-btn">Biz bilan bog'laning ➡</router-link>
    </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.service {
    min-height: 72vh;
    background: url(../../../images/masque.jpg) center center;
}
.service>div {
    min-height: 72vh;
    background-color: rgb(33, 33, 33, 0.6);
    padding-bottom: 50px;
}
.service-title {
    padding: 40px 0;
    color: #fff;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 2px;

}
.service-list {
    padding-bottom: 40px;
    width: 70%;
    margin: 0 auto;
    /* align-items: center; */
    /* justify-content: center;
    list-style:decimal;
    display: flex;
    flex-direction: column; */
    /* column-gap: 50px; */
}
li {
    text-align: start;
    font-size: 1.8rem;
    padding: 20px 0;
    color: #fff;
}
li:nth-child(odd) {
    animation:left 1s;
}
li:nth-child(even)  {
    animation: right 1s;
}
li a {
    color: inherit;
}
.contact-btn {
    padding-top: 40px;
    padding: 12px 28px;
    background-color: rgb(134, 35, 227);
    border: 1px solid rgb(134, 35, 227);
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 12px;
    transition: all 0.3s;
}
.contact-btn:hover {
    background-color: transparent;
}

@keyframes left {
    0% {
        opacity: 0;
        padding-left: 100px;
    }
    100% {
        opacity: 1;
        padding-left: 0px;
    }
}
@keyframes right {
    0% {
        opacity: 0;
        margin-left: -100px;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
}

@media (max-width:900px) {
    .service {
        height: auto;
    }
    .service-title {
        padding: 20px 0;
    }
    .service-list {
        width: 90%;
        padding-bottom: 20px;
    }
    li {
        padding: 15px 0;
    }
}
@media (max-width:680px) {
    .service {
        height: auto;
    }
    .service-list {
        width: 90%;
        padding-bottom: 40px;
    }
    .service-title {
        padding: 15px 0;
        font-size: 2.2rem;
    }
    li {
        font-size: 1rem;
        padding: 7px 0;
    }
    .contact-btn {
        font-size: 1rem;
        padding: 8px 15px;
    }
}
</style>