export default function(resp, callback, errorCallback) {
    if(resp && resp.code === 0) {
        callback()
    } else {
        errorCallback()
    }
}