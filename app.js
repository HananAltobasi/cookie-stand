'use strict';
<<<<<<< HEAD
=======
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
>>>>>>> 61849ba1b0ad2f89e80f4f494458c2a0488e9dcf

let Hour=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tableelement=document.getElementById('table');

function cookies(location,mincustomer,maxcustomer,avgcookies){
this.location=location;
this.mincustomer=mincustomer;
this.maxcustomer=maxcustomer;
this.avgcookies=avgcookies;
this.customerHour=[];
this.cookiesHour=[];
this.totalcookies=0;
}
//generator num coustomer each hour(customerHour)
cookies.prototype.calcCustomerHour=function(){
 for(let i=0;i<Hour.length;i++){
  this.customerHour.push(random(this.mincustomer,this.maxcustomer));
 }
};
<<<<<<< HEAD
//num cookies each hour(cookiesHour)
cookies.prototype.calcCookiesHour=function(){
 this.calcCookiesHour();
 for(let i=0;i<Hour.length;i++){
  let oneHour=math.ceil(this.customerHour[i]*this.avgcookies);
  this.cookiesHour.push(oneHour);
  this.totalcookies+=oneHour;
 }
};
=======
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
>>>>>>> 61849ba1b0ad2f89e80f4f494458c2a0488e9dcf

cookies.prototype.render=function(){
 this.calcCookiesHour();
 let TRow=document.createElement('tr');
 let TData=document.createElement('td');
 TData.textContent=this.location;
 TRow.appendChild(TData);

 for(i=0;i<Hour.length;i++){
  TData=document.createElement('td');
  TData.textContent=this.cookiesHour[i];
  TRow.appendChild(TData);
 }
 let THeader=document.createElement('th');
 THeader.textContent=this.totalcookies;
 TRow.appendChild(THeader);
 tableelement.appendChild(TRow);
};
<<<<<<< HEAD
//list of location
let seattle=new cookies('seattle', 23, 56, 6.3);
let tokyo=new cookies('Tokyo', 3, 24, 1.2);
let dobai=new cookies('Dobai', 11, 38, 3.7);
let paris=new cookies('Paris', 20, 38, 2.3);
let lima=new cookies('Lima', 2, 16, 4.6);

let locationlist=[seattle,tokyo,dobai,paris,lima];

function HeadRow(){
  let TRow=document.createElement('tr');
  let THeader=document.createElement('th');
  THeader.textContent='location';
  TRow.appendChild(THeader);
  for(let i=0;i<Hour.length;i++){
     THeader=document.createElement('th');
     THeader.textContent=Hour[i];
     TRow.appendChild(THeader);
  }
  THeader=document.createElement('th');
  THeader.textContent='location total';
  TRow.appendChild(THeader);
  tableelement.appendChild(TRow);
}

function FooterRow(){
    let TRow=document.createElement('tr');
    let THeader=document.createElement('th');
    THeader.textContent='Hourly Total';
    TRow.appendChild(THeader);
    let finalTotal=0;
    for(let i=0;i<Hour.length;i++){
     let total=0;
     for(let j=0;j<locationlist.length;j++){
         total+=locationlist[j].cookiesHour[i];
         finalTotal+=locationlist[j].cookiesHour[i];
     }
     THeader=document.createElement('th');
     THeader.textContent=total;
     TRow.appendChild(THeader);
    }
    THeader=document.createElement('th');
    THeader.textContent=finalTotal;
    TRow.appendChild(THeader);
    tableelement.appendChild(TRow);
}

(function renderTable(){
 HeadRow();
 for(let i=0;i<locationlist.length;i++){
    locationlist.render();
 }
 FooterRow();
})();

=======
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
>>>>>>> 61849ba1b0ad2f89e80f4f494458c2a0488e9dcf


<<<<<<< HEAD
=======
};
lima.render();

>>>>>>> 61849ba1b0ad2f89e80f4f494458c2a0488e9dcf
