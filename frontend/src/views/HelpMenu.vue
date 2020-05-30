<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-info shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew" style="margin-top: -350px;">
      <div class="row justify-content-center">
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="mb-3"></div>
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane title="Médica">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                </p>
              </tab-pane>
              <tab-pane title="Humanitaria">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <p class="Trabajo">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                </p>
              </tab-pane>
              <tab-pane title="Psicológica">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                </p>
              </tab-pane>

              <tab-pane title="Espiritual">
                <p class="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                  american apparel, butcher voluptate nisi qui.
                </p>
              </tab-pane>

              <tab-pane title="Messages">
                <p class="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                  cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                  keffiyeh dreamcatcher synth.
                </p>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
