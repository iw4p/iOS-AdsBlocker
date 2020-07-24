
function FindProxyForURL(url, host) {
    // You should set which sites you wanna blocked on your Wi-Fi
if (shExpMatch(host, "FirstURL.com") || shExpMatch(host, "*.FirstURL.com") || shExpMatch(host, "SecondURL.com") || shExpMatch(host, "adserver.*")) { 
return "PROXY 0.0.0.0"; } else {
return "PROXY 10.0.0.19:8080"; } } 