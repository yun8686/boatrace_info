<template>
  <v-card flat>
    <v-flex class="text-center">
      <v-btn>{{title}}</v-btn>
      <v-card-text>text</v-card-text>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">枠</th>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="text-left">{{ item.id }}</td>
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  props: ['title'],
  mounted: () => {
    console.log("マウントエッド")
  },
  data: ()=>{
    return {
      desserts: [
        {id: 1, name: "おけ", calories: "100"},
        {id: 2, name: "おけ", calories: "100"},
        {id: 3, name: "おけ", calories: "100"},
        {id: 4, name: "おけ", calories: "100"},
        {id: 5, name: "おけ", calories: "100"},
        {id: 6, name: "おけ", calories: "100"},
      ]
    }
  }
}
</script>
