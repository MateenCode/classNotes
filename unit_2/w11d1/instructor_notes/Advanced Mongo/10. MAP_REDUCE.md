# Mongo - MapReduce

## Lesson Objectives
1. Explain what MapReduce is and why we have it
1. Explain structure of Map Reduce
1. Explain map function
1. Explain reduce function
1. Explain aggregating multiple values
1. Explain Multiple group by

## Explain what MapReduce is and why we have it

## Explain structure of Map Reduce
1. db.collectionName.mapReduce(mapFunction, reduceFunction, { query: {}, out:{} })
1. out
	- collection name
	- { [ replace | inline | merge | reduce ]: 1 }

## Explain map function
1. return key=>value pair
```
var emitter = function (){
	if(this.gender === 'm'){
		emit(this.name, { yum : this.loves[0], weight:this.weight });
	}
}
db.employees.mapReduce(emitter, function(){}, {out:'mapTest'});
```

## Explain reduce function
1. if multiple values for a key, how to reduce
```
var emitter = function (){
	emit(this.gender, this.weight);
}
var reducer = function (key, values){
	return Array.sum(values);
}
db.employees.mapReduce(emitter, reducer, {out:'mapTest'});
```

## Multiple values
```javascript
var emitter = function (){
  emit(this.gender, { weights: this.weight, money: this.salary });
}
var reducer = function(key, values){
    var total_weight = 0;
    var total_salary = 0;
    for(var i=0; i<values.length; i++){
        total_weight +=  values[i].weights;
        total_salary += values[i].money;
    }
    return {total_weight: total_weight, total_salary: total_salary}
}
db.employees.mapReduce(emitter, reducer, { out: 'mapTest' });
db.mapTest.find();
```

## Multiple group by
```javascript
var emitter = function (){
	emit(
		{
			gender: this.gender,
			weight: this.weight
		},
		this.weight
	);
}
```
