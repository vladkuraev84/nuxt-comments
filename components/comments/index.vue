<template>
  <div class="comments">
    <div class="container">
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
            :key="item.id"
            :item="item"
          />
        </ul>
      </div>
    </div>
    <div class="comment__form">
      <div class="container">
<!--        <form @submit.prevent="addNewTodo">-->
          <!--<div class="input">
            <input
              v-model.trim="newTodoText"
              placeholder="Например"
            >
          </div>-->

          <div class="input">
            <div
              class="textarea"
              contenteditable
              ref="box"
              @input="event => newTodoText = event.target.innerText"
              @keydown.enter="addNewTodo"
            />
          </div>
          <div class="text-center">
            <button class="btn btn--yellow" @click="addNewTodo">Написать консультанту</button>
          </div>
<!--        </form>-->
      </div>
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
        {id: 1, name: "Самуил", comment: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ", dateItem: '13 октября 2011'},
        {id: 2, name: "Лилия Семеновна", comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?", dateItem: '14 октября 2011'},
        {id: 3, name: "Лилия Семеновна", comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?", dateItem: '14 октября 2011'}
      ],
      myDate: new Date(),
      nextTodoId: 4
    }),
    methods: {
      addNewTodo: function (e) {
        if (!e.shiftKey) {
          this.items.push({
            id: this.nextTodoId++,
            dateItem: this.myDate,
            comment: this.newTodoText.trim()
          });
          this.newTodoText = '';
          process.nextTick(() => {
              this.$refs.box.innerText = '';
          });
        }


      }
    }
  }
</script>
