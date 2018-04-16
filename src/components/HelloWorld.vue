<template>
  <div id="HelloWorld">
    <h1>{{ msg }}</h1>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
    <div v-if="seen">Now you see me</div>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <p>
      {{ message }}
    </p>
    <button v-on:click="reverseMessage_1">Reverse Message</button>
    <input v-model="message">
    <ol>
      <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
    <p>
      Original message_2: "{{ message_2 }}"
    </p>
    <p>
      Computed reversed message_2: "{{ reversedMessage_2 }}"
    </p>
    <p>
      {{now}}
    </p>
     <input v-model="message_2">
     <p>
       {{ fullName }}
     </p>
     <p>
       {{ computed_fullName }}
     </p>
     <p>
       {{ get_set_fullName }}
     </p>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>
        {{ answer }}
      </p>
      <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }">
        Active!!
      </div>
      <div v-bind:class="classObject">classObject Active!</div>
      <div v-bind:class="classObjects">classObjects Active!</div>
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
      <button v-on:click="greet">Greet</button>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
        Submit
      </button>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      message_2: Date.now(),
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      hasError: null,
      classObject: {
        active: true,
        'text-danger': null
      },
      counter: 0
    }
  },
  methods: {
    reverseMessage_1: function () {
      this.message = this.message.split('').reverse().join('')
    },
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.fullName + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    },
    warn: function (message, event) {
      // ネイティブイベントを参照しています
      if (event) event.preventDefault()
      alert(message)
    }
  },
  components: {
      TodoItem
  },
  computed: {
    // 算出 getter 関数
    reversedMessage_2: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    },
    computed_fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    get_set_fullName : {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    classObjects: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}
</script>
