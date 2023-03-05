
    let newDiv = document.createElement('div');

    console.log(newDiv);

    let text = document.createTextNode('this is new div');

    console.log(text);

    newDiv.appendChild(text);

    console.log(newDiv);

    let container = document.querySelector('#container');
      for (let i = 0; i < 16; i++) {
            let d = document.createElement('div');
            
            container.appendChild(d);
            
        
        }
        console.log(container);
       

   // document.getElementById('container').appendChild(divs);

