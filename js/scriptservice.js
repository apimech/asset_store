const SCRIPTS = [
  {name: "test", url: "/js/test.js"}
];

function get_script(name){
  var script_content = "";
  SCRIPTS.forEach(script => {
    if(script.name === name){
      script_content = _get(script.url);
      return script_content;
    }
  });
}

jQuery._fetch = function (url, options) {
  // Allow user to set any option except for dataType, cache, and url
  options = $.extend(options || {}, {
    dataType: "text",
    cache: true,
    url: url,
  });

  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax(options);
}
function _get(url) {
  $.fetch_file(url).done(function (script, textStatus) {
    var sc = script;
    return sc;
  });
}