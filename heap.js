var heap = [];

function sleep(ms) {
    ms = 750;
  	return new Promise(
    	resolve => setTimeout(resolve, ms)
  	);
}

async function animate(e1,e2,e3,e4,e5,e6) {
	console.log(e1);
	console.log(e2);
	if((e1!=null && e1>e2) || e2==null){
		e1.setAttributeNS(null,"stroke","red");
		e1.setAttributeNS(null,"stroke-width","6px");
	}
	else{
		e2.setAttributeNS(null,"stroke","red");
		e2.setAttributeNS(null,"stroke-width","6px");
	}
	e3.setAttributeNS(null, "fill", "red");
	e3.setAttributeNS(null, "r", "6");
	e4.setAttributeNS(null, "fill", "red");
	e4.setAttributeNS(null, "r", "6");
	e5.setAttributeNS(null, "stroke", "darkblue");
	e6.setAttributeNS(null, "stroke", "darkblue");
	
	await sleep();
	[e5.innerHTML, e6.innerHTML] = [e6.innerHTML, e5.innerHTML];
	if((e1!=null && e1>e2) || e2==null){
		e1.setAttributeNS(null,"stroke","darkblue");
		e1.setAttributeNS(null,"stroke-width","1px");
	}
	else{
		e2.setAttributeNS(null,"stroke","darkblue");
		e2.setAttributeNS(null,"stroke-width","1px");
	}
	e3.setAttributeNS(null, "fill", "darkblue");
	e3.setAttributeNS(null, "r", "5");
	e4.setAttributeNS(null, "fill", "darkblue");
	e4.setAttributeNS(null, "r", "5");
	e5.setAttributeNS(null, "stroke", "red");
	e6.setAttributeNS(null, "stroke", "red");
	
}

async function swap(e1, e2){
	var cid1 = document.getElementById(parseInt(e1) + 100), 
		lid1 = document.getElementById(parseInt(e1) + 200);
	var cid2 = document.getElementById(parseInt(e2) + 100), 
		lid2 = document.getElementById(parseInt(e2) + 200);
	var p = document.getElementById(e1),
  		c = document.getElementById(e2);
	animate(lid1,lid2,cid1,cid2,p,c);
	await sleep();
	[heap[e2],heap[e1]] = [heap[e1],heap[e2]];
};

async function swapO(e1,e2){
	var p = document.getElementById(e1),
  		c = document.getElementById(e2);
  	[p.innerHTML, c.innerHTML] = [c.innerHTML, p.innerHTML];	
	[heap[e2],heap[e1]] = [heap[e1],heap[e2]];
}

async function insert(value){
	heap.push(parseInt(value,10));
	var n = heap.length-1;
	var par = Math.floor((n-1)/2);
	while(par>-1&&heap[par]>heap[n]){
		swap(par,n);
		await sleep();
		n = par;
		par = Math.floor((n-1)/2);
	}
};

async function heapify(cur){
	var left = 2*cur+1,
			right = 2*cur+2;
	var largest = cur;
	if(left<heap.length && heap[cur] > heap[left]){
		if(right<heap.length && heap[right]<heap[left]){
			console.log(right);
		    console.log(cur);
			swap(right,cur);
			await sleep();    
			heapify(right);
		}
		else{
			console.log(left);
			console.log(cur);
			swap(left,cur);
			await sleep();
			heapify(left);
		}
	}
	else if(right<heap.length && heap[cur] > heap[right]){
		console.log(right);
		console.log(cur);
		swap(right,cur);
		await sleep();
		heapify(right);
	}
};

async function remove(){
	var n = heap.length;
	var idx = n-1;
	swapO(0,idx);
	await sleep();
	var delText = document.getElementById(idx);
	var delCircle = document.getElementById(idx+100);
	delText.remove();
	delCircle.remove();
	if(n!=1){
		var delLine = document.getElementById(idx+200);
		delLine.remove();
	}
	heap.splice(n-1);
	n--;
	heapify(0);
}


