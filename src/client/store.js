import   Vue                from "vue";
import   Vuex               from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store(
    {
        state: {
            mode:           "home"
            ,
            top_courses:   []
            ,
            courses:   []
        }
        ,





        mutations: {
            setMode(state, newMode) {
                state.mode = newMode
            }
            ,
            setTopCourses(state, newMode) {
                state.top_courses = newMode
            }
            ,
            setTests(state, newMode) {
                state.courses = newMode
            }
        }
        ,





        getters: {
            mode: state => state.mode,
            topCourses: state => state.top_courses,
            courses: state => state.courses
        }
    }
)