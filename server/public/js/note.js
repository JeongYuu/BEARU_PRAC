const createButton = document.querySelector(".create-btn"); //(DOM 사용)HTML 태그를 가져오기 위해
const modifyButton = document.querySelector(".modify-btn");

modifyButton.addEventListener("click",function(event){
    const qs = getQueryString();
    const ele = getElement();

    const title = ele.title.value;
    const description = ele.description.value;
    const content = ele.content.value;
    const id=qs.id;
    
    fetch("http://localhost:3000/modify",{
        method:"put",
        headers:{
            "content-type" : "application/json",
        },
        body:JSON.stringify({
            title: title,
            description: description,
            content: content,
            id: id,
        }),
    })
    .then(function(result){
        return result.json();
    })
    .then(function(data){
        console.log(data);
        if(data.status === "success"){
            window.location.href = "/";
        }
    })
    .catch(function(error){
        console.log(error);
    });
});

function renderPage() {
    const qs = getQueryString();

    if (qs.mode === "create") {
        createButton.style.display = "block"; //보여지게
        modifyButton.style.display = "none"; //안보여지게
    } else if (qs.mode === "modify") {
        createButton.style.display = "none";
        modifyButton.style.display = "block";
        fetch("http://localhost:3000/list/"+qs.id,{
            method:"get",
        })
        .then(function(result){
            return result.json();
        })
        .then(function(data){
            renderMemo(data);
        })
        .catch(function(error){
            console.log(error);
        });
    }
}

function getElement(){
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

    return{ title:title, description:description, content:content};
}

function getData() {
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const qs = getQueryString();

    let data;

    for (let i = 0; i < saveData.length; i++) {
        if (saveData[i].id === Number(qs.id)) {
            data = saveData[i];
        }
    }
    return data;
}

function renderMemo(data){
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content"); 

    console.log(data);
    title.value=data.title;
    description.value=data.description;
    content.textContent = data.content;
}

function getQueryString() { 
    const qs = window.location.search;
    const qs2 = new URLSearchParams(qs);

    return { id: qs2.get("id"), mode: qs2.get("mode") }
}

renderPage();
