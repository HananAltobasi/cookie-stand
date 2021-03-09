'use strict';
let seattle={
    name:'seattle',
    min:23,
    max:65,
    avg:6.3,
    Hour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    hourArr:[],
    total:0,
    numOfCustomer:function(){
       let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
       return generator;
    },

    NumOfCookies:function(){
        for(let i=0;i<this.Hour.length;i++){
        let gene=Math.floor(this.avg * this.numOfCustomer());
        this.hourArr.push(gene);
        this.total+=this.hourArr[i];     
       }
    },
   
     render:function(){
        let container=document.getElementById('content');
        let h2=document.createElement('h2');
        h2.innerText=this.name;
        let list=document.createElement('ul');
        list.appendChild(h2);

        for (let i=0;i<this.Hour.length;i++){
            let listItem= document.createElement('li');
            listItem.textContent=this.Hour[i] + ':' + this.NumOfCookies[i]+ ' Cookies';
            list.appendChild(listItem);
            container.appendChild(list);
        }
   }, 
};
seattle.render();

//////////////////////////////////////////////////////////////
let tokyo={
    name:'tokyo',
    min:3,
    max:24,
    avg:1.2,
    Hour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    hourArr:[],
    total:0,
    numOfCustomer:function(){
       let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
       return generator;
    },

    NumOfCookies:function(){
        for(let i=0;i<this.Hour.length;i++){
        let gene=Math.floor(this.avg * this.numOfCustomer());
        this.hourArr.push(gene);
        this.total+=this.hourArr[i];      
      }
    },

    render:function(){
        let container=document.getElementById('content');
        let h2=document.createElement('h2');
        h2.innerText=this.name;
        let list=document.createElement('ul');
        list.appendChild(h2);

        for (let i=0;i<this.Hour.length;i++){
            let listItem= document.createElement('li');
            listItem.textContent=this.Hour[i] + ':' + this.NumOfCookies[i]+ ' Cookies';
            list.appendChild(listItem);
            container.appendChild(list);
        }
   }, 

};
tokyo.render();

/////////////////////////////////////////////////
let dubai={
    name:'dubai',
    min:11,
    max:38,
    avg:3.7,
    Hour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    hourArr:[],
    total:0,
    numOfCustomer:function(){
       let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
       return generator;
    },

   NumOfCookies:function(){
        for(let i=0;i<this.Hour.length;i++){
        let gene=Math.floor(this.avg*this.numOfCustomer());
        this.hourArr.push(gene);
        this.total+=this.hourArr[i];    
        }
    },

    render:function(){
        let container=document.getElementById('content');
        let h2=document.createElement('h2');
        h2.innerText=this.name;
        let list=document.createElement('ul');
        list.appendChild(h2);

        for(let i=0;i<this.Hour.length;i++){
            let listItem=document.createElement('li');
            listItem.textContent=this.Hour[i] + ':' + this.NumOfCookies[i]+ ' Cookies';
            list.appendChild(listItem);
            container.appendChild(list);
        }
   }, 

};
dubai.render();

//////////////////////////////////////////////////////
let paris={
    name:'paris',
    min:20,
    max:38,
    avg:2.3,
    Hour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    hourArr:[],
    total:0,
    numOfCustomer:function(){
       let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
       return generator;
    },

    NumOfCookies:function(){
        for(let i=0;i<this.Hour.length;i++){
        let gene=Math.floor(this.avg*this.numOfCustomer());
        this.hourArr.push(gene);
        this.total+=this.hourArr[i];       
     }
    },

    render:function(){
        let container=document.getElementById('content');
        let h2=document.createElement('h2');
        h2.innerText=this.name;
        let list=document.createElement('ul');
        list.appendChild(h2);

        for (let i=0;i<this.Hour.length;i++){
            let listItem= document.createElement('li');
            listItem.textContent=this.Hour[i] + ':' + this.NumOfCookies[i]+ ' Cookies';
            list.appendChild(listItem);
            container.appendChild(list);
        }
   }, 

};
paris.render();

////////////////////////////////////////////////////////////
let lima={
    name:'lima',
    min:2,
    max:16,
    avg:4.6,
    Hour:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    hourArr:[],
    total:0,
    numOfCustomer:function(){
       let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
       return generator;
    },

    NumOfCookies:function(){
        for(let i=0;i<this.Hour.length;i++){
        let gene=Math.floor(this.avg*this.numOfCustomer());
        this.hourArr.push(gene);
        this.total+=this.hourArr[i];      
      }
    },

    render:function(){
        let container=document.getElementById('content');
        let h2=document.createElement('h2');
        h2.innerText=this.name;
        let list=document.createElement('ul');
        list.appendChild(h2);

        for (let i=0;i<this.Hour.length;i++){
            let listItem= document.createElement('li');
            listItem.textContent=this.Hour[i] + ':' + this.NumOfCookies[i]+ ' Cookies';
            list.appendChild(listItem);
            container.appendChild(list);
        }
   }, 

};
lima.render();

