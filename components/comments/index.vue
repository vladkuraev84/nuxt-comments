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
            :name="item.name"
            :date-item="item.dateItem"
            :comment="item.comment"
          />
        </ul>
      </div>
    </div>
    <div class="comment__form">
      <div class="container">
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
  data() {
    return {
      newTodoText: '',
      countLike: 131,
      countSms: 14,
      items: [
        {
          id: 1,
          name: "Самуил",
          comment: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ",
          dateItem: this.$moment('13.10.2011', 'DD.MM.YYYY').toDate()
        },
        {
          id: 2,
          name: "Лилия Семеновна",
          comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
          dateItem: this.$moment('14.10.2011', 'DD.MM.YYYY').toDate()
        },
        {
          id: 3,
          name: "Лилия Семеновна",
          comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
          dateItem: this.$moment('14.10.2011', 'DD.MM.YYYY').toDate()
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo: function (e) {
      if (!e.shiftKey) {
        this.items.push({
          id: this.nextTodoId++,
          comment: this.newTodoText.trim()
        });
        process.nextTick(() => {
          this.$refs.box.innerText = '';
          this.newTodoText = '';
        });
      }
    }
  }
}
</script>
