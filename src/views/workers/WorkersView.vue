<template>
    <div id="workers">
      <h1>Workers</h1>

      <p>CRUD for workers</p>
    <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Shop</th>
            <th scope="col">Journal</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
         <tbody>
          <tr v-for="worker in workers" :key="worker._id">
            <td>{{ worker.name }}</td>
            <td>{{ worker.surname }}</td>
            <td>{{ worker.shop }}</td>
            <td>{{ worker.journal }}</td>
        
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name:'editWorker', params: {id: worker.id}}" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                  
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteWorker(worker.id)">Delete</button>
                  
                </div>
              </div>
            </td>
          </tr>
        </tbody> 
      </table>
      <router-link to="/workers/add" class="btn btn-success">Create Worker</router-link>
    </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios"
export default {
 
 data() {
   return {
     workers: []
   }
 },
  
  name: 'WorkersView',

  created() {
    this.fetchWorkers();
  },

    methods: {
    fetchWorkers(){
      axios.get('http://127.0.0.1:8000/api/worker/').then(data => (this.workers = data.data));
    },

    deleteWorker(id){
       axios.delete(`http://127.0.0.1:8000/api/worker/delete/${id}`)
       .then(response => {
                 console.log(response);
                 window.location.reload();
             })
             .catch(function (error) {
                console.log(error.response)
             })
      },
  }
};
</script>
