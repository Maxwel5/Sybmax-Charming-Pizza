window.DirectUPL={signReq:null,uploadReq:null,parseXml:function(a){return new window.DOMParser().parseFromString(a,"text/xml")},postToJAJ:function(o,n,l,k,p){if(typeof XMLHttpRequest==="undefined"){XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(d){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(d){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(d){}throw new Error("This browser does not support XMLHttpRequest.")}}try{var a=new XMLHttpRequest();window.DirectUPL.signReq=a;a.onload=function(){try{a.upload.removeEventListener("error",c);a.upload.removeEventListener("abort",m)}catch(e){}if(window.DirectUPL.signReq==null){return}window.DirectUPL.signReq=null;try{var d=(a.response!=null)?a.response:a.responseText;l(d)}catch(e){}a=null};var m=function(){try{a.upload.removeEventListener("error",c);a.upload.removeEventListener("abort",m)}catch(d){}if(window.DirectUPL.signReq==null){return}window.DirectUPL.signReq=null;try{if(p!=null){p("abort")}}catch(d){}a=null};var c=function(e){try{a.upload.removeEventListener("error",c);a.upload.removeEventListener("abort",m)}catch(d){}if(window.DirectUPL.signReq==null){return}window.DirectUPL.signReq=null;try{var f=(e!=null&&(typeof e==="string"||e instanceof String))?e:null;if(f==null){if(a&&a.status){f="Status: "+a.status}if(a&&a.statusText){if(f==null){f="Status Text: "+a.statusText}else{f+=", "+a.statusText}}}if(a&&(a.response||a.responseText)){if(f==null){f=""}f+=" Response: "+((a.response!=null)?a.response:a.responseText)}if(e&&e.type){if(f==null){f=""}f+=" Type: "+e.type}console.log("DPL_SIG err log: "+f)}catch(d){}try{if(p!=null){p("error")}}catch(d){}a=null};var j="";if(typeof n==="object"){var h=0;for(var q in n){if(h>0){j+="&"}h++;j+=q+"="+n[q]}}else{j=n}try{a.upload.addEventListener("error",c);a.upload.addEventListener("abort",m);a.withCredentials=true;a.open("POST",o,true);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send(j)}catch(b){}}catch(b){}},upload:function(j,d){var l=new XMLHttpRequest();window.DirectUPL.uploadReq=l;var f=0;var k=null;var e=function(o){if(window.DirectUPL.uploadReq==null){return}if(f==0&&typeof h!=="undefined"){f=1;if(r){try{r.upload.removeEventListener("error",e);r.upload.removeEventListener("abort",g);r=null}catch(n){}var r=new XMLHttpRequest();window.DirectUPL.uploadReq=r}setTimeout(function(){h(k)},111);return}window.DirectUPL.uploadReq=null;try{try{var q=(o!=null&&(typeof o==="string"||o instanceof String))?o:null;if(q==null){if(r&&r.status){q="Status: "+r.status}if(r&&r.statusText){if(q==null){q="Status Text: "+r.statusText}else{q+=", "+r.statusText}}}if(r&&(r.response||r.responseText)){if(q==null){q=""}q+=" Response: "+((r.response!=null)?r.response:r.responseText)}if(o&&o.type){if(q==null){q=""}q+=" Type: "+o.type}console.log("S3 Error log: "+q)}catch(n){}Raven.captureException(new Error("S3 error: transfer failed"))}catch(p){}try{m()}catch(n){}j({error:1})};var g=function(o){if(window.DirectUPL.uploadReq==null){return}window.DirectUPL.uploadReq=null;try{m()}catch(n){}j({abort:1})};var m=function(){try{l.upload.removeEventListener("error",e);l.upload.removeEventListener("abort",g)}catch(n){}l=null};function h(o){if(window.DirectUPL.uploadReq==null){return}k=o;try{o=JSON.parse(o)}catch(n){}if(o&&o!=""&&o.data&&o.data.url&&o.data.inputs){var p=new FormData();Object.keys(o.data.inputs).forEach(function(q){p.append(q,o.data.inputs[q])});p.append("file",d.blob);l.onload=function(){if(window.DirectUPL.uploadReq==null){return}window.DirectUPL.uploadReq=null;var v=null;try{v=(l.response!=null)?l.response:((l.responseText!=null)?responseText:l.responseXML)}catch(s){}try{m()}catch(s){}if(v!=null){var t=null;try{t=window.DirectUPL.parseXml(v)}catch(s){j({error:1});return}if(t!=null){var r=null;try{r=t}catch(s){j({error:1});return}var q=0;try{q=r.getElementsByTagName("Location")[0].childNodes[0].nodeValue.length}catch(s){}if(r!=null&&q>0){var w={url:r.getElementsByTagName("Location")[0].childNodes[0].nodeValue.replace("%2F","/"),s3_name:r.getElementsByTagName("Key")[0].childNodes[0].nodeValue};j(w)}else{try{Raven.captureException(new Error("S3 error: uploaded Xml null"))}catch(u){}j({error:1})}}else{try{Raven.captureException(new Error("S3 error: response xml doc parsing"))}catch(u){}j({error:1})}}else{try{Raven.captureException(new Error("S3 error: response null"))}catch(u){}j({error:1})}};try{l.upload.addEventListener("error",e);l.upload.addEventListener("abort",g);l.open("POST",o.data.url,true);l.send(p)}catch(n){}}else{j({error:1})}}var b=function(o){if(o=="abort"){j({abort:1})}else{try{Raven.captureException(new Error("DPL_SIG error: "+o))}catch(p){try{console.error("DPL_SIG: "+o)}catch(n){}}j({error:1})}};var c="https://upload.befunky.com/direct_upl.php";var a=getCsToken();var i="bucket="+d.bucket+"&content_type="+d.content_type+"&CSRFtoken="+a;if(d.filename&&d.filename!=null){i=i+"&filename="+d.filename}window.DirectUPL.postToJAJ(c,i,h,"json",function(n){if(n=="abort"){j({abort:1})}else{c=(BeFunky.Params.siteUrl||"https://www.befunky.com/")+"direct_upl.php";window.DirectUPL.postToJAJ(c,i,h,"json",function(p){if(p=="abort"){j({abort:1})}else{try{$.ajax({url:c,dataType:"json",type:"post",data:i,success:h,async:true,error:b})}catch(o){j({abort:1})}}})}})}};