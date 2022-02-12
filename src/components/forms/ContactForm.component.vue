<template>
    <div class="contact-form">
        <h1 class="title">השאר פרטים</h1>

        <form @submit.prevent="handleSubmit()">
            <div class="form-group">
                <input type="text" v-model.trim="name" @blur="validateName()" placeholder="שם מלא" required />
                <div v-if="!validities.name" class="error-message">אנא הזינו את שמכם המלא</div>
            </div>

            <div class="form-group">
                <input type="text" v-model.trim="email" @blur="validateEmail()" placeholder="אימייל" required />
                <div v-if="!validities.email" class="error-message">אנא הזינו אימייל חוקי</div>
            </div>

            <div class="form-group">
                <input
                    type="text"
                    v-model.trim="phoneNumber"
                    @blur="validatePhoneNumber()"
                    placeholder="מס׳ טלפון"
                    required
                />
                <div v-if="!validities.phoneNumber" class="error-message">אנא הזינו מספר טלפון חוקי</div>
            </div>

            <button type="submit">שלחו פרטים</button>
        </form>
    </div>
</template>

<script>
import validator from 'validator';
import axios from 'axios';

export default {
    name: 'Contact Form',
    data() {
        return {
            name: '',
            email: '',
            phoneNumber: '',
            validities: {
                name: true,
                email: true,
                phoneNumber: true,
            },
        };
    },
    methods: {
        validateName() {
            const isNameValid = !!this.name;

            this.validities.name = isNameValid;
        },
        validateEmail() {
            const isEmailValid = validator.isEmail(this.email);

            this.validities.email = isEmailValid;
        },
        validatePhoneNumber() {
            const isPhoneNumberValid = validator.isMobilePhone(this.phoneNumber, 'any');

            this.validities.phoneNumber = isPhoneNumberValid;
        },
        async handleSubmit() {
            const formValidities = Object.values(this.validities);
            if (formValidities.includes(false) || this.name == '' || this.email == '' || this.password == '') {
                return;
            }

            const MAIL_API_URL = process.env.VUE_APP_MAIL_API_URL;
            const data = {
                name: this.name,
                email: this.email,
                phoneNumber: this.phoneNumber,
            };

            try {
                await axios.post(MAIL_API_URL, data);

                alert('פרטים שלך נשלחו בהצלחה.');
            } catch (err) {
                alert('לצערנו קרתה תקלה במערכת. אנא נסו יותר מאוחר.');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

.contact-form {
    @extend %flex-center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 23rem;
    height: 40rem;
    padding: 1rem;

    background-color: rgb(223, 223, 223);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    cursor: pointer;

    .title {
        @extend %flex-center;

        width: 100%;
        height: 5rem;
        margin: 0;

        font-size: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        width: 100%;
        height: 100%;

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 5px;

            width: 100%;
            min-height: 6rem;

            input {
                width: 100%;
                height: 3rem;
                padding: 0.5rem;

                font-size: 1rem;
                border-radius: 5px;
                border: none;
            }

            .error-message {
                color: #ff0000;
            }
        }

        button {
            width: 100%;
            height: 3rem;

            font-size: 1rem;
            font-weight: 700;
            color: $white;
            background-color: $darkGray;
            border-radius: 5px;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: #505050;
            }

            &:disabled {
                cursor: not-allowed;
                background-color: #505050;
            }
        }
    }
}
</style>
