export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

export function createDataTree(dataset) {
  if (typeof dataset != "undefined") {
    let hashtable = Object.create(null);
    Array.prototype.forEach.call(dataset, (a) => {
      hashtable[a.id] = { ...a, childNodes: [] };
    });
    // dataset.foreach((a) => (hashtable[a.id] = { ...a, childNodes: [] }));
    let dataTree = [];
    // dataset.foreach((a) => {
    //   if (a.parentId) hashtable[a.parentId].childNodes.push(hashtable[a.id]);
    //   else dataTree.push(hashtable[a.id]);
    // });
    Array.prototype.forEach.call(dataset, (a) => {
      if (a.parentId) hashtable[a.parentId].childNodes.push(hashtable[a.id]);
      else dataTree.push(hashtable[a.id]);
    });
    return dataTree;
  }
}
