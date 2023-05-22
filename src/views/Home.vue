<template>
  <div class="home py-5">
    <div class="container my-5">
      <div v-if="!isLoading && data">
        

        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Nickname</th>
              <th scope="col">Age</th>
              <th scope="col">Home</th>
              <th scope="col">Type</th>
              <th scope="col">Quote</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item._id.$oid">
              <th>{{ index + 1 }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.nickname }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.home }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.quote }}</td>
              <th>
                <div class="d-flex">
                  <button @click="fillInInput(item); onEditId = index" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                    Edit
                  </button>
                  <router-link :to="`/about?index=${index}`" class="btn btn-primary text-white ms-2">
                    View
                  </router-link>
                </div>
              </th>
            </tr>
          </tbody>
        </table>

        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p class="bg-warning p-3 rounded-2">
                  <b>!</b> Formulir edit ini hanya mengedit data local saja, dikarenakan tidak endpoint / API untuk melakukan update tersebut, sehingga ketika anda melakukan pindah page / merefresh pada website ini setelah mengedit, data tersebut akan kembali seperti semula.
                </p>
                <form v-show="onEditId != null" @submit.prevent="submit()">
                  <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input v-model="onEditData.name" type="text" class="form-control" id="inputName">
                  </div>
                  <div class="mb-3">
                    <label for="inputNickname" class="form-label">Nickname</label>
                    <input v-model="onEditData.nickname" type="text" class="form-control" id="inputNickname">
                  </div>
                  <div class="mb-3">
                    <label for="inputAge" class="form-label">Age</label>
                    <input v-model="onEditData.age" type="text" class="form-control" id="inputAge">
                  </div>
                  <div class="mb-3">
                    <label for="inputHome" class="form-label">Home</label>
                    <input v-model="onEditData.home" type="text" class="form-control" id="inputHome">
                  </div>
                  <div class="mb-3">
                    <label for="inputType" class="form-label">Type</label>
                    <input v-model="onEditData.type" type="text" class="form-control" id="inputType">
                  </div>
                  <div class="mb-3">
                    <label for="inputQuote" class="form-label">Quote</label>
                    <input v-model="onEditData.quote" type="text" class="form-control" id="inputQuote">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="fillOutInput()">Close</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="isLoading && !data" class="row">
        <Loading />
      </div>
      <div v-else-if="!isLoading && !data">
        Data Tidak Ada
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  data(){
    return {
      onEditId: 0,
      onEditData: {
        name: null,
        nick: null,
        age: null,
        home: null,
        type: null,
        quot: null,
      }
    }
  },

  computed: {
    ...mapGetters({
      data: 'listData',
      isLoading: 'isLoading',
    })
  },

  methods: {
    ...mapActions({
      getData: 'getData'
    }),

    fillInInput(data) {
      this.onEditData = {...data}
    },

    fillOutInput() {
      this.onEditData = {
        name: null,
        nick: null,
        age: null,
        home: null,
        type: null,
        quot: null,
      }
    },
    
    submit(){
      this.data[this.onEditId] = {
        ...this.data[this.onEditId],
        ...this.onEditData
      }
    }
  },

  mounted() {
    this.getData()
  },
}
</script>
