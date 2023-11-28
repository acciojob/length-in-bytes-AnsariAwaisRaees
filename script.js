const byteSize = (str) => {
	// write your code here
	
	const en = new TextEncoder();
	const enData = en.encode(str);

	return enData.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
