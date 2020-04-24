<template>
  <div class="container">
    <div class="comments">
      <div class="comments__header">
        <div class="comments__info">
          <p><b>Последние отзывы</b></p>
          <a href="#" @click.prevent="showAll()">Все отзывы</a>
        </div>
        <div class="comments__icons">
          <ul>
            <li><img src="~/assets/img/like.svg" alt="like"> {{ countLike }}</li>
            <li><img src="~/assets/img/sms.svg" alt="sms"> {{ countSms }}</li>
          </ul>
        </div>
      </div>
      <div class="comments__list">
        <ul>
          <Item
            v-for="item in items"
            :key="item"
            :item="item"
          />
        </ul>
      </div>
      <hr>
      <form @submit.prevent="addNewTodo">
        <label>Добавить задачу</label>
        <!--<input
          v-model.trim="newTodoText"
          placeholder="Например"
        >-->
        <div
          contenteditable
          ref="box"
          @input="event => newTodoText = event.target.innerText"
          @keydown.enter="addNewTodo"
        />
        <button>Добавить</button>
      </form>
    </div>
  </div>

</template>
<script>
  import Item from './item'

  export default {
    components: {
      Item
    },
    data: () => ({
      newTodoText: '',
      countLike: 131,
      countSms: 14,
      items: [
        {id: 1, name: "Vlad", comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?", dateItem: '13 октября 2011'},
        {id: 2, name: "Serg", comment: "Lorem ipsum2", dateItem: '14 октября 2011'},
        {id: 3, name: "Yana", comment: "Lorem ipsum3", dateItem: '1580558031264'}
      ],
      nextTodoId: 4
    }),
    methods: {
      addNewTodo: function () {
        this.items.push({
          id: this.nextTodoId++,
          comment: this.newTodoText
        });
        console.log(this.items);
        this.newTodoText = '';
        process.nextTick(() => {
          this.$refs.box.innerText = '';
        })
      }
    }
  }
</script>
