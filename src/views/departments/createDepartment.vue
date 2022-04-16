<template>
  <div class="d-flex">
    <div class="col-md-12 form-wrapper">
      <h2> Add department</h2>
      <form id="create-post-form" @submit.prevent="createDepartment">
        <div class="form-group col-md-12">
          
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          
          <input type="text" id="location" v-model="location" name="location" class="form-control" placeholder="Enter location">
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
    createDepartment() {
      let DepartmentData = {
        name: this.name,
        location: this.location,
      };
      this.submitToServer(DepartmentData);
    },

    /* eslint-disable */

    submitToServer(data) {
      axios.post(`http://127.0.0.1:8000/api/dep/add`, data)
      
      .then ( data => {
        router.push({ name: "departments" });
      });
    },
  }
};
</script>