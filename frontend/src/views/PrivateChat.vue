<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-info">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-20"
            body-classes="px-lg py-lg"
            class="border-0"
          >
            <div id="Chat-Box">
              <ul>
                <li v-for="message in messages" :key="message">
                  <strong>{{message.from}} :</strong>
                  {{message.msg}}
                </li>
              </ul>
            </div>
            <div id="sendMessage" class="row">
                <textarea
                  class="form-control col-lg"
                  id="description"
                  rows="1"
                  placeholder="Escribe tu mensaje..."
                  v-model="new_message"
                ></textarea>

                <base-button class="col-sm" type="primary" @click="sendMessage">Enviar</base-button>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      messages: [
        { from: "dangaltor", msg: "hola que tal" },
        { from: "otra_persona", msg: "Bien y vos?" }
      ],
      new_message: "",
    };
  },

  methods: {
      sendMessage(){
          this.messages.push({from: "dangaltor", msg: this.new_message});
          this.new_message = "";
      }
  }
};
</script>