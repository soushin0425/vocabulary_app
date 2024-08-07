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
                {"project_id":0,"word_id":0, "word": "apple1","status": 0,"meaning":"リンゴ1","image":"image1","example":"example1","times":10},
                {"project_id":0,"word_id":1, "word": "apple2","status": 0,"meaning":"リンゴ2","image":"image2","example":"example2","times":2},
                {"project_id":1,"word_id":2, "word": "apple3","status": 0,"meaning":"リンゴ3","image":"image3","example":"example3","times":0},
                {"project_id":1,"word_id":3, "word": "apple4","status": 1,"meaning":"リンゴ4","image":"image4","example":"example4","times":0},
            ]
        }
    },
    mutations : {
        //プロジェクトの追加
        add_project: (state,input_project) => {
            const newProjectId = state.proj_list.length;
            state.proj_list.push({ project_id: newProjectId, project_name: input_project });
        },
        //プロジェクトの削除
        delete_project: (state,index) => {
            state.proj_list.splice(index,1)
        },
        //単語の追加
        add_word: (state,{project_id,input_word,input_status,input_meaning,input_image,input_example}) => {
            const newWordId = state.word_list.length;
            state.word_list.push({ project_id: project_id, word_id: newWordId, word: input_word, status: input_status, meaning: input_meaning, image: input_image, example: input_example, times: 0});
        },
        //ステータスの変更
        updateWordStatus(state, updatedWord) {
            const word = state.word_list.find(w => w.word_id === updatedWord.word_id);
            if (word) {
                word.status = updatedWord.status;
            }
        },
        
    },
})