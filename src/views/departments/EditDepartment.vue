<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">To Departments</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit department`s data</h2>
      <form id="create-post-form" @submit.prevent="editDepartment">
          <div class="form-group col-md-12">
          <input type="text" id="name" v-model="department.name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          <input type="text" id="location" v-model="department.location" name="location" class="form-control" placeholder="Enter location">
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
      department: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDep();
  },
  methods: {
    editDepartment() {
      let depData = {
        name: this.department.name,
        location: this.department.location,
        
      };
      axios
        .put(
          `http://127.0.0.1:8000/api/dep/edit/${this.id}`,depData)
        .then(() => {
          router.push({ name: "departments" });
        });
    },
    getDep() {
      axios
        .get(`http://127.0.0.1:8000/api/dep/${this.id}`)
        .then(data => (this.department = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>