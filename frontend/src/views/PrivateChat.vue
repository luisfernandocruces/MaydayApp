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
                  <strong>{{ message.from }} :</strong>
                  {{ message.msg }}
                </li>
              </ul>
            </div>
            <div id="sendMessage" class="row">
              <div class="col">
                <textarea
                  class="form-control"
                  id="description"
                  rows="1"
                  placeholder="Escribe tu mensaje..."
                  v-model="new_message"
                ></textarea>
              </div>
              <div class="col-md-auto">
                <base-button type="primary" @click="sendMessage"
                  >Enviar</base-button
                >
              </div>
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
      user_connected: this.$store.state.user._id,
      other_user: this.$store.state.toUserEmail,
      messages: [
        { from: this.$store.state.user._id, msg: "hola que tal" },
        { from: this.$store.state.toUserEmail, msg: "Bien y vos?" },
      ],
      new_message: "",
      socket: null,
    };
  },
  created() {
    this.socket = io("http://localhost:3000");
    this.socket.on('Server Ready', () => {
      this.socket.emit('new_chat',{startedBy: this.user_connected, chatsWith: this.other_user});
    })
  },

  methods: {
    sendMessage() {
      if (this.new_message) {
        this.messages.push({ from: this.user_connected, msg: this.new_message });
        this.new_message = "";
      }
    },
  },
  beforeDestroy() {
    this.socket = null;
  },
};
</script>
