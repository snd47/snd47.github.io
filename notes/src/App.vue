<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
        <!-- div #app -->
           <!-- добавляем компонент message как тег -->
          <!-- <message>
          </message> -->
          <!-- или упрощенно так -->
          <!-- <message  v-if="message" /> -->
          <!-- <message    :mes="hello I am props" /> -->
          <message  v-if="message"  :mes="message" />
          <!-- <div class="message" v-if="message">
              <p>{{message}}</p>
          </div> -->
          <!-- new note -->
          <newNote :note="note" @addNote="addNote"/>
          <!-- note Title -->
          <div class="note-header" style="margin: 30px 0">
          
            <h1>{{title}}</h1> 
            <!-- search -->
                    <!-- <p>{{search}}</p> -->
            <!-- <p>{{priority[0]}}</p> -->
            <search 
            :value="search"
            placeholder="Find your note"
            @search="search = $event"
            />
            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid=true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid=false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
        <notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
        <!-- note list -->
        <!-- div #app -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'
// @ - src
export default { 

  components: {
    // message:message
    message, newNote, notes, search
  },

  data() {
    return {
      title: 'Notes App',
      search: '',
      message: 0,
      priority:'low',
      grid: true,
      note: {
          title:'',
           priority: 'low',
          descr:'' ,
          oldTitle: ''
         },

      notes: [
                    {
                        title: 'First Note',
                        descr: 'Description for first note',
                        date: new Date(Date.now()).toLocaleString(),
                        priority: 'low',
                        oldTitle: ''
                    },
                    {
                        title: 'Second Note',
                        descr: 'Description for second note',
                        date: new Date(Date.now()).toLocaleString(),
                        priority: 'low',
                        oldTitle: ''
                    },
                    {
                        title: 'Third Note',
                        descr: 'Description for third note',
                        date: new Date(Date.now()).toLocaleString(),
                        priority: 'low',
                        oldTitle: ''
                    }
                ]
          }
        },

        computed: {
          notesFilter() {
          let array = this.notes,
            search = this.search
            if(!search) return array
            //small
            search = search.trim().toLowerCase()
            // Filter
            array = array.filter(function(item) {
              if (item.title.toLowerCase().indexOf(search) !== -1) {
                return item
              }
            })
            // Error
            return array
          }
        },

         methods: {
                addNote() {
                    // console.log(this.note)
                    // this.notes.push({
                    //     title:this.note.title,
                    //     descr:this.note.descr
                    // })
                        let {title, priority, descr} = this.note // destructuring

                        if (title === '') {
                            this.message='title can`t be blank!'
                            return false
                        }
                        
                        this.notes.push({
                            title,      // title:title
                            priority,                     
                            descr,                
                            date: new Date(Date.now()).toLocaleString()
                        })
                        this.note.title = ''
                        this.note.descr = ''
                        this.message = ''
                        this.priority = ''
                  },
             
                removeNote(index) {
                  this.notes.splice(index, 1)
                },

            }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
