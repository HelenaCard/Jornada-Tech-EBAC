export default{
    jump: new kayboardEvent('keydown', {key: 'space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}