Page({
	data:{
		names:[
			'凯特琳', '费德提克', '黑默丁格', '古拉加斯',
			'布里茨', '迦娜', '盖伦', '科加斯', '德莱文',
			'李青', '卡特琳娜', '拉克丝', '亚索'
		],
		display:[
			'block','block','block','block','block','block',
			'block','block','block','block','block','block','block'
		]
	},
  searchHero: function(e){
    var val = e.detail.value;
    var arr = this.data.names;
    var searchId = [];
    var count = 0;
    val = val.trim();
    if(val.length > 0 && val !== ""){
	    for(var i=0; i<arr.length; i++){
	    	if(arr[i].indexOf(val) >= 0){
	    		searchId.push(i);
	    		for(var j=0; j<arr.length; j++){
				    this.data.display[j] = 'none';
		  		}
		  		for(var k=0; k<searchId.length; k++){
		  			this.data.display[searchId[k]] = 'block';
		  		}
		  		this.setData(this.data);
	    	}else{
	    		count++;
	    	}
	    }
	    if(count == arr.length){
	    	for(var j=0; j<arr.length; j++){
			    this.data.display[j] = 'none';
	  		}
		  	this.setData(this.data);
	    }
    }else{
    	for(var j=0; j<arr.length; j++){
		    this.data.display[j] = 'block';
  		}
  		this.setData(this.data);
    }
  }
})