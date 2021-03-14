const CDN_PREFIX = `https://cdn.statically.io/gh/mfraser0/asset_store/main`;
//get full CDN url
function _url(short_u){
    var l_url = `${CDN_PREFIX}${short_u}`;
    return l_url;
}   
//load and execute
function load_script(shorturl) {
    $.getScript(_url(shorturl), function (script, textStatus, jqXHR) {
        
    });
}
//get script tag for insertion
function script_tag(shorturl){
    var tag = `<script type="text/javascript" src="${_url(shorturl)}></script>"`;
    return tag;
}
function script_list(shortU_array){
    var fullU_array = [];
    shortU_array.forEach(shorturl => {
        fullU_array.push(_url(shorturl));
    });
    fullU_array.forEach(script_fUrl => {
        $("head").append(script_tag(script_fUrl));
    });
}
jQuery._fetch = function (url, options) {
    // Allow user to set any option except for dataType, cache, and url
    options = $.extend(options || {}, {
      dataType: "text",
      cache: true,
      url: url,
    });
}