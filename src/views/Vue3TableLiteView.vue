<script setup lang="ts">
  import { computed, onMounted, reactive, ref, watch } from "vue";
  import { VContainer, VTextField } from "vuetify/components";
  import ConfirmDialog from "../components/ConfirmDialog.vue";
  import EditPost from "../components/EditPost.vue";

  import { useStore } from "vuex";

  import VueTableLite from "vue3-table-lite/ts";

  const store = useStore();
  const posts = computed(() => store.getters["posts/getPosts"]);
  const numberOfPosts = computed(() => store.getters["posts/getNumberOfPosts"]);
  const isLoading = computed(() => store.getters["posts/getLoading"]);
  let refreshNeeding = false;

  let checkedRowsIds = [];

  const searchTerm = ref(""); // Search text
  const showEditDialog = ref(false); // True if show edit post
  const showConfirmDialog = ref(false); // True if show confirm dialog
  const resultConfirm = ref(false);
  const selectedPost = ref(Object);
  const selectedId = ref("");

  watch(searchTerm, () => {
    doSearch("0", table.pageSize.toString(), table.sortable.order, table.sortable.sort);
  });

  watch(isLoading, () => {
    if (refreshNeeding && !isLoading.value) {
      doSearch(table.offset, table.pageSize.toString(), table.sortable.order, table.sortable.sort);
      refreshNeeding = false;
    }
  });

  onMounted(() => {
    doSearch("0", "10", "title", "asc");
  });

  function closeEditDialog() {
    refreshNeeding = true;
  }

  function deletePost() {
    if (resultConfirm.value) {
      store.dispatch("posts/deletePostById", {
        id: selectedId.value,
      });
    }
    showConfirmDialog.value = false;
    refreshNeeding = true;
  }

  const table = reactive({
    hasCheckbox: true,
    isLoading: isLoading,
    columns: [
      {
        label: "ID",
        field: "_id",
        width: "5%",
        sortable: false,
        isKey: true,
        display: function (row) {
          return row._id.slice(5, 9);
        },
      },
      {
        label: "Aut",
        field: "author",
        width: "5%",
        sortable: false,
        display: function (row) {
          return row.author.slice(5, 9);
        },
      },
      {
        label: "Title",
        field: "title",
        width: "30%",
        sortable: true,
      },
      {
        label: "Content",
        field: "content",
        width: "55%",
        sortable: true,
        display: function (row) {
          return row.content.slice(0, 71) + "...";
        },
      },
      {
        label: "Edit",
        field: "quick",
        width: "5%",
        display: function (row) {
          return `<button type="button" data-id="${row._id}" class="is-rows-el quick-btn edit-btn">Edit</button>`;
        },
      },
      {
        label: "Delete",
        field: "quick",
        width: "5%",
        display: function (row) {
          return `<button type="button" data-id="${row._id}" class="is-rows-el quick-btn delete-btn">Delete</button>`;
        },
      },
    ],
    rows: posts,
    totalRecordCount: numberOfPosts,
    sortable: {
      order: "title",
      sort: "asc",
    },
    messages: {
      pagingInfo: "Dokumentumok {0}-{1}-ig (össz.:{2})",
      pageSizeChangeLabel: "Dok. / oldal: ",
      gotoPageLabel: "Ugrás: ",
      noDataAvailable: "Nincsenek adatok!",
    },
    pageSize: 10,
    offset: "0",
  });
  const doSearch = (offset: string, limit: string, order: string, sort: string) => {
    store.dispatch("posts/fetchPaginatedPosts", {
      offset: offset,
      limit: limit,
      order: order,
      sort: sort == "asc" ? "1" : "-1",
      keyword: searchTerm.value,
    });
    table.pageSize = parseInt(limit);
    table.sortable.order = order;
    table.sortable.sort = sort;
    table.offset = offset;
  };

  const tableLoadingFinish = (elements) => {
    // table.isLoading = false;
    Array.prototype.forEach.call(elements, function (element) {
      if (element.classList.contains("edit-btn")) {
        element.addEventListener("click", function () {
          const selPost = posts.value.find((x) => x._id == element.dataset.id);
          selectedPost.value = selPost;
          showEditDialog.value = true;
        });
      }
      if (element.classList.contains("delete-btn")) {
        element.addEventListener("click", function () {
          selectedId.value = element.dataset.id;
          showConfirmDialog.value = true;
        });
      }
    });
  };

  const updateCheckedRows = (rowsKey) => {
    checkedRowsIds = rowsKey;
    const number = checkedRowsIds.length;
    console.log("Checked: " + checkedRowsIds.length + (number == 1 ? "row" : "rows"));
  };
</script>

<template>
  <v-container class="page">
    <h1 class="text-h4 ma-3">vue3-table-light</h1>
    <v-text-field v-model="searchTerm" label="Kérem a keresendő szórészletet!"></v-text-field>
    <VueTableLite
      :columns="table.columns"
      :has-checkbox="table.hasCheckbox"
      :is-loading="table.isLoading"
      :messages="table.messages"
      :page-size="table.pageSize"
      :rows="table.rows"
      :sortable="table.sortable"
      :total="table.totalRecordCount"
      @do-search="doSearch"
      @is-finished="tableLoadingFinish"
      @return-checked-rows="updateCheckedRows"
    ></VueTableLite>
    <EditPost
      v-if="showEditDialog"
      v-model="showEditDialog"
      :post="selectedPost"
      @close="closeEditDialog"
    ></EditPost>
    <ConfirmDialog
      v-if="showConfirmDialog"
      v-model="showConfirmDialog"
      v-model:result="resultConfirm"
      @close="deletePost"
    />
  </v-container>
</template>

<style scoped>
  .card ::v-deep(.table .thead-dark th) {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;
  }
  .card ::v-deep(.table td),
  .card ::v-deep(.table tr) {
    border: 1px solid #42b983;
  }
  .card ::v-deep(.quick-btn) {
    background-color: lightgray;
    border-style: solid;
  }

  .card ::v-deep(.table tr:nth-child(even)) {
    background-color: #f2f2f2;
  }

  .card ::v-deep(.table tr:hover) {
    background-color: #ddd;
  }
  .edit-btn {
    background-color: green;
  }
</style>
