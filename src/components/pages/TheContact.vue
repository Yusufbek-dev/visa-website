<template>
    <section class="contact">
        <div>
            <h3>Visa olish uchun formni to'ldiring.</h3>
            <form action="">
                <input type="text" placeholder="ismingiz:" required>
                <input type="text" placeholder="familyangiz:" required>
                <input type="text" placeholder="Otangizni ismi:" required>
                <input type="text" placeholder="Onangizni ismi:" required>
                <input type="email" placeholder="Email adresingiz:" required>
                <input type="number" placeholder="Telefon raqam:" required>
                <input type="submit" value="Jo'natish">
            </form>
            <div class="contact-us">
                <p class="contact-title">Biz bilan bog'lanish.</p>
                <ul class="contact-list">
                    <li>
                        <img src="../../../images/phone.svg" alt=""> <a href="tel:+998912931771">+998912931771</a>
                    </li>
                    <li>
                        <img src="../../../images/telegram.svg" alt="icon">  <a href="https://t.me/Yusufbek_dev">Telegram</a>
                    </li>
                    <li>
                        <img src="../../../images/email.svg" alt=""><a href="mailto:Yusufbek.dev@gmail.com"> Email</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact {
    height: 72vh;
    background: url(../../../images/contact.jpg) center center;
}
.contact>div {
    height: 72vh;
    background-color: rgb(33, 33, 33, 0.8);
}
h3 {
    font-size: 3rem;
    color: #fff;
    letter-spacing: 2px;
    padding: 30px 0;
    text-align: center;
}
form {
    padding-bottom: 60px;
    display: flex;
    flex-wrap:wrap      ;
    justify-content: center;
    gap: 35px;
    width: 80%;
    margin: 0 auto;
}
input {
    font-size: 1.2rem;
    border:none;
    background-color: #fff;
    min-width: 33%;
    border-radius: 8px;
    padding: 15px 15px;
    outline: none;
}
input::placeholder {
    color: #000;
    font-size: 1.2rem;
}
input[type='submit'] {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    border: none;
    padding: 15px 30px;
    background-color: rgb(134, 35, 227);
}
input:focus {
    border: none;
    background-color: #a0a0a0;
    color: #fff;
}
.contact-us {
    width: 80%;
    margin: 0 auto;

}
.contact-title {
    position: relative;
    text-align: center;
    font-size: 2.3rem;
    color: #fff;
    letter-spacing: 2px;
    padding-bottom: 10px;
}
.contact-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 2px;
    background-color: rgb(134, 35, 227);
}
.contact-list {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    column-gap: 50px;
    width: 90%;
    margin: 0 auto;
}
li {
    background-color: rgba(134, 35, 227, 0.6);
    padding: 8px 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}
li>img {
    width: 40px;
    height: 40px;
}
li>a {
    font-size: 2rem;
    color: #a0a0a0;
    transition: .3s;
}
li>a:hover {
    color: #fff;
}

@media (max-width:900px) {
    form {
        width: 90%;
    }
    .contact {
        height:auto;
    }
    .contact>div {
        height: auto;
    }
    .contact-us {
        width: 95vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .contact-title {
        padding-bottom: 0;
        width: 40vw;
        text-align:start;
    }
    .contact-title::after {
        display: none;
    }
    .contact-list {
        width: auto;
        margin:0;
        flex-direction: column;
        align-items: start;
    }
    .contact-list li{
        margin-bottom: 10px;
    }

    @media (max-width:680px) {
        h3 {
            font-size: 2rem;
        }
        form {
            width: 95%;
        }
        input {
            width: 90%;
        }
        .contact-us {
            flex-direction: column;
        }
        .contact-list {
            width: 90%;
        }
        .contact-title {
            text-align: center;
            font-size: 2rem;
            width: 95%;
        }
        .contact-list li{
            padding: 5px 15px;
            margin-bottom: 30px;
        }
        .contact-list li a {
            font-size: 1.6rem;
        }
    }
}
</style>