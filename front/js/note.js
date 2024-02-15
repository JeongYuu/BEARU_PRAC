const createButton = document.querySelector(".create-btn"); //(DOM 사용)HTML 태그를 가져오기 위해

createButton.addEventListener("click", function(event){
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const content = document.querySelector(".content");

    console.log(title.value, description.value, content.value);

    const now = new Date();

    const saveValue = {
        title:title.value,
        description:description.value,
        content:content.value,
        createdAt: now.toLocaleDateString(),
    };

    const saveData=localStorage.getItem("memo");    
    if(saveData === null){
        const array=[];
         array.push(saveValue);
         saveValue.id =1;
         localStorage.setItem("memo",JSON.stringify(array));
    }else{
        const transform=JSON.parse(saveData);
        saveValue.id=transform.length +1;
        transform.push(saveValue);    
        localStorage.setItem("memo", JSON.stringify(transform));
    }
});