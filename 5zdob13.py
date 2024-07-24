import zipfile

# Create a new zip file
with zipfile.ZipFile('example.zip', 'w') as zipf:
    # Add files to the zip file
    zipf.write('file1.txt')
    zipf.write('file2.txt')
    zipf.write('directory/file3.txt')

# To extract files from the zip file
with zipfile.ZipFile('example.zip', 'r') as zipf:
    zipf.extractall()
