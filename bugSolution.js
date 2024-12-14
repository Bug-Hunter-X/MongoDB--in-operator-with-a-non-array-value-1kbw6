```javascript
//Correct usage of $in operator with an array value
db.collection.find({ field: { $in: ['value1', 'value2'] } });
```