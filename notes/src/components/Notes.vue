<template>

<!-- note list -->
    <div class="notes"> 
        <div class="note" :class="{ full:!grid}" :id="note.priority"  v-for="(note, index) in notes" :key="index"  >         
           
                <div class="note-header"  :class="{ full:!grid}">  
                    <!-- https://jsfiddle.net/enL5tjs0/ --> 
                    <input 
                    v-if="note.editing"         
                    v-model="note.title" 
                    v-focus
                    @blur="note.editing=false" 
                    @keyup.enter.prevent="forceRerender(); note.editing=false"
                    @keydown.esc="note.editing=false; note.title  = notes.oldTitle"
                    :key="compKey"
                    >    
                    <p v-else :key="compKey"  @click="forceRerender(); note.editing=true; notes.oldTitle = note.title "  >
                        {{ note.title }}
                    </p>        
                    <p style="cursor: pointer;" @click="removeNote(index)">x</p>
                </div>
               
                <div class="note-body" :class="{ full:!grid}" >
                    <p><span>Priority: </span>{{note.priority}}</p>
                    <p>{{note.descr}}</p>
                    <p>{{note.date}}</p>
                    <hr align="left" width="100%" size="2" color ="#ff9900">
                </div>
            
            </div>
        </div>
        
 </template>

<script>
export default {
    props:  {
        notes: {
            type: Array,
            required: true
        },
    
        grid: {
            type: Boolean,
            required: true
        }
       
    },
    
     directives: {
            focus: {
                inserted (el) {
                el.focus()
            }
        }
  },
    data() {
        return {
        compKey: 0,
        };
    },

    methods: {
 
            removeNote(index) {
                 console.log(this.$refs);
                console.log(`Note id - ${index} removed`)
                this.$emit('remove', index)
            },

            // https://michaelnthiessen.com/force-re-render
             forceRerender() {
                this.compKey += 1;  
            }
    }   
}
</script> 


<style lang="scss">
.notes {
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap:wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin: 5px 0;
    background-color: #fff;
        box-shadow: 0 30px 30px rgba(0,0,0,.02);
        transform: all .25s cubic-bezier(.02,.01,.47,1);
    &:hover {
        box-shadow: 0 30px 30px rgba(0,0,0,.06);
        transform: translate(0,-6px);
        transition-delay: 0s !important;
    }
    &.full {
        width: 100%;
        text-align:center;
    }
    // &.normal {
    //     background-color:lightgoldenrodyellow;
    // }
    // &.high {
    //     background-color: lightcoral;
    // }
    
}
#low {
background-color: rgb(195, 241, 195);
}
#medium {
    background-color:rgb(233, 231, 97);
}
#high {
    background-color: rgb(250, 206, 206);
}
.note-header {
     display: flex;
    align-items:center;
    justify-content: space-between;
    h1 {
        font-size: 32px;
    }
    p {
        // display: flex;
        // align-items:center;
        // justify-content: space-between;
        color:#402caf;
    
        font-size: 22px;
    }
    svg {
        margin-right:12px;
        color:#999999;
        &.active {
            color: #402caf;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    &.full {
        justify-content: center;
        p {
            margin-right:16px;
            &:last-child {
                margin-right:0;
            }
        }
    }
}
.note-body {
  
    p {
        margin: 10px 0;
    }
}
</style>