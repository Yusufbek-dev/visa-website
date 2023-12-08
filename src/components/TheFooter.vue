<template>
    <footer>
        <div class="footer-text">
            <h5>Biz haqimizda</h5>
            <p>Biz ko'plab mijozlarimizga online visa olish va istalgan davlatiga bilet sotib olishda yordam berib kelmoqdamiz</p>
        </div>
        <div class="footer-contact">
            <p class="contact-title">Biz bilan bog'lanish</p>
            <a href="tel:+998912931771"><img src="../../images/phone.svg" alt="phone number"> +998912931771</a>
            <a href="https://t.me/Yusufbek_dev"><img src="../../images/telegram.svg" alt="telegram"> telegram</a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    height: 15vh;;
    background-color: #000;
    box-shadow: 0 20px 0 #000;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
}
h5 {
    font-size: 23px;
    color: #fff;
    letter-spacing: 4px;
}
.footer-text p{
    max-width: 300px;
    margin-top: 25px;
    font-size: 12px;
    letter-spacing: 4px;
    color: #fff;
}
.contact-title {
    margin-bottom: 20px;
    font-weight: 600px;
    color: #fff;
    letter-spacing: 4px;
}
.footer-contact a {
    color: #fff;
    display: flex;
    align-items: center;
}
.footer-contact a img {
    width: 15px;
    height: 15px;
}
.footer-contact a:last-child{
    margin-top: 12px;
}
</style>