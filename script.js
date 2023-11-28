const byteSize = (str) => {
	// write your code here
	if(str.trim() == 0)
		return 0;

	const en = new TextEncoder();
	const enData = encodeData.encode(str);
	const byteLength = enData.length;

	return byteLength;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
