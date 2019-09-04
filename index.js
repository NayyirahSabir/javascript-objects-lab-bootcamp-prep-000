var recipes = new Object ({})

function updateObjectWithKeyAndValue(object, key, value){
  Object[key] = value
  return Object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  return delete key.newObj
}

