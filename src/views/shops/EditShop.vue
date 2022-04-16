<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">To Shops</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit shop`s data</h2>
      <form id="create-post-form" @submit.prevent="editShop">
          <div class="form-group col-md-12">
          <input type="text" id="name" v-model="shop.name" name="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          <input type="number" id="department" v-model="shop.department" name="department" class="form-control" placeholder="Enter department">
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
      shop: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getShop();
  },
  methods: {
    editShop() {
      let shopData = {
        name: this.shop.name,
        department: this.shop.department,
        
      };
      axios
        .put(
          `http://127.0.0.1:8000/api/shop/edit/${this.id}`,shopData)
        .then(() => {
          router.push({ name: "shops" });
        });
    },
    getShop() {
      axios
        .get(`http://127.0.0.1:8000/api/shop/${this.id}`)
        .then(data => (this.shop = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>