<template>
  <div class="d-flex">
    <div class="col-md-12 form-wrapper">
      <h2> Add worker</h2>
      <form id="create-post-form" @submit.prevent="createWorker">
        <div class="form-group col-md-12">
          
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          
          <input type="text" id="surname" v-model="surname" name="surname" class="form-control" placeholder="Enter surname">
        </div>
        <div class="form-group col-md-12">
            
            <input type="number" id="journal" v-model="journal" name="journal" class="form-control" placeholder="Enter journal number">
        </div>
        <div class="form-group col-md-12">
          
          <input type="number" id="shop" v-model="shop" name="shop" class="form-control" placeholder="Enter shop number">
        </div>
        
        <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>




<script>
import axios from "axios";
import router from "../../router";
export default {
  
  data() {
      return {
        name: "",
        surname: "",
        shop: "",
        journal: ""
      }
  },
  
  methods: {
    createWorker() {
      let WorkerData = {
        name: this.name,
        surname: this.surname,
        shop: this.shop,
        journal: this.journal,
      };
      this.submitToServer(WorkerData);
    },

    /* eslint-disable */

    submitToServer(data) {
      axios.post(`http://127.0.0.1:8000/api/worker/add`, data)
      
      .then ( data => {
        router.push({ name: "workers" });
      });
    },
  }
};
</script>