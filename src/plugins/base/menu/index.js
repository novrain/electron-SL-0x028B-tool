import store from './store'
import messages from './view/locale'
import routes from './routes'

import Tagbar from './components/TagsView'

import Menu from './view/menu/Menu'

const entry = (opts, Vue) => {
    /**
     * 注入组件，在store里作为动态组件使用
     */
    Vue.component('ii-menu', Menu)
    Vue.component('ii-tagbar', Tagbar)
    return {
        store: store(opts),
        messages,
        routes: routes(opts)
    }
}

export {
    entry
}