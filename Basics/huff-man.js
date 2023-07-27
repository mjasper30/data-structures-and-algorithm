class HuffmanNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(data) {
  const frequencyDict = {};
  for (const char of data) {
    frequencyDict[char] = (frequencyDict[char] || 0) + 1;
  }

  const priorityQueue = [];
  for (const char in frequencyDict) {
    priorityQueue.push(new HuffmanNode(char, frequencyDict[char]));
  }

  priorityQueue.sort((a, b) => a.freq - b.freq);

  while (priorityQueue.length > 1) {
    const leftChild = priorityQueue.shift();
    const rightChild = priorityQueue.shift();

    const combinedFreq = leftChild.freq + rightChild.freq;
    const combinedNode = new HuffmanNode(null, combinedFreq);
    combinedNode.left = leftChild;
    combinedNode.right = rightChild;

    priorityQueue.push(combinedNode);
    priorityQueue.sort((a, b) => a.freq - b.freq);
  }

  return priorityQueue[0];
}

function generateHuffmanCodes(root, currentCode = "", huffmanCodes = {}) {
  if (root === null) {
    return;
  }

  if (root.char !== null) {
    huffmanCodes[root.char] = currentCode;
    return;
  }

  generateHuffmanCodes(root.left, currentCode + "0", huffmanCodes);
  generateHuffmanCodes(root.right, currentCode + "1", huffmanCodes);
}

function huffmanCompress(data) {
  const root = buildHuffmanTree(data);
  const huffmanCodes = {};
  generateHuffmanCodes(root, "", huffmanCodes);

  let compressedData = "";
  for (const char of data) {
    compressedData += huffmanCodes[char];
  }

  return [compressedData, huffmanCodes];
}

function huffmanDecompress(compressedData, huffmanCodes) {
  const reverseCodes = {};
  for (const char in huffmanCodes) {
    reverseCodes[huffmanCodes[char]] = char;
  }

  let currentCode = "";
  let decompressedData = "";

  for (const bit of compressedData) {
    currentCode += bit;
    if (reverseCodes[currentCode]) {
      decompressedData += reverseCodes[currentCode];
      currentCode = "";
    }
  }

  return decompressedData;
}

// Example usage:
const dataToCompress = "abracadabra";
const [compressedData, huffmanCodes] = huffmanCompress(dataToCompress);
const decompressedData = huffmanDecompress(compressedData, huffmanCodes);

console.log("Original data:", dataToCompress);
console.log("Compressed data:", compressedData);
console.log("Decompressed data:", decompressedData);
