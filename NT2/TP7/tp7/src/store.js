import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        squaresQty : 6,
        isHard : true,
        colors : [],
        pickedColor : 0,
        navigatorMessage : '',
        resetButtonText : 'New colors',
        headerBackGColor : '',
        colorSelected : '',
    },
    actions : {
        modifySquaresQty({commit}, num) {
            commit('modifySquaresQty', num)
        },
        modifyDifficulty({commit}, mode) {
            commit('modifyDifficulty', mode)
        },
        modifyColors({commit}, colors) {
            commit('modifyColors', colors)
        },
        modifyPickedColor({commit}, pickedColor) {
            commit('modifyPickedColor', pickedColor)
        },
        modifyNavigatorMessage({commit}, text) {
            commit('modifyNavigatorMessage', text)
        },
        modifyResetButtonText({commit}, text) {
            commit('modifyResetButtonText', text)
        },
        modifyHeaderBackGColor({commit}, color) {
            commit('modifyHeaderBackGColor', color)
        },
        modifyColorSelected({commit}, color) {
            commit('modifyColorSelected', color)
        },
    },
    mutations : {
        modifySquaresQty(state, num) {
            state.squaresQty = num
        },
        modifyDifficulty(state, mode) {
            state.isHard = mode
        },
        modifyColors(state, colors) {
            state.colors = colors
        },
        modifyPickedColor(state, pickedColor) {
            state.pickedColor = pickedColor
        },
        modifyNavigatorMessage(state, text) {
            state.navigatorMessage = text
        },
        modifyResetButtonText(state, text) {
            state.resetButtonText = text
        },
        modifyHeaderBackGColor(state, color) {
            state.headerBackGColor = color
        },
        modifyColorSelected(state, color) {
            state.colorSelected = color
        },
    }
})
