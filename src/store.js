import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            proj_list:[
                {"project_id": 0,"project_name": "単語1"},
                {"project_id": 1,"project_name": "単語2"},
                {"project_id": 2,"project_name": "単語3"},
                {"project_id": 3,"project_name": "単語4"},
            ],
            word_list:[
                {"project_id":0,"word_id":0, "input": "apple1","status": 0},
                {"project_id":0,"word_id":1, "input": "apple2","status": 1},
                {"project_id":1,"word_id":2, "input": "apple3","status": 0},
                {"project_id":1,"word_id":3, "input": "apple4","status": 1},
            ]
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