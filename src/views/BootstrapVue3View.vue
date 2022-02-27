<script setup lang="ts">
  import { ref } from "vue";
  import {
    BTable,
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardBody,
    BListGroup,
    BImg,
  } from "bootstrap-vue-3";

  const objectTableDefinitions = [
    { key: "age", label: "Age" },
    { key: "last_name", label: "Family name" },
    { key: "first_name", label: "Given name" },
  ];

  const tableItems = [
    { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
    { age: 21, first_name: "Larsen", last_name: "Shaw" },
    { age: 89, first_name: "Geneva", last_name: "Wilson" },
    { age: 89, first_name: "Michael", last_name: "Jordan" },
    { age: 38, first_name: "Jami", last_name: "Carney" },
  ];

  const inputTypes = [
    "text",
    "number",
    "email",
    "password",
    "search",
    "url",
    "tel",
    "date",
    "time",
    "range",
    "color",
  ];

  const showModal = ref(false);
  const description = ref("This is a description");
</script>

<template>
  <div>
    <h2 class="my-3">Input type</h2>
    <b-card>
      <b-row v-for="type in inputTypes" :key="type" class="my-1">
        <b-col sm="2">
          <label :for="`type-${type}`">Type {{ type }}:</label>
        </b-col>
        <b-col sm="4">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
    </b-card>
  </div>

  <!-- Form Textarea -->
  <div class="my-2">
    <h2>Form Textarea</h2>
    <b-form-textarea v-model="description" class="my-3" />
  </div>

  <!-- Cards -->
  <div class="my-2">
    <h2 class="my-3">Cards</h2>
    <b-row>
      <b-col>
        <b-card
          img-alt="Image"
          img-src="https://placekitten.com/360/210"
          img-top
          no-body
          style="max-width: 20rem"
        >
          <template #header>
            <h4 class="mb-0">Hello World</h4>
          </template>

          <b-card-body>
            <b-card-title>Card Title</b-card-title>
            <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>

          <b-card-body>
            <a class="card-link" href="#">Card link</a>
            <a class="card-link" href="#">Another link</a>
          </b-card-body>

          <b-card-footer>This is a footer</b-card-footer>

          <b-card-img alt="Image" bottom src="https://placekitten.com/480/210" />
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="mb-2"
          img-alt="Image"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          style="max-width: 20rem"
          tag="article"
          title="Card Title"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card class="overflow-hidden" no-body style="max-width: 540px">
          <b-row class="g-0">
            <b-col md="6">
              <b-card-img
                alt="Image"
                class="rounded-0"
                src="https://picsum.photos/400/400/?image=20"
              />
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional
                  content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>

  <!-- Image thumbnails -->
  <div class="my-2">
    <h2>Image thumbnails</h2>
    <b-card class="bg-dark">
      <b-row>
        <b-col>
          <b-img
            alt="Image 1"
            fluid
            src="https://picsum.photos/250/250/?image=54"
            thumbnail
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            alt="Image 2"
            fluid
            src="https://picsum.photos/250/250/?image=58"
            thumbnail
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            alt="Image 3"
            fluid
            src="https://picsum.photos/250/250/?image=59"
            thumbnail
          ></b-img>
        </b-col>
      </b-row>
    </b-card>
  </div>

  <!-- Carousel -->
  <div class="my-2">
    <h2>Carousel</h2>

    <b-carousel
      id="carousel-1"
      background="#ababab"
      controls
      img-height="480"
      img-width="1024"
      indicators
      :interval="2000"
      style="text-shadow: 1px 1px 4px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        active
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=52"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-alt="Blank image" img-blank>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>

  <!-- Modal dialog -->
  <div class="my-2">
    <h2>Modal</h2>
    <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
    {{ showModal }}
    <b-modal id="exampleModal" v-model="showModal" fade size="xs" title="Modal title">
      This is a modal dialog.
    </b-modal>
  </div>

  <!-- BTable -->
  <div>
    <h2 class="my-3">Table with object field definitions</h2>

    <b-table
      caption="List of users"
      :fields="objectTableDefinitions"
      hover
      :items="tableItems"
      responsive="xs"
      striped
    >
      <template #cell(first_name)="data">
        <a href="#">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<style scoped></style>
