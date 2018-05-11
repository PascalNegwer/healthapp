export default (function () {
  function get(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }

  function set(name, value, expires) {
    let date = new Date();
    date.setTime(date.getTime() + expires);
    document.cookie = name + '=' + value + ';'
      + 'max-age=432000;'
      + 'path=/;';
  }

  function expireNow(name) {
    document.cookie = name + '=; max-age=0; path=/;';
  }

  return {
    get: get,
    set: set,
    expireNow: expireNow
  }
})()