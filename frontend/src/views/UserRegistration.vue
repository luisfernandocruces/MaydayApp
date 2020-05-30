<template>
    <div>
        <form @submit.prevent="handleSubmit"
        @submit="submitRegisterForm">

            <base-input label="Nombre"
              type="text"
              placeholder="Nombre"
              name="first_name"
              required
              v-model="user.first_name"></base-input>

            <base-input label="Apellido"
              type="text"
              placeholder="Apellido"
              name="last_name"
              required
              v-model="user.last_name"></base-input>

            <label for="identityNumber"> Documento de identidad </label>
            <input type="number" name="identityNumber" v-model="user.document_number" />
            
            <div v-if="userType === 'health'">
                <label for="professionalCardNumber"> Tarjeta profesional </label>
                <input type="number" name="professionalCardNumber" v-model="user.professional_card_number" />
                <label for="healtArea"> Area de la Salud </label>
                <input type="text" name="healtArea" v-model="user.health_area"/>
            </div>

            <label for="email"> Correo Electrónico </label>
            <input type="text" name="email" v-model="user.email"/>

            <label for="pwd"> Contraseña </label>
            <input type="password" name="pwd" v-model="user.password"/>

            <label for="confirmPassword"> Confirmar contraseña </label>
            <input type="password" name="confirmPassword" v-model="user.password"/>

            <label for="phoneNumber"> Número telefónico </label>
            <input type="number" name="phoneNumber" v-model="user.phone_number"/>

            <label for="description"> Breve Descripción de quien eres </label>
            <input type="text" name="description" v-model="user.description"/>

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
        first_name: "",
        last_name: "",
        document_number: "",
        professional_card_number: "",
        email: "",
        password: "",
        phone_number: "",
        description: "",
        health_area
      },
    };
  },
    methods: {
        submitRegisterForm() {
            alert(user);
        },
    }
}
</script>