var amazerificData = [];
function AddToList() {
    var value= document.getElementById('txtEnterText').value;  
    var description = document.getElementById('txtEnterDescription').value;
    if(value && value !== '' && description && description !== '') { 
         var duplicate = amazerificData.find(x=>x.descr===description);

         if(duplicate) {
             amazerificData.find(x=>x.descr===description).tagsData.push(value);
         } else {
             amazerificData.push({
                 descr: description,
                 tagsData: [value]
             });
         }

         document.getElementById('successMessage').innerText='Value Added Successfully!';
         document.getElementById('successMessage').style.display ='block';
         document.getElementById('txtEnterText').value = '';
         setTimeout(() => {
             document.getElementById('successMessage').style.display ='none';
         }, 3000);

    } else{
        document.getElementById('errorMessage').innerText='Please Enter Description and Tag!';
        document.getElementById('errorMessage').style.display ='block';
        setTimeout(() => {
            document.getElementById('errorMessage').style.display ='none';
        }, 3000);
    }
}

function newestData() {
    document.getElementById('mainData').innerHTML='';
    var uldata = document.createElement('ul');
    uldata.classList.add('list-group');
    for(var x=amazerificData.length-1;x>-1;x--) {
        var liNode = document.createElement('li');
        liNode.classList.add('list-group-item');
        liNode.classList.add('active');
        liNode.innerText = amazerificData[x].descr;
        uldata.append(liNode);
        for(var y=0;y<amazerificData[x].tagsData.length;y++) {
            var subLiNode = document.createElement('li');
            subLiNode.classList.add('list-group-item');
            subLiNode.innerText = amazerificData[x].tagsData[y];
            uldata.append(subLiNode);
        }
    }
    document.getElementById('mainData').append(uldata); 
    document.getElementById('entryFields').style.display ='none';
    document.getElementById('mainData').style.display ='block';
}

function showTagsData() {
    document.getElementById('mainData').innerHTML='';
    var uldata = document.createElement('ul');
    uldata.classList.add('list-group');
    for(var x=0;x<amazerificData.length;x++) {
        var liNode = document.createElement('li');
        liNode.classList.add('list-group-item');
        liNode.classList.add('active');
        liNode.innerText = amazerificData[x].descr;
        uldata.append(liNode);
        for(var y=0;y<amazerificData[x].tagsData.length;y++) {
            var subLiNode = document.createElement('li');
            subLiNode.classList.add('list-group-item');
            subLiNode.innerText = amazerificData[x].tagsData[y];
            uldata.append(subLiNode);
        }
    }
    document.getElementById('mainData').append(uldata); 
    document.getElementById('entryFields').style.display ='none';
    document.getElementById('mainData').style.display ='block'; 
}

function showDataEntry() {
    document.getElementById('entryFields').style.display ='block';
    document.getElementById('mainData').style.display ='none';
}
$(document).ready( () => {
    $.getJSON("todos.json", (toDoObjects) => {
    // call main with the to-dos as an argument
    main(toDoObjects);
    });
   });