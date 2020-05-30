<template>
    <div>
        <form @submit.prevent="handleSubmit"
        @submit="submitRegisterForm">
            <label for="firstName"> Nombre </label>
            <input type="text" name="firstName" />

            <label for="lastName"> Apellido </label>
            <input type="text" name="lastName" />

            <label for="identityNumber"> Documento de identidad </label>
            <input type="number" name="identityNumber" />
            
            <div v-if="userType === 'health'">
                <label for="professionalCardNumber"> Tarjeta profesional </label>
                <input type="number" name="professionalCardNumber" />
                <label for="healtArea"> Area de la Salud </label>
                <input type="text" name="email" />
            </div>

            <label for="email"> Correo Electrónico </label>
            <input type="text" name="email" />

            <label for="password"> Contraseña </label>
            <input type="password" name="email" />

            <label for="confirmPassword"> Confirmar contraseña </label>
            <input type="password" name="email" />

            <label for="phoneNumber"> Número telefónico </label>
            <input type="number" name="phoneNumber" />

            <label for="description"> Breve Descripción de quien eres </label>
            <input type="text" name="description" />

            <input type="submit" value="Registrarme!">
        </form>
    </div>
</template>

<script>
export default {
    props:['userType'],
    data() {
    return {
      user: {
        name: "",
        lastName: "",
        identityNumber: "",
        professionalCardNumber: "",
        email: "",
        password: "",
        phoneNumber: "",
        description: ""
      },
    };
  },
    methods: {
        submitRegisterForm() {
            alert('Hello World!');
        },
    }
}
</script>