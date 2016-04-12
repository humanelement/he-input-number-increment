var heNumberIncrement=(function(){
  return{
      step_down:function(downBtn){
          var args=downBtn[0]['heNumIncrement'];
          var val=args['input_el'].val();
          if(isNaN(val)){
              args['input_el'].val(args['min']);
          }else{
              val=parseInt(val);
              if(val-args['step']>=args['min']){
                  val-=args['step'];
                  args['input_el'].val(val);
              }
          }
      },
      step_up:function(upBtn){
          var args=upBtn[0]['heNumIncrement'];
          var val=args['input_el'].val();
          if(isNaN(val)){
              args['input_el'].val(args['min']);
          }else{
              val=parseInt(val);
              if(args['max']<0 || val+args['step']<=args['max']){
                  val+=args['step'];
                  args['input_el'].val(val);
              }
          }
      },
      init:function(args){
          var retInit={}, self=this;
          var getArg=function(name,defaultVal){
              var ret;
              if(args.hasOwnProperty(name)){ ret=args[name]; }
              else{ ret=defaultVal; }
              return ret;
          };
          retInit['min']=getArg('min',1);
          retInit['max']=getArg('max',-1);
          retInit['start_at']=getArg('start_at', undefined);
          retInit['step']=getArg('step', 1);
          retInit['input']=getArg('input',undefined);
          if(retInit['input']!=undefined){
              retInit['input_el']=jQuery(retInit['input']);
              if(retInit['input_el'].length>0){
                  if(retInit['start_at']!=undefined){
                      retInit['input_el'].val(retInit['start_at']+'');
                  }
                  retInit['input_el'].parent().addClass('init_he_num_increment');
              }
          }
          retInit['up_btn']=getArg('up_btn',undefined);
          if(retInit['up_btn']!=undefined){
              retInit['up_btn_el']=jQuery(retInit['up_btn']);
          }
          retInit['down_btn']=getArg('down_btn',undefined);
          if(retInit['down_btn']!=undefined){
              retInit['down_btn_el']=jQuery(retInit['down_btn']);
          }
          if(retInit['input_el'].length>0
            && retInit['up_btn_el'].length>0
            && retInit['down_btn_el'].length>0){
                var attachDataToElems=function(arr,data){
                    for(var a=0;a<arr.length;a++){
                        var el=arr[a];
                        el[0]['heNumIncrement']=data;
                    }
                };
                attachDataToElems([
                    retInit['input_el'],
                    retInit['up_btn_el'],
                    retInit['down_btn_el']
                ], retInit);
                retInit['input_el'].keyup(function(){
                    var val=jQuery(this).val();
                    if(isNaN(val)){
                        jQuery(this).val('');
                        jQuery(this).val(jQuery(this)[0]['heNumIncrement']['min']);
                    }
                });
                retInit['input_el'].keydown(function(e){
                    switch(e.keyCode){
                        case 38: //up key
                            e.preventDefault(); self['step_up'](jQuery(this));
                            break;
                        case 40: //down key
                            e.preventDefault(); self['step_down'](jQuery(this));
                            break;
                    }
                });
                retInit['up_btn_el'].click(function(){
                    self['step_up'](jQuery(this));
                });
                retInit['up_btn_el'].keypress(function(){
                    self['step_up'](jQuery(this));
                });
                retInit['down_btn_el'].click(function(){
                    self['step_down'](jQuery(this));
                });
                retInit['down_btn_el'].keypress(function(){
                    self['step_down'](jQuery(this));
                });
          }
          return retInit;
      }
  };
}());
