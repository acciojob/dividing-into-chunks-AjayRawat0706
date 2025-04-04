const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => { 
  // Write your code   
   let start=0;
    end=0;
	let ans=[];
	let sum=0;
	while(end<arr.length){
		if(sum+arr[end]>n){
			let temp=arr.slice(start,end);
			if(temp.length>0 && sum<=n){
			ans.push(temp);
		   
			}
			sum=0;
			start=end;
		}
		sum+=arr[end]
		end++;
	}
	let x=arr.slice(start,end);
			if(x.length>0 && sum<=n){
			ans.push(x);
				 
			}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
