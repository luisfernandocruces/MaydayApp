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
                <li v-for="message in conversation.messages" :key="message">
                  <strong>{{ message.idSender }} :</strong>
                  {{ message.content }}
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
                <base-button type="primary" @click="sendMessage">Enviar</base-button>
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
import axios from "../plugins/axios";
export default {
  data() {
    return {
      conversation: {
        idUser: "",
        idProfessional: "",
        messages: [{}]
      },
      user_connected: this.$store.state.user._id,
      other_user: this.$store.state.toUserEmail,
      new_message: "",
      socket: null
    };
  },
  created() {
    if (this.$store.state.user.rol == "health professional") {
      this.conversation.idUser = this.other_user;
      this.conversation.idProfessional = this.user_connected;
      axios.post("/conversation", this.conversation).then(response => {
        if (response.status == 200) {
          this.conversation = response.data;
        }
      });
    } else if (this.$store.state.user.rol == "normal person") {
      this.conversation.idUser = this.user_connected;
      this.conversation.idProfessional = this.other_user;
      axios.post("/conversation", this.conversation).then(response => {
        if (response.status == 200) {
          this.conversation = response.data;
        }
      });
    }

    this.socket = io("http://localhost:3000");
    this.socket.on("Server Ready", () => {
      this.socket.emit("new_chat", {
        startedBy: this.user_connected,
        chatsWith: this.other_user
      });
    });
    this.socket.on("message_received", data => {
      this.conversation.messages.push({ idSender: data.from, content: data.message });
    });
  },

  methods: {
    loadChat() {},
    sendMessage() {
      if (this.new_message) {
        this.socket.emit("message_sent", {
          from: this.user_connected,
          to: this.other_user,
          msg: this.new_message
        });
        this.conversation.messages.push({ idSender: this.user_connected, 
            content: this.new_message });
        
        axios.put('/conversation/' + this.conversation._id, this.conversation).then(response => {
            console.log(JSON.stringify(response))});
        this.new_message = "";
      }
    }
  },
  beforeDestroy() {
    this.socket = null;
  }
};
</script>
