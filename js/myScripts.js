const CDN_PREFIX = `https://cdn.statically.io/gh/mfraser0/asset_store/main`;
const DBG_MODE = true;
//console log messages 
function dMsg(function_name, messages){
    if(DBG_MODE){
        console.log(`----------------- section: "${function_name}" -----------------`);
    messages.forEach(msg => {
        console.log(`${msg}`);
    });
    }
}
//get full CDN url
function _url(short_u){
    var l_url = `${CDN_PREFIX}${short_u}`;
    dMsg("_url", [
        `cdn prefix: ${CDN_PREFIX}`,
        `short_u: ${short_u}`,
        `l_url: ${l_url}`
    ]);
    return l_url;
}   
//load and execute
function load_script(shorturl) {
    dMsg("load_script", [
        `shorturl: ${shorturl}`
    ]);
    $.getScript(_url(shorturl), function (script, textStatus, jqXHR) {
        dMsg("load_script .getScript", [
            `longurl: ${_url(shorturl)}`,
            `textStatus: ${textStatus}`,
            `script: ${script}`
        ]);
    });
}
//get script tag for insertion
function script_tag(fullurl){
    var tag = `<script type="text/javascript" src="${fullurl}"></script>`;
    dMsg("script_tag", [
        `long url: ${fullurl}`,
        `tag: ${tag}`
    ]);
    return tag;
}
function script_list(shortU_array){
    var fullU_array = [];
    dMsg("script_list", [
        `shortU arr len: ${shortU_array.length}`,
        `initial fullU_arr len: ${fullU_array.length}`
    ]);

    shortU_array.forEach(cur_shorturl => {
        var current_longU = _url(cur_shorturl);
        fullU_array.push(current_longU);
        dMsg("shortU_arr foreach", [
            `current longU: ${current_longU}`,
            `fullU arr len: ${fullU_array.length}`,
            `current shortU: ${cur_shorturl}`
        ]);
    });

    fullU_array.forEach(script_fUrl => {
        
        $("head").append(script_tag(script_fUrl));
        dMsg("fullU_arr foreach", [
            `fullU arr len: ${fullU_array.length}`,
            `current script_fUrl: ${script_fUrl}`
        ]);
    });
}
jQuery._fetch = function (url, options) {
    // Allow user to set any option except for dataType, cache, and url
    options = $.extend(options || {}, {
      dataType: "text",
      cache: true,
      url: url,
    });
    dMsg("jq ._fetch", [
        `url: ${url}`
    ]);
}