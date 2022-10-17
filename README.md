# HTMLInputAdviser

An adviser for HTML input tag 

## Get

### 1. Directly use dist/InputAdviser.js

Just load InputAdviser.js by script tag and the `InputAdviser` is the class object.

### 2. Install from npm

```shell
npm i inputadviser
```
Then in your javascript code

```javascript
import InputAdviser from 'inputadviser'
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