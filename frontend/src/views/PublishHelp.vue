<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-default shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Día de la semana</th>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th class="text-right">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(schedule, index) in schedules" :key="index">
                <td>{{index}}</td>
                <td>{{schedule.dayOfWeek}}</td>
                <td>{{schedule.startTime}}</td>
                <td>{{schedule.endTime}}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="container pt-lg-md">
            <base-input type="text" placeholder="Día de la Semana" name="first_name" required></base-input>
            <base-input
              placeholder="Hora Inicio"
              type="number"
              name="startTime"
              
            ></base-input>
            <base-input
              placeholder="Hora Fin"
              type="number"
              name="endTime"
              
            ></base-input>
            <base-button @click="register">Registrar Horario de Ayuda</base-button>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style></style>