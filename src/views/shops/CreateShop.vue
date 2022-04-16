<template>
  <div class="d-flex">
    <div class="col-md-12 form-wrapper">
      <h2> Add shop</h2>
      <form id="create-post-form" @submit.prevent="createShop">
        <div class="form-group col-md-12">
          
          <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          
          <input type="number" id="department" v-model="department" name="department" class="form-control" placeholder="Enter Department">
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
        department: "",
        
      }
  },
  
  methods: {
    createShop() {
      let ShopData = {
        name: this.name,
        department: this.department,
      };
      this.submitToServer(ShopData);
    },

    /* eslint-disable */

    submitToServer(data) {
      axios.post(`http://127.0.0.1:8000/api/shop/add`, data)
      
      .then ( data => {
        router.push({ name: "shops" });
      });
    },
  }
};
</script>