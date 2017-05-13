var calculator = {
	add:function(a,b){
	  return a+b;
	},
	sub:function(a,b){
	  return a-b;
	},
	mult:function(a,b){
	 return a*b;
	},
	div:function(a,b){
	  if(b!=0){
		return a/b
		} else{
		 return '~';
		}		
	},
	equ:function(a,b){
	  if(a==b){
	     return ""+a+" is equal to " + b;
	  }else if(a<b){
		return ""+a+" is less than " + b;
	  } else{
	    return ""+a+" is greated to " + b;
	  }
	}
};