// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL)

// xhr.addEventListener("load",()=>{
//     console.log("[load] event fired.status =" ,xhr.response);}

// )


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest(); 

xhr.open("GET", URL); 

    
const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer"); 
const message = document.getElementById("message");



loadBtn.addEventListener("click", () => { 

    
    xhr.addEventListener("load", () => { 
        if (xhr.status >= 200 && xhr.status < 300) {
            let post = []
            try{
                posts = JSON.parse(xhr.responseText);
            }catch{
                console.error("Failed to parse JSON");
                
            }
            postsContainer.innerHTML = ""; 

            posts.slice(0, 6).forEach(post => {
                postsContainer.innerHTML += `
                    <div class="card"> 
                        <h2>${post.title}</h2>
                            <p>${post.body}</p> 
                    </div> `; });

            message.textContent = "Posts loaded successfully.";
        
        }else {
                console.error("Request failed with status:", xhr.status);
                message.textContent = "Failed to load posts."; } 
    });

    xhr.addEventListener("error", () => { 
        console.error("Network Error");
        message.textContent = "ocecurre error"; 
    });
                     
    xhr.send();
});