/**
 * @description	Input advice loader
 * @class InputAdviser
 */
 class InputAdviser{
	input;
	id='el_datalist_'+((Math.random()*9999999999)|0)
	dataList;
	/**
	 * Creates an instance of InputAdviser.
	 * @param {HTMLElement|string} input the input element or a string element selector
	 * @param {function(string):Array<string|object>} loader an advice loader function
	 */
	constructor(input,loader){
		if(typeof input === 'string'){
			input=document.querySelector(input);
		}
		this.input=input;
		this.dataList=document.createElement('datalist');
		this.dataList.id=this.id;
		document.body.appendChild(this.dataList);
		input.setAttribute('list',this.id);

		if(loader){
			let timer;
			this.input.addEventListener('input',e=>{
				if(timer){
					clearTimeout(timer);
				}
				console.log('input');
				timer=setTimeout(async ()=>{
					let list=await loader(input.value);
					if(!list)return;
					this.setList(list);
				},500);
			});
		}
	}
	/**
	 *set content of the adviser
	 *
	 * @param {Array<string|object>} list list of values,when element is an object, it should have {value,desc} in it
	 */
	setList(list){
		this.dataList.innerHTML='';
		for(let i=0;i<list.length;i++){
			let v=list[i],
				desc=v;
			if(typeof v === 'object' && v.value){
				desc=v.desc;
				v=v.value;
			}
			if(v==this.input.value)continue;
			let o=document.createElement('option');
			o.innerHTML=desc;
			o.value=v;
			this.dataList.appendChild(o);
		}
	}
	/**
	 *remove this adviser
	 */
	close(){
		if(this.dataList.parentNode){
			this.dataList.parentNode.removeChild(this.dataList);
		}
	}
}

export default InputAdviser;