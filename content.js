
//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bhead\b/g, "nugget");
	v = v.replace(/\bHead\b/g, "Nugget");
	v = v.replace(/\bHEAD\b/g, "NUGGET");
	v = v.replace(/\bbox\b/g, "container");
	v = v.replace(/\bBox\b/g, "Container");
	v = v.replace(/\bBOX\b/g, "CONTAINER");
	
	textNode.nodeValue = v;
}
