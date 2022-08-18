var svgns = "http://www.w3.org/2000/svg";
const positions = [
    { "x": "850", "y": "150" },
    { "x": "425", "y": "250" },
    { "x": "1275", "y": "250"},
    { "x": "212.5", "y": "370" },
    { "x": "637.5", "y": "370" },
    { "x": "1062.5", "y": "370" },
    { "x": "1487.5", "y": "370" },
    { "x": "106.25", "y": "500" },
    { "x": "318.75", "y": "500" },
    { "x": "531.25", "y": "500" },
    { "x": "743.75", "y": "500" },
    { "x": "956.25", "y": "500" },
    { "x": "1168.75", "y": "500" },
    { "x": "1381.25", "y": "500" },
    { "x": "1593.75", "y": "500" },
]

const positions2 = [
    { "x": "830", "y": "150" },
    { "x": "405", "y": "250" },
    { "x": "1295", "y": "250"},
    { "x": "192.5", "y": "370" },
    { "x": "657.5", "y": "370" },
    { "x": "1042.5", "y": "370" },
    { "x": "1507.5", "y": "370" },
    { "x": "86.25", "y": "500" },
    { "x": "338.75", "y": "500" },
    { "x": "511.25", "y": "500" },
    { "x": "763.75", "y": "500" },
    { "x": "936.25", "y": "500" },
    { "x": "1188.75", "y": "500" },
    { "x": "1361.25", "y": "500" },
    { "x": "1613.75", "y": "500" },
]

var idx = -1;

function removeNode(){
	if(idx>=0){
		--idx;
		remove();	
	}
}

function insertNode() {
    ++idx;
    var va = document.getElementById("value").value;
    if (idx != 0) {
        addLine(idx, Math.floor((idx - 1) / 2));
    }
    var element = document.createElementNS(svgns, "circle");
    element.setAttributeNS(null, "id", idx+100); 
    element.setAttributeNS(null, "r", "5");
    element.setAttributeNS(null, "cx", positions[idx].x);
    element.setAttributeNS(null, "cy", positions[idx].y);
    element.setAttributeNS(null, "stroke", "black");
    element.setAttributeNS(null, "stroke-width", "2px")
    element.setAttributeNS(null, "fill", "darkblue");

    var elemet = document.createElementNS(svgns, "text");
    elemet.setAttributeNS(null, "id", idx); 
    elemet.setAttributeNS(null, "x", positions2[idx].x);
    elemet.setAttributeNS(null, "y", positions[idx].y);
    elemet.setAttributeNS(null, "text-anchor", "middle");
    elemet.setAttributeNS(null, "dominant-baseline", "middle");
    elemet.setAttributeNS(null, "stroke", "red");

    var text = document.createTextNode(va);

    elemet.appendChild(text);
    document.getElementsByTagName("svg")[0].appendChild(element);
    document.getElementsByTagName("svg")[0].appendChild(elemet);
    insert(va);
}

function addLine(idx1, idx2) {
    
    var x1 = parseInt(positions[idx1].x);
    var x2 = parseInt(positions[idx2].x);
    var y1 = parseInt(positions[idx1].y);
    var y2 = parseInt(positions[idx2].y);
    var element = document.createElementNS(svgns, "line");
    element.setAttributeNS(null, "id", idx1+200); 
    element.setAttributeNS(null, "x1", x1);
    element.setAttributeNS(null, "x2", x2);
    element.setAttributeNS(null, "y1", y1);
    element.setAttributeNS(null, "y2", y2);
    element.setAttributeNS(null, "stroke", "darkblue");

    document.getElementsByTagName("svg")[0].appendChild(element);   
}