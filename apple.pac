function FindProxyForURL(url, host) {
if (shExpMatch(host, "evsecure-ocsp.verisign.com") || shExpMatch(host, "iphonesubmissions.apple.com") ||
shExpMatch(host, "ocsp.apple.com") || shExpMatch(host, "radarsubmissions.apple.com") || shExpMatch(host, "appldnld.apple.com")) { 
return "PROXY 0.0.0.0"; } else {
return "PROXY 10.0.0.19:8080"; } } 