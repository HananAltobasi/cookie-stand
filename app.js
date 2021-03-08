'use strict';
let seattle= {
    name:'seattle',
    min:23,
    max:65,
    avg:6.3,

    numOfCookies: function(){
        let maxnum=this.max;
        let minnum=this.min;
        return Math.floor((Math.random()*(maxnum-minnum+1)+minnum)*this.avg);
    }
};
let tokyo={
    name:'tokyo',
    min:3,
    max:24,
    avg:1.2,
    numOfCookies:function(){
        let maxnum=this.max;
        let minnum=this.min;
        return Math.floor((Math.random()*(maxnum-minnum+1)+minnum)*this.avg);
    }
};

let dubai={
    name:'dubai',
    min:11,
    max:38,
    avg:3.7,
    numOfCookies:function(){
        let maxnum=this.max;
        let minnum=this.min;
        return Math.floor((Math.random()*(maxnum-minnum+1)+minnum)*this.avg);
    }
};
let paris={
    name:'paris',
    min:20,
    max:38,
    avg:2.3,
    numOfCookies:function(){
        let maxnum=this.max;
        let minnum=this.min;
        return Math.floor((Math.random()*(maxnum-minnum+1)+minnum)*this.avg);
    }
};

let lima={
    name:'lima',
    min:2,
    max:16,
    avg:4.6,
    numOfCookies:function(){
        let maxnum=this.max;
        let minnum=this.min;
        return Math.floor((Math.random()*(maxnum-minnum+1)+minnum)*this.avg);
    }
};
list(seattle.name);
list(tokyo.name);
list(dubai.name);
list(paris.name);
list(lima.name);