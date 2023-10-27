let urlPattern = /^(https:\/\/\www\.|http:\/\/\www\.)[a-zA-Z0-9\-_+$]+\.[a-zA-Z]{2,5}$/g

let url = "http://www.edu.in"

if(urlPattern.test(url)){
    console.log(`Gieven URL ${url} is valid`);
}
else{
    console.log(`Given URL ${url} is not valid`);
}