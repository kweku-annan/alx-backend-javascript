export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const index in reportWithIterator) {
    if (Number(index) === reportWithIterator.length - 1) {
      str += reportWithIterator[index];
      break;
    } else {
      str += `${reportWithIterator[index]} | `;
    }
  }
  return str;
}
