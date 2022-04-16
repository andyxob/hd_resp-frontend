<template>
  <div class="about">
    <h1>Shops</h1>

    <p>CRUD for shops</p>
    <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            
            <th scope="col">Actions</th>
          </tr>
        </thead>
         <tbody>
          <tr v-for="shop in shops" :key="shop._id">
            <td>{{ shop.name }}</td>
            <td>{{ shop.department }}</td>
          
        
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'editShop', params: {id: shop.id}}" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteShop(shop.id)">delete</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody> 
      </table>
    <router-link to="/shops/add" class="btn btn-success">Create shop</router-link>

  </div>
</template>


<script>
import axios from "axios"
export default {
 
 data() {
   return {
     shops: []
   }
 },
  
  name: 'ShopView',

  created() {
    this.fetchShops();
  },

  methods: {
    fetchShops(){
      axios.get('http://127.0.0.1:8000/api/shop/').then(data => (this.shops = data.data));
    },

    deleteShop(id){
       axios.delete(`http://127.0.0.1:8000/api/shop/delete/${id}`)
       .then(response => {
                 console.log(response);
                 window.location.reload();
             })
             .catch(function (error) {
                console.log(error.response)
             })
      },
  },
  
  
};
</script>