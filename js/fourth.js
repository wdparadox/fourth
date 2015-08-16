        var btn = document.querySelector("#choose"),
            btn1 = document.querySelector("button"),
            choose1 = document.querySelector("#choose1"),
            choose = choose1.querySelectorAll("input");
            function add(target,method,fn){
                if(target.addEventListener){
                    target.addEventListener(method,fn,false);
                }else if(target.attachEvent){
                    target.attachEvent("on" + method,fn);
                }else{
                    target["on" + method] = fn;
                }
            }
            add(btn,"click",function (){
                for(var i = 0 , len = choose.length; i < len ;i++){
                        choose[i]["checked"] = btn.checked;
                }             
            }) 
            add(btn1,"click",function(){
                for(var i = 0 , len = choose.length; i < len ;i++){
                        choose[i]["checked"] = !choose[i]["checked"];
                        if(choose[0].checked&&choose[1].checked&&choose[2].checked&&choose[3].checked){
                            btn.checked = true;
                        }else{
                            btn.checked = false;
                        }
                }
            })      
            window.onload = function(){
                for(var i = 0 , len = choose.length; i < len ;i++){
                    add(choose[i],"click",function(){
                        if(choose[0].checked&&choose[1].checked&&choose[2].checked&&choose[3].checked){
                            btn.checked = true;
                        }else{
                            btn.checked = false;
                        }
                    })
                }
            }