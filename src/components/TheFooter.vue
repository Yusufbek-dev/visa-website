<template>
    <footer>
        <div class="footer-text">
            <h5>Biz haqimizda</h5>
            <p>Biz ko'plab mijozlarimizga online visa olish va istalgan davlatiga avia chipta sotib olishda yordam berib kelmoqdamiz.</p>
        </div>
        <!-- <div class="footer-logo">
            <a href="#home">
                <img src="../../images/visaLogo2.png" alt="">
            </a>
        </div> -->
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
    padding: 15px 5%;
    display: flex;
    justify-content: space-between;
}
h5 {
    font-size: 23px;
    color: #a0a0a0;
    letter-spacing: 2px;
    margin-bottom: 8px;
}
.footer-text p{
    max-width: 400px;
    font-size: 15px;
    letter-spacing: 2px;
    color: #a0a0a0;
}
.contact-title {
    margin-bottom: 20px;
    font-weight: 700px;
    color: #fff;
    font-size: 20px;
    letter-spacing: 2px;
}
.footer-contact a {
    color: #a0a0a0;
    display: flex;
    align-items: center;
}
.footer-contact a:hover {
    color: #fff;
}
.footer-contact a img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.footer-contact a:last-child{
    margin-top: 12px;
}

@media (max-width:680px) {
    footer {
        height:auto;
        flex-direction: column;
        column-gap: 90px;
        justify-content: center;
        align-items: center;
    }
    .footer-text {
        padding-top: 30px;
        margin-bottom: 40px;
    }
    .footer-contact {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
}
/* .footer-logo a img{
    width: 120px;
    height: 120px;
} */
</style>