# HTMLInputAdviser

An adviser for HTML input tag 

### Directly use dist/InputAdviser.js

Just load InputAdviser.js by script tag and the `InputAdviser.InputAdviser` is the class object.

### install

```shell
npm i inputadviser
```

## Usage

```javascript
new InputAdviser('selector of the input or the element',async word=>{
	const list=[],descList=[];
	//do something to get advice list
	//...

	list.descList=descList;//if there is a description list, set it to list.descList

	return list;
});

```