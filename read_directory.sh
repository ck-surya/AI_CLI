#!/bin/bash

# Check if both arguments are provided (directory and output file)
if [ $# -ne 2 ]; then
    echo "Usage: $0 <directory_to_read> <output_file>"
    exit 1
fi

# Read input arguments
ROOT_DIR="$1"
OUTPUT_FILE="$2"

# Check if the specified directory exists
if [ ! -d "$ROOT_DIR" ]; then
    echo "Error: The directory '$ROOT_DIR' does not exist."
    exit 1
fi

# Clear or create the output file
> "$OUTPUT_FILE"

# Function to read the contents of files recursively
read_files() {
    for file in "$1"/*; do
        if [ -d "$file" ]; then
            # If it's a directory, call the function recursively
            read_files "$file"
        elif [ -f "$file" ]; then
            # Skip image files based on extensions (you can modify the list as needed)
            if [[ "$file" =~ \.(png|jpg|jpeg|gif|bmp|tiff|webp|.json)$ ]]; then
                continue
            fi

            # If it's a file and not an image, append its contents to the output file
            echo "Contents of $file:" >> "$OUTPUT_FILE"
            cat "$file" >> "$OUTPUT_FILE"
            echo -e "\n\n" >> "$OUTPUT_FILE"
        fi
    done
}

# Start reading from the specified directory
echo "Reading contents of directory: $ROOT_DIR"
read_files "$ROOT_DIR"

echo "All contents have been written to $OUTPUT_FILE"
