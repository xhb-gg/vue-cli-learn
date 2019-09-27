export default function(data, callback, errorCallback) {
    if(data && data.code === 0) {
        callback.bind(this)()
    } else {
        errorCallback.bind(this)()
    }
}