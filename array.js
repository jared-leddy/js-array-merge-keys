var arr1 = [{key1: ['value1'], key2: '1234', key3: 'html'}, {key1: ['value1', 'value2'], key2: '2345', key3: 'html'}];
var arr2 = [{Name: 'file_name', key1: 'value1'}, {Name: 'file_name', key1: 'value2'}];

var outputArr = arr2.map(obj => {
    var key = obj.key1;
    var newObj = {...obj};
    var foundObjs = [];

    arr1.forEach(object => {
        if(object.key1.includes(key)) {
            foundObjs.push({
                key2: object.key2,
                key3: object.key3
            });
        }
    });

    newObj.key4 = foundObjs;

    return newObj;
});

