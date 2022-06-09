<template>
    <div class="container-fluid m-2 p-3">
        <h3 style="font-weight: bold;">Create Customer</h3>

      <div class="alert alert-danger mt-4" v-if="error.length">
        <ul class="mb-0">
          <li v-for="(error, index) in error" :key="index">
            {{error}}
          </li>
        </ul>
      </div>

      <form @submit.prevent="saveCustomer" novalidate>
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-body">
              <div class="form-group mt-2">
                <label>Name</label>
                <input type="text" name="name" class="form-control" placeholder="Enter Name" v-model="customer.name">
              </div>

              <div class="form-group mt-2">
                <label>Email</label>
                <input type="email" name="email" class="form-control" placeholder="Enter Email"  v-model="customer.email">
              </div>

              <div class="form-group mt-2">
                <label>Gender</label>
                <select class="form-control" name="gender" v-model="customer.gender">
                  <option disabled selected value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

                <input type="submit" value="Create Customer" class="btn btn-success float-right mt-2">
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'CustomerAdd',
        data() {
            return {
              customer:{},
              name: '',
              email: '',
              gender: '',
              error: []
            }
        },
        methods: {
          async saveCustomer() {
            this.error = [];
            if(!this.customer.name) {
              this.error.push("Name is required")
            }

            if(!this.customer.email) {
              this.error.push("Email is required")
            }

            if(!this.customer.gender) {
              this.error.push("Gender is required")
            }

            if (!this.error.length) {
              let formData = new FormData();
              formData.append('name', this.customer.name);
              formData.append('email', this.customer.email);
              formData.append('gender', this.customer.gender);
              let url = 'https://gorest.co.in/public/v2/users';
              await axios.post(url, formData).then((response) => {
                console.log(response);
              })
            }
          }

        }
    }
</script>