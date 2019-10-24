export default function(resp, callback, errorCallback) {
  if (resp && resp.code === 0) {
    callback && callback()
  } else {
    this.$message.error(resp.message)
    errorCallback && errorCallback()
  }
}
