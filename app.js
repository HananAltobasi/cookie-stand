'use strict';

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
//num cookies each hour(cookiesHour)
cookies.prototype.calcCookiesHour=function(){
 this.calcCookiesHour();
 for(let i=0;i<Hour.length;i++){
  let oneHour=math.ceil(this.customerHour[i]*this.avgcookies);
  this.cookiesHour.push(oneHour);
  this.totalcookies+=oneHour;
 }
};

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



