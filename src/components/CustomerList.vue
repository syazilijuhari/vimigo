<template>
  <div class="container-fluid m-2 p-3">
    <h3 style="font-weight: bold">Customer List</h3>
  </div>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <table class="table tabler">
            <thead class="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody v-for="customer in users" :key="customer.id">
            <tr>
              <th scope="row">{{ customer.id }}</th>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.gender }}</td>
              <td>
                <!-- Call to action buttons -->
                <ul class="list-inline m-0">
                  <li class="list-inline-item">
                    <a
                        class="btn btn-success btn-sm rounded-0"
                        type="button"
                        href="#"
                        title="Edit"
                    ><i class="fa fa-edit"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <button
                        class="btn btn-danger btn-sm rounded-0"
                        type="submit"
                        title="Delete"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer clearfix">
          <router-link to="/add" class="btn btn-sm btn-info float-left" style="margin-top: 5px">Add New Customer</router-link>
          <paginate :container-class="'pagination float-end'" :page-count="pageCount" :click-handler="handlePaginate">
          </paginate>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Paginate from "vuejs-paginate-next";

export default {
  name: "CustomerList",
  components: {
    paginate: Paginate,
  },
  data() {
    return {
      users: Array,
      currentpage: 1,
      pageCount: 0
    }

  },

  created() {
    this.getCustomer();

  },

  methods: {
    async getCustomer(page=1) {
      let url = 'https://gorest.co.in/public/v2/users?page=' + page
      await axios.get(url).then(response => {
        this.users = response.data;
        this.pageCount = response.headers['x-pagination-pages']
        console.log(response.headers);
      }).catch(error => {
        console.log(error);
      });
    },

    handlePaginate: function (pageNo) {
      this.getCustomer(pageNo)
    }
  },

  mounted() {
    console.log('Customer List Component mounted')
  }

};
</script>
