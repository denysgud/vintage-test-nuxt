<template>
  <section class="page page_home">
    <div class="page-block">
      <div class="page__container">
        <div class="row row_with-padding">
          <div class="row__column">
            <h1 class="page__title">
              Contacts
            </h1>
          </div>
          <div class="row__column row__column_half">
            <div class="address">
              <h2 class="page-block__title">
                <span class="text-part text-part_green">GMS</span> Headquarters
              </h2>
              <div class="row">
                <div class="row__column row__column_half">
                  <p class="text">
                    Global Message Services Ukraine LLC<br>
                    Bundesstrasse 5 | 3rd Floor<br>
                    6300 Zug<br>
                    Switzerland<br>
                  </p>
                  <a
                    class="link link_tel"
                    href="tel:+41415446200">+41 41 544 62 00</a>
                </div>
                <div class="row__column row__column_half">
                  <p class="text">
                    Email<br>
                    <a 
                      class="link"
                      href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a><br>
                    Send message<br>
                    <a
                      class="link"
                      href="viber://add?number=41415446200">viber us</a><br>
                    Send form<br>
                    <a
                      v-smooth-scroll="{ duration: 1000, offset: 0 }"
                      class="link"
                      href="#form">Contact us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row__column row__column_half">
            <div class="support">
              <h2 class="page-block__title">
                Technical support <span class="text-part text-part_green">24/7</span>
              </h2>
              <p class="text">
                GMS understands that it can be hard to follow all new technologies.
                We regularly provide for our clients educational trainings to male your
                operator's business earn more and better though our best practices.
              </p>
              <a
                class="link link_tel"
                href="tel:+41415446206">+41 41 544 62 06</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-block page-block_offices page-block_no-padding">
      <div class="page__container">
        <div class="row">
          <div class="row__column row__column_half">
            <div class="offices">
              <h2 class="page-block__title">
                Our Office
              </h2>
              <tabs
                :tabs="tabs"
                @officeChanged="changePoint" />
            </div>
          </div> 
          <div class="row__column row__column_half">
            <div class="map">
              <googleMap :pointer-coords="currentPoint" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-block page-block_form">
      <div class="page__container">
        <div class="row row_with-padding">
          <div class="row__column row__column_half">
            <div
              id="form"
              class="form">
              <h2 class="page-block__title page-block__title_white">
                Contact Us
              </h2>
              <contactForm />
            </div>
          </div>
          <div class="row__column row__column_half">
            <div class="request-info">
              <p class="text text_form">
                Please tell us more about your request and give us info
                about your company and country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from '~/components/Tabs.vue';
import ContactForm from '~/components/ContactForm.vue';
import GoogleMap from "@/components/GoogleMap";

export default {
  components: {
    Tabs,
    ContactForm,
    GoogleMap
  },
  data() {
    return {
      currentPoint: {}
    }
  },
  computed: {
    tabs() {
      return this.$store.getters.allOffices;
    }
  },
  mounted() {
    this.currentPoint = this.tabs[0].coords;
  },
  methods: {
    changePoint(tabId) {
      this.currentPoint = this.tabs[tabId].coords;
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/pages/home.scss";
</style>
