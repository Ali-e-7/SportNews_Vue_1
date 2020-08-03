import Index from './component/index/Index.vue'
import Reserve from './component/reserve/Reserve.vue'
import selectATM from './component/selectAtm/selectATM.vue'
export const RoutNews = [
    {
        path: '/',
        component : Index,
    },
    {
        path : '/Reserve',
        component : Reserve
    },
    {
        path : '/selectATM',
        component : selectATM
    }
];