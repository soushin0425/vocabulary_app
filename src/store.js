import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            proj_list: []
        }
    },
    mutations : {
        add_project: (state,input_project) => {
            state.proj_list.push(input_project)
        },
        delete_project: (state,index) => {
            state.proj_list.splice(index,1)
        }
    },
})