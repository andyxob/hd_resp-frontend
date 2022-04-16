<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">To Workers</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit worker`s data</h2>
      <form id="create-post-form" @submit.prevent="editWorker">
          <div class="form-group col-md-12">
          <input type="text" id="name" v-model="worker.name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          <input type="text" id="surname" v-model="worker.surname" name="surname" class="form-control" placeholder="Enter surname">
        </div>
        <div class="form-group col-md-12">
            <input type="number" id="journal" v-model="worker.journal" name="journal" class="form-control" placeholder="Enter journal">
        </div>
        <div class="form-group col-md-12">
          <input type="number" id="shop" v-model="worker.shop" name="shop" class="form-control" placeholder="Enter shop">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>


// <script>
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      worker: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getWorker();
  },
  methods: {
    editWorker() {
      let workerData = {
        name: this.worker.name,
        surname: this.worker.surname,
        journal: this.worker.journal,
        shop: this.worker.shop,
        
      };
      axios
        .put(
          `http://127.0.0.1:8000/api/worker/edit/${this.id}`,workerData)
        .then(() => {
          router.push({ name: "workers" });
        });
    },
    getWorker() {
      axios
        .get(`http://127.0.0.1:8000/api/worker/${this.id}`)
        .then(data => (this.worker = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>