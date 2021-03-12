'use strict';
let Hours= ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
function Cookies(name, min, max, avg) {
  this.name= name;
  this.min= min;
  this.max= max;
  this.avg= avg;
  this.total= 0;
  this.hourArr= [];

  this.numOfCustomer=function(){
    let generator=Math.floor(Math.random()*(this.max-this.min+1)+this.min);
    return generator; 
 };

  this.NumOfCookies=function(){
    for (let i=0;i<Hours.length;i++) {
      let gene=Math.floor(this.avg * this.numOfCustomer());
      this.total=gene + this.total;
      this.hourArr.push(gene);
    }
  };

  this.render=function(){
    let TRow=document.createElement('tr');
    table.appendChild(TRow);
    let TData=document.createElement('td');
    TData.innerText=this.name;
    TRow.appendChild(TData);
    for (let i=0;i<this.hourArr.length;i++) {
        TData=document.createElement('td');
        TData.innerText=this.hourArr[i];
        TRow.appendChild(TData);
    }
    TData=document.createElement('td');
    TData.innerText=this.total;
    TRow.appendChild(TData);
  };
}

let table=document.createElement('table');
document.getElementById('table').appendChild(table);

// Header
function tableHeader() {
  let TRow=document.createElement('tr');
  table.appendChild(TRow);
  let THead=document.createElement('th');
  TRow.appendChild(THead);
  for (let i=0;i<Hours.length;i++) {
    THead=document.createElement('th');
    THead.innerText=Hours[i];
    TRow.appendChild(THead);
  }
  
  THead=document.createElement('th');
  THead.innerText='Daily Location Total';
  TRow.appendChild(THead);
}
// value for each location
let seattle=new Cookies('Seattle', 23, 65, 6.3);
let tokyo=new Cookies('Tokyo', 3, 24, 1.2);
let dubai=new Cookies('Dubai', 11, 38, 1.7);
let paris=new Cookies('Paris', 20, 38, 2.3);
let lima=new Cookies('Lima', 2, 16, 4.3);

let Location=[seattle,tokyo,dubai,paris,lima];

// footer
function TableFooterr(){
    let TFooter=document.createElement('tr');
     table.appendChild(TFooter);
    let footer=document.createElement('th');
        TFooter.appendChild(footer);
        footer.innerText='Total';
    let SumOfTotal=0;
    // sum each hour - each location
    for (let i=0;i<Hours.length;i++){
         for (let j=0;j<Location.length;j++){
            SumOfTotal+=Location[j].hourArr[i];
        }
         let FData=document.createElement('th');
         TFooter.appendChild(FData);
         FData.innerText=SumOfTotal;
         SumOfTotal=0;  
    }
    // sum total daily location
    for(let a=0;a<Location.length;a++){
        SumOfTotal+=Location[a].total;
    }
         let FData=document.createElement('th');
         TFooter.appendChild(FData);
         FData.innerText=SumOfTotal;
    }
tableHeader();
seattle.NumOfCookies();
seattle.render();
tokyo.NumOfCookies();
tokyo.render();
dubai.NumOfCookies();
dubai.render();
paris.NumOfCookies();
paris.render();
lima.NumOfCookies();
lima.render();
TableFooterr();
