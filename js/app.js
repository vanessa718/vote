// let vm = new Vue ({
// 	el: '#app',
// 	data: {
// 		message: 'Cliquer pour soumettre votre question',
// 		link:'file:///home/simplon/Documents/VueJS/vote/app.html',
// 		success: true,
// 		persons: ['John', 'Jane', 'Bob'],
// 		question: '',
// 		icon: './analyse/menu_close.svg'
		
        
// 	},
	

// 	methods: {
// 		open: function(){
// 			this.success = false
// 		}  
// 	}

// })


// Vue.component ('form-question',{
	var formUser ={    
		props: {
	        value: Object
	    },    data (){
	        return {
	            user:{...this.value}
	        }
	    },    
	    methods: {
	        save (){
	            this.$emit('input', this.user)
	        }
	    },    
	    template:`
	    <form class="ui form" @submit.prevent="save">
	        <div class="field">
	            <label for="">Moi, </label>
	            <input type="text" v-model="user.name">
	        </div>    
	    </form>`,
	}
// })


Vue.component('app-wrapper', {
  template: `
    
        <header>
	      	<p class="text_header">JE VOTE !</p>
			<img class="icon" src="./analyse/menu_close.svg" @click="toggleNav()">
        </header>
    
  `,
  methods: {
    toggleNav () {
      this.$parent.$emit('toggleNav')
    }
  }
})

Vue.component('app-nav', {
  data () {
    return {
        active: true,
        // person: ['John', 'Jane', 'Bob'],
  		// question: ' ',
		components: {formUser},
    }

  },
  
  template: `
    <aside :class="{ active: active}">
      <nav>
      	<img class="top_icon"  src="./analyse/menu_open.svg" @click="toggleNav()" >
      	<p class="question"> Votre question:</p>
      	<input type="text" class="input">
      </nav>
    </aside>
  `,
  methods: {
    toggleNav () {
      this.$parent.$emit('toggleNav')
    }
  },
  mounted () {
    this.$parent.$on('toggleNav', () => {
      // console.log('received')
      this.active = !this.active
    })
  }
})


var App = new Vue({
  el: '#app',
  data: {
  	message: 'Cliquer pour soumettre votre question',
  	link: '#'
		
  }
})

