<template>
    <div class="new-note">
        <label>Title
            <input v-model="note.title" type="text">
        </label>

<!-- <label class="priority"> -->
    
    <div class="priority" id="priority"> 
        <div>Priority</div>
        <div v-for="(priority,index) in ['low', 'medium', 'high']" :key="index" :id= "index" >  
            <label> {{ priority }}
                <input  
                type="radio"  
                name="priority" 
                :id="priority" 
                :value ="priority" 
                v-model="note.priority"  
                >       
            </label>
        </div>
    </div>
        
    <!-- <label class="priority">
        <div>  
            <input v-model="note.priority"  @click="grid=true" type="radio"  name="priority"  value ="low" checked="true" />
            <span>low</span>
        </div>
        <div>  
            <input v-model="note.priority" type="radio"  name="priority" value ="normal"/><span>normal</span>
            
        </div>
        <div>  
            <input v-model="note.priority" type="radio" name="priority" value ="high"/>
            <span>high</span>
        </div>
    </label> -->
<!-- </label> -->
        <label>Description   
            <textarea v-model="note.descr"></textarea>
        </label>   

         <button class="btn btnPrimary" @click="addNote">new note</button>
            <!-- <p>{{note.title}}</p> -->
        </div>
</template>

<script>
export default {
        props: {
            note:{
                type:Object,
                required:true
            } 
        },
        methods: {
            addNote() {
                this.$emit('addNote', this.note)
            }     
        }
       
}

</script>

<style lang="scss">

.new-note {
    text-align:center;
    margin-bottom: 20px;
}

.priority {
    display:flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
   
       input { margin-bottom: 0;
    }
 #priority{
     display: flex;
     justify-content: space-between;
 }    
}
</style>
