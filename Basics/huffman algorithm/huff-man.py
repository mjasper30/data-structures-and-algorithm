// huffman coding compression algorithm

import heapq
from collections import defaultdict

# Node class for Huffman Tree
class HuffmanNode:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    # Custom comparison method for heapq
    def __lt__(self, other):
        return self.freq < other.freq

# Function to build the Huffman Tree
def build_huffman_tree(data):
    frequency_dict = defaultdict(int)
    for char in data:
        frequency_dict[char] += 1

    priority_queue = [HuffmanNode(char, freq) for char, freq in frequency_dict.items()]
    heapq.heapify(priority_queue)

    while len(priority_queue) > 1:
        left_child = heapq.heappop(priority_queue)
        right_child = heapq.heappop(priority_queue)

        combined_freq = left_child.freq + right_child.freq
        combined_node = HuffmanNode(None, combined_freq)
        combined_node.left = left_child
        combined_node.right = right_child

        heapq.heappush(priority_queue, combined_node)

    return priority_queue[0]

# Function to generate Huffman codes
def generate_huffman_codes(root, current_code="", huffman_codes={}):
    if root is None:
        return

    if root.char is not None:
        huffman_codes[root.char] = current_code
        return

    generate_huffman_codes(root.left, current_code + "0", huffman_codes)
    generate_huffman_codes(root.right, current_code + "1", huffman_codes)

# Function to compress the data using Huffman codes
def huffman_compress(data):
    root = build_huffman_tree(data)
    huffman_codes = {}
    generate_huffman_codes(root, "", huffman_codes)

    compressed_data = "".join(huffman_codes[char] for char in data)
    return compressed_data, huffman_codes

# Function to decompress the data using Huffman codes
def huffman_decompress(compressed_data, huffman_codes):
    reverse_codes = {code: char for char, code in huffman_codes.items()}
    current_code = ""
    decompressed_data = ""

    for bit in compressed_data:
        current_code += bit
        if current_code in reverse_codes:
            char = reverse_codes[current_code]
            decompressed_data += char
            current_code = ""

    return decompressed_data

# Example usage:
if __name__ == "__main__":
    data_to_compress = "abracadabra"
    compressed_data, huffman_codes = huffman_compress(data_to_compress)
    decompressed_data = huffman_decompress(compressed_data, huffman_codes)

    print("Original data:", data_to_compress)
    print("Compressed data:", compressed_data)
    print("Decompressed data:", decompressed_data)

