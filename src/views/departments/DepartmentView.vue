<template>
    <div id="departments">
        <h1>Departments</h1>
         <p>CRUD for departments</p>
    <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
         <tbody>
          <tr v-for="department in departments" :key="department._id">
            <td>{{ department.name }}</td>
            <td>{{ department.location }}</td>
            
        
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'editDep', params: {id: department.id}}" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteDepartment(department.id)">Delete</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody> 
      </table>


            <router-link to="/departments/add" class="btn btn-success">Create Department</router-link>

    </div>
</template>


<script>
import axios from "axios"
export default {
 
 data() {
   return {
     departments: []
   }
 },
  
  name: 'DepartmentsView',

  created() {
    this.fetchDepartments();
  },

  methods: {
    fetchDepartments(){
      axios.get('http://127.0.0.1:8000/api/dep/').then(data => (this.departments = data.data));
    },
    deleteDepartment(id){
       axios.delete(`http://127.0.0.1:8000/api/dep/delete/${id}`)
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